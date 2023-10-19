import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  BaseURL = 'http://fundoonotes.incubation.bridgelabz.com/api/'
  // token
  // options
  PostService(url: any, data: any, token: boolean, headersOption: any) {
    return this.http.post(this.BaseURL + url, data, token && headersOption)
  }


  GetService(url: any, headersOption: any) {
    return this.http.get(this.BaseURL + url, headersOption)
  }


  PutService(url: any, data: any, token: boolean, headers: any) {
    return this.http.put(this.BaseURL + url, data)
  }

  DeleteService(url: any, data: any, token: boolean, headers: any) {
    return this.http.delete(this.BaseURL + url, data)
  }
}
