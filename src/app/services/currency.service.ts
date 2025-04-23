import { Injectable } from '@angular/core';
import { Currency } from '../model/currency.type';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {

    getAllCurrencies(): Array<{ code: string, name: string }> {
        return Object.entries(Currency)
            .map(([label, value]) => ({ code: label, name: value }));
    }
}