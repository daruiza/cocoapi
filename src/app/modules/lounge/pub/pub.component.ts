import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';
import { Table, ITable } from 'src/app/models/Table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PubModalOrderComponent } from '../pub-modal-order/pub-modal-order.component';
import { ModalAlertService } from 'src/app/services/components/modal-alert/modal-alert.service';
import { Message } from 'src/app/models/Message';

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

  control: {control: number, table: ITable};

  constructor(
    private readonly messagesAlertService: ModalAlertService,
    private readonly welcomeService: WelcomeService,
    private readonly modalService: NgbModal
  ) {
    this.control = {control: 0, table: {}};
  }

  ngOnInit() {
    // Consumo de servico de tablas
    this.welcomeService.pub().subscribe(pub => this.pubTables = pub);
    // consumo de servicio de los productos
    this.welcomeService.products().subscribe(prods => {
      this.categories = prods.categories;
      this.waiters = prods.waiters;

      // Asignación de productos
      prods.products.forEach(element => {
        if (element.category in this.products) {
          this.products[element.category].push(element);
        } else {
          this.products = Object.assign(this.products, { [element.category]: [element] });
        }
      });
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

    modalRef.result.then( result =>
      {
        if ('table' in result) {
          this.control = {
            control: this.control.control += 1 ,
            table: this.pubTables.find(e => e.id === result.table.id)
          };

          this.messagesAlertService.openAlert(new Message(
            {
              type: 'success',
              title: `Nueva Orden Para: ${result.table.name}`,
              text: `La orden se creo correctamente, usuario: ${result.resp.order_form.user}. 
              Serial: ${result.resp.order.serial}. TOTAL: ${result.resp.total}`
            }
          ));
        }
      }
    );
  }

}
