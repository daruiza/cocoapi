import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppService } from 'src/app/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClosureModalComponent } from 'src/app/components/closure-modal/closure-modal.component';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['../../../../assets/css/header_menu_top.css']
})
export class MenuTopComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
    private readonly modalService: NgbModal) { }

  getAuthService() {
    return this.authService;
  }
  ngOnInit() {
  }

  themeTogle(evt: any): void {
    this.appService.setTheme(evt.target.id);
  }

  closureOpen(evt: Event): void {
    this.modalService.open(ClosureModalComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static'
    });
  }

}
