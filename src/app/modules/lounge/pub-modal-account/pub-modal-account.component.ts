import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';
import { TableService } from 'src/app/services/entities/table.service';
import { OrderService } from 'src/app/services/entities/order.service';
import { Table } from 'src/app/models/Table';

export interface IOrderList {name: string; price: number; options: string; }
@Component({
  selector: 'app-pub-modal-account',
  templateUrl: './pub-modal-account.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_modal_account.css']
})
export class PubModalAccountComponent implements OnInit {

  @Input() table: Table;
  @Input() service: any;
  @Input() orders: any;

  accountForm: FormGroup;
  buttonAccept: boolean;

  sumPrice: number;
  displayedColumns: string[];

  constructor(
    private readonly fb: FormBuilder,
    public readonly modal: NgbActiveModal,
    public readonly appService: AppService,
    public readonly tableService: TableService,
    public readonly orderService: OrderService
  ) {
    this.accountForm = this.fb.group({});
    this.buttonAccept = false;

    this.sumPrice = 0;
    this.displayedColumns = ['name', 'price', 'options'];

   }

  ngOnInit(): void {
    this.orders.forEach((el: any) => {
      let sumOrder = 0;

      el.orders.forEach((ord: any) => {
        if (ord.status_paid === 0) {
          this.sumPrice = this.sumPrice + ord.price;
          sumOrder = sumOrder + ord.price;
        }
      });
      el.sumOrder = sumOrder;

      el.orders = el.orders.map((ord: IOrderList) => {
        return {name: ord.name, price: ord.price, options: ''};

      });
    });
    console.log(this.orders);
  }

  onSubmit(evt: Event) {

  }

}
