import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  private baseUrl = 'http://localhost:8080';
  private postSuffix = 'handlePost';
  private getSuffix = 'handleGet';

  payloadOfPostRequest: string;
  payloadOfPostResponse: string;

  payloadOfGetResponse: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  handlePost() {
    const url = `${this.baseUrl}/${this.postSuffix}`;
    const payload = {
      data: this.payloadOfPostRequest
    };

    this.http.post(url, payload, httpOptions).subscribe(res => {
      this.payloadOfPostResponse = JSON.stringify(res);
      console.log(res);
    });
  }

  handleGet() {
    const url = `${this.baseUrl}/${this.getSuffix}`;

    this.http.get(url).subscribe(res => {
      this.payloadOfGetResponse = JSON.stringify(res);
      console.log(res);
    });
  }
}
