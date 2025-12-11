import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-dto";

@Controller('users')
export class UserController {
    constructor(private readonly usersService: UserService){}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.usersService.findOne(+id);
    }

    @Post()
    createOne(@Body() createUsersDto: CreateUserDto){
        return this.usersService.createOne(createUsersDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.usersService.delete(+id);
    }

    @Patch(':id')
    updateOne(@Param('id')id: string, @Body() updateUserDto: UpdateUserDto){
        return this.usersService.update(+id, updateUserDto);
    }
}