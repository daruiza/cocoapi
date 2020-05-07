import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { TableTableComponent } from './table-table/table-table.component';
import { TableCreateComponent } from './table-create/table-create.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    component: TableTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
