import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component').then((module) => module.HomeComponent)
    }
},
{
    path: 'orders/add',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./components/order-add/order-add.component').then((module) => module.OrderAddComponent)
    }
},
{
    path: 'orders',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./components/order-table/order-table.component').then((module) => module.OrderTableComponent)
    }
}
];
