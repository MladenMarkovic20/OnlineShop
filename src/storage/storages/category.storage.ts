/* eslint-disable import/no-unresolved */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { ProductFactory } from '@shop-storage/factories/product.factory';
import { ProductDto } from 'dtos/product.dto';
import { CategoryRepository } from '@shop-domain/repositories/category.repository';

@Injectable()
export class CategoryStorage implements CategoryRepository {
  constructor(
    @InjectRepository(ProductsOrmEntity)
    private readonly productRepository: Repository<ProductsOrmEntity>,
    private readonly productFactory: ProductFactory,
  ) {}

  async getProductsByCategory(name: string): Promise<ProductDto[]> {
    try {
      const productOrmEntities = await this.productRepository.findBy({ categoryName: name });
      const result = await Promise.all(
        productOrmEntities.map(product => this.productFactory.buildProductFromOrmData(product)).sort(),
      );

      if (result.length === 0) {
        throw new Error();
      } else {
        return result;
      }
    } catch (error) {
      throw new NotFoundException(
        Error,
        `Product with the requested category ${name} does not exist! Price value out of range.`,
      );
    }
  }

  async upradeCategory(id: number, product: ProductsOrmEntity): Promise<string> {
    try {
      const productOrmEntity = await this.productRepository.findOneByOrFail({ categoryId: id });

      productOrmEntity.categoryId = product.categoryId;
      productOrmEntity.categoryName = product.categoryName;
      productOrmEntity.productName = product.productName;
      productOrmEntity.productDescription = product.productDescription;
      productOrmEntity.productImage = product.productImage;
      productOrmEntity.price = product.price;

      await this.productRepository.update(id, productOrmEntity);

      return 'Product is updated!';
    } catch (error) {
      throw new NotFoundException(Error, `Product with ${id} is not exist! Can't update a non-existent product.`);
    }
  }

  async deleteCategory(id: number, name: string): Promise<string> {
    try {
      const deleteProduct = await this.productRepository.findOneByOrFail({ categoryId: id, categoryName: name });

      await this.productRepository.remove(deleteProduct);

      return 'Succesfully remove product!';
    } catch (error) {
      throw new NotFoundException(Error, `Product with ${name} is not exist! Can't delete a non-existent product.`);
    }
  }
}
