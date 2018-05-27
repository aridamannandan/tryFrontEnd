import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-actionpane',
  templateUrl: './actionpane.component.html',
  styleUrls: ['./actionpane.component.css']
})
export class ActionpaneComponent implements OnInit {

selectedCustomer:Customer;
cart:any;
customers:Customer[];

  constructor(private customerservice:CustomerService) { }
onKey(event:any)
{
  this.customerservice.searchCustomer(event.target.value).subscribe(customers => this.customers = customers);
}
getCart(customer:Customer):void
{
  console.log(customer.name+ "teri aisi taisi");
  this.selectedCustomer=customer;
  this.customerservice.getCart(customer.id).subscribe(cart=>this.cart=cart);
}
report() : void {
  console.log("Report")
}
onSelected(customer:Customer) : void {
   console.log("Something selected.");
}
clear()
{
  this.customers=[];
}

  ngOnInit() {
  }

}
