import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Employee} from '../../model/Employee';
import {Router} from '@angular/router';
import {StateService} from '../../services/state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private restService: RestService,
    private router: Router,
    private state: StateService
  ) {
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(employee => employee.id !== id);
    this.restService.deleteEmployee(id);
  }

  ngOnInit(): void {
    this.restService.getEmployeeList().subscribe(res => {
      this.employees = res;
    });
  }

  edit(employee: Employee) {
    this.state.employee = employee;
    this.router.navigate(['/edit']);
  }
}
