import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { findIndex } from 'rxjs';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  private getProduct(id: string): [Product , number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('product is not found');
    }
    return [product, productIndex];
  }

  insertProduct(b: string, c: string, d: string) {
    const id = Math.random().toString();
    const newProduct = new Product(id, b, c, d);
    this.products.push(newProduct);
    return id;
  }

  getProducts() {
    return this.products;
  }

  getSingleProduct(id: string) {
    const product = this.getProduct(id)[0];
    return product;
  }

  updateProduct(id: string, b: string, c: string, d: string) {
    const [product,index]=this.getProduct(id);
    if(b){
        this.products[index].b=b
    }
    if(c){
        this.products[index].c=c
    }
    if(d){
        this.products[index].d=d
    }
    return this.products[index];
  }

  deleteProduct(id:string){
    const index=this.getProduct(id)[1]
    return this.products.splice(index,1);
  }
}
