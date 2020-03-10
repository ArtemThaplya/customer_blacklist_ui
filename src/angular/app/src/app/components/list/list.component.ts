import {Component, OnInit} from '@angular/core';
import {RestService} from '../../sercvices/rest.service';
import {Employee} from '../../model/Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[];

  constructor(private restService: RestService) {
  }

  deleteEmployee(id:number){
    this.employees = this.employees.filter(employee => employee.id !== id);
    this.restService.deleteEmployee(id);
  }

  ngOnInit(): void {
    this.restService.getEmployeeList().subscribe(res => {
      this.employees = res;
    });
  }
}
