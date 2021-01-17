import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModule } from '../item/item.module';
import { ConfirmationService } from 'primeng/api';
import { ItemDetailsModule } from '../item-details/item-details.module';
import { ItemServicesModule } from '../item-services/item-services.module';
import { UserModule } from '../user/user.module';
import { CustomerModule } from '../customer/customer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ItemModule,
    ItemDetailsModule,
    ItemServicesModule,
    UserModule,
    CustomerModule,
  ],
  providers: [ConfirmationService],
})
export class MasterModule {}
