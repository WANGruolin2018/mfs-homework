import { Injectable, Session,Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataDto } from 'src/return-data.dot';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dot';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}
      async create(username:string,password:string,@Request() req): Promise<User> {
        const res=await this.usersRepository.findOne({where: {username: username}});
        console.log("post"+res)
        const user = new User();
        if(!res){
          user.username = username;
          user.password = password;
          let cuser=await this.usersRepository.save(user);
          //req.session.userId=cuser.id
          console.log(req)
          return cuser
        }
        else{
          return null
        }
        
      }

      async findUsedId(@Request() req): Promise<DataDto> {
        const userid=req.session.userId
        const res=await this.usersRepository.find({where: {id:userid}});
        console.log(res)
        console.log(req.session)
        if(res.length!=0){
          return {err:0,info:'成功',data:res}
        }
        else{
          return {err:1001,info:'暂未登录',data:null}
        }
      }
    
      async findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      async findOne(username: string,password:string,req): Promise<User> {
        console.log(username,password)
        const res=await this.usersRepository.findOne({where: {username: username}});
        console.log('res')
        console.log(res)
        if(!res){
          return null
        }
        else if(res.password==password){
          //req.session.userId=res.id
          console.log("ssssssssssss")
          console.log(req)
          return res
        }
        else {
          return null
        }
      }
    
      async remove(req): Promise<DataDto> {
        req.session.userId=null
        return {err: 0,info:'成功',data:null}
      }
}
