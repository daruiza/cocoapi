import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/components/modal-alert/modal-alert.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private message: Message;
  constructor() { }

  setMessage(message: Message = null): void {
    this.message = message ? message : null;
  }

  getMessage(): Message {
    return this.message;
  }
}
