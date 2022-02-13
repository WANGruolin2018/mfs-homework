import { Field, ObjectType } from '@nestjs/graphql';
import { Article } from 'src/articles/article.entity.dot';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // 在类上加上这个装饰器
@Entity()
export class Tag {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column()
  desc: string;

  @ManyToMany( type => Article, article => article.tags ,{onDelete: 'CASCADE'}) 
    articles: Article[];

}