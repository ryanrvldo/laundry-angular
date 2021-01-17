import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseRoutingModule } from './base-routing.module';

import { BaseComponent } from 'src/app/layout/base/base.component';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [BaseComponent, DashboardComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    ToastModule,
  ],
})
export class BaseModule {}
