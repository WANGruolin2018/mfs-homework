import { Field, ObjectType } from '@nestjs/graphql';
import { Tag } from 'src/tags/tag.entity';
import { User } from 'src/users/user.entity';
import { text } from 'stream/consumers';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // 在类上加上这个装饰器
@Entity()
export class Article {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ default: 0 })
  clickTimes: number;

  @Field()
  @Column({type:'text'})
  content: string;

  @Field()
  @Column({type:'datetime'})
  createdAt: string;
  
  @Field()
  @Column({type:'datetime'})
  updatedAt: string;

  @ManyToOne(() => User, user => user.id)
  user: User[];

  @ManyToMany(type => Tag, tag => tag.articles ,{onDelete: 'CASCADE'}) 
  @JoinTable()
  tags: Tag[];
}
