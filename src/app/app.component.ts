import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.css']
})
export class AppComponent implements OnInit {
  title = 'InterGrupo';
  sidenavMode: string;
  toolbarHeight = 60; // 60 es una bariable de configuracion de sass: $toolbar-height
  iconSindenavWidth = 32; // tamaño de iconos de menu lateral
  windowHeight: number;
  windowWidth: number;

  constructor() {
  }


  ngOnInit(): void {
    // Control de tamaño, responsive
    this.responsiveControl();
  }

  responsiveControl() {
    // Width
    this.windowWidth = window.innerWidth;
    this.sidenavMode = this.windowWidth < 720 ? 'over' : 'side';


    // Heightz
    this.windowHeight = window.innerHeight - this.toolbarHeight;
  }

}
