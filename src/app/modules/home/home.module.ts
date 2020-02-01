import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
    WelcomeComponent
  ]
})
export class HomeModule { }
