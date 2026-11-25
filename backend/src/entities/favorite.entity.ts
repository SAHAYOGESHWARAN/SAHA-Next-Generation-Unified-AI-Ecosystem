import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Index,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from './user.entity';

export enum FavoriteType {
  TOOL = 'tool',
  MODEL = 'model',
}

@Entity('favorites')
@Index(['userId', 'type', 'resourceId'], { unique: true })
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({
    type: 'enum',
    enum: FavoriteType,
  })
  type: FavoriteType;

  @Column({ type: 'uuid' })
  resourceId: string;

  @Column({ type: 'varchar', max: 255, nullable: true })
  resourceName: string;

  @Column({ type: 'integer', default: 0 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;
}
