import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: any[] = [
    {
      firstName: 'Ted',
      lastName: 'James',
      products: [
        { name: 'BasketBall', price: 7.99},
        { name: 'Shoes', price: 199.99 }
      ]
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      products: [
        { name: 'Frisbee', price: 2.99 },
        { name: 'Hat', price: 5.99 }
      ]
    },
    // Add more order objects as needed
  ];

  selectedCustomer:any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.selectedCustomer$.subscribe(customer => {
      this.selectedCustomer = customer;
    })
  }

  calculateOrderTotal(order: any): number {
    const product1Price = order.products[0].price;
    const product2Price = order.products[1].price;
    return product1Price + product2Price;
  }
  

}