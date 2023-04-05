import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginBarComponent } from './login-bar/login-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import { LoginFormComponent } from './login-form/login-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faStar, faTimes} from '@fortawesome/free-solid-svg-icons';
import { MainViewListComponent } from './main-view-list/main-view-list.component';
import { ViewMainComponent } from './view-main/view-main.component';
import { ViewStartComponent } from './view-start/view-start.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBarComponent,
    LoginFormComponent,
    MainViewListComponent,
    ViewMainComponent,
    ViewStartComponent,
    ViewAdminComponent,
    ViewDetailComponent
  ],
  imports: [
    FontAwesomeModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimes);
    library.addIcons(faStar);
  }
}
