import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';
import { TableService } from 'src/app/services/entities/table.service';
import { OrderService } from 'src/app/services/entities/order.service';
import { Table } from 'src/app/models/Table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pub-modal-account',
  templateUrl: './pub-modal-account.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_modal_account.css']
})
export class PubModalAccountComponent implements OnInit, OnDestroy {

  @Input() table: Table;
  @Input() service: any;
  @Input() orders: any;

  payOrderSubscription: Subscription;

  accountForm: FormGroup;
  buttonAccept: boolean;

  sumPrice: number;
  // displayedColumns = ['name', 'price', 'options'];

  displayedColumns: string[] = ['nro', 'name', 'price', 'options'];

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

  ngOnDestroy(): void {
    // this.payOrderSubscription.unsubscribe();
  }

  cancelOrder(id: number) {
    console.log(id);
  }

  payOrder(id: number) {
    this.payOrderSubscription = this.orderService.payOrder(id).subscribe(
      res => {
        console.log(res);
        // Actualizamos el this.order
        // se debe actualizar this.ngOnInit
      }
    );
  }

  payProduct(idOrder: number, idproduct: number) {
  }

  cancelProduct(idOrder: number, idproduct: number) {
    console.log(idOrder);
    console.log(idproduct);
  }

  onCancel(evt: Event) {

  }

  onSubmit(evt: Event) {

  }

}
