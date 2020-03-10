import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {AddEmployeeComponent} from './components/add/add-employee.component';
import {EditComponent} from "./components/edit/edit.component";
import {DeleteComponent} from "./components/delete/delete.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'list/add', component: AddEmployeeComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
