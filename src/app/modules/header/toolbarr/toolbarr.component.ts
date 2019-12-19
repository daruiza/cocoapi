import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbarr',
  templateUrl: './toolbarr.component.html',
  styleUrls: ['../../../../assets/css/header_toolbarr.css']
})
export class ToolbarrComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
