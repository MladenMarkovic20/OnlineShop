/* eslint-disable import/no-unresolved */
import { Controller, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from '@shop-domain/services/category.service';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';

@ApiTags('CATEGORIES')
@Controller('category')
export class CategoryController {
  constructor(private category: CategoryService) {}

  // getByName
  @Get(':name')
  async getProductsByCategory(@Param('name') name: string) {
    return await this.category.getProductsByCategory(name);
  }

  // Update product
  @Put(':id')
  async upradeCategory(@Param('id') id: number, @Body() product: ProductsOrmEntity) {
    return this.category.upradeCategory(id, product);
  }
  // Delete product
  @Delete(':name/:id')
  async deleteCategory(@Param('id') id: number, @Param('name') name: string) {
    return this.category.deleteCategory(id, name);
  }
}
