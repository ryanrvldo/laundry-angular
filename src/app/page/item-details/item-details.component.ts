import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ItemDetails } from 'src/app/model/item-details';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  itemDialog: boolean;

  items: ItemDetails[];

  item: ItemDetails;

  selectedItems: ItemDetails[];

  submitted: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.items = this.dataService.getItemDetailsList();
  }

  openNew() {
    this.item = new ItemDetails();
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

  editItem(item: ItemDetails) {
    this.item = { ...item };
    this.itemDialog = true;
  }

  deleteItem(item: ItemDetails) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${item.name}?`,
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
    this.item = new ItemDetails();
  }
}
