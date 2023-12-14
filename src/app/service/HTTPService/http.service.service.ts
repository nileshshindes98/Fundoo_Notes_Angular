import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseURL = 'https://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(private http: HttpClient) { }

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
