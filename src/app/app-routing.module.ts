import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full'},
  { path: 'customers', component: CustomerComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }