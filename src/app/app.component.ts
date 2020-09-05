import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
    displayMessage: string;
    paymentForm: FormGroup;
  constructor() {

    /* Declare Reactive Form Group here */
    this.paymentForm = new FormGroup({
      nameOnCard: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]),
      cardNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
      expirationMonth: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{2}$')]),
      expirationYear: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}$')]),
      cvv: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')])});
  }

  submitForm() {
    /* Change the display message on button click / submit form */
    if (this.paymentForm.invalid) {
      this.displayMessage = 'Payment Failed!';
    } else {
      this.displayMessage = 'Payment Successful!';
    }
  }

  get nameOnCard() {return this.paymentForm.get('nameOnCard'); }
  get cardNumber() {return this.paymentForm.get('cardNumber'); }
  get expirationMonth() {return this.paymentForm.get('expirationMonth'); }
  get expirationYear() {return this.paymentForm.get('expirationYear'); }
  get cvv() {return this.paymentForm.get('cvv'); }
}
