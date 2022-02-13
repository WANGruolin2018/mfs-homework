import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/articles/article.entity.dot';
import { getRepository, Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dot';
import { Tag } from './tag.entity';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>,
        // @InjectRepository(Tagging)
        // private readonly taggingsRepository: Repository<Tagging>
      ) {}
      async create(name:string,desc:string): Promise<Tag> {
        const tag = new Tag();
        const res=await this.tagsRepository.findOne({where: {name: name}});
        if(!res)
        {tag.name = name;
        tag.desc = desc;
    
        return this.tagsRepository.save(tag);}
      }

      async findAll(): Promise<Tag[]> {
        return this.tagsRepository.find();
      }

      async findAllTag(query):Promise<Article[]>{
        let list=await getRepository(Tag)
        .createQueryBuilder('tag')
        .leftJoinAndSelect('tag.articles','article')
        .where('tag.id=:id',{id:query.id})
        .getMany();
        let articlelist=[]
        console.log(list)
        if(list.length!=0)
        {for(let i=0;i<list[0].articles.length;i++){
          let larticle=await getRepository(Article)
          .createQueryBuilder('article')
          .leftJoinAndSelect('article.tags','tag')
          .leftJoinAndSelect('article.user','user')
          .where('article.id=:id',{id:list[0].articles[i].id})
          .getOne();
          articlelist.push(larticle);
        }
      }
        return articlelist;
      }
    //   async findTagging(id:string): Promise<Tagging[]> {
    //     let tag=this.tagsRepository.find({where:{tagId:id}});
    //     return this.taggingsRepository.find({where:{tagId:id}});
    //   }

    //   async getTagById(id: string) {
    //     return await this.taggingsRepository.findOne({where:{tagId:id},relations: ['tag']});
    // }

    //   async getArticleById(id: string) {
    //     return await this.taggingsRepository.findOne({where:{articleId:id},relations: ['article']});
    // }

      async remove(id: string): Promise<string> {
        await this.tagsRepository.delete(id);
        return '删除成功'
      }
      async delOne(query,manager):Promise<any>{
        const res=await this.tagsRepository.findOne({where: {id: query.id}});
        if(res){
          await manager.delete(Tag,{id: query.id});
          return {err:0,info:'删除成功'}
        }
      }
}
