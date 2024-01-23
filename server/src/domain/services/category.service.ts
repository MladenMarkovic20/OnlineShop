/* eslint-disable import/no-unresolved */
import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepository, CategoryRepositorySymbol } from '@shop-domain/repositories/category.repository';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { ProductDto } from 'dtos/product.dto';

@Injectable()
export class CategoryService {
  constructor(@Inject(CategoryRepositorySymbol) private readonly categoryRepository: CategoryRepository) {}

  async getProductsByCategory(name: string): Promise<ProductDto[]> {
    return this.categoryRepository.getProductsByCategory(name);
  }

  async upradeCategory(id: number, product: ProductsOrmEntity): Promise<string> {
    return this.categoryRepository.upradeCategory(id, product);
  }

  async deleteCategory(id: number, name: string): Promise<string> {
    return this.categoryRepository.deleteCategory(id, name);
  }
}
