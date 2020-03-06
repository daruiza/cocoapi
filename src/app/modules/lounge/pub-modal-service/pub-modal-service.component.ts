import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Table } from 'src/app/models/Table';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { TableService } from 'src/app/services/entities/table.service';

@Component({
  selector: 'app-pub-modal-service',
  templateUrl: './pub-modal-service.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_modal_service.css']
})
export class PubModalServiceComponent implements OnInit {

  @Input() table: Table;

  serviceForm: FormGroup;
  buttonAccept: boolean;

  constructor(
    private readonly fb: FormBuilder,
    public readonly modal: NgbActiveModal,
    public readonly appService: AppService,
    public readonly tableService: TableService) {
    this.serviceForm = this.fb.group({});
    this.buttonAccept = false;
  }

  ngOnInit() {
    this.formConstructor();
  }

  formConstructor() {
    this.serviceForm.addControl('name', new FormControl('', {validators: []}));
    this.serviceForm.addControl('description', new FormControl('', {validators: []}));
  }


  onSubmit(evt: any) {
    // 0. Bloqueamos el botón
    this.buttonAccept = true;

    this.tableService.tableServiceSave(
      this.table.id,
      this.serviceForm.get('name').value,
      this.serviceForm.get('description').value).subscribe(res => {
        console.log(res);
        this.modal.close(res);
      });

  }

}
