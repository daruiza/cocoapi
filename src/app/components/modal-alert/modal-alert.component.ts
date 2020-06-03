import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from '../../../app/models/Message';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['../../../assets/css/components_modal_alert.css'],
})
export class ModalAlertComponent implements OnInit {

  message: Message;
  title: string;
  type: string;
  icon: string;
  icons: { class: string, icon: string }[];
  text: string;
  confirmButton: string;
  cancelButton: string;

  constructor(
    private readonly modal: NgbActiveModal,
  ) {

    this.icons = [
      { class: 'primary', icon: 'info' },
      { class: 'secondary', icon: 'done' },
      { class: 'success', icon: 'check_circle_outline' },
      { class: 'danger', icon: 'close' },
      { class: 'warning', icon: 'warning' },
      { class: 'light', icon: 'brightness_5' },
      { class: 'dark', icon: 'brightness_1' }
    ];
  }

  ngOnInit() {
    this.setMessage();
  }

  setMessage(): void {
    this.title = this.message.title ? this.message.title : '';
    this.type = this.message.type ? `modal-header alert-${this.message.type}` : 'modal-header alert-success';
    this.icon = this.message.type ? this.icons.find(el => el.class === this.message.type).icon : 'check_circle_outline';
    this.text = this.message.text ? this.message.text : '';
    this.confirmButton = this.message.confirmButton ? this.message.confirmButton : 'Aceptar';
    this.cancelButton = this.message.cancelButton ? this.message.cancelButton : '';
  }

  close(evt: Event) {
    this.modal.dismiss();
  }

  save(evt: Event) {
    this.modal.close();
  }

}
