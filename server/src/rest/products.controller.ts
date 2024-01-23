/* eslint-disable import/no-unresolved */
import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from '@shop-domain/services/product.service';
import { ProductDto } from 'dtos/product.dto';

@ApiTags('PRODUCTS')
@Controller('products')
export class ProductsController {
  constructor(private products: ProductService) {}
  // getAll
  @Get()
  async getProducts(
    // @Query('Id') categoryId: number,
    // @Query('categoryName') categoryName: string,
    // @Query('productName') productName: string,
    // productDescription: string,
    // @Query('productByPage') productByPage?: number,
    // @Query('order') order?: string | number,
    // @Query('orderBy') orderBy?: 'ASC' | 'DESC',
    // @Query('minPrice') minPrice?: number,
    // @Query('maxPrice') maxPrice?: number,
    @Query('Id') categoryId: number,
    @Query('categoryName') categoryName: string,
    @Query('productName') productName: string,
    productDescription: string,
    productImage: string,
    price: number,
    @Query('productByPage') productByPage?: number,
    @Query('order') order?: string | number,
    @Query('orderBy') orderBy?: 'ASC' | 'DESC',
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
  ) {
    return await this.products.getAllProducts(
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

  // getByName
  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.products.getProductsById(id);
  }

  // Create new product
  @Post()
  async createProduct(@Body() prod: ProductDto) {
    return await this.products.createProduct(prod);
  }
  // Update product
  @Put(':id')
  async updateProducts(@Param('id') id: number, @Body() product: ProductDto) {
    return this.products.upradeProduct(id, product);
  }
  // Delete product
  @Delete(':id')
  async deleteProducts(@Param('id') id: number) {
    return this.products.deleteProduct(id);
  }
}
