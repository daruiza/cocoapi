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
  products: any;

  constructor(
    private readonly welcomeService: WelcomeService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit() {
    // Consumo de servico de tablas
    this.welcomeService.pub().subscribe(pub => this.pubTables = pub);
    //consumo de servicio de los productos 
    this.welcomeService.products().subscribe(prods => this.products = prods);

  }

  openOrder(table: Table){
    // Open Orden
    const modalRef = this.modalService.open(PubModalOrderComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static',
      size: 'xl'
      // centered: true,
    });
    modalRef.componentInstance.table = table;
  }

}
