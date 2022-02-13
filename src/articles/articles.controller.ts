import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { DataDto } from 'src/return-data.dot';
import { EntityManager, Repository, Transaction, TransactionManager } from 'typeorm';
import { Article } from './article.entity.dot';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dot';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService,
        @InjectRepository(Article)
        private readonly articlesRepository: Repository<Article>,) {}
    @Post()
    @Transaction()
    addOne(@Body() createArticleDto: CreateArticleDto,@TransactionManager() manager:EntityManager,@Request() req ): Promise<string> {
      return this.articlesService.addOne(createArticleDto.title,createArticleDto.content,manager,req);
    }

    @Get('all')
    async findAll(): Promise<Article[]> {
        return this.articlesService.findAll();
    }

    @Get('lastarticle')
    async findLastAll(): Promise<Article[]> {
        return this.articlesService.findLastAll();
    }

    @Get('detail')
    async findOneDetail(@Query() query): Promise<Article> {
        return this.articlesService.findOneDetail(query);
        

    }

    @Put('update')
    @Transaction()
    updateOne(
        @Body()createArticleDto: CreateArticleDto,@TransactionManager() manager:EntityManager
    ):Promise<string>{
        return this.articlesService.updateOne(createArticleDto,manager);
    }
    
    @Delete('del')
    @Transaction()
    delOne(
        @Query() query,
        @TransactionManager() manager: EntityManager,
    ):Promise<string>{
        return this.articlesService.delOne(query,manager);
    }

}
