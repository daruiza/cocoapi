import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from './services/interceptors/auth-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarrComponent } from './modules/header/toolbarr/toolbarr.component';
import { SidenavComponent } from './modules/home/sidenav/sidenav.component';
import { MenuTopComponent } from './modules/header/menu-top/menu-top.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { PubModalServiceComponent } from './modules/lounge/pub-modal-service/pub-modal-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarrComponent,
    MenuTopComponent,
    SidenavComponent,
    ModalAlertComponent,
    PubModalServiceComponent,
    SpinnerComponent,
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
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [ModalAlertComponent, PubModalServiceComponent],
  entryComponents: [ModalAlertComponent, PubModalServiceComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
