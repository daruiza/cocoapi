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
    this.sumPrice = 0;
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

  // Pagar y retornar una Orden
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
        const orderProduct: IOrder = this.orders.find((ord: IOrderList) => ord.id === idOrder)
          .orders.find((prodOrd: IOrder) => prodOrd.order_product_id === idOrderProduct);
        orderProduct.status_paid = statusPaid === 0 ? 1 : 0;

        // Actualizar la orden en caso de haber pagado todos los productos
        const orderProductStatusPad: IOrder[] = this.orders.find((ord: IOrderList) => ord.id === idOrder)
          .orders.filter((prodOrd: IOrder) => prodOrd.status_paid === 0);
        // const order: IOrderList = this.orders.find((ord: IOrderList) => ord.id === idOrder);
        // order.status_id = idStatus;
        if (!orderProductStatusPad.length) {
          const order: IOrder = this.orders.find((ord: IOrderList) => ord.id === idOrder);
          order.status_id = 3;
        }


        this.ngOnInit();
      }
    });
  }

  cancelOrder(idOrder: number) {
    this.orderService.cancelOrder(idOrder).subscribe(
      res => {
        if (res) {
          const order: IOrderList = this.orders.find((ord: IOrderList) => ord.id === idOrder);
          this.orders = this.orders.filter((item: IOrderList) => item.orders !== order.orders);
          console.log(this.orders);
          this.ngOnInit();
        }
      });
  }

  cancelProduct(idOrder: number, idOrderProduct: number) {
    this.orderService.cancelProduct(idOrder, idOrderProduct).subscribe(
      res => {
        if (res) {
          const order: IOrderList = this.orders.find((ord: IOrderList) => ord.id === idOrder);
          order.orders = order.orders.filter(item => item.order_product_id !== idOrderProduct);
          // Borramos la orden en caso de quedar sin productos
          if (!order.orders.length) {
            this.orders = this.orders.filter((item: IOrderList) => item.orders !== order.orders);
          }
          this.ngOnInit();
        }
      }
    );
  }

  onClose(evt: Event) {
    this.modal.dismiss(this.orders);
  }

  onCancel(evt: Event) {
    // Cancela todas las ordenes existentes
    // del servicio en curso
    const messge = new Message({
      type: 'warning',
      title: `Alerta!`,
      text: `¿Segurito que quieres cancelar todas las ordenes del servicio?`,
      confirmButton: 'Si estoy seguro',
      cancelButton: 'Mejor no'
    });
    this.messagesAlertService.openAlert(messge).result.then(
      result => this.cancelAllOrdersService(this.service.id),
      reason => { }
    );
  }

  cancelAllOrdersService(idService: number) {
    this.orderService.cancelOrders(idService).subscribe(
      res => this.callOninitOnClose);
  }

  onPayOrders(evt: Event) {
    this.orderService.payOrders(this.service.id).subscribe(
      res => this.callOninitOnClose);
  }

  callOninitOnClose(): void {
    this.orders = [];
    this.ngOnInit();
    this.onClose(new Event(''));
  }
}
