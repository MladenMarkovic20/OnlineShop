/* eslint-disable import/no-unresolved */
import { Injectable } from '@nestjs/common';
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';
import { ProductDto } from 'dtos/product.dto';

@Injectable()
export class ProductFactory {
  async buildProductFromOrmData(productOrmEntity: ProductsOrmEntity): Promise<ProductDto> {
    return new ProductDto(
      productOrmEntity.categoryId,
      productOrmEntity.categoryName,
      productOrmEntity.productName,
      productOrmEntity.productDescription,
      productOrmEntity.productImage,
      productOrmEntity.price,
    );
  }
}
