import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailsRoutingModule } from './item-details-routing.module';
import { ItemDetailsComponent } from 'src/app/page/item-details/item-details.component';

import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ItemDetailsComponent],
  imports: [
    CommonModule,
    ItemDetailsRoutingModule,
    FormsModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
  ],
})
export class ItemDetailsModule {}
