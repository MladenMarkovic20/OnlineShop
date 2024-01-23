/* eslint-disable import/no-unresolved */
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { OrderOrmEntity } from '@shop-storage/orm/order.orm.entity';
import { initialOrders } from '@shop-storage/seeding/orders.seeds';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { initialProducts } from './product.seeds';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';
import { initialCatogories } from './category.seeds';

@Injectable()
export class SeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async seed(): Promise<void> {
    await Promise.all([this.entityManager.save(OrderOrmEntity, [...initialOrders])]);
    await Promise.all([this.entityManager.save(ProductsOrmEntity, [...initialProducts])]);
    await Promise.all([this.entityManager.save(CategoryOrmEntity, [...initialCatogories])]);
  }
}
