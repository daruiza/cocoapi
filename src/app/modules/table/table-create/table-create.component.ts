import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['../../../../assets/css/table_create.css']

})
export class TableCreateComponent implements OnInit {

  constructor(
    public readonly appService: AppService,
    public readonly modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
