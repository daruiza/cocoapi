import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClosureService } from 'src/app/services/components/closure/closure.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Service } from 'src/app/models/Service';
import { forkJoin } from 'rxjs';
import { IClosure } from 'src/app/models/Closure';
import { RequiredDirective } from 'src/app/directives/validators/required.directive';

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
      res => console.log(res)
    );
  }

  onSubmit(evt: Event) {
    this.validControl(this.closureForm);
    if (this.closureForm.valid) {
      console.log('Valid');
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
