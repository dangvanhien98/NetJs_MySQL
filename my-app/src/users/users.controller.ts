import { Controller, Param, Get, Body, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService){}

    @Get(':id')
    get(@Param() params){
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: UserEntity){
        return this.service.updateUser(user);
    }

    @Put()
    update(@Body() user: UserEntity){
        return this.service.updateUser(user);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteUser(params.id);
    }

}
