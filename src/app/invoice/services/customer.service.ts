import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { type Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerService {
  customerList: Customer[] = [];
  private readonly API_URL: string =
    environment.apiUrl + 'customers/' + environment.studentIndex + '/';

  constructor(private httpClient: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
    // this.customerList.push(customer);
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }

  getCustomerList(): Observable<Customer[]> {
    // return this.customerList;
    return this.httpClient
      .get<Customer[]>(this.API_URL)
      .pipe(
        map((customerList: Customer[]) =>
          customerList.map((customer) => new Customer().deserialize(customer)),
        ),
      );
  }

  getCustomer(nip: string): Observable<Customer> {
    return this.httpClient
      .get<Customer>(this.API_URL + nip)
      .pipe(map((customer: Customer) => new Customer().deserialize(customer)));
  }

  deleteCustomer(deletedCustomer: Customer): Observable<Customer[]> {
    // this.customerList = this.customerList.filter((customer: Customer) => {
    //   return customer.nip !== deletedCustomer.nip;
    // });

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'haslo_haslo',
      }),
    };

    return this.httpClient.delete<Customer[]>(
      this.API_URL + deletedCustomer.nip,
      httpOptions,
    );
  }
}
