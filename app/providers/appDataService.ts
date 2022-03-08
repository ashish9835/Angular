import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient) { }

  getData():Observable<any> {
    const loginUrl = "https://api.github.com/users";

    // let header = {
    //     'Authorization' : 'token <personal-access-token>',
    //     'Accept': 'application/vnd.github.v3+json'
    // }
    return this.http.get<any>(loginUrl);
  }
  
}