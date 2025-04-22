import { Injectable } from '@angular/core';
import { Country } from '../model/country.type';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    
    getAll(): Array<Country> {
        return [{
            code: 'EE',
            name: 'Estonia'
        },
        {
            code: 'FI',
            name: 'Finland'
        }]
    }
}