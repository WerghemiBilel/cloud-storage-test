import { PaymentComponent } from './../payment/payment.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StepsRoutingModule } from './steps-routing.module'
import { StepsModule } from 'primeng/steps'
import { TabViewModule } from 'primeng/tabview'
// import { AppCodeModule } from '../../app.code.component';
// import { AppDemoActionsModule } from '../../app.demoactions.component';
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DropdownModule } from 'primeng/dropdown'
import { InputTextModule } from 'primeng/inputtext'
import { InputMaskModule } from 'primeng/inputmask'
import { CheckboxModule } from 'primeng/checkbox'
import { ToastModule } from 'primeng/toast'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToggleButtonModule } from 'primeng/togglebutton'

import { StepsComponent } from './steps.component'
import { ConfirmationComponent } from '../confirmation/confirmation.component'
import { SubscriptionComponent } from '../personal/subscription.component'
import { PaymentService } from 'src/app/services/payment/payment.service'

@NgModule({
  imports: [
    CommonModule,
    StepsRoutingModule,
    StepsModule,
    TabViewModule,
    BrowserAnimationsModule,
    // AppCodeModule,
    // AppDemoActionsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleButtonModule,
  ],
  declarations: [
    StepsComponent,
    ConfirmationComponent,
    SubscriptionComponent,
    PaymentComponent,
  ],
  exports: [
    StepsComponent,
    ConfirmationComponent,
    SubscriptionComponent,
    PaymentComponent,
  ],
  providers: [PaymentService],
})
export class StepsComponentModule {}
