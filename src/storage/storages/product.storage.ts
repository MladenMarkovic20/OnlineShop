/* eslint-disable import/no-unresolved */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { ProductRepository } from '@shop-domain/repositories/product.repository';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { ProductFactory } from '@shop-storage/factories/product.factory';
import { ProductDto } from 'dtos/product.dto';
import { ProductEntity } from '@shop-domain/entities/product.entity';
import { FilteredProductsDto } from 'dtos/filtered.products.dto';

@Injectable()
export class ProductStorage implements ProductRepository {
  constructor(
    @InjectRepository(ProductsOrmEntity) private readonly productRepository: Repository<FilteredProductsDto>,
    private readonly productFactory: ProductFactory,
  ) {}

  async getAllProducts(
    categoryId: number,
    categoryName: string,
    productName: string,
    productDescription: string,
    productImage: string,
    price: number,
    productByPage: number,
    order: string | number,
    orderBy: 'ASC' | 'DESC',
    minPrice: number,
    maxPrice: number,
  ): Promise<FilteredProductsDto[]> {
    const listedProducts = 3;
    const [productOrmEntities, totalCount] = await this.productRepository.findAndCount({
      take: listedProducts,
      skip: (productByPage ?? 2 - 1) * listedProducts,
      order: { [order]: order },
      where: [
        {
          categoryId: categoryId,
          categoryName: categoryName,
          productName: productName,
          price: Between(minPrice ?? 1, maxPrice ?? 99999),
        },
      ],
    });
    console.log(`Total count: ${totalCount} \n ${productOrmEntities}`);
    return await Promise.all(
      productOrmEntities.map((product: ProductDto) => this.productFactory.buildProductFromOrmData(product)).sort(),
    );
  }

  async getProductById(id: number): Promise<ProductDto> {
    try {
      const productOrmEntities = await this.productRepository.findOneByOrFail({ categoryId: id });
      return this.productFactory.buildProductFromOrmData(productOrmEntities);
    } catch (error) {
      throw new NotFoundException(Error, `Product with ${id} is not exist! Price value out of range.`);
    }
  }

  async createProduct(prod: ProductEntity): Promise<string> {
    try {
      const newProduct = await this.productFactory.buildProductFromOrmData(prod);

      await this.productRepository.save(newProduct);

      return 'New Product Added!';
    } catch (error) {
      throw new NotFoundException(Error, `Product not added!`);
    }
  }

  async upradeProduct(id: number, prod: ProductDto): Promise<string> {
    try {
      const productOrmEntity = await this.productRepository.findOneByOrFail({ categoryId: id });

      productOrmEntity.categoryId = prod.categoryId;
      productOrmEntity.categoryName = prod.categoryName;
      productOrmEntity.productName = prod.productName;
      productOrmEntity.productDescription = prod.productDescription;
      productOrmEntity.productImage = prod.productImage;
      productOrmEntity.price = prod.price;

      await this.productRepository.update(id, productOrmEntity);

      return 'Product is updated!';
    } catch (error) {
      throw new NotFoundException(Error, `Product with ${id} is not exist! Can't update a non-existent product.`);
    }
  }

  async deleteProduct(id: number): Promise<string> {
    try {
      const deleteProduct = await this.productRepository.findOneByOrFail({ categoryId: id });

      await this.productRepository.remove(deleteProduct);

      return 'Succesfully remove product!';
    } catch (error) {
      throw new NotFoundException(Error, `Product with ${id} is not exist! Can't delete a non-existent product.`);
    }
  }
}
