import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessagesService } from 'src/app/services/modal-alert/messages.service';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {

  title: string;

  constructor(
    private modal: NgbActiveModal,
    public messagesService: MessagesService

  ) { }

  ngOnInit() {
    this.title =
    typeof(this.messagesService.getMessage()) === 'object' && this.messagesService.getMessage() !== null ?
    this.messagesService.getMessage().title : 'Title';
  }

  close() {
    this.modal.dismiss();
  }

  save() {
    this.modal.close();
  }

}
