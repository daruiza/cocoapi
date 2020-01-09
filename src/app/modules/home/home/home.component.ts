import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertService } from 'src/app/services/modal-alert/modal-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
  styleUrls: ['../../../../assets/css/home_home.css'],
})
export class HomeComponent implements OnInit {

  modalLogin: NgbModalRef;
  constructor(
    private readonly modalAlert: NgbModal,
    private readonly messagesService: ModalAlertService
  ) { }

  ngOnInit() {

  }

  openModal() {
    this.modalLogin = this.messagesService.openAlert({
      title: 'Un Titulo',
      type: 'success',
      text: 'Alerta de de Suceso OK'
    });
    this.modalLogin.result.then((result) => {
      // Consumo de servicio en caso de estar el form OK
      console.log('result');
    }, (reason) => {
      console.log('reason');
    });
  }

  openModal2() {
    this.modalLogin = this.messagesService.openAlert({
      title: 'Un Titulo 2',
      type: 'danger',
      text: 'Alerta de warning',
      confirmButton: 'Save',
      cancelButton: 'Cancel'
    });
  }

}
