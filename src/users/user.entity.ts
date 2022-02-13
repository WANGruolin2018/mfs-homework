import { Field, ObjectType } from '@nestjs/graphql';
import { Article } from 'src/articles/article.entity.dot';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@ObjectType() // 在类上加上这个装饰器
@Entity()
export class User {
  @Field() // 需要返回的字段加上这个
  @PrimaryGeneratedColumn()
  id: number;

  @Field() 
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;
  
  @OneToMany( type => Article, article => article.user ) 
    article: [];
}