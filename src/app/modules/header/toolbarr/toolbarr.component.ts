import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toolbarr',
  templateUrl: './toolbarr.component.html',
  styleUrls: ['../../../../assets/css/header_toolbarr.css']
})
export class ToolbarrComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() sidenav: any;

  constructor() { }

  ngOnChanges(): void {
  }

  ngOnInit() {
  }

}
