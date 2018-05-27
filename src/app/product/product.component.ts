import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  providers:[ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input()
searchKey: string='';
products: Product[];


  constructor(private productservice: ProductService) { }

  getProducts(): void{
    this.productservice.searchProducts(this.searchKey).subscribe(products => this.products = products);
  }


  ngOnChanges(){
    this.getProducts();
  }
  ngOnInit() {
    this.getProducts();
  }

}
