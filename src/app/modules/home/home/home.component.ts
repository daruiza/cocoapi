import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/components/modal-alert/modal-alert.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
  styleUrls: ['../../../../assets/css/home_home.css'],
})
export class HomeComponent implements OnInit {

  modalLogin: NgbModalRef;
  constructor(
    private readonly modalAlert: NgbModal
  ) { }

  ngOnInit() {

  }

  openModal() {
    this.modalLogin = this.modalAlert.open(ModalAlertComponent, {
      windowClass: 'modal-holder',
      centered: true,
      backdrop: 'static'
    });
    this.modalLogin.result.then((result) => {
      // Consumo de servicio en caso de estar el form OK
      console.log('result');
    }, (reason) => {
      console.log('reason');
    });
  }
}
