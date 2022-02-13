import { Body, Controller, Delete, Get, Param, Post, Session ,Request} from '@nestjs/common';
import { DataDto } from 'src/return-data.dot';
import { CreateUserDto } from './dto/create-user.dot';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    async findUsedId(@Request() req): Promise<DataDto> {
      console.log('get')
      return this.usersService.findUsedId(req);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto,@Request() req): Promise<User> {
      console.log('post')
      return this.usersService.create(createUserDto.username,createUserDto.password,req);
    }

    @Post('get')
    async findOne(@Body() createUserDto: CreateUserDto,@Request() req): Promise<User> {
      console.log('getpost')
      console.log(createUserDto)
      const res=(await this.usersService.findOne(createUserDto.username, createUserDto.password,req));
      return res
    }
  
    @Delete()
    remove(@Request() req): Promise<DataDto> {
      return this.usersService.remove(req);
    }
}
