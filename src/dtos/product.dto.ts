/* eslint-disable import/no-unresolved */
import { IsNotEmpty, Min, Max, IsDefined, IsString, IsInt } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('cats')
export class ProductDto {
  @ApiProperty({
    type: 'number',
  })
  @IsDefined()
  @IsInt()
  @Min(1)
  @Max(100)
  categoryId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoryName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productDescription: string;

  @ApiProperty()
  productImage: string;

  @ApiProperty()
  @IsInt()
  price: number;

  constructor(
    id: number,
    categoryName: string,
    name: string,
    description: string,
    productImage: string,
    price: number,
  ) {
    this.categoryId = id;
    this.categoryName = categoryName;
    this.productName = name;
    this.productDescription = description;
    this.productImage = productImage;
    this.price = price;
  }
}
