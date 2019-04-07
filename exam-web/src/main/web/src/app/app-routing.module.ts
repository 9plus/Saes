import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AccountRoutingModule } from './account/account-routing.module'
import { AdminRoutingModule } from './admin/admin-routing.module'

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: "**",
    redirectTo: 'admin'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account/login',
    loadChildren: './account/account-routing.module#AccountRoutingModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin-routing.module#AdminRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AccountRoutingModule, AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
