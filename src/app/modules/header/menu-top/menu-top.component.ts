import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['../../../../assets/css/header_menu_top.css']
})
export class MenuTopComponent implements OnInit {

  constructor(private readonly authService: AuthService) { }

  getAuthService() {
    return this.authService;
  }
  ngOnInit() {
  }

}
