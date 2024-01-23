/* eslint-disable import/no-unresolved */
import { MiddlewareConsumer, Module, NestModule, OnApplicationBootstrap } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestModule } from '@shop-rest/rest.module';
import { SeedingModule } from '@shop-storage/seeding/seeding.module';
import { SeedingService } from '@shop-storage/seeding/seeding.service';
import { StorageModule } from '@shop-storage/storage.module';
import { Config } from 'config/data.source';
import { LoggerMiddleware } from 'logging/logger.middleware';
import { join } from 'path';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(Config),
    StorageModule,
    RestModule,
    SeedingModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'img'),
    }),
  ],
})
export class AppModule implements OnApplicationBootstrap, NestModule {
  constructor(private readonly seedingService: SeedingService, private dataSource: DataSource) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
  async onApplicationBootstrap(): Promise<void> {
    await this.seedingService.seed();
  }
}
