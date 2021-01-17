import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from 'src/app/layout/base/base.component';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: '',
        loadChildren: () =>
          import('../master/master.module').then((m) => m.MasterModule),
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('../transaction/transaction.module').then(
            (m) => m.TransactionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
