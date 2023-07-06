import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent {
  products: any[] = [];
  constructor(private productservice: ProductService) {
    this.products = this.productservice. getAllProducts();
  }
  

}
