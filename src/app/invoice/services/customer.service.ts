import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customerList.push(customer);
  }

  getCustomerList(): Customer[] {
    return this.customerList;
  }

  constructor() { }
}
