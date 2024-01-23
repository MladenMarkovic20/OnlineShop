/* eslint-disable import/no-unresolved */
import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from '@shop-domain/entities/product.entity';
import { ProductRepositorySymbol, ProductRepository } from '@shop-domain/repositories/product.repository';
import { ProductDto } from 'dtos/product.dto';
import { FilteredProductsDto } from 'dtos/filtered.products.dto';

@Injectable()
export class ProductService {
  constructor(@Inject(ProductRepositorySymbol) private readonly productRepository: ProductRepository) {}

  async getAllProducts(
    categoryId: number,
    categoryName: string,
    productName: string,
    productDescription: string,
    productImage: string,
    price: number,
    productByPage?: number,
    order?: string | number,
    orderBy?: 'ASC' | 'DESC',
    minPrice?: number,
    maxPrice?: number,
  ): Promise<FilteredProductsDto[]> {
    return this.productRepository.getAllProducts(
      categoryId,
      categoryName,
      productName,
      productDescription,
      productImage,
      price,
      productByPage,
      order,
      orderBy,
      minPrice,
      maxPrice,
    );
  }

  async getProductsById(id: number): Promise<ProductDto> {
    return this.productRepository.getProductById(id);
  }

  async createProduct(prod: ProductEntity): Promise<string> {
    return this.productRepository.createProduct(prod);
  }

  async upradeProduct(id: number, prod: ProductDto): Promise<string> {
    return this.productRepository.upradeProduct(id, prod);
  }

  async deleteProduct(id: number): Promise<string> {
    return this.productRepository.deleteProduct(id);
  }
}
