import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService{
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    async login(email: string, password: string): Promise<{access_token: string}>{
        const user = await this.userService.findOneByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('User or password doesn\'t match');
        }
        
        const payload = {sub: user.id, email: user.email};
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}