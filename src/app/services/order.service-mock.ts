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
      country: "EE",
      streeetAddress: "Lootsi, 4",
      town: "Tallinn",
      paymentDescription: "Invoice TT ...",
      paymentDueDate: new Date('2025-12-24T10'),
      amount: 56,
      currency: "EUR"
    },
    {
      id: 2,
      orderNumber: "34-wx",
      country: "EE",
      streeetAddress: "Lootsi, 4",
      town: "Tallinn",
      paymentDescription: "Invoice UU ...",
      paymentDueDate: new Date('2025-12-24T10'),
      amount: 56,
      currency: "EUR"
    }
    ,
    {
      id: 3,
      orderNumber: "56-wx",
      country: "FI",
      streeetAddress: "Lootsi, 4",
      town: "Helsinki",
      paymentDescription: "Invoice LL ...",
      paymentDueDate: new Date('2025-12-24T10'),
      amount: 56,
      currency: "EUR"
    }
  ];

  getAllOrders(): Array<Order> {
    return this.mockOrders;
  }

  getAllOrdersBySearchCriteria(countryCode?: string, description?: string): Array<Order> {
    return this.mockOrders.filter(order => {
      if (countryCode) {
        return order.country === countryCode;
      }
      return true;
    })
      .filter(order => {
        if (description) {
          return order.paymentDescription.includes(description);
        }
        return true;
      });
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
