import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CrudListComponent } from './components/crud-list/crud-list.component';
import { CrudListComponentModule } from './components/crud-list/crud-list.module';

@NgModule({
  declarations: [
    AppComponent,
    CrudListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudListComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
