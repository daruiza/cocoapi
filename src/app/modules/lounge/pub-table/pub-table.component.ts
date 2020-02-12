import { Component, OnInit, Input } from '@angular/core';
import { Table, ITable } from 'src/app/models/Table';

@Component({
  selector: 'app-pub-table',
  templateUrl: './pub-table.component.html',
  styleUrls: ['./pub-table.component.scss']
})
export class PubTableComponent implements OnInit {

  @Input() table: Table;

  constructor() { }

  ngOnInit() {
  }

}
