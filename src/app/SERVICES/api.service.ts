import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl: string ="https://whatsapp-3.herokuapp.com"

  constructor(private http: HttpClient) { }

  getChats(): Observable<any>{
    return this.http.get(this.serverUrl + '/chats')
  }
  postChats(chat): Observable<any>{
    return this.http.post(this.serverUrl+'/chats', chat)
  }
  postResource(route:string, item): Observable<any>{
    return this.http.post(this.serverUrl+ route, item)
  }

  saveUser(user){
    localStorage.setItem('user', JSON.stringify(user))
  }
  getUser(){
    return localStorage.getItem('user')
  }
  isRegistered(): boolean{
    return localStorage.getItem('user')? true: false;
  }
  userLogOut(){
    return localStorage.removeItem('user')
  }
}
