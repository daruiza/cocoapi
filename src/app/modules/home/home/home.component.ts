import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertService } from 'src/app/services/modal-alert/modal-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../../assets/css/home_home.css'],
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  modalLogin: NgbModalRef;
  constructor(
    private readonly messagesAlertService: ModalAlertService
   
  ) { }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {

  }
  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  openModal() {
    this.modalLogin = this.messagesAlertService.openAlert({
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
    this.modalLogin = this.messagesAlertService.openAlert({
      title: 'Un Titulo 2',
      type: 'danger',
      text: 'Alerta de warning',
      confirmButton: 'Save',
      cancelButton: 'Cancel'
    });
  }

}
