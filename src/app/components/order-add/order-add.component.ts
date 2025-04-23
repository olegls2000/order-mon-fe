import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { OrderService } from '../../services/order.service';
import { OrderServiceMock } from '../../services/order.service-mock';
import { CurrencyService } from '../../services/currency.service';
import { Country } from '../../model/country.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-add.component.html'
})

export class OrderAddComponent {

  orderService: OrderService = inject(OrderServiceMock);
  countryService: CountryService = inject(CountryService);
  currencyService: CurrencyService = inject(CurrencyService);
  router: Router = inject(Router)

  countries: Array<Country> = this.countryService.getAll();
  currencies = this.currencyService.getAllCurrencies();

  orderAddForm: FormGroup = new FormGroup({
    orderNumber: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    streetAddress: new FormControl('', [Validators.required]),
    town: new FormControl('', [Validators.required]),
    paymentDescription: new FormControl('', [Validators.required]),
    paymentDueDate: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required])
  });

  onSubmit(): void {
    if (this.orderAddForm.valid) {
      this.orderService.createOrder(this.orderAddForm.value)
      this.router.navigate(['/orders']);
    }
  }
}
