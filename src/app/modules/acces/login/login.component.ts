import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  AfterViewInit
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('modalLogin', {static: false}) theModal: ElementRef;
  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalService: NgbModal,
    private readonly router: Router
  ) {}

  ngOnChanges(changes: any): void {
  }

  ngOnInit() {

    this.loginForm.addControl('email', new FormControl('', {
      validators: [Validators.required]
    }));
    this.loginForm.addControl('password', new FormControl('', {
      validators: [Validators.required]
    }));
    this.loginForm.addControl('remenber_me', new FormControl('', {
      validators: [Validators.required]
    }));

  }

  ngAfterViewInit() {
    if (this.theModal) {
      this.showModal();
    }
  }

  showModal() {
    this.modalService.open(this.theModal,
      {
        ariaLabelledBy: 'modal-basic-title',
        size: 'sm',
        backdrop: 'static'
      }).result.then((result) => {
        console.log('save');
        // Consumo de servicio en caso de estar el form OK
        this.router.navigate(['/']);
      }, (reason) => {
        console.log('close');
        this.router.navigate(['/']);
      });
  }
}
