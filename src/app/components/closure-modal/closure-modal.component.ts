import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClosureService } from 'src/app/services/components/closure/closure.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Service } from 'src/app/models/Service';
import { forkJoin } from 'rxjs';
import { IClosure } from 'src/app/models/Closure';
import { RequiredDirective } from 'src/app/directives/validators/required.directive';
import { ModalAlertService } from 'src/app/services/components/modal-alert/modal-alert.service';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-closure-modal',
  templateUrl: './closure-modal.component.html',
  styleUrls: ['../../../assets/css/components_closure_modal.css'],
  providers: [RequiredDirective]
})
export class ClosureModalComponent implements OnInit {

  closureForm: FormGroup;
  @Input() closure: IClosure;
  @Input() closures: IClosure[];
  buttonAccept: boolean;
  showAccept: boolean;

  constructor(
    private readonly fb: FormBuilder,
    public readonly appService: AppService,
    public readonly closureService: ClosureService,
    public readonly modal: NgbActiveModal,
    private readonly messagesAlertService: ModalAlertService
  ) {
    this.closureForm = this.fb.group({});
    this.buttonAccept = false;
    this.showAccept = true;
  }

  ngOnInit(): void {
    this.services();
    this.formConstructor();
    // console.log(this.closure);
    // console.log(this.closures);
  }

  services() {
  }

  formConstructor() {
    this.closureForm.addControl('name', new FormControl('', { validators: [] }));
    this.closureForm.addControl('description', new FormControl('', { validators: [] }));
  }

  changeTab(evt: number) {
    this.showAccept = evt === 0 ? true : false;
  }

  closeWork(evt: Event) {
    this.closureService.closureClose().subscribe(
      res => {
        this.closure = {};
        const messge = new Message({
          type: 'success',
          title: `Operación Exitosa`,
          text: `Listo el pollo, la labor fue cerrada exitosamente`,
          confirmButton: 'Aceptar',
        });
        this.messagesAlertService.openAlert(messge);
      }
    );
  }

  onSubmit(evt: Event) {
    this.validControl(this.closureForm);
    if (this.closureForm.valid) {
      this.closureService.closureSave(
        this.closureForm.value.name,
        this.closureForm.value.description
        ).subscribe(res => {
          this.closure = res;
          const messge = new Message({
            type: 'success',
            title: `Operación Exitosa`,
            text: `¡Super, ya tenemos labor para iniciar a trabajar!`,
            confirmButton: 'Aceptar',
          });
          this.messagesAlertService.openAlert(messge);
          // Limpiamos el formulario
          this.closureForm.patchValue({name: null});
          this.closureForm.patchValue({description: null});
        });
    }
  }

  // VALIDACIONES
  validControl(elementForm: FormGroup): void {
    // tslint:disable-next-line: forin
    for (const inner in elementForm.controls) {
      elementForm.get(inner).markAllAsTouched();
      elementForm.get(inner).updateValueAndValidity();
    }
    return;
  }

}
