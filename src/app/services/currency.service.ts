import { Injectable } from '@angular/core';
import { Currency } from '../model/currency.type';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    getAll(): Array<Currency> {
        return [{
            code: 'EUR',
            name: 'Euro'
        },
        {
            code: 'USD',
            name: 'US Dollar'
        }]
    }
}