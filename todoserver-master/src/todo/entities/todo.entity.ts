import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}
