import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';
import { Table, ITable } from 'src/app/models/Table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PubModalOrderComponent } from '../pub-modal-order/pub-modal-order.component';
import { ModalAlertService } from 'src/app/services/components/modal-alert/modal-alert.service';
import { Message } from 'src/app/models/Message';
import { forkJoin } from 'rxjs';
import { IOrder } from 'src/app/models/Order';
import { IOrderList } from 'src/app/models/OrderList';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  pubTables: Table[];
  products: any = {};
  categories: any = {};
  waiters: any = {};

  control: { control: number, table: ITable, order: IOrderList };

  constructor(
    private readonly messagesAlertService: ModalAlertService,
    private readonly welcomeService: WelcomeService,
    private readonly modalService: NgbModal
  ) {
    this.control = { control: 0, table: {}, order: {} };
  }

  ngOnInit() {
    this.services();
  }

  private services() {
    const observables = [this.welcomeService.pub(), this.welcomeService.products()];
    forkJoin(observables).subscribe(([pub, prods]) => {
      this.pubTables = pub;
      this.mapProducts(prods);
    });
  }

  private mapProducts(prods: any) {
    this.categories = prods.categories;
    this.waiters = prods.waiters;

    // Asignación de productos
    prods.products.forEach((element: any) => {
      if (element.category in this.products) {
        this.products[element.category].push(element);
      } else {
        this.products = Object.assign(this.products, { [element.category]: [element] });
      }
    });
  }

  openOrder(evt: any) {
    // Open Orden
    const modalRef = this.modalService.open(PubModalOrderComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static',
      size: 'xl'
      // centered: true,
    });
    modalRef.componentInstance.table = evt.table;
    modalRef.componentInstance.service = evt.service;
    modalRef.componentInstance.products = this.products;
    modalRef.componentInstance.categories = this.categories;
    modalRef.componentInstance.waiters = this.waiters;

    modalRef.result.then(result => {
      if ('table' in result) {
        this.messagesAlertService.openAlert(new Message(
          {
            type: 'success',
            title: `Nueva Orden Para: ${result.table.name}`,
            text: `La orden se creo correctamente, usuario:
            ${result.order_form.user}. TOTAL: ${result.total}`
          }
        )).result.then(resultmessage => {
          this.control = {
            control: this.control.control += 1,
            table: this.pubTables.find(e => e.id === result.table.id),
            order: result.order
          };
        });
      }
    }, reason => {
      if ('table' in reason) {
        this.control = {
          control: this.control.control += 1,
          table: {},
          order: {}
        };
      }
    }
    );
  }

}
