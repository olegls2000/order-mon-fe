import { Injectable } from '@angular/core';
import { Order } from '../model/order.type';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { OrderService } from './order.service';



@Injectable({
  providedIn: 'root'
})
export class OrderServiceMock implements OrderService {

  private mockOrders: Order[] = [
    {
      id: 1,
      orderNumber: "34-we",
      country: "Estonia",
      streeetAddress: "Lootsi, 4",
      town: "Tallinn",
      paymentDescription: "Invoice Payment ...",
      paymentDueDate: new Date('2025-12-24T10'),
      amount: 56,
      currency: "EUR"
    },
    {
      id: 2,
      orderNumber: "34-wx",
      country: "Estonia",
      streeetAddress: "Lootsi, 4",
      town: "Tallinn",
      paymentDescription: "Invoice Payment ...",
      paymentDueDate: new Date('2025-12-24T10'),
      amount: 56,
      currency: "EUR"
    }
  ];

  getAllOrders(): Array<Order> {
    return this.mockOrders;
  }

  createOrder(order: Order): void {
    this.mockOrders.push(order);
  }

  isOrderNumberUnique(orderNumber: string): boolean {
    const dublicate = this.mockOrders.find(order => order.orderNumber === orderNumber)
    if (dublicate) {
      return false
    }

    return true;
  }
}
