import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClosureService } from 'src/app/services/components/closure/closure.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-closure-modal',
  templateUrl: './closure-modal.component.html',
  styleUrls: ['../../../assets/css/components_closure_modal.css'],
})
export class ClosureModalComponent implements OnInit {

  closureForm: FormGroup;
  buttonAccept: boolean;

  constructor(
    private readonly fb: FormBuilder,
    public readonly appService: AppService,
    public readonly closureService: ClosureService,
    public readonly modal: NgbActiveModal,
  ) {
    this.closureForm = this.fb.group({});
    this.buttonAccept = false;
  }

  ngOnInit(): void {
    this.formConstructor();
  }

  formConstructor() {
    this.closureForm.addControl('name', new FormControl('', {validators: []}));
    this.closureForm.addControl('description', new FormControl('', {validators: []}));
  }

  onSubmit(evt: Event) {}

}
