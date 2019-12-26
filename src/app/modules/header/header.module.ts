import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
// import { ToolbarrComponent } from './toolbarr/toolbarr.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [

  ]
})
export class HeaderModule { }
