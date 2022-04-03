import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  apiUrl: string = 'https://dothbe.com';

  constructor(private _http: HttpClient) { }

  // fetch user details from the server
  getUserDetails() {
    return this._http.get<any>(`${this.apiUrl}/test`);
  }
}
