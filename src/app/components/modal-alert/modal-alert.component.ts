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

  constructor(
    private modal: NgbActiveModal,
    public messagesService: MessagesService

  ) {

    this.icons = [
      {class: 'alert-primary', icon: 'done'},
      {class: 'alert-secondary', icon: 'done'},
      {class: 'alert-success', icon: 'done'},
      {class: 'alert-danger', icon: 'done'},
      {class: 'alert-warning', icon: 'warning'},
      {class: 'alert-light', icon: 'done'},
      {class: 'alert-dark', icon: 'done'}
    ];

  }

  ngOnInit() {
    this.title =
    this.messagesService.getMessage().title ?
    this.messagesService.getMessage().title : 'Titulo';

    this.type =
    this.messagesService.getMessage().type ?
    `modal-header ${this.messagesService.getMessage().type}` : 'modal-header alert-success';

    this.icon =
    this.messagesService.getMessage().type ?
    this.icons.find(el => el.class === this.messagesService.getMessage().type).icon : 'done';

    this.text = this.messagesService.getMessage().text ?
    this.messagesService.getMessage().text : 'Texto';

  }

  close() {
    this.modal.dismiss();
  }

  save() {
    this.modal.close();
  }

}
