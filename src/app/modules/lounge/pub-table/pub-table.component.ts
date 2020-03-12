import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Table } from 'src/app/models/Table';
import { TableService } from 'src/app/services/entities/table.service';
import { Service } from 'src/app/models/Service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PubModalServiceComponent } from '../pub-modal-service/pub-modal-service.component';

@Component({
  selector: 'app-pub-table',
  templateUrl: './pub-table.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_table.css']
})
export class PubTableComponent implements OnInit {

  @Input() table: Table;
  @Output() order = new EventEmitter<any>();
  service: Service;

  constructor(
    private readonly modalService: NgbModal,
    public readonly tableService: TableService
  ) { }

  ngOnInit() {
    // Consultamos si la tabla tiene servicio
    this.tableService.tableServiceOpen(this.table.id).subscribe(
      (serv) => this.service = serv);
  }

  public selectTable(evt: Event) {
    this.tableService.setTable(this.table);
  }

  public openService(evt: Event) {
    // Open Service
    const modalRef = this.modalService.open(PubModalServiceComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static'
      // centered: true,
    });
    modalRef.componentInstance.table = this.table;
    modalRef.result.then(
      result => {
        if (typeof (result) === 'object') {
          // abemus calback service
          this.service = result;
        }
      },
      reason => console.log(reason)
    );
  }

  public openOrder(evt: Event) {
    // Siempre seleccionado ante una orden
    this.order.emit({table: this.table, service: this.service});
  }

  public showService(evt: Event) {
    alert('showService');
  }

  public closeService(evt: Event) {
    alert('closeService');
    // 1 consumo de servicio que trae ordenes con cuentas por pagar
  }

  public addMusicTrack(evt: Event) {
    alert('addMusicTrack');
  }

}
