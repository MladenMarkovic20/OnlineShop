/* eslint-disable import/no-unresolved */
import { IsNotEmpty, Min, Max, IsDefined, IsString } from 'class-validator';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('cats')
export class CategoryDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @Min(1)
  @Max(100)
  categoryName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoryType: string;

  constructor(categoryName: string, categoryType: string) {
    this.categoryName = categoryName;
    this.categoryType = categoryType;
  }
}
