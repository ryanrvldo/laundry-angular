import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { LaundryTransaction } from 'src/app/model/laundry-transaction';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-laundry',
  templateUrl: './laundry.component.html',
  styleUrls: ['./laundry.component.css'],
})
export class LaundryComponent implements OnInit {
  laundryDialog: boolean;

  transactions: LaundryTransaction[];

  transaction: LaundryTransaction;

  selectedTransactions: LaundryTransaction[];

  submitted: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.transactions = this.dataService.getTransactionList();
  }

  openNew() {
    this.transaction = new LaundryTransaction();
    this.submitted = false;
    this.laundryDialog = true;
  }

  showDetail(transaction: LaundryTransaction) {
    this.transaction = transaction;
    this.laundryDialog = true;
  }

  hideDialog() {
    this.laundryDialog = false;
    this.submitted = false;
  }
}
