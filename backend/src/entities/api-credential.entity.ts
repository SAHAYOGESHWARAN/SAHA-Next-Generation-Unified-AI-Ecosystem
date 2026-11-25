import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { User } from './user.entity';
import * as crypto from 'crypto';

export enum CredentialProvider {
  OPENROUTER = 'openrouter',
  HUGGINGFACE = 'huggingface',
  OLLAMA = 'ollama',
  OPENAI = 'openai',
  ANTHROPIC = 'anthropic',
  GOOGLE = 'google',
  REPLICATE = 'replicate',
  CUSTOM = 'custom',
}

@Entity('api_credentials')
@Index(['userId'])
@Index(['provider'])
export class ApiCredential {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    type: 'enum',
    enum: CredentialProvider,
  })
  provider: CredentialProvider;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'text' })
  encryptedKey: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  baseUrl: string; // For custom endpoints like Ollama

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'timestamp', nullable: true })
  lastTestedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date;

  @Column({ type: 'jsonb', default: {} })
  metadata: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * Encrypt API key before saving
   */
  @BeforeInsert()
  @BeforeUpdate()
  encryptKey() {
    if (this.encryptedKey && !this.encryptedKey.startsWith('enc_')) {
      const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY || 'default-key');
      let encrypted = cipher.update(this.encryptedKey, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      this.encryptedKey = `enc_${encrypted}`;
    }
  }

  /**
   * Decrypt API key when needed
   */
  getDecryptedKey(): string {
    if (!this.encryptedKey.startsWith('enc_')) {
      return this.encryptedKey;
    }
    const decipher = crypto.createDecipher('aes-256-cbc', process.env.ENCRYPTION_KEY || 'default-key');
    let decrypted = decipher.update(this.encryptedKey.substring(4), 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  /**
   * Get masked key for display
   */
  getMaskedKey(): string {
    const key = this.getDecryptedKey();
    if (key.length <= 8) return '****';
    return `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
  }
}
