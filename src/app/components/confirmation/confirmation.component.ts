import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PaymentService } from 'src/app/services/payment/payment.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  ticketInformation: any
  pricePerGb
  constructor(public paymentService: PaymentService, private router: Router) {}

  ngOnInit() {
    this.pricePerGb =
      this.paymentService
        .getSubscriptionPrices()
        .filter(
          (item) =>
            item.duration_months ===
            this.paymentService.getTicketInformation().subscriptionInformation
              .duration.code,
        )[0].price_usd_per_gb + ' €'
    this.ticketInformation = this.paymentService.ticketInformation
  }

  complete() {
    this.paymentService.complete()
  }

  prevPage() {
    this.router.navigate(['payment'])
  }
}
