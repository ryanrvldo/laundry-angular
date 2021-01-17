import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Customer } from 'src/app/model/customer';
import { Profile } from 'src/app/model/profile';
import { Role } from 'src/app/model/role';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerDialog: boolean;

  customers: Customer[];

  customer: Customer;

  selectedCustomers: Customer[];

  submitted: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.customers = this.dataService.getCustomerList();
  }

  openNew() {
    this.customer = new Customer();
    this.customer.profile = new Profile();
    this.submitted = false;
    this.customerDialog = true;
  }

  deleteSelectedCustomers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected customers?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedCustomers = null;
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customers Deleted',
          life: 3000,
        });
      },
    });
  }

  editCustomer(customer: Customer) {
    this.customer = { ...customer };
    this.customerDialog = true;
  }

  deleteCustomer(customer: Customer) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${customer.profile.fullName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Customer Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.customerDialog = false;
    this.submitted = false;
  }

  saveCustomer() {
    this.submitted = true;
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Successful',
      detail: 'Customer Created',
      life: 3000,
    });
    this.customerDialog = false;
    this.customer = new Customer();
  }
}
