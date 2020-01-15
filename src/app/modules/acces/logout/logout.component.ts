import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalAlertService } from 'src/app/services/modal-alert/modal-alert.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    this.messagesAlertService.openAlert({
      title: 'Salir de',
      type: 'primary',
      text: 'Estas seguro de salir',
      confirmButton: 'Si!',
      cancelButton: 'No'
    }).result.then((result) => {
      // Consumo de servicio en caso de estar el form OK
      this.authService.logout().subscribe((res) => {
        console.log(res);
      }, err => {
        console.error(err);
      });
    }, (reason) => {
      this.router.navigate(['/']);
    });
  }

}
