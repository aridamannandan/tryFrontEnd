import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-productpane',
  templateUrl: './productpane.component.html',
  styleUrls: ['./productpane.component.css']
})
export class ProductpaneComponent implements OnInit {

  private paneproducts: ProductComponent = new ProductComponent(this.productservice);
  searchedProducts:Product[];
  onKey(event: any)
  {
    console.log(event.target.value);
    this.searchedProducts=[];
    this.productservice.searchProducts(event.target.value).subscribe(products => this.paneproducts.products = products);
    console.log(this.paneproducts.products)
  }
  clear(){
    this.searchedProducts=[]; 
  }
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    
  }

}
