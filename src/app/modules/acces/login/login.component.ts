import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  AfterViewInit
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../../assets/css/acces_login.css'],
})
export class LoginComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('modalLogin', { static: false }) theModal: ElementRef;
  modalLogin: NgbModalRef;
  loginForm: FormGroup;
  hide: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalService: NgbModal,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({});
    this.hide = true;
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
  }

  ngOnInit() {
    this.formConstructor();
  }

  ngAfterViewInit() {
    if (this.theModal) {
      this.showModal();
    }
  }

  formConstructor() {
    this.loginForm.addControl('email', new FormControl('', {
      validators: [Validators.required]
    }));
    this.loginForm.addControl('password', new FormControl('', {
      validators: [Validators.required]
    }));
    this.loginForm.addControl('remenber_me', new FormControl('true', {
      validators: [Validators.required]
    }));
  }

  showModal() {
    this.modalLogin = this.modalService.open(this.theModal,
      {
        ariaLabelledBy: 'modal-basic-title',
        // size: 'sm',
        backdrop: 'static',
        windowClass: 'modal-login',
        // centered: true,
      });
    this.modalLogin.result.then((result) => {
      // Consumo de servicio en caso de estar el form OK
      this.router.navigate(['/']);
    }, (reason) => {
      this.router.navigate(['/']);
    });
  }

  onSubmit(evt: any) {
    // Consumo de servicio se Login
    // 1. Validamos el formulario
    if (this.loginForm.valid) {
      console.log('save');
      console.log(this.loginForm.get('remenber_me').value);
    }

    this.modalLogin.close();
  }
}
