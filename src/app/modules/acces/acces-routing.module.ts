import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    canActivate: [ AuthGuard ],
    component: LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesRoutingModule { }
