import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/entities/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../../../assets/css/home_sidenav.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  user: User;

  constructor( private readonly authService: AuthService) { 
    this.user = new User();
  }

  ngOnInit() {
    // consumo de servicios
    // 1. vamos por las opciones
    // 0. Pero primero habra que ir por el usuario
    // obtención de usuario en caso de estar logueado
    this.authService.userGet().subscribe(usr => {
      this.user = usr;
      console.log(this.user.permits);
      
      const result = Object.keys(this.user.permits).map(function(key) {
        return [(key), this.user.permits[key]];
      });
      console.log(result);
    });
  }

  ngAfterViewInit(): void {
  }

}
