import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class PaymentService {
  // ticketInformation = {
  //     personalInformation: {
  //         firstname: '',
  //         lastname: '',
  //         age: null
  //     },
  //     seatInformation: {
  //         class: null,
  //         wagon: null,
  //         seat: null
  //     },
  //     paymentInformation: {
  //         cardholderName:'',
  //         cardholderNumber:'',
  //         date:'',
  //         cvv:'',
  //         remember:false
  //     }
  // };
  Subscription_prices = [
    {
      duration_months: 3,
      price_usd_per_gb: 3,
    },
    {
      duration_months: 6,
      price_usd_per_gb: 2.5,
    },

    {
      duration_months: 12,
      price_usd_per_gb: 2,
    },
  ]

  ticketInformation = {
    subscriptionInformation: {
      duration: { name: '12 Months', code: 12 },
      amount: { name: 5, code: 5 },
      UpfrontPayment: false,
      price: 0,
    },
    seatInformation: {
      class: null,
      wagon: null,
      seat: null,
    },
    paymentInformation: {
      cardholderNumber: '',
      date: '',
      cvv: '',
    },
  }

  private paymentComplete = new Subject<any>()

  paymentComplete$ = this.paymentComplete.asObservable()

  getTicketInformation() {
    return this.ticketInformation
  }

  getPrices() {
    return this.ticketInformation.subscriptionInformation.price
  }

  getSubscriptionPrices() {
    return this.Subscription_prices
  }

  setTicketInformation(ticketInformation: {
    subscriptionInformation
    seatInformation
    paymentInformation: {
      cardholderNumber: string
      date: string
      cvv: string
    }
    price
  }) {
    this.ticketInformation = ticketInformation
  }

  complete() {
    this.paymentComplete.next(this.ticketInformation)
  }
}
