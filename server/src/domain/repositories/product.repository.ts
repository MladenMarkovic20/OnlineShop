/* eslint-disable import/no-unresolved */
import { ProductEntity } from '@shop-domain/entities/product.entity';
import { ProductDto } from 'dtos/product.dto';
import { FilteredProductsDto } from 'dtos/filtered.products.dto';

export interface ProductRepository {
  getAllProducts(
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
  ): Promise<FilteredProductsDto[]>;
  getProductById(id: number): Promise<ProductDto>;
  createProduct(prod: ProductEntity): Promise<string>;
  upradeProduct(id: number, prod: ProductDto): Promise<string>;
  deleteProduct(id: number): Promise<string>;
}
export const ProductRepositorySymbol = Symbol('ProductRepository');
