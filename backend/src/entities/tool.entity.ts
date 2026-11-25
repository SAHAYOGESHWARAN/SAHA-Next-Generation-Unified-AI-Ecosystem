import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';

export enum ToolStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DEPRECATED = 'deprecated',
}

@Entity('tools')
@Index(['categoryId'])
@Index(['slug'], { unique: true })
export class Tool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  longDescription: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  logo: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  website: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  documentation: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  githubRepository: string;

  @Column({ type: 'text', array: true, default: () => "'{}'" })
  tags: string[];

  @Column({ type: 'text', array: true, default: () => "'{}'" })
  features: string[];

  @Column({ type: 'text', array: true, default: () => "'{}'" })
  pricing: string[];

  @Column({ type: 'varchar', length: 100, nullable: true })
  apiKey: string;

  @Column({ type: 'boolean', default: false })
  requiresAuthentication: boolean;

  @Column({ type: 'integer', default: 0 })
  usageCount: number;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ type: 'integer', default: 0 })
  ratingCount: number;

  @Column({
    type: 'enum',
    enum: ToolStatus,
    default: ToolStatus.ACTIVE,
  })
  status: ToolStatus;

  @Column({ type: 'uuid' })
  categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ type: 'boolean', default: false })
  isFeatured: boolean;

  @Column({ type: 'integer', default: 0 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations will be added
  // @OneToMany(() => UserFavorite, favorite => favorite.tool)
  // favorites: UserFavorite[];
}
