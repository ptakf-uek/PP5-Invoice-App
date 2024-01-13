import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})

export class CustomerFormComponent {
  customer: Customer = new Customer();

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) { }

  onSubmit(customerForm: NgForm) {
    if (customerForm.valid) {
      // Add the current customer to the customer list only if they're not in the customer list already.
      if (this.customerService.customerList.filter((customer: Customer) => { return customer.nip === this.customer.nip }).length === 0) {
        let result = this.customerService.addCustomer(this.customer);
      }

      this.router.navigate(['/invoice/customer/list']);
    }
  }

  autofillForm(customer: Customer = new Customer("CoolCompany", "1313146925", "Krakał", "Wiślana",
    "154", "3", "12345", "This is a real cool company.", "1", true)) {
    Object.assign(this.customer, customer);
  }
}
