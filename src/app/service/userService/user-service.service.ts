import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HTTPService/http.service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpservice: HttpService) {}

  signupService(data: any) {
    return this.httpservice.PostService('user/userSignUp', data, false, this.options);
  }

  loginService(data: any) {
    return this.httpservice.PostService('user/login', data, false, this.options);
  }
}
