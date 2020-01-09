import { Injectable } from '@angular/core';

import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/components/modal-alert/modal-alert.component';
import { MessagesService } from './messages.service';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ModalAlertService {

  modalLogin: NgbModalRef;
  constructor(
    private readonly modalAlert: NgbModal,
    private readonly messagesService: MessagesService
  ) { }

  openAlert(message: Message = {}): NgbModalRef {
    this.messagesService.setMessage(message);
    return this.modalAlert.open(ModalAlertComponent, {
      windowClass: 'modal-holder',
      // centered: true,
      backdrop: 'static'
    });
  }
}
