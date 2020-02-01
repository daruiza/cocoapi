import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from './services/auth-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarrComponent } from './modules/header/toolbarr/toolbarr.component';
import { SidenavComponent } from './modules/home/sidenav/sidenav.component';
import { HomeComponent } from './modules/home/home/home.component';
import { MenuTopComponent } from './modules/header/menu-top/menu-top.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    ToolbarrComponent,
    MenuTopComponent,
    SidenavComponent,
    HomeComponent,
    ModalAlertComponent,
    WelcomeComponent
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
    MatMenuModule,
    MatButtonModule

  ],
  exports: [ModalAlertComponent],
  entryComponents: [ModalAlertComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
