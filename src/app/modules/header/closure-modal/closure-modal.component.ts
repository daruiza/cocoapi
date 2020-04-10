import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-closure-modal',
  templateUrl: './closure-modal.component.html',
  styleUrls: ['./closure-modal.component.scss']
})
export class ClosureModalComponent implements OnInit {

  constructor(
    public readonly modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

}
