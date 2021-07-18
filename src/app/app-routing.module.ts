import { PaymentComponent } from './components/payment/payment.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SubscriptionComponent } from './components/personal/subscription.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'

const routes: Routes = [
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  // { path: 'second-component', component: SecondComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
