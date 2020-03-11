import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/Employee';
import {RestService} from '../../services/rest.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee();

  constructor(
    private restService: RestService,
    private router: Router) {
  }

  addEmployee() {
    this.restService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/list']);
      }
    );
  }

  ngOnInit(): void {
  }
}
