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

  onSubmit() {
    let result = this.customerService.addCustomer(this.customer);

    this.router.navigate(['/invoice/customer/list']);
  }

  AutoFillForm(customer: Customer = new Customer("CoolCompany", "131314", "Krakał", "Wiślana",
    "154", "3", "12345", "This is a real cool company.", "1", true)) {
    Object.assign(this.customer, customer);
  }
}
