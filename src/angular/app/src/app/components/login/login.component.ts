import { Component, OnInit } from '@angular/core';
import {RestService} from "../../sercvices/rest.service";
import {User} from "../../model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(private restService: RestService) { }

  loginAdmin(){
    this.restService.loginAdmin(this.user);
  }

  ngOnInit(): void {
  }

}
