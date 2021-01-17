import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaundryComponent } from 'src/app/page/transaction/laundry/laundry.component';
import { LaundryAddComponent } from 'src/app/page/transaction/laundry-add/laundry-add.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [LaundryComponent, LaundryAddComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
  ],
  providers: [ConfirmationService],
})
export class TransactionModule {}
