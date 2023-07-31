import { Component, OnDestroy } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  selectedCustomer: any;
  private customerSubscription: Subscription;

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerSubscription = this.customerService.selectedCustomer$.subscribe(
      customer => {
        this.selectedCustomer = customer;
        if (customer) {
          this.router.navigate(['/orders']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }

  handleViewOrders() {
    // No need to handle anything here since navigation is handled by the subscription
  }
}