import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductpaneComponent } from './productpane/productpane.component';
import { ActionpaneComponent } from './actionpane/actionpane.component';
import { ProductComponent } from './product/product.component';
import { CustomerService } from './actionpane/customer.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductpaneComponent,
    ActionpaneComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient,ProductService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
