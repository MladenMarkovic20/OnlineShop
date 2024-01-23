/* eslint-disable no-restricted-imports */
/* eslint-disable import/no-unresolved */
import { NotFoundException } from '@nestjs/common';
import { ProductRepository } from '@shop-domain/repositories/product.repository';
import { ProductService } from '@shop-domain/services/product.service';
import { ProductDto } from '../../dtos/product.dto';
import { FilteredProductsDto } from '../../dtos/filtered.products.dto';

describe('Testing product methods', () => {
  let productService: ProductService;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = {
      async getAllProducts(): Promise<FilteredProductsDto[]> {
        return null as unknown as FilteredProductsDto[];
      },

      async getProductById(): Promise<ProductDto> {
        return null as unknown as ProductDto;
      },

      async createProduct(): Promise<string> {
        return null as unknown as string;
      },

      async updateProduct(): Promise<string> {
        return null as unknown as string;
      },

      async deleteProduct(): Promise<string> {
        return null as unknown as string;
      },
    } as unknown as ProductRepository;

    productService = new ProductService(productRepository);
  });

  // List of all Product - Testing getAllProducts method
  describe('Show a list of all products', () => {
    it('should return array of all products', async () => {
      const listOfProducts = jest.spyOn(productRepository, 'getAllProducts');

      listOfProducts.mockResolvedValue([
        new FilteredProductsDto(
          1,
          'Rolex',
          'Cellini',
          'Self-winding mechanical movement entirely',
          'Classic watches_Cellini.jpg',
          17000,
          1,
          1,
          'ASC',
          1,
          1,
        ),
      ]);

      const result = await productService.getAllProducts(
        1,
        'Rolex',
        'Cellini',
        'Self-winding mechanical movement entirely',
        'Classic watches_Cellini.jpg',
        17000,
        1,
        1,
        'ASC',
        1,
        1,
      );
      expect(listOfProducts).toHaveBeenCalledWith(
        1,
        'Rolex',
        'Cellini',
        'Self-winding mechanical movement entirely',
        'Classic watches_Cellini.jpg',
        17000,
        1,
        1,
        'ASC',
        1,
        1,
      );
      expect(listOfProducts).toHaveBeenCalledTimes(1);
      expect(Array.isArray(result)).toBeTruthy();
    });
  });

  // Get product by ID - Testing getProductById method
  describe('getProductById', () => {
    it('should be called once and have ID as a argument', async () => {
      const productById = jest.spyOn(productRepository, 'getProductById');

      productById.mockResolvedValue(
        new ProductDto(
          1,
          'Omega',
          'Speedmaster Moonwatch',
          'Self-winding mechanical chronograph',
          '/img/Professional watches_Speedmaster Moonwatch.jpg',
          6000,
        ),
      );

      const result = await productService.getProductsById(5);
      expect(productById).toHaveBeenCalledTimes(1);
      expect(productById).toHaveBeenCalledWith(5);
      expect(result.categoryId).toEqual(1);
    });
  });

  // Create new Product - Testing createProduct method
  describe('creating new Product', () => {
    it('should be called once and have Product DTO as argument', async () => {
      const product = new ProductDto(
        1,
        'Omega',
        'Speedmaster Moonwatch',
        'Self-winding mechanical chronograph',
        '/img/Professional watches_Speedmaster Moonwatch.jpg',
        6000,
      );

      const newProduct = jest.spyOn(productRepository, 'createProduct');
      await productService.createProduct(product);
      expect(newProduct).toHaveBeenCalledTimes(1);
      expect(newProduct).toHaveBeenCalledWith(product);

      const err = () => {
        throw new NotFoundException(Error, `Product not added!`);
      };

      expect(err).toThrow(NotFoundException);
    });
  });

  // Delete Product - Testing deleteProduct method
  describe('Delete product from product entity', () => {
    it('should be called once and remove product', async () => {
      const deletedProduct = jest.spyOn(productRepository, 'deleteProduct');

      const product = new ProductDto(
        1,
        'Omega',
        'Speedmaster Moonwatch',
        'Self-winding mechanical chronograph',
        '/img/Professional watches_Speedmaster Moonwatch.jpg',
        6000,
      );

      deletedProduct.mockResolvedValue(product.categoryId.toString());

      const result = await productService.deleteProduct(5);
      expect(deletedProduct).toHaveBeenCalledTimes(1);
      expect(deletedProduct).toHaveBeenCalledWith(5);
      expect(result).toBe('1');

      const err = () => {
        throw new NotFoundException(
          Error,
          `Product with ${product.categoryId} is not exist! Can't delete a non-existent product.`,
        );
      };
      expect(err).toThrow(NotFoundException);
    });
  });
});
