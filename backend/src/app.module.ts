import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ToolsModule } from './modules/tools/tools.module';
import { ModelsModule } from './modules/models/models.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { SearchModule } from './modules/search/search.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'nexus_user'),
        password: configService.get('DB_PASSWORD', 'nexus_password'),
        database: configService.get('DB_NAME', 'saha_nexus_db'),
        entities: [__dirname + '/entities/**/*.entity.ts'],
        migrations: [__dirname + '/database/migrations/**/*.ts'],
        synchronize: false,
        logging: configService.get('NODE_ENV') === 'development',
      }),
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const redisHost = configService.get('REDIS_HOST', 'localhost');
        const redisPort = configService.get('REDIS_PORT', 6379);

        return {
          store: redisStore,
          host: redisHost,
          port: redisPort,
          ttl: 3600,
        };
      },
    }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    ToolsModule,
    ModelsModule,
    ProjectsModule,
    SearchModule,
    IntegrationsModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
