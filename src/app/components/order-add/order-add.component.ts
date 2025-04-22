import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { OrderService } from '../../services/order.service';
import { OrderServiceMock } from '../../services/order.service-mock';
import { CurrencyService } from '../../services/currency.service';
import { Country } from '../../model/country.type';
import { Currency } from '../../model/currency.type';

@Component({
  selector: 'app-order-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-add.component.html',
  styleUrl: './order-add.component.scss'
})

export class OrderAddComponent {

  orderService: OrderService = inject(OrderServiceMock);
  countryService: CountryService = inject(CountryService);
  currencyService: CurrencyService = inject(CurrencyService);

  countries: Array<Country> = this.countryService.getAll();
  currencies: Array<Currency> = this.currencyService.getAll();

  orderAddForm: FormGroup = new FormGroup({
    orderNumber: new FormControl(''),
    country: new FormControl(''),
    streetAddress: new FormControl(''),
    town: new FormControl(''),
    paymentDescription: new FormControl(''),
    paymentDueDate: new FormControl(''),
    amount: new FormControl(''),
    currency: new FormControl('')
  });

  submitForm(event: Event) {
    console.log(this.orderAddForm.value)
    this.orderService.createOrder(this.orderAddForm.value)
  }
}
