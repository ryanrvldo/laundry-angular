import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Profile } from 'src/app/model/profile';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/service/data.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userDialog: boolean;

  users: User[];

  user: User;

  selectedUsers: User[];

  submitted: boolean;

  roles: any[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.dataService.getRoles().forEach((role) => {
      this.roles.push({ label: role.name, value: role.code });
    });
  }

  openNew() {
    this.user = new User();
    this.user.profile = new Profile();
    this.user.role = new Role();
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedUsers = null;
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'Users Deleted',
          life: 3000,
        });
      },
    });
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${user.username}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;
    this.toastService.emitMessage({
      severity: 'success',
      summary: 'Successful',
      detail: 'User Created',
      life: 3000,
    });
    this.userDialog = false;
    this.user = new User();
  }
}
