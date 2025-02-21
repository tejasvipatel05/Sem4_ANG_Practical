import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private _http:HttpClient) { }
  apiUrl = "https://67b5811307ba6e59083d089f.mockapi.io/User";
  getAll(){
    return this._http.get(this.apiUrl);
  };

  getById(id:number){
    return this._http.get(this.apiUrl+'/'+id);
  }

  delete(id:number){
    return this._http.delete(this.apiUrl+'/'+id);
  }
  update(id:number, userbody: User){
    return this._http.put(this.apiUrl+'/'+id,userbody);
  }
  create(newUserbody: User){
    return this._http.post(this.apiUrl, newUserbody)
  }
}
