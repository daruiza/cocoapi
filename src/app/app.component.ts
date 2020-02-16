import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MessagesService } from './services/messages.service';
import { Subscription } from 'rxjs';
import { ModalAlertService } from './services/modal-alert/modal-alert.service';
import { AuthService } from './services/auth/auth.service';
import { AppService } from './services/app.service';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  title = 'InterGrupo';
  sidenavMode: string;
  toolbarHeight = 64; // 60 es una bariable de configuracion de sass: $toolbar-height
  @ViewChild('toolbarr', {static: false}) toolbarr: ElementRef;
  iconSindenavWidth = 32; // tamaño de iconos de menu lateral
  windowHeight: number;
  windowWidth: number;

  suscriptionMessage: Subscription;

  constructor(
    private readonly messagesService: MessagesService,
    private readonly messagesAlertService: ModalAlertService,
    private readonly authService: AuthService,
    private readonly appService: AppService
  ) {
  }


  ngOnInit(): void {    
    // Control de tamaño, responsive
    this.responsiveControl();
    // Consumo de servicios

    
    // this.suscriptionMessage = this.messagesService.observableMessage
    // .subscribe((item: any ) => {
    //   if (item) {
    //     // pintamos el mensaje
    //     // console.log(item);
    //     this.messagesAlertService.openAlert({
    //       title: item.title,
    //       type: item.type,
    //       text: item.text
    //     });
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.suscriptionMessage.unsubscribe();
  }

  responsiveControl() {
    // Width
    this.windowWidth = window.innerWidth;
    this.sidenavMode = this.windowWidth < 720 ? 'over' : 'side';

    // Heightz
    this.windowHeight = window.innerHeight - (this.toolbarHeight);
  }

  ngAfterViewInit() {
    // Intento de obtener el height del menu
    // console.log(this.toolbarr.nativeElement.style.height);
  }

}
