import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/entities/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['../../../../assets/css/home_sidenav.css']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  user: User;

  constructor(
    public readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router
    ) {
    this.user = new User();
  }

  ngOnInit() {
    // consumo de servicios
    // 1. vamos por las opciones
    // 0. Pero primero habra que ir por el usuario
    // obtención de usuario en caso de estar logueado
    this.authService.userGet().subscribe(usr => {
      if (usr) {
        this.user = usr;
        if (this.user) {
          const result = Object.keys(this.user.permits).map((key) => {
            const rObj = {};
            rObj[key] = this.user.permits[key];
            return this.user.permits[key];
          });
          this.user.permits = result;
        }
      }
    });

    this.userService.observableUser
    .subscribe((item: any ) => {
      if (item) {
        this.user = item;
        if (this.user) {
          const result = Object.keys(this.user.permits).map((key) => {
            const rObj = {};
            rObj[key] = this.user.permits[key];
            return this.user.permits[key];
          });
          this.user.permits = result;
        }
      }
    });

    // Falta un if para cuando user.permits este vacio
  }

  ngAfterViewInit(): void {
  }

  toModule(evt: any) {
    const moduleOne = this.user.permits.find((el: any) => el.id === +evt.target.id);
    console.log();
    this.router.navigate([`/${moduleOne.label.action}`]);
  }

}
