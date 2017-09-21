import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  index(){
    return this._http.get('/users/index').map(data => data.json()).toPromise()
  }

  login(user){
    // console.log('from service : ',user);
    return this._http.post('/users/create', user).map(data => data.json()).toPromise()
  }

  show(id){
    return this._http.get(`/users/${id}`).map(data => data.json()).toPromise()
  }

  setCurrentUser(user){
    return localStorage.setItem('CurrentUser', JSON.stringify(user));
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('CurrentUser'));
  }

  logout(){
    return localStorage.removeItem('CurrentUser');
  }

}
