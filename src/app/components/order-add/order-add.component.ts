import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-add.component.html',
  styleUrl: './order-add.component.scss'
})

export class OrderAddComponent {
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
    //    if (this.orderAddForm.valid) {
    //      console.log('Form Data:', this.orderAddForm.value);
    //    } else {
    //      console.log('Form Invalid');
    //    }
  }
}
