import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService){}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Post()
    createOne(@Body() createUsersDto: CreateUserDto){
        return this.usersService.createOne(createUsersDto);
    }
}