import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['../../../../assets/css/header_menu_top.css']
})
export class MenuTopComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService) { }

  getAuthService() {
    return this.authService;
  }
  ngOnInit() {
  }

  themeTogle(evt: any): void {
    this.appService.setTheme(evt.target.id);
  }

}
