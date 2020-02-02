import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../../../assets/css/home_sidenav.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  

  constructor( private readonly authService: AuthService) { }

  ngOnInit() {
    // consumo de servicios
    // 1. vamos por las opciones
    // 0. Pero primero habra que ir por el usuario
    // obtención de usuario en caso de estar logueado
    this.authService.userGet().subscribe(usr => console.log(usr));
  }

  ngAfterViewInit(): void {
  }

}
