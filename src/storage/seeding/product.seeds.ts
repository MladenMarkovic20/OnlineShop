/* eslint-disable import/no-unresolved */
import { ProductsOrmEntity } from '@shop-storage/orm/product.orm.entity';

export const initialProducts: ProductsOrmEntity[] = [
  {
    categoryId: 1,
    categoryName: 'Rolex',
    productName: 'Cellini',
    productDescription: 'Self-winding mechanical movement entirely',
    productImage: 'Classic watches_Cellini.jpg',
    price: 17000,
  },
  {
    categoryId: 2,
    categoryName: 'Rolex',
    productName: 'Yacht-Master',
    productDescription: 'Self-winding mechanical chronograph',
    productImage: 'Professional watches_Yacht-Master.jpg',
    price: 13500,
  },
  {
    categoryId: 3,
    categoryName: 'Omega',
    productName: 'Speedmaster Moonwatch',
    productDescription: 'Self-winding mechanical chronograph',
    productImage: 'Professional watches_Speedmaster Moonwatch.jpg',
    price: 6000,
  },
  {
    categoryId: 4,
    categoryName: 'Cartier',
    productName: 'Tank Must Watch',
    productDescription: 'Mechanical movement with automatic winding.',
    productImage: 'Classic watches_Tank Must Watch.jpg',
    price: 5250,
  },
  {
    categoryId: 5,
    categoryName: 'Zenith',
    productName: 'Zenith Defy 21 El Primero',
    productDescription: 'Mechanical movement with automatic winding.',
    productImage: 'Professional watches_Zenith Defy 21 El Primero.jpg',
    price: 10250,
  },
  {
    categoryId: 6,
    categoryName: 'Seiko',
    productName: 'SUP398',
    productDescription: 'Solar watch  .',
    productImage: 'Classic watches_SUP398P9.png',
    price: 395,
  },
];
