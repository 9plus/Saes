import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { CategoryComponent } from './category/category.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'question',
        component: QuestionComponent
      },
      {
        path: '**',
        redirectTo: 'categories'
      },
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      },
      {
        path: 'categories',
        component: CategoryComponent
      }
    ]
  },
]
@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
