import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Router} from "@angular/router";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() id: number;
  @Input() employees: Employee[];

  constructor(private restService: RestService,
              private router: Router) { }

  deleteEmployee(id: number) {
    this.employees.filter(employee => employee.id !== id);
    this.restService.deleteEmployee(id);
  }

  ngOnInit(): void {
  }

}
