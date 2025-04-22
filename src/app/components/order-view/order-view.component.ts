import { Component, input } from '@angular/core';
import { Order } from '../../model/order.type';

@Component({
  selector: 'app-order-view',
  imports: [],
  templateUrl: './order-view.component.html',
  styleUrl: './order-view.component.scss'
})
export class OrderViewComponent {

  order = input.required<Order>();
}
