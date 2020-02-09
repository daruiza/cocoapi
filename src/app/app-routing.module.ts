import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';
import { AuthGuard } from './services/auth/auth.guard';
import { HomeGuard } from './services/auth/home.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'acces',
    loadChildren: () => import('./modules/acces/acces.module').then(mod => mod.AccesModule)
  },
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
