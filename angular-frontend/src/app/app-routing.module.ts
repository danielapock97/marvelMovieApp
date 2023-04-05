import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewStartComponent} from "./view-start/view-start.component";
import {ViewMainComponent} from "./view-main/view-main.component";
import {ViewAdminComponent} from "./view-admin/view-admin.component";

const routes: Routes = [
  {path: 'start', component: ViewStartComponent},
  {path: 'main', component: ViewMainComponent},
  {path: 'admin', component: ViewAdminComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
