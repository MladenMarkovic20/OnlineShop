/* eslint-disable import/no-unresolved */
import { Injectable } from '@nestjs/common';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';
import { CategoryDto } from 'dtos/category.dto';

@Injectable()
export class CategoryFactory {
  async buildCategoryFromOrmData(categoryOrmEntity: CategoryOrmEntity): Promise<CategoryDto> {
    return new CategoryDto(categoryOrmEntity.categoryName, categoryOrmEntity.categoryType);
  }
}
