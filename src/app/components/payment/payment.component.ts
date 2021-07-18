import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PaymentService } from 'src/app/services/payment/payment.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  subscriptionInformation: any
  paymentInformation: any
  price: number
  submitted: boolean = false
  constructor(public paymentService: PaymentService, private router: Router) {}

  ngOnInit() {
    this.subscriptionInformation = this.paymentService.getTicketInformation().subscriptionInformation
    console.log(this.paymentService.getTicketInformation())

    this.price = this.paymentService.getPrices()
    this.paymentInformation = this.paymentService.ticketInformation.paymentInformation
  }

  nextPage() {
    this.submitted = true
    if (
      this.paymentInformation.cardholderNumber &&
      this.paymentInformation.date &&
      this.paymentInformation.cvv
    ) {
      this.paymentService.ticketInformation.paymentInformation = this.paymentInformation
      this.router.navigate(['confirmation'])
    }
  }

  prevPage() {
    this.router.navigate(['subscription'])
  }
}
