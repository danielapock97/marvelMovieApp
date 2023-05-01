import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewStartComponent} from "./view-start/view-start.component";
import {ViewMainComponent} from "./view-main/view-main.component";
import {ViewAdminComponent} from "./view-admin/view-admin.component";
import {ViewDetailComponent} from "./view-detail/view-detail.component";
import {ReviewFormComponent} from "./review-form/review-form.component";
import {EditReviewFormComponent} from "./edit-review-form/edit-review-form.component";

const routes: Routes = [
  {path: 'start', component: ViewStartComponent},
  {path: 'main', component: ViewMainComponent},
  {path: 'admin', component: ViewAdminComponent},
  {path: 'reviews/:movieID', component: ReviewFormComponent},
  {path: 'details/:id', component: ViewDetailComponent},
  {path: 'edit/:id', component: EditReviewFormComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
