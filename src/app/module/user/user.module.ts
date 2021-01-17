import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from '../../page/user/user.component';

import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
  ],
})
export class UserModule {}
