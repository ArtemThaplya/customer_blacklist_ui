import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {AddEmployeeComponent} from './components/add/add-employee.component';
import {EditComponent} from './components/edit/edit.component';
import {DeleteComponent} from './components/delete/delete.component';
import {OktaAuthGuard} from '@okta/okta-angular';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent, canActivate: [OktaAuthGuard]},
  {path: 'edit', component: EditComponent, canActivate: [OktaAuthGuard]},
  {path: 'add', component: AddEmployeeComponent, canActivate: [OktaAuthGuard]},
  {path: 'delete/:id', component: DeleteComponent, canActivate: [OktaAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
