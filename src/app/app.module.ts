import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarrComponent } from './modules/header/toolbarr/toolbarr.component';
import { AuthComponent } from './modules/header/auth/auth.component';
import { SidenavComponent } from './modules/home/sidenav/sidenav.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarrComponent,
    AuthComponent,
    SidenavComponent,
    HomeComponent,
    ModalAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,

  ],
  exports: [ModalAlertComponent],
  entryComponents: [ModalAlertComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
