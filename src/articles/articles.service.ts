import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataDto } from 'src/return-data.dot';
import { Tag } from 'src/tags/tag.entity';
import { TagsService } from 'src/tags/tags.service';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { EntityManager, getManager, getRepository, Repository, TransactionManager } from 'typeorm';
import { Article } from './article.entity.dot';
import { CreateArticleDto } from './dto/create-article.dot';

@Injectable()
export class ArticlesService {
    // constructor(
    //     @InjectRepository(Article)
    //     private readonly articlesRepository: Repository<Article>,
    //   ) {}
    //   async create(createArticleDto: CreateArticleDto): Promise<Article> {
    //     const article = new Article();
    //     article.title = createArticleDto.title;
    //     article.content = createArticleDto.content;
    //     const date=new Date()
    //     article.createdAt=date.toLocaleDateString()
    //     article.updatedAt=date.toLocaleDateString()
    //     let carticle=await this.articlesRepository.save(article)
    //     let tag
    //     // if(createArticleDto.chose!==[]){
    //     //   for(let i=0;i<createArticleDto.chose.length;i++){
    //     //     tag=await this.taggingsService.Taggingcreate(carticle.id.toString(),createArticleDto.chose[i])
    //     //   }
    //     // }
    
    //     return carticle;
    //   }

    //   async findAll(): Promise<Article[]> {
    //     let articles = await this.articlesRepository.find()
    //     return articles;
    //   }
      


    //   async remove(id: string): Promise<DataDto> {
    //     const article=await this.articlesRepository.find({where:{id:id},});
    //     console.log(article)
    //     if(article.length!=0)
    //     {
    //         await this.articlesRepository.delete(id)
    //         return {err:0,info:'成功',data:article}
            
    //     }
    //     else{
    //         return {err:404,info:'没有查询此文章',data:null}
    //     }
        
        
    //   }
    constructor(
      @InjectRepository(Article)
       private readonly articlesRepository: Repository<Article>,
       
    ) {}

    async findAll():Promise<Article[]>{
      let list=await getRepository(Article)
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.user','user')
      .leftJoinAndSelect('article.tags','tag')
      .getMany();
      return list;
    }

    async findLastAll():Promise<Article[]>{
      let list=await getRepository(Article)
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.user','user')
      .leftJoinAndSelect('article.tags','tag')
      .orderBy('createdAt', 'DESC')
      .limit(3)
      .getMany();
      return list;
    }

    async findOne(query):Promise<Article>{
      let list=await getRepository(Article)
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.tags','tag')
      .leftJoinAndSelect('article.user','user')
      .where('article.id=:id',{id:query.id})
      .getOne();
      console.log(list)
      return list;
    }

    async findOneDetail(query):Promise<Article>{
      let list=await getRepository(Article)
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.tags','tag')
      .leftJoinAndSelect('article.user','user')
      .where('article.id=:id',{id:query.id})
      .getOne();
      if(list)
        {list.clickTimes=+list.clickTimes+1;
        return await this.articlesRepository.save(list)
      }
      return list;
    }

    async addOne(title:string,content:string,@TransactionManager() manager:EntityManager,req):Promise<string>{
      let lists=[];
      console.log(manager)
      const chose=[1]
      if (Object.keys(chose).length!=0){
        for(let i=0;i<chose.length;i++){
          let listOne=await manager.findOne(Tag,{
            id:chose[i]
          });
          lists.push(listOne);
        }
      }
      const article=new Article();
      article.title=title
      article.content=content
      const date=new Date()
      article.createdAt=date.toLocaleDateString()
      article.updatedAt=date.toLocaleDateString()
      //const userid=req.session.usedId
      // article.user=await await manager.findOne(User,{
      //   id:userid
      // });;
      article.tags=lists
      await manager.save(Article,article);
      return '新增成功'
    }

    async updateOne(createArticleDto,manager):Promise<string>{
      let lists=[];
      let beforearticle=await this.articlesRepository.findOne()
      console.log(beforearticle)
      if (Object.keys(createArticleDto.chose).length!=0){
        for(let i=0;i<createArticleDto.chose.length;i++){
          let listOne=await manager.findOne(Tag,{
            id:createArticleDto.chose[i]
          });
          lists.push(listOne);
        }
      }
      const article=new Article();
      article.id=beforearticle.id
      article.createdAt=beforearticle.createdAt
      article.title=createArticleDto.title
      article.content=createArticleDto.content
      const date=new Date()
      article.updatedAt=date.toLocaleDateString()
      article.tags=lists
      await manager.save(Article,article);
      return '修改成功'
    }
    async delOne(query,manager):Promise<string>{
      await manager.delete(Article,{id: query.id});
      return '删除成功'
    }
}
