import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { AdminComponent } from './admin.component';
import { SharedMaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [QuestionComponent, AdminComponent, CategoryComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedMaterialModule,
  ]
})
export class AdminModule { }
