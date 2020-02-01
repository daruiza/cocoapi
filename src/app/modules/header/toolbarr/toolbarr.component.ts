import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-toolbarr',
  templateUrl: './toolbarr.component.html',
  styleUrls: ['../../../../assets/css/header_toolbarr.css'],
  animations: [
    trigger('animationSideToggle', [
      state('open', style({
        boxShadow: '69px 2px 6px 0px #575756',
      })),
      state('closed', style({
        boxShadow: '69px 2px 6px 0px transparent',
      })),
      transition('open <=> closed', animate('0.45s')),
    ]),
  ]
})
export class ToolbarrComponent implements OnInit, OnChanges {

  @Input() title: string;
  @Input() sidenav: any;
  classSidenavToggle = false;

  constructor(
    private readonly authservice: AuthService
  ) { }

  ngOnChanges(): void {
  }

  ngOnInit() {
  }

  sidenavToggle() {
    if (this.sidenav) {
      this.sidenav.toggle();
      this.classSidenavToggle = !this.classSidenavToggle;
    }
  }

}
