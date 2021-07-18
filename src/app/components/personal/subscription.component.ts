import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { PaymentService } from 'src/app/services/payment/payment.service'

interface Duration {
  name: string
  code: number
}
interface Amount {
  name: number
  code: number
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubscriptionComponent implements OnInit {
  Months: Duration[]
  // selectedDuration: Duration = { name: '12 Months', code: 12 }
  Gigabytes: Amount[]
  // selectedAmount: Amount = { name: 5, code: 5 }
  UpfrontPayment: boolean

  subscriptionInformation: any

  SubscriptionPrices

  submitted: boolean = false
  price: number

  constructor(public ticketService: PaymentService, private router: Router) {}

  ngOnInit() {
    this.Months = [
      { name: '3 Months', code: 3 },
      { name: '6 Months', code: 6 },
      { name: '12 Months', code: 12 },
    ]

    this.Gigabytes = [
      { name: 5, code: 5 },
      { name: 10, code: 10 },
      { name: 50, code: 50 },
    ]

    this.subscriptionInformation = this.ticketService.getTicketInformation().subscriptionInformation
    this.UpfrontPayment = this.subscriptionInformation.UpfrontPayment
    this.price = this.ticketService.getPrices()
    this.SubscriptionPrices = this.ticketService.getSubscriptionPrices()
    this.calculatePrice()
  }

  calculatePrice() {
    if (
      this.subscriptionInformation.duration &&
      this.subscriptionInformation.amount
      // this.personalInformation.age
    ) {
      let quotationSelected = this.SubscriptionPrices.filter(
        (item) =>
          item.duration_months === this.subscriptionInformation.duration.code,
      )
      console.log('tarifSelected', quotationSelected)
      let price_usd_per_gb = quotationSelected[0].price_usd_per_gb
      this.price = this.subscriptionInformation.amount.code * price_usd_per_gb

      if (this.UpfrontPayment) {
        this.price = this.price - (this.price / 100) * 10
      }
      this.subscriptionInformation.price = this.price
    }
  }

  nextPage() {
    this.submitted = true
    if (
      this.subscriptionInformation.duration &&
      this.subscriptionInformation.amount
      // this.personalInformation.age
    ) {
      this.ticketService.ticketInformation.subscriptionInformation = this.subscriptionInformation
      this.router.navigate(['payment'])

      return
    }
  }
}
