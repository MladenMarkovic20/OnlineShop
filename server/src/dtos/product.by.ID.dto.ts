import { Min, Max, IsDefined, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductById {
  @ApiProperty({
    type: 'number',
  })
  @IsDefined()
  @IsInt()
  @Min(1)
  @Max(100)
  categoryId: number;
}
