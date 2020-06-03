import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ITable } from '../../models/ITable.';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['../../../../assets/css/shared_table.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() sourceTable: ITable<any>;
  @Output() searchTable = new EventEmitter<ITable<any>>();
  @Output() optionsTable = new EventEmitter<any>();
  searchFlag: boolean;

  dataSource: any;
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(

  ) {
    this.searchFlag = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.sourceTable.ELEMENT_DATA);
    // this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilterClick(event: Event) {
    if (!this.searchFlag) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.sourceTable.key = filterValue;
      this.searchTable.emit(this.sourceTable);
    }
  }

  applyFilter(event: Event) {
    if (this.searchFlag) {
      // Para Lenght multiplos de 3
      const filterValue = (event.target as HTMLInputElement).value;
      if (filterValue.length % 3 === 0) {
        this.sourceTable.key = filterValue;
        this.searchTable.emit(this.sourceTable);
      }
      // this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  paginatorEvent(event: {
    length: number,
    pageIndex: number
    pageSize: number,
    previousPageIndex: number
  }) {
    this.sourceTable.page = event.pageIndex;
    this.sourceTable.limit = event.pageSize;
    this.searchTable.emit(this.sourceTable);
  }

  // Buscador
  toggleChangeSearch(event: any) {
    this.searchFlag = event.checked;
  }

  createElement(event: Event) {
    this.optionsTable.emit({ action: 'create'});
  }

  editElement(event: Event) {
    if (this.selection.selected.length && this.selection.selected.length === 1) {
      this.optionsTable.emit({
        action: 'edit',
        rows: this.selection.selected
      });
    }
  }

  deleteElement(event: Event) {
    if (this.selection.selected.length) {
      this.optionsTable.emit({
        action: 'delete',
        rows: this.selection.selected
      });
    }
  }


}
