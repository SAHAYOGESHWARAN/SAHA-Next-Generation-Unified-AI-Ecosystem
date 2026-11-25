import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiCredential } from '@/entities/api-credential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApiCredential])],
})
export class IntegrationsModule {}
