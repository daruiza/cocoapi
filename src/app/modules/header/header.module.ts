import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MenuTopComponent } from './menu-top/menu-top.component';


@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
  ],
  exports: [

  ]
})
export class HeaderModule { }
