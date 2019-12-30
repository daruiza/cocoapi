import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './modules/home/home/home.component';


const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    // canActivate: [ AuthenticationGuard ],
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
