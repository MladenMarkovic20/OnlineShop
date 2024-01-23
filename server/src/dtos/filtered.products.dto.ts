export class FilteredProductsDto {
  // categoryId: number;
  // categoryName: string;
  // productName: string;
  // productDescription: string;
  // productImage: string;
  // price: number;
  // productByPage?: number;
  // order?: string | number;
  // orderBy?: 'ASC' | 'DESC';
  // minPrice?: number;
  // maxPrice?: number;
  constructor(
    public categoryId: number,
    public categoryName: string,
    public productName: string,
    public productDescription: string,
    public productImage: string,
    public price: number,
    public productByPage?: number,
    public order?: string | number,
    public orderBy?: 'ASC' | 'DESC',
    public minPrice?: number,
    public maxPrice?: number,
  ) {}
}
