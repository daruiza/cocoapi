import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableCreateComponent } from '../table-create/table-create.component';

@Component({
  selector: 'app-table-table',
  templateUrl: './table-table.component.html',
  styleUrls: ['../../../../assets/css/table_table.css']
})
export class TableTableComponent implements OnInit {

  constructor(
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  createTable(evt: Event){
    const modalRef = this.modalService.open(TableCreateComponent, {
      windowClass: 'modal-holder',
      backdrop: 'static'
    });
  }

}
