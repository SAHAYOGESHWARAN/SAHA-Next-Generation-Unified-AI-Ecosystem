import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AiModel } from '@/entities/ai-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AiModel])],
})
export class ModelsModule {}
