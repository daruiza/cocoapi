import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../acces/login/login.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  login: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.login = false;
  }

  ngOnInit() {

    // miramos si convocaron el loguin
    this.getLogin();
  }

  isLogin() {
    return this.router.url === '/login' ? true : false;
  }

  isAuth() {
    return true;
  }

  getLogin() {
    if (this.isLogin() && this.isAuth()) {
      this.login = true;
    }
  }

}
