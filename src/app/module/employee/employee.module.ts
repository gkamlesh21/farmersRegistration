import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AddEditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
