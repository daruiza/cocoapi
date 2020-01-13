import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalAlertService } from 'src/app/services/modal-alert/modal-alert.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['../../../../assets/css/acces_logout.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly messagesAlertService: ModalAlertService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.openModaLogout();
  }

  openModaLogout() {
    this.messagesAlertService.openAlert({
      title: 'Un Titulo',
      type: 'success',
      text: 'Alerta de de Suceso OK'
    }).result.then((result) => {
      // Consumo de servicio en caso de estar el form OK
      console.log('result');
    }, (reason) => {
      console.log('reason');
    });
  }

}
