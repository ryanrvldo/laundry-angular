import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemServicesComponent } from 'src/app/page/item-services/item-services.component';

const routes: Routes = [
  {
    path: 'item-services',
    component: ItemServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemServicesRoutingModule {}
