import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesRoutingModule } from './acces-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccesRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AccesModule { }
