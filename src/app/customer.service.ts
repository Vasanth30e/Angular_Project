import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private selectedCustomerSource = new BehaviorSubject<any>(null);
    selectedCustomer$ = this.selectedCustomerSource.asObservable();
  
    constructor() { }
  
    setSelectedCustomer(customer: any) {
      this.selectedCustomerSource.next(customer);
    }
}