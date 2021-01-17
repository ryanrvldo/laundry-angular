import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Services } from 'src/app/model/services';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-item-services',
  templateUrl: './item-services.component.html',
  styleUrls: ['./item-services.component.css'],
})
export class ItemServicesComponent implements OnInit {
  serviceDialog: boolean;

  services: Services[];

  service: Services;

  selectedServices: Services[];

  submitted: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.services = this.dataService.getServiceList();
  }

  openNew() {
    this.service = new Services();
    this.submitted = false;
    this.serviceDialog = true;
  }

  deleteSelectedServices() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedServices = null;
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Services Deleted',
          life: 3000,
        });
      },
    });
  }

  editService(service: Services) {
    this.service = { ...service };
    this.serviceDialog = true;
  }

  deleteService(service: Services) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${service.name}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Service Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.serviceDialog = false;
    this.submitted = false;
  }

  saveService() {
    this.submitted = true;
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Successful',
      detail: 'Service Created',
      life: 3000,
    });
    this.serviceDialog = false;
    this.service = new Services();
  }
}
