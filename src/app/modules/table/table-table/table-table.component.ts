import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableCreateComponent } from '../table-create/table-create.component';
import { ITable } from 'src/app/shared/models/ITable.';
import { TableService } from 'src/app/services/entities/table.service';
import { forkJoin } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-table',
  templateUrl: './table-table.component.html',
  styleUrls: ['../../../../assets/css/table_table.css']
})
export class TableTableComponent implements OnInit, OnChanges {

  table: ITable<any>;
  constructor(
    private readonly modalService: NgbModal,
    public readonly tableService: TableService,
  ) {
    this.table = { sort: 'ASC' };
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {
    this.services();
  }

  private services() {
    const observables = [
      this.tableService.index(this.table)
    ];
    forkJoin(observables).subscribe(([pub]) => {
      // console.log(pub);
      this.table = {
        flagSearch: true,
        search: 'Buscar mesa ...',
        displayedColumns: ['select', 'name', 'description', 'icon', 'order', 'active'],
        ELEMENT_DATA: pub.data,
        // Filtros
        page: parseInt(`${pub.current_page}`) - 1,
        limit: pub.per_page,
        total: pub.total,
        sort: 'ASC'
      };

    });
  }

  // Evento emición de la tabla
  searchTable(event: any) {
    this.table = event;
    this.services();
  }

  // Evento emición de las opcines
  optionsTable(event: any) {
    switch (event.action) {
      case 'create':
        const modalRef = this.modalService.open(TableCreateComponent, {
          windowClass: 'modal-holder',
          backdrop: 'static'
        });
        modalRef.result.then(
          result => console.log(result),
          reason => console.log(reason)
        );
        break;
      default:
        break;
    }
  }

  createTable(evt: Event) {
    const modalRef = this.modalService.open(TableCreateComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static'
    });
  }

}
