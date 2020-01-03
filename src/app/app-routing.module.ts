import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/acces/login/login.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [ AuthenticationGuard ],
    // loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'acces',
    // component: LoginComponent,
    // canActivate: [ AuthenticationGuard ],
    loadChildren: () => import('./modules/acces/acces.module').then(mod => mod.AccesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
