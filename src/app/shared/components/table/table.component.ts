import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../../models/ITable.';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../../assets/css/shared_table.css']
})
export class TableComponent implements OnInit {

  @Input() sourceTable: ITable<any>;
  dataSource: any;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sourceTable.ELEMENT_DATA);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createElement(event: Event) {

  }

}
