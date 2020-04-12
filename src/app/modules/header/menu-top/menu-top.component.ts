import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppService } from 'src/app/services/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClosureModalComponent } from 'src/app/components/closure-modal/closure-modal.component';
import { ClosureService } from 'src/app/services/components/closure/closure.service';
import { forkJoin } from 'rxjs';
import { IClosure } from 'src/app/models/Closure';
import { ModalAlertService } from 'src/app/services/components/modal-alert/modal-alert.service';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['../../../../assets/css/header_menu_top.css']
})
export class MenuTopComponent implements OnInit {

  closure: IClosure;
  closures: IClosure[];

  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
    public readonly closureService: ClosureService,
    private readonly modalService: NgbModal,
    private readonly messagesAlertService: ModalAlertService) {
  }

  getAuthService() {
    return this.authService;
  }
  ngOnInit() {
    this.services();
  }

  services() {
    const observables = [this.closureService.closureOpen(), this.closureService.closures()];
    forkJoin(observables).subscribe(([closure, closures]) => {
      this.closure = closure;
      this.closures = closures;
    });
  }

  themeTogle(evt: any): void {
    this.appService.setTheme(evt.target.id);
  }

  closureReadyOk() {
    if (this.closure) {
      const messge = new Message({
        type: 'success',
        title: `Listo el pollo`,
        text: `El administrador de cierres ya esta listo`,
        confirmButton: 'Aceptar',
      });
      this.messagesAlertService.openAlert(messge).result.then(
        result => this.closureOpen(new Event('')));
    }
  }

  closureOpen(evt: Event): void {
    if (this.closure) {
      const modalRef = this.modalService.open(ClosureModalComponent, {
        windowClass: 'modal-holder',
        backdrop: 'static'
      });
      modalRef.componentInstance.closure = this.closure;
      modalRef.componentInstance.closures = this.closures;
    } else {
      const messge = new Message({
        type: 'warning',
        title: `Ouch!!!`,
        text: `El administrador de cierres aún no esta listo, intentalo de nuevo en unos segundos`,
        confirmButton: 'Aceptar',
      });
      this.messagesAlertService.openAlert(messge).result.then(result => {
        this.closureReadyOk();
      });
    }

  }

}
