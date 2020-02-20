import { Component, OnInit, Input } from '@angular/core';
import { Table, ITable } from 'src/app/models/Table';

@Component({
  selector: 'app-pub-table',
  templateUrl: './pub-table.component.html',
  styleUrls: ['../../../../assets/css/lounge_pub_table.css']
})
export class PubTableComponent implements OnInit {

  @Input() table: Table;

  constructor() { }

  ngOnInit() {
    // Consultamos si la tabla tiene servicio

  }

}
