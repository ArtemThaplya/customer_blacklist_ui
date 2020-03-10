import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-artem',
  templateUrl: './artem.component.html',
  styleUrls: ['./artem.component.css']
})
export class ArtemComponent implements OnInit {
  private loginUrl: string = 'http://localhost:8080/login';

  payloadOfPostResponse: string;
  username: string;
  password: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  doLogin() {
    const payload = {
      username: this.username,
      password: this.password
    };

    this.http.post(this.loginUrl, payload, httpOptions).subscribe(res => {
      this.payloadOfPostResponse = JSON.stringify(res);
      console.log(res);
    });
  }
}
