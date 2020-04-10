import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-closure-modal',
  templateUrl: './closure-modal.component.html',
  styleUrls: ['../../../../assets/css/header_closure_modal.css']
})
export class ClosureModalComponent implements OnInit {

  constructor(
    public readonly appService: AppService,
    public readonly modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(evt: Event) {}

}
