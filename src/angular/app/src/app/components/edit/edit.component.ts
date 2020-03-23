import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Employee} from "../../model/Employee";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee = new Employee();

  constructor(private restService: RestService,
              public state: StateService) {
  }

  editEmployee() {
    this.restService.editEmployee(this.employee.id);
  }

  ngOnInit(): void {
    this.employee = this.state.employee;
  }
}
