/* eslint-disable import/no-unresolved */
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ProductsOrmEntity } from './product.orm.entity';

@Entity({ name: 'CATEGORY' })
export class CategoryOrmEntity {
  @PrimaryColumn()
  categoryName: string;

  @Column()
  categoryType: string;

  @OneToMany(() => ProductsOrmEntity, (product: ProductsOrmEntity) => product.categoryName, { eager: false })
  products?: ProductsOrmEntity[];
}
