import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  providers: [MessageService],
})
export class BaseComponent implements OnInit, OnDestroy {
  constructor(
    private toastService: ToastService,
    private messageService: MessageService
  ) {}

  public visibleSidebarMenu: boolean;

  private subscription: Subscription;

  ngOnInit() {
    this.subscribeMessageObservable();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private subscribeMessageObservable() {
    this.subscription = this.toastService.messageObservable.subscribe(
      (msg: Message) => {
        this.messageService.add(msg);
      }
    );
  }
}
