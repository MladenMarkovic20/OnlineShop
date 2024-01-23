/* eslint-disable import/no-unresolved */
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { ProductDto } from 'dtos/product.dto';

export interface CategoryRepository {
  getProductsByCategory(name: string): Promise<ProductDto[]>;
  upradeCategory(id: number, product: ProductsOrmEntity): Promise<string>;
  deleteCategory(id: number, name: string): Promise<string>;
}
export const CategoryRepositorySymbol = Symbol('CategoryRepository');
