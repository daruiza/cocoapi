import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [ AuthGuard ],
    // loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [ AuthGuard ],
    // loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'acces',
    // component: LoginComponent,
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./modules/acces/acces.module').then(mod => mod.AccesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
