import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessagesService } from 'src/app/services/modal-alert/messages.service';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['../../../assets/css/components_modal_alert.css'],
})
export class ModalAlertComponent implements OnInit {

  title: string;
  type: string;
  icon: string;
  icons: {class: string, icon: string}[];
  text: string;
  confirmButton: string;
  cancelButton: string;

  constructor(
    private modal: NgbActiveModal,
    public messagesService: MessagesService
  ) {

    this.icons = [
      {class: 'primary', icon: 'info'},
      {class: 'secondary', icon: 'done'},
      {class: 'success', icon: 'check_circle_outline'},
      {class: 'danger', icon: 'close'},
      {class: 'warning', icon: 'warning'},
      {class: 'light', icon: 'brightness_5'},
      {class: 'dark', icon: 'brightness_1'}
    ];

  }

  ngOnInit() {
    this.title =
    this.messagesService.getMessage().title ?
    this.messagesService.getMessage().title : '';

    this.type =
    this.messagesService.getMessage().type ?
    `modal-header alert-${this.messagesService.getMessage().type}` : 'modal-header alert-success';

    this.icon =
    this.messagesService.getMessage().type ?
    this.icons.find(el => el.class === this.messagesService.getMessage().type).icon : 'check_circle_outline';

    this.text = this.messagesService.getMessage().text ?
    this.messagesService.getMessage().text : '';

    this.confirmButton = this.messagesService.getMessage().confirmButton ?
    this.messagesService.getMessage().confirmButton : 'Aceptar';

    this.cancelButton = this.messagesService.getMessage().cancelButton ?
    this.messagesService.getMessage().cancelButton : '';

  }

  close() {
    this.modal.dismiss();
  }

  save() {
    this.modal.close();
  }

}
