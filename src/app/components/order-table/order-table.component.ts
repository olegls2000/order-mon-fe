import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from '../../model/order.type';
import { OrderService } from '../../services/order.service';
import { OrderServiceMock } from '../../services/order.service-mock';
import { CountryService } from '../../services/country.service';
import { Country } from '../../model/country.type';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-table',
  imports: [NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './order-table.component.html'
})
export class OrderTableComponent implements OnInit {

  orderService: OrderService = inject(OrderServiceMock);
  countryService: CountryService = inject(CountryService);

  orders = signal<Array<Order>>([])
  countries: Array<Country> = this.countryService.getAll();

  orderSearchForm: FormGroup = new FormGroup({
    description: new FormControl(''),
    country: new FormControl('')
  });

  ngOnInit(): void {
    const orders = this.orderService.getAllOrders();
    this.orders.set(this.sortOrdersByPaymentDueDateWithEstonianPriority(orders))
  }

  submitForm(event: Event) {
    const searchObject = this.orderSearchForm.value;
    const countryCode = this.orderSearchForm.value.country
    const description = this.orderSearchForm.value.description
    const filteredOrders = this.orderService.getAllOrdersBySearchCriteria(countryCode, description);
    this.orders.set(this.sortOrdersByPaymentDueDateWithEstonianPriority(filteredOrders));
  }

  private sortOrdersByPaymentDueDateWithEstonianPriority(orders: Order[]): Order[] {
   return orders.sort((order1, order2) => {
      if (order1.countryCode === order2.countryCode) {
        return order1.paymentDueDate.getDate() - order2.paymentDueDate.getDate();
      } else {
        if (order1.countryCode === 'EE') {
          return -1;
        } else if (order2.countryCode === 'EE') {
          return 1;
        }
        return order1.paymentDueDate.getDate() - order2.paymentDueDate.getDate();
      }
    });
  }
}



