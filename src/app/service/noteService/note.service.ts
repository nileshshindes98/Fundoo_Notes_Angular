import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../Http.Service/http.service.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpservice : HttpService) { 
    this.token = localStorage.getItem("token");
  }

  addNotes(data:any){
    let options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.token
      })
    };
    return this.httpservice.PostService('notes/addNotes',data,true,options)
   }

   GetallNotes(url: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    // console.log("given data is", url);
    // console.log(options);
    return this.httpservice.GetService('/notes/getNotesList', options);
  }

}
