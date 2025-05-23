import { inject, Injectable } from '@angular/core';
import { Order } from '../model/order.type';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { OrderService } from './order.service';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceApi implements OrderService {
  private http = inject(HttpClient);
  private apiUrl = `https://127.0.0.1:8000/api/orders`

 async getAllOrders(): Observable<Array<Order>> {
    let orders: Array<Order> = [];
   return this.http.get<Array<Order>>(this.apiUrl).pipe(
      catchError(error => {
        console.log(error);
        throw error;
      }))
      .subscribe((data) => {
        orders = data
      }, () => { console.log('Fetch data unsuccessfull') })

    return orders;
  }

  createOrder(order: Order): void {
    this.http.post(this.apiUrl, order);
  }

  isOrderNumberUnique(orderNumber: string): boolean {
    let orders: Array<Order> = [];
    this.http.get<Array<Order>>(this.apiUrl + "?orderNumber=" + orderNumber)
      .pipe(
        catchError(error => {
          console.log(error);
          throw error;
        }))
      .subscribe((data) => {
        orders = data
      }, () => { console.log('Fetch data unsuccessfull') });

    if (!orders) return true;

    return false;
  }
}
