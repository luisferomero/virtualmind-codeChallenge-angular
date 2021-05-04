import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotationsComponent } from './views/quotations/quotations.component';
import { PurchaseComponent } from './views/purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotationsComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
