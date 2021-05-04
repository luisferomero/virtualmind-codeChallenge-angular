import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './views/purchase/purchase.component';
import { QuotationsComponent } from './views/quotations/quotations.component';

const routes: Routes = [
  { path: 'purchase', component: PurchaseComponent },
  { path: 'quotations', component: QuotationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
