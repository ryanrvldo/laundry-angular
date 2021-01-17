import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { LaundryDetail } from 'src/app/model/laundry-detail';
import { Profile } from 'src/app/model/profile';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-laundry-add',
  templateUrl: './laundry-add.component.html',
  styleUrls: ['./laundry-add.component.css'],
})
export class LaundryAddComponent implements OnInit {
  selectedItems: LaundryDetail[] = [];

  detail: LaundryDetail = new LaundryDetail();
  customer: Profile = new Profile();

  itemOptions: any[] = [];

  constructor(
    private dataService: DataService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataService.getItemList().forEach((item) => {
      this.itemOptions.push({
        label: `${item.itemDetails.name} (${item.services.name})`,
        value: item.id,
      });
    });
  }

  addItem(item: LaundryDetail) {
    this.selectedItems.push(item);
    this.detail = new LaundryDetail();
  }

  submitLaundry() {
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Submitted',
      detail: 'Success with transaction number TRX12319321283878',
      life: 20000,
    });
    this.router.navigateByUrl('/transaction/laundry');
  }
}
