import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CustomerService } from './customer.service';
import { RouterModule, Router } from '@angular/router';
import { FilterPipe } from './customer/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [CustomerService, Router],
  bootstrap: [AppComponent]
})
export class AppModule {
  selectedCustomer: any;
  customerService: any;
  router: any;
  handleViewOrders() {
    this.selectedCustomer = this.customerService.getSelectedCustomer();
    console.log('View orders for customer:', this.selectedCustomer);
    this.router.navigate(['/orders']);
  }
 
 }
