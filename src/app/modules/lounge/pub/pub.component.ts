import { Component, OnInit } from '@angular/core';
import { WelcomeService } from 'src/app/services/welcome.service';
import { Table } from 'src/app/models/Table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PubModalOrderComponent } from '../pub-modal-order/pub-modal-order.component';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.scss']
})
export class PubComponent implements OnInit {

  pubTables: Table[];
  products: any = {};
  categories: any = {};

  constructor(
    private readonly welcomeService: WelcomeService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit() {
    // Consumo de servico de tablas
    this.welcomeService.pub().subscribe(pub => this.pubTables = pub);
    // consumo de servicio de los productos
    this.welcomeService.products().subscribe(prods => {
      this.categories = prods.categories;
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

  openOrder(table: Table) {
    // Open Orden
    const modalRef = this.modalService.open(PubModalOrderComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static',
      size: 'xl'
      // centered: true,
    });
    modalRef.componentInstance.table = table;
    modalRef.componentInstance.products = this.products;
    modalRef.componentInstance.categories = this.categories;
  }

}
