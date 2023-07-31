import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [FilterPipe]
})
export class CustomerComponent implements OnInit {
  public customers: any[] = [
    {
      id: 1,
      firstName: 'Ted',
      lastName: 'James',
      address: '123 Anywhere St',
      city: 'Phoenix',
      state: 'Arizona',
      orderTotal: '$207.98'
    },
    {
      id: 2,
      firstName: 'Michelle',
      lastName: 'Thompson',
      address: '345 Cedar Point Ave.',
      city: 'Encinitas',
      state: 'California',
      orderTotal: '$8.98'
    },
    // Add more customer objects as needed
  ];

  filterText: string = '';
  filteredCustomers: any[] = [];

  showNewCustomerPopup: boolean = false;
  newCustomer: any = {};

  showEditCustomerPopup: boolean = false;
  selectedCustomer: any = {};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    const storedCustomers = localStorage.getItem('customers');
    if (storedCustomers) {
      this.customers = JSON.parse(storedCustomers);
      this.filterCustomersDelayed(); // Call filterCustomers() immediately after setting the customers array
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  filterCustomersDelayed(){
    setTimeout(() =>{
      this.filterCustomers();
    })
  }

  openNewCustomerPopup() {
    this.showNewCustomerPopup = true;
  }

  closeNewCustomerPopup() {
    this.showNewCustomerPopup = false;
    this.newCustomer = {};
  }

  insertNewCustomer() {
    this.customers.push(this.newCustomer);
    this.saveCustomersToLocalStorage();
    this.closeNewCustomerPopup();
  }

  openEditCustomerPopup(customer: any) {
    this.selectedCustomer = { ...customer };
    this.showEditCustomerPopup = true;
  }

  closeEditCustomerPopup() {
    this.selectedCustomer = {};
    this.showEditCustomerPopup = false;
  }

  updateCustomer() {
    const index = this.customers.findIndex(c => c.id === this.selectedCustomer.id);
    if (index !== -1) {
      this.customers[index] = { ...this.selectedCustomer };
    }

    localStorage.setItem('customers', JSON.stringify(this.customers));

    this.filterCustomers();
    this.closeEditCustomerPopup();
  }

  deleteCustomer(customer: any) {
    const index = this.customers.findIndex(c => c.id === customer.id);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }

    localStorage.setItem('customers', JSON.stringify(this.customers));

    this.filterCustomers();
  }

  filterCustomers() {
    if (this.filterText.trim() === '') {
      this.filteredCustomers = [...this.customers]; // Create a new array with a copy of the customers
    } else {
      const filter = this.filterText.toLowerCase();
      this.filteredCustomers = this.customers.filter((customer) => {
        const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();
        return fullName.includes(filter);
      });
    }
  }

  private saveCustomersToLocalStorage(){
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  viewOrders(customer: any) {
    this.customerService.setSelectedCustomer(customer);
  }
}