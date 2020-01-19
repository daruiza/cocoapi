import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { Subscription } from 'rxjs';
import { ModalAlertService } from './services/modal-alert/modal-alert.service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'InterGrupo';
  sidenavMode: string;
  toolbarHeight = 60; // 60 es una bariable de configuracion de sass: $toolbar-height
  iconSindenavWidth = 32; // tamaño de iconos de menu lateral
  windowHeight: number;
  windowWidth: number;

  suscriptionMessage: Subscription;

  constructor(
    private readonly messagesService: MessagesService,
    private readonly messagesAlertService: ModalAlertService,
    private readonly authService: AuthService
  ) {
  }


  ngOnInit(): void {
    // obtención de usuario en caso de estar logueado
    this.authService.userGet();

    // Control de tamaño, responsive
    this.responsiveControl();
    // Consumo de servicios
    this.suscriptionMessage = this.messagesService.observableMessage
    .subscribe((item: any ) => {
      if (item) {
        // pintamos el mensaje
        // console.log(item);
        this.messagesAlertService.openAlert({
          title: item.title,
          type: item.type,
          text: item.text
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.suscriptionMessage.unsubscribe();
  }


  responsiveControl() {
    // Width
    this.windowWidth = window.innerWidth;
    this.sidenavMode = this.windowWidth < 720 ? 'over' : 'side';


    // Heightz
    this.windowHeight = window.innerHeight - this.toolbarHeight;
  }

}
