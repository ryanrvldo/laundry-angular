import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from 'src/app/page/item-details/item-details.component';

const routes: Routes = [
  {
    path: 'item-details',
    component: ItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailsRoutingModule {}
