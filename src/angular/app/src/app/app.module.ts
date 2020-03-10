import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestComponent } from './components/rest/rest.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ArtemComponent} from "./components/artem/artem.component";
import { LehaComponent } from './components/leha/leha.component';
import { ListComponent } from './components/list/list.component';
import { AddEmployeeComponent } from './components/add/add-employee.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    ArtemComponent,
    LehaComponent,
    ListComponent,
    AddEmployeeComponent,
    EditComponent,
    LoginComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
