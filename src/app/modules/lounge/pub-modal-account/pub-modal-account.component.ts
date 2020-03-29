import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';
import { TableService } from 'src/app/services/entities/table.service';
import { OrderService } from 'src/app/services/entities/order.service';
import { Table } from 'src/app/models/Table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
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
  // displayedColumns = ['name', 'price', 'options'];

  displayedColumns: string[] = ['name', 'price', 'options'];
  dataSource = ELEMENT_DATA;

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
   }

  ngOnInit(): void {
    console.log(this.orders);

    this.orders.forEach((el: any) => {
      let sumOrder = 0;

      el.orders.forEach((ord: any) => {
        if (ord.status_paid === 0) {
          this.sumPrice = this.sumPrice + ord.price;
          sumOrder = sumOrder + ord.price;
        }
      });
      el.sumOrder = sumOrder;
    });
  }

  cancelOrder(id: number) {
    console.log(id);
  }

  payOrder(id: number) {
    console.log(id);
  }

  onCancel(evt: Event) {

  }

  onSubmit(evt: Event) {

  }

}
