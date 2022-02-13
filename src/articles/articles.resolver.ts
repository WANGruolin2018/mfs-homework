import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Request } from '@nestjs/common';
import { EntityManager, TransactionManager } from 'typeorm';
import { Article } from './article.entity.dot';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dot';

@Resolver()
export class ArticlesResolver {
    constructor (
        private readonly articlesService: ArticlesService,
      ) { }
    @Mutation(() => Article, { nullable: true, name: 'articlecreate' })
    async addOne(
        @Args('title') title: string, 
        @Args('content') content: string,
        // @Args('chose') chose: Array<string>,
        @TransactionManager() manager:EntityManager,
        @Request() req ,
        
    ): Promise<string> {
        return await this.articlesService.addOne(title,content,manager,req);
    }
}
