import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Article } from 'src/articles/article.entity.dot';
import { ArticlesService } from 'src/articles/articles.service';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dot';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}
    @Post()
    create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
      return this.tagsService.create(createTagDto.name,createTagDto.desc);
    }
    
    @Get('tag')
    async findAllTag(@Query() query): Promise<Article[]> {
        return this.tagsService.findAllTag(query);
    }

    @Get()
    async findAll(@Body() createTagDto: CreateTagDto): Promise<Tag[]> {
        return this.tagsService.findAll();
    }
    
    @Delete('del')
    @Transaction()
    delOne(
        @Query() query,
        @TransactionManager() manager: EntityManager,
    ):Promise<string>{
        return this.tagsService.delOne(query,manager);
    }
    @Delete(':id')
    remove(@Param('id') id: string): Promise<string> {
      return this.tagsService.remove(id);
    }
}
