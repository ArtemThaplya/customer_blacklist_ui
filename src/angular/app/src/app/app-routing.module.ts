import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {AddEmployeeComponent} from './components/add/add-employee.component';
import {EditComponent} from './components/edit/edit.component';
import {DeleteComponent} from './components/delete/delete.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: '', component: ListComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'delete/:id', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
