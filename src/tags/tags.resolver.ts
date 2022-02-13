import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';

@Resolver()
export class TagsResolver {
    constructor (
        private readonly tagsService: TagsService,
      ) { }
    @Mutation(() => Tag, { nullable: true, name: 'tagcreate' })
    async create(
        @Args('name') name: string, // 使用@Args接收客户端参数
        @Args('desc') desc: string,
    ): Promise<Tag> {
        return await this.tagsService.create(name, desc);
    }
}
