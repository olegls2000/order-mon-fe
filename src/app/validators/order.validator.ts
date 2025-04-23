import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { OrderServiceMock } from '../services/order.service-mock';
import { inject } from '@angular/core';

export function validateOrderNumber(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const orderService = inject(OrderServiceMock)
    if (!value) return null;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasMinLength = value.length >= 8;

    const valid = orderService.isOrderNumberUnique(value);

    return valid ? null : {
      isOrderNumber: {
        hasUpperCase,
        hasNumber,
        hasMinLength
      }
    };
  };
}