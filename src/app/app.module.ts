import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StepsComponent } from './components/steps/steps.component';
import { StepsComponentModule } from './components/steps/steps.module';
// import { PersonalComponent } from './components/personal/personal.component';
// import { SeatComponent } from './components/seat/seat.component';
// import { PaymentComponent } from './components/payment/payment.component';
// import { ConfirmationComponent } from './components/confirmation/confirmation.component';
// import { StepsComponentModule } from './components/steps/steps.module';

@NgModule({
  declarations: [
    AppComponent,
    // BrowserAnimationsModule
    // ReactiveFormsModule,
    // FormsModule
    // StepsComponent,
    // PersonalComponent,
    // SeatComponent,
    // PaymentComponent,
    // ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsComponentModule
    // StepsComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
