import { Observable } from "rxjs/internal/Observable";
import { Order } from "../model/order.type";


export interface OrderService {
    getAllOrders(): Array<Order>
    getAllOrdersBySearchCriteria(countryCode?: string, description?: string): Array<Order>
    createOrder(order: Order): void
    isOrderNumberUnique(orderNumber: string): boolean
}