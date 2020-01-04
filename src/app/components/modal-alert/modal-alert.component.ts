import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})
export class ModalAlertComponent implements OnInit {

  @Input() title: string;

  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

  save() {
    this.modal.close();
  }

}
