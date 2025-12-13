import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/users/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        ConfigModule,
        UserModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: async(configService: ConfigService) => ({
                secret: configService.get<string>('jwt.secret'),
                signOptions: {expiresIn: configService.get<number>('jwt.expiresIn')}
            })
        })
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule{}