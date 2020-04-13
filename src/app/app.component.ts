import { Component , OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  apiUrl = 'https://www.techiediaries.com/api/data.json';
  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){
    this.fetchData();
  }

  private fetchData() {
    const promise = this.httpClient.get(this.apiUrl).toPromise();
    console.log(promise);

    promise.then((data) => {
            console.log("Promise Resolved with " + JSON.stringify(data));
    }, (error) => {
            console.log("Promise rejected with " + JSON.stringify(error));

    })
  }
}
