import { Injectable } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/components/modal-alert/modal-alert.component';
import { Message } from '../../models/Message';

@Injectable({
  providedIn: 'root'
})
export class ModalAlertService {

  modalLogin: NgbModalRef;
  constructor(
    private readonly modalAlert: NgbModal,
  ) { }

  openAlert(message: Message): NgbModalRef {
    const modalRef = this.modalAlert.open(ModalAlertComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static'
      // centered: true,
    });
    modalRef.componentInstance.message = message;

    return modalRef;
  }
}
