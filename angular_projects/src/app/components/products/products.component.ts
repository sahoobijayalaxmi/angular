import { Component } from '@angular/core';
import * as data from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = (data as any).default;

  flag:boolean=false;

  p:any;

  pricelowtohigh(){
    this.products.sort((p1:any,p2:any)=>p1.price-p2.price)
  }
  pricehightolow(){
    this.products.sort((p1:any,p2:any)=>p2.price-p1.price)
  }

  // filterTerm : string='';
}
