import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('b') B: string,
    @Body('c') C: string,
    @Body('d') D: string,
  ): any {
    const generatedId=this.productsService.insertProduct(B, C, D);
    return {id:generatedId}
  }

  @Get()
  getProducts(){
  return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param("id") productId:string){
  return this.productsService.getSingleProduct(productId)
  }

  @Patch(':id')
  updateProduct(@Param("id") productId:string,@Body('b') B:string,@Body('c') C:string,@Body('d') D:string){
    return this.productsService.updateProduct(productId,B,C,D)
  }

  @Delete(':id')
  deleteProduct(@Param('id') productId:string){
    return this.productsService.deleteProduct(productId);
  }
}
