import { Component, inject, OnInit, signal } from '@angular/core';
import { Order } from '../../model/order.type';
import { OrderService } from '../../services/order.service';
import { OrderServiceMock } from '../../services/order.service-mock';

@Component({
  selector: 'app-order-table',
  imports: [],
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.scss'
})
export class OrderTableComponent implements OnInit {

  orderService: OrderService = inject(OrderServiceMock);

  orders = signal<Array<Order>>([])

  ngOnInit(): void {
    const orders = this.orderService.getAllOrders();
    this.orders.set(orders)
  }
}