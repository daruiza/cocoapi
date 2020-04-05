import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';
import { TableService } from 'src/app/services/entities/table.service';
import { OrderService } from 'src/app/services/entities/order.service';
import { Table } from 'src/app/models/Table';
import { Subscription } from 'rxjs';
import { ModalAlertService } from 'src/app/services/components/modal-alert/modal-alert.service';
import { Message } from 'src/app/models/Message';
import { IOrder } from 'src/app/models/Order';
import { IOrderList } from 'src/app/models/OrderList';

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
    public readonly orderService: OrderService,
    private readonly messagesAlertService: ModalAlertService,
  ) {
    this.accountForm = this.fb.group({});
    this.buttonAccept = false;

    this.sumPrice = 0;
  }

  ngOnInit(): void {
    console.log(this.orders);
    this.sumPrice = 0;

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

  statusOrder(idOrder: number, idStatus: number) {
    if (idStatus === 1) {
      const messge = new Message({
        type: 'warning',
        title: `Alerta!`,
        text: `¿Segurito que quieres retornar esta orden de servicio?`,
        confirmButton: 'Si estoy seguro',
        cancelButton: 'Mejor no'
      });
      this.messagesAlertService.openAlert(messge).result.then(
        result => this.statusOrderService(idOrder, idStatus),
        reason => { }
      );
    } else {
      this.statusOrderService(idOrder, idStatus);
    }
  }

  statusOrderService(idOrder: number, idStatus: number) {
    this.orderService.statusOrder(idOrder, idStatus).subscribe(
      res => {
        // Actualizamos el this.order
        if (res) {
          const order: IOrderList = this.orders.find((ord: IOrderList) => ord.id === idOrder);
          order.status_id = idStatus;
          // Actualizamos todo los productos
          if (idStatus === 3) {
            order.orders = order.orders.map((ord: IOrder) => {
              ord.status_paid = 1;
              ord.status_id = idStatus;
              return ord;
            });
          } else {
            order.orders = order.orders.map((ord: IOrder) => {
              ord.status_paid = 0;
              ord.status_id = idStatus;
              return ord;
            });
          }
          this.ngOnInit();
        }
      }
    );
  }

  statusProduct(idOrder: number, idOrderProduct: number, statusPaid: number) {
    if (statusPaid) {
      const messge = new Message({
        type: 'warning',
        title: `Alerta!`,
        text: `¿Segurito que quieres retornar este producto a la orden de servicio?`,
        confirmButton: 'Si estoy seguro',
        cancelButton: 'Mejor no'
      });
      this.messagesAlertService.openAlert(messge).result.then(
        result => this.statusProductService(idOrder, idOrderProduct, statusPaid),
        reason => { }
      );
    } else {
      this.statusProductService(idOrder, idOrderProduct, statusPaid);
    }

  }

  statusProductService(idOrder: number, idOrderProduct: number, statusPaid: number) {
    this.orderService.statusPayProduct(idOrder, idOrderProduct, statusPaid).subscribe(res => {
      if (res) {
        // Actualizamos la order_product
        // se debe actualizar this.ngOnInit
        const order: IOrder = this.orders.find((ord: IOrderList) => ord.id === idOrder)
          .orders.find((prodOrd: IOrder) => prodOrd.order_product_id === idOrderProduct);
        order.status_paid = statusPaid === 0 ? 1 : 0;
        this.ngOnInit();

      }
    });
  }

  cancelProduct(idOrder: number, idproduct: number) {
    console.log(idOrder);
    console.log(idproduct);
  }

  onCancel(evt: Event) {
    this.modal.dismiss(evt);
  }

  onSubmit(evt: Event) {

  }

}
