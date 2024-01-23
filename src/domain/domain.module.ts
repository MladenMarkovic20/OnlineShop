/* eslint-disable import/no-unresolved */
import { Module } from '@nestjs/common';
import { OrderService } from '@shop-domain/services/order.service';
import { OrderFactory } from '@shop-domain/factories/order.factory';
import { StorageModule } from '@shop-storage/storage.module';
import { ProductService } from '@shop-domain/services/product.service';
import { ProductFactory } from '@shop-storage/factories/product.factory';
import { CategoryService } from '@shop-domain/services/category.service';
import { CategoryFactory } from '@shop-storage/factories/category.factory';

@Module({
  providers: [OrderService, OrderFactory, ProductService, ProductFactory, CategoryService, CategoryFactory],
  exports: [OrderService, ProductService, CategoryService],
  imports: [StorageModule],
})
export class DomainModule {}
