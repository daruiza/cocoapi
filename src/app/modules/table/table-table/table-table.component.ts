import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableCreateComponent } from '../table-create/table-create.component';
import { ITable } from 'src/app/shared/models/ITable.';

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
export class TableTableComponent implements OnInit {

  table: ITable<any>;


  constructor(
    private readonly modalService: NgbModal
  ) {

    this.table = {};
  }

  ngOnInit(): void {
    this.table = {
      displayedColumns: ['position', 'name', 'weight', 'symbol'],
      ELEMENT_DATA: [
        {
          position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',

        },
        {
          position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',

        },
        {
          position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',

        },
        {
          position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',

        },
        {
          position: 5, name: 'Boron', weight: 10.811, symbol: 'B',

        },
        {
          position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',

        },
        {
          position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',

        },
        {
          position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',

        },
        {
          position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',

        },
        {
          position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',

        },
        {
          position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H',

        },
        {
          position: 21, name: 'Helium', weight: 4.0026, symbol: 'He',

        },
        {
          position: 31, name: 'Lithium', weight: 6.941, symbol: 'Li',

        },
        {
          position: 41, name: 'Beryllium', weight: 9.0122, symbol: 'Be',

        },
        {
          position: 51, name: 'Boron', weight: 10.811, symbol: 'B',

        },
        {
          position: 61, name: 'Carbon', weight: 12.0107, symbol: 'C',

        },
        {
          position: 71, name: 'Nitrogen', weight: 14.0067, symbol: 'N',

        },
        {
          position: 81, name: 'Oxygen', weight: 15.9994, symbol: 'O',

        },
        {
          position: 91, name: 'Fluorine', weight: 18.9984, symbol: 'F',

        },
      ]
    };

  }

  createTable(evt: Event) {
    const modalRef = this.modalService.open(TableCreateComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static'
    });
  }

}
