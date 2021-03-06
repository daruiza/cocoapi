import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableRoutingModule } from './table-routing.module';
import { TableTableComponent } from './table-table/table-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableCreateComponent } from './table-create/table-create.component';


@NgModule({
  declarations: [TableTableComponent, TableCreateComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    TableCreateComponent
  ]
})
export class TableModule { }
