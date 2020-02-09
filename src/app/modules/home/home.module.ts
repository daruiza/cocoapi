import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { PubComponent } from './pub/pub.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    PubComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HomeComponent,
    WelcomeComponent,
    PubComponent
  ]
})
export class HomeModule { }
