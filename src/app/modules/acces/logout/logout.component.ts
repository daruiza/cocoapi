import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalAlertService } from 'src/app/services/modal-alert/modal-alert.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['../../../../assets/css/acces_logout.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {

  constructor(
    private readonly messagesAlertService: ModalAlertService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.openModaLogout();
  }

  openModaLogout() {
    this.messagesAlertService.openAlert(new Message(
      {
        title: 'Salir de',
        type: 'primary',
        text: 'Estas seguro de salir',
        confirmButton: 'Si!',
        cancelButton: 'No'
      }
    )).result.then((result) => {
      // Consumo de servicio en caso de estar el form OK
      this.authService.logout().subscribe((res) => {
        this.messagesAlertService.openAlert(new Message(
          {
            type: 'success',
            title: `Salida Exitosa`,
            text: `Te esperamos pronto.`
          }
        ));
        this.router.navigate(['/']);
      }, err => {
        // El error ya se halla controlado desde el servico
        this.messagesAlertService.openAlert(new Message(
          {
            type: 'danger',
            title: `Salida Fallida`,
            text: `${err.error.message}`
          }
        ));
      });
    }, (reason) => {
      this.router.navigate(['/']);
    });
  }

}
