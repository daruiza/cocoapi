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

import { SharedModule } from './shared/shared.module';

import { SpinnerComponent } from './components/spinner/spinner.component';


import { ActionReducer } from '@ngrx/store';
import LogRocket from 'logrocket';

const reduxMiddleware = LogRocket.reduxMiddleware();
export function logrocketMiddleware(reducer: any): ActionReducer<any, any> {
  let currentState;
  const fakeDispatch = reduxMiddleware({
    getState: () => currentState,
  })(() => {});

  return (state, action): any => {
    const newState = reducer(state, action);
    currentState = state;
    fakeDispatch(action);
    return newState;
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarrComponent,
    MenuTopComponent,
    SidenavComponent,
    ModalAlertComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers: [ logrocketMiddleware ],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    ModalAlertComponent,
  ],
  entryComponents: [
    ModalAlertComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
