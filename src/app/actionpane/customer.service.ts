
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';


@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
    console.log('Servce');
   }

  searchCustomer(query:string): Observable<Customer[]> {
    console.log('In products..safdass')
    return this.http.get<Customer[]>('http://localhost:8080/pos/customers/searchby?search='+query);
  }

  report() : Observable<?> {

  }

  getCart(customerId:number){
    
    return this.http.get('http://localhost:8080/pos/cart/customer/'+customerId);
  }



}
