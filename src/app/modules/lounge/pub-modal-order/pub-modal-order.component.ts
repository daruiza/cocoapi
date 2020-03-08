import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/models/Table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';
import { TableService } from 'src/app/services/entities/table.service';

@Component({
  selector: 'app-pub-modal-order',
  templateUrl: './pub-modal-order.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_modal_order.css']
})
export class PubModalOrderComponent implements OnInit {

  @Input() table: Table;
  @Input() products: any[];
  @Input() categories: any;

  orderForm: FormGroup;
  buttonAccept: boolean;

  constructor(
    private readonly fb: FormBuilder,
    public readonly modal: NgbActiveModal,
    public readonly appService: AppService,
    public readonly tableService: TableService) {
      this.orderForm = this.fb.group({});
      this.buttonAccept = false;
    }

  ngOnInit() {
  }

  onSubmit(evt: any) {}

}
