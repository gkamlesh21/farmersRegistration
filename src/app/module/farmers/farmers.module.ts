import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingModule } from './farmers-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    FarmersRoutingModule
  ]
})
export class FarmersModule { }
