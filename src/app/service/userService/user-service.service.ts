import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../Http.Service/http.service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token :any;
title = 'this is test service';
  constructor(private httpservice : HttpService ) {
    localStorage.getItem('token')
   }

   signupService(data:any){
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token //token
      })
    };
    return this.httpservice.PostService('user/userSignUp',data,false,options)
   }

   loginService(data: any){
  
    this.token = localStorage.getItem('Token');
    let options = {
     headers: new HttpHeaders({
       'Authorization': this.token,
       'Content Type': 'application/json'
     })
   }
   return this.httpservice.PostService("/user/login", data, false, options)
 }

}
