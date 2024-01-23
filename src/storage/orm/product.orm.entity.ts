/* eslint-disable import/no-unresolved */
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { CategoryOrmEntity } from './category.orm.entity';

@Entity({
  name: 'PRODUCTS',
  orderBy: {
    categoryId: 'ASC',
  },
})
export class ProductsOrmEntity {
  @PrimaryColumn()
  categoryId: number;

  @Column()
  categoryName: string;

  @Column()
  productName: string;

  @Column()
  productDescription: string;

  @Column()
  productImage: string;

  @Column()
  price: number;

  @ManyToOne(() => CategoryOrmEntity, (category: CategoryOrmEntity) => category.categoryName, { eager: true })
  category?: CategoryOrmEntity;
}
