import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { MenuItem, MessageService } from 'primeng/api'
import { Subscription } from 'rxjs'
import { PaymentService } from 'src/app/services/payment/payment.service'

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  providers: [MessageService],
})
export class StepsComponent implements OnInit {
  items: MenuItem[]

  subscription: Subscription

  constructor(
    public messageService: MessageService,
    public paymentService: PaymentService,
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Subscription',
        routerLink: 'subscription',
      },
      {
        label: 'Payment',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ]

    this.subscription = this.paymentService.paymentComplete$.subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Order submitted',
          detail:
            'Dear, ' +
            'StaticEmail@gmail.com ' +
            'you are successful buy  ' +
            data.subscriptionInformation.amount.code +
            'GB ' +
            'for ' +
            data.subscriptionInformation.duration.name +
            ' thank you .',
        })
      },
    )
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
