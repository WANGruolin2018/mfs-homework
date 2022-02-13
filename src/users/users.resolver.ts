import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor (
        private readonly usersService: UsersService,
      ) { }
    @Mutation(() => User, { nullable: true, name: 'usercreate' })
    async create(
        @Args('username') username: string, // 使用@Args接收客户端参数
        @Args('password') password: string,
        @Request() req
    ): Promise<User> {
        return await this.usersService.create(username, password,req);
    }

    @Query(() => User, { nullable: true, name: 'userfind' })
  async userfindOne(
    @Args('username') username: string, // 使用@Args接收客户端参数
    @Args('password') password: string,
    @Request() req
  ): Promise<User> {
    return await this.usersService.findOne(username,password,req);
  }


}
