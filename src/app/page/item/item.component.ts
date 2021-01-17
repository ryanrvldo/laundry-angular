import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Item } from 'src/app/model/item';
import { ItemDetails } from 'src/app/model/item-details';
import { Services } from 'src/app/model/services';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  itemDialog: boolean;

  items: Item[];

  item: Item = new Item();

  selectedItems: Item[];

  submitted: boolean;

  itemDetails: any[] = [];
  itemServices: any[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.items = this.dataService.getItemList();
    this.dataService.getItemDetailsList().forEach((item) => {
      this.itemDetails.push({ label: item.name, value: item.code });
    });

    this.dataService.getServiceList().forEach((service) => {
      this.itemServices.push({
        label: `${service.name} (${service.hourDuration} hour)`,
        value: service.code,
      });
    });
  }

  openNew() {
    this.item = new Item();
    this.item.itemDetails = new ItemDetails();
    this.item.services = new Services();
    this.submitted = false;
    this.itemDialog = true;
  }

  deleteSelectedItems() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedItems = null;
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Items Deleted',
          life: 3000,
        });
      },
    });
  }

  editItem(item: Item) {
    this.item = { ...item };
    this.itemDialog = true;
  }

  deleteItem(item: Item) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${item.itemDetails.name} (${item.services.name}) ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Item Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.itemDialog = false;
    this.submitted = false;
  }

  saveItem() {
    this.submitted = true;
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Successful',
      detail: 'Item Created',
      life: 3000,
    });
    this.itemDialog = false;
    this.item = new Item();
  }
}
