/* eslint-disable import/no-unresolved */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStorage } from '@shop-storage/storages/order.storage';
import { OrderOrmEntity } from '@shop-storage/orm/order.orm.entity';
import { OrderFactory } from '@shop-storage/factories/order.factory';
import { OrderRepositorySymbol } from '@shop-domain/repositories/order.repository';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { ProductFactory } from './factories/product.factory';
import { ProductRepositorySymbol } from '@shop-domain/repositories/product.repository';
import { ProductStorage } from '@shop-storage/storages/product.storage';
import { CategoryFactory } from '@shop-storage/factories/category.factory';
import { CategoryRepositorySymbol } from '@shop-domain/repositories/category.repository';
import { CategoryStorage } from '@shop-storage/storages/category.storage';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';

@Module({
  providers: [
    OrderFactory,
    {
      provide: OrderRepositorySymbol,
      useClass: OrderStorage,
    },
    ProductFactory,
    {
      provide: ProductRepositorySymbol,
      useClass: ProductStorage,
    },
    CategoryFactory,
    {
      provide: CategoryRepositorySymbol,
      useClass: CategoryStorage,
    },
  ],
  exports: [OrderRepositorySymbol, ProductRepositorySymbol, CategoryRepositorySymbol],
  imports: [
    TypeOrmModule.forFeature([OrderOrmEntity]),
    TypeOrmModule.forFeature([ProductsOrmEntity]),
    TypeOrmModule.forFeature([CategoryOrmEntity]),
  ],
})
export class StorageModule {}
