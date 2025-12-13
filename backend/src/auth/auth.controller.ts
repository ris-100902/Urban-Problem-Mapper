import { Controller, Get, UseGuards, Request, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthorizationGuard } from "./auth.guard";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('login')
    login(@Body() loginDto: Record<string, any>){
        return this.authService.login(loginDto.email, loginDto.password);
    }

    @UseGuards(AuthorizationGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}