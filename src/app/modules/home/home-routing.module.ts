import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { HomeGuard } from 'src/app/services/auth/home.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [ HomeGuard ],
    component: HomeComponent,
  },
  {
    path: 'welcome',
    canActivate: [ AuthGuard ],
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
