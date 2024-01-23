/* eslint-disable import/no-unresolved */
import { Module } from '@nestjs/common';
import { DomainModule } from '@shop-domain/domain.module';
import { OrderController } from '@shop-rest/order.controller';
import { ProductsController } from '@shop-rest/products.controller';
import { CategoryController } from '@shop-rest/category.controller';

@Module({
  imports: [DomainModule],
  controllers: [OrderController, ProductsController, CategoryController],
})
export class RestModule {}
