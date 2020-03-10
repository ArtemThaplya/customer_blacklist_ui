import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../model/Employee';
import {Observable} from "rxjs";
import {User} from "../model/User";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl = 'http://localhost:8080';
  private listSuffix = 'list';
  private addEmployeeSuffix = 'createEmployee';
  private editEmployeeSuffix = 'edit';
  private deleteEmployeeSuffix = 'delete';
  private loginSuffix = 'login';

  constructor(private http: HttpClient) {
  }

  addEmployee(employee: Employee) {
    const url = `${this.baseUrl}/${this.addEmployeeSuffix}`;
    this.http.post(url, employee, httpOptions).subscribe();
  }

  loginAdmin(user: User){
    const url = `${this.baseUrl}/${this.loginSuffix}`;
    this.http.post(url, user, httpOptions).subscribe();
  }

  editEmployee(employee: Employee, id){
    const url = `${this.baseUrl}/${this.editEmployeeSuffix}/${id}`;
    this.http.put(url, employee, httpOptions).subscribe();
  }

  getEmployeeList(): Observable<Employee[]> {
    const url = `${this.baseUrl}/${this.listSuffix}`;
    return  this.http.get<Employee[]>(url);
  }

  deleteEmployee(id){
    const url = `${this.baseUrl}/${this.deleteEmployeeSuffix}/${id}`;
    this.http.delete(url, httpOptions).subscribe();
  }
}
