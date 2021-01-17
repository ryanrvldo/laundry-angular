import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaundryComponent } from 'src/app/page/transaction/laundry/laundry.component';
import { LaundryAddComponent } from 'src/app/page/transaction/laundry-add/laundry-add.component';

const routes: Routes = [
  {
    path: 'laundry',
    component: LaundryComponent,
  },
  {
    path: 'laundry/add',
    component: LaundryAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
