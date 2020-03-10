import { Component, OnInit } from '@angular/core';
import {RestService} from "../../sercvices/rest.service";
import {Employee} from "../../model/Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee = new Employee();

  constructor(private restService: RestService,
              private router: Router) { }

  editEmployee(id: number){
    this.restService.editEmployee(this.employee, id);
    // this.router.navigate(['/edit/:id']);
  }

  ngOnInit(): void {
  }
}
