import { PaymentComponent } from './../payment/payment.component'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StepsComponent } from './steps.component'
import { SubscriptionComponent } from '../personal/subscription.component'
import { ConfirmationComponent } from '../confirmation/confirmation.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: StepsComponent,
        children: [
          { path: '', redirectTo: 'subscription', pathMatch: 'full' },
          { path: 'subscription', component: SubscriptionComponent },
          { path: 'confirmation', component: ConfirmationComponent },
          { path: 'payment', component: PaymentComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class StepsRoutingModule {}
