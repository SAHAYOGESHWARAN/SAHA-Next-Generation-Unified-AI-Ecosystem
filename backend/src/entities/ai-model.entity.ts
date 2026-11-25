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

export enum ModelType {
  LLM = 'llm',
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  EMBEDDING = 'embedding',
  VISION = 'vision',
}

export enum ModelProvider {
  OPENAI = 'openai',
  ANTHROPIC = 'anthropic',
  GOOGLE = 'google',
  META = 'meta',
  MISTRAL = 'mistral',
  COHERE = 'cohere',
  HUGGINGFACE = 'huggingface',
  OLLAMA = 'ollama',
  OPENROUTER = 'openrouter',
  REPLICATE = 'replicate',
  LOCAL = 'local',
}

@Entity('ai_models')
@Index(['categoryId'])
@Index(['slug'], { unique: true })
@Index(['provider'])
export class AiModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  slug: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  logo: string;

  @Column({
    type: 'enum',
    enum: ModelType,
  })
  type: ModelType;

  @Column({
    type: 'enum',
    enum: ModelProvider,
  })
  provider: ModelProvider;

  @Column({ type: 'varchar', length: 255 })
  modelId: string; // e.g., 'gpt-4', 'claude-3-sonnet'

  @Column({ type: 'text', nullable: true })
  documentation: string;

  @Column({ type: 'integer', nullable: true })
  contextWindow: number; // Max tokens

  @Column({ type: 'text', array: true, default: () => "'{}'" })
  capabilities: string[];

  @Column({ type: 'text', array: true, default: () => "'{}'" })
  languages: string[];

  @Column({ type: 'text', nullable: true })
  pricing: string;

  @Column({ type: 'boolean', default: false })
  isOpen: boolean; // Open source

  @Column({ type: 'boolean', default: false })
  isLocalDeployable: boolean;

  @Column({ type: 'text', nullable: true })
  license: string;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @Column({ type: 'integer', default: 0 })
  ratingCount: number;

  @Column({ type: 'integer', default: 0 })
  usageCount: number;

  @Column({ type: 'uuid' })
  categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isFeatured: boolean;

  @Column({ type: 'integer', default: 0 })
  order: number;

  @Column({ type: 'timestamp', nullable: true })
  releasedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations will be added
  // @OneToMany(() => UserFavorite, favorite => favorite.model)
  // favorites: UserFavorite[];
}
