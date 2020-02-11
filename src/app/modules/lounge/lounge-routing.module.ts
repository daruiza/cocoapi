import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PubComponent } from './pub/pub.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: PubComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoungeRoutingModule { }
