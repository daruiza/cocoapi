import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/models/Table';
import { TableService } from 'src/app/services/entities/table.service';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-pub-table',
  templateUrl: './pub-table.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_table.css']
})
export class PubTableComponent implements OnInit {

  @Input() table: Table;
  service: Service;
  constructor(
    private readonly tableService: TableService
  ) { }

  ngOnInit() {
    // Consultamos si la tabla tiene servicio
    this.tableService.tableServiceOpen(this.table.id).subscribe((serv) => {
      this.service = serv[0];
    });
  }

  public selectTable(evt: Event) {
    this.tableService.setTable(this.table);
  }

  public openService() {
    alert('service');
  }

  public openOrder() {
    alert('order');
  }

  public showService(evt: Event) {
    alert('showService');
  }

  public closeService(evt: Event) {
    alert('closeService');
  }

  public addMusicTrack(evt: Event) {
    alert('addMusicTrack');
  }

}
