import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemServicesRoutingModule } from './item-services-routing.module';
import { ItemServicesComponent } from 'src/app/page/item-services/item-services.component';

import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ItemServicesComponent],
  imports: [
    CommonModule,
    ItemServicesRoutingModule,
    FormsModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
  ],
})
export class ItemServicesModule {}
