import { Component } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private fb: AngularFireFunctions) {}

  firebaseFunction() {
    const stripeobj = this.fb.httpsCallable('getStripekey');

    stripeobj({}).subscribe(data => {
      console.log("Stripe Key: "+ data.msg)
    })
  }

}
