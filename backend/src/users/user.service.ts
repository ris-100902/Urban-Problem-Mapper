import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>){}

    async findAll(): Promise<User[]>{
        return await this.usersRepository.find();
    }

    async findOne(id: number): Promise<User|null>{
        return await this.usersRepository.findOne({where: {id: id}, relations: ['issues']});
    }

    async findOneByEmail(email: string): Promise<User|null>{
        return await this.usersRepository.findOneBy({email});
    }

    async createOne(createUserDto: CreateUserDto): Promise<User>{
        const newUser = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(newUser);
        return newUser;
    }

    async delete(id: number): Promise<User|null>{
        const user = await this.findOne(id);
        await this.usersRepository.delete(id);
        return user;
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User|null>{
        const user = await this.usersRepository.findOneBy({id});
        if (!user){
            throw new NotFoundException(`No Such User`);
        }
        Object.assign(user, updateUserDto);
        return await this.usersRepository.save(user);
    }
}