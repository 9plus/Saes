import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { AdminComponent } from './admin.component';
import { SharedMaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [QuestionComponent, AdminComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedMaterialModule,
  ]
})
export class AdminModule { }
