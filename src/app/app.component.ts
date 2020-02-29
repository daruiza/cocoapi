import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  title = 'InterGrupo';
  sidenavMode: string;
  toolbarHeight = 64; // 60 es una bariable de configuracion de sass: $toolbar-height
  @ViewChild('toolbarr', { static: false }) toolbarr: ElementRef;
  iconSindenavWidth = 32; // tamaño de iconos de menu lateral
  windowHeight: number;
  windowWidth: number;

  suscriptionMessage: Subscription;

  constructor(
    public readonly authService: AuthService,
    public readonly appService: AppService
  ) {
  }


  ngOnInit(): void {
    // Control de tamaño, responsive
    this.responsiveControl();
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
