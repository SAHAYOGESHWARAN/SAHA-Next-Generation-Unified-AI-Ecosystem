import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/entities/user.entity';
import { Category } from '@/entities/category.entity';
import { Tool } from '@/entities/tool.entity';
import { AiModel } from '@/entities/ai-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Category, Tool, AiModel])],
})
export class AdminModule {}
