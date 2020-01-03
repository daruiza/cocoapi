import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
// import { ModalAlertComponent } from 'src/app/components/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    // ModalAlertComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  // entryComponents: [ModalAlertComponent],
  exports: [
    HomeComponent,
    WelcomeComponent
  ]
})
export class HomeModule { }
