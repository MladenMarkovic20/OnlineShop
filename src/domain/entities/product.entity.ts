export class ProductEntity {
  constructor(
    public readonly categoryId: number,
    public readonly categoryName: string,
    public readonly productName: string,
    public readonly productDescription: string,
    public readonly productImage: string,
    public readonly price: number,
  ) {}
}
