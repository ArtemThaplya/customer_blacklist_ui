import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from '../model/Employee';
import {Observable} from 'rxjs';

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

  constructor(private http: HttpClient) {
  }

  addEmployee(employee: Employee) {
    const url = `${this.baseUrl}/${this.addEmployeeSuffix}`;
    return this.http.post(url, employee, httpOptions);
  }

  editEmployee(employeeId: number) {
    const url = `${this.baseUrl}/${this.editEmployeeSuffix}/${employeeId}`;
    this.http.put(url, null, httpOptions).subscribe();
  }

  getEmployeeList(): Observable<Employee[]> {
    const url = `${this.baseUrl}/${this.listSuffix}`;
    return  this.http.get<Employee[]>(url);
  }

  deleteEmployee(id) {
    const url = `${this.baseUrl}/${this.deleteEmployeeSuffix}/${id}`;
    this.http.delete(url, httpOptions).subscribe();
  }
}
