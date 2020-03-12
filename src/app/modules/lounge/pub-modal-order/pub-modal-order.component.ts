import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/models/Table';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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

  sumPrice: number;
  orderproducts: any[];
  waiters: any[];
  resumeproducts: {product: any, count: number}[];

  orderForm: FormGroup;
  buttonAccept: boolean;

  constructor(
    private readonly fb: FormBuilder,
    public readonly modal: NgbActiveModal,
    public readonly appService: AppService,
    public readonly tableService: TableService) {
      this.orderForm = this.fb.group({});
      this.buttonAccept = false;
      this.sumPrice = 0;
      this.orderproducts = [];
      this.waiters = [];
      this.resumeproducts = [];
    }

  ngOnInit() {
    this.services();
    this.formConstructor();
  }

  services() {
    // Los meseros de la tienda
  }

  formConstructor() {
    this.orderForm.addControl('user', new FormControl('', {
      validators: [Validators.required]
    }));
  }

  addProduct(evt: Event) {
    this.orderproducts.push(evt);
    // Organiza los productos
    this.resume();
  }

  removeProduct(evt: Event) {
    const index = this.orderproducts.indexOf(evt);
    this.orderproducts.splice(index, 1);
    this.resume();
  }

  resume() {
    this.sumPrice = 0;
    this.resumeproducts = [];
    this.orderproducts.forEach(prod => {
      this.sumPrice = this.sumPrice + prod.price;
      if (this.resumeproducts.find(resprod => resprod.product === prod)) {
        this.resumeproducts.find(resprod => resprod.product === prod).count += 1;
      } else {
        this.resumeproducts.push({product: prod, count: 1});
      }
    });
  }
  onSubmit(evt: any) {}
}
