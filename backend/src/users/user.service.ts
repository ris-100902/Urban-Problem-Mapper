import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>){}

    async findAll(): Promise<User[]>{
        return await this.usersRepository.find();
    }

    async createOne(createUserDto: CreateUserDto): Promise<User>{
        const newUser = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(newUser);
        return newUser;
    }
}