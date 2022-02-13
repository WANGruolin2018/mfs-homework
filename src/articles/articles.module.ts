import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Article } from './article.entity.dot';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesResolver } from './articles.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService, ArticlesResolver],
  controllers: [ArticlesController]
})
export class ArticlesModule {}
