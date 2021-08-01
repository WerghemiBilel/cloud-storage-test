import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
// import {ToastModule} from 'primeng/toast';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {DialogModule} from 'primeng/dialog';
// import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
// import {ProgressBarModule} from 'primeng/progressbar';
// import {InputTextModule} from 'primeng/inputtext';
// import { CustomerService } from 'src/app/services/Customer/customer.service';
import { APP_MODULE_PRIMENG, APP_PRIMENG_PROVIDERS } from './APP-PRIMENG';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_MODULE_PRIMENG,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    // StepsComponent,
    // ConfirmationComponent,
    // SubscriptionComponent,
    // PaymentComponent,
  ],
  exports: [
    APP_MODULE_PRIMENG,
    // StepsComponent,
    // ConfirmationComponent,
    // SubscriptionComponent,
    // PaymentComponent,
  ],
  providers: [APP_PRIMENG_PROVIDERS],
})
export class CrudListComponentModule {}
