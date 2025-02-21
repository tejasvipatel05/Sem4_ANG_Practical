import { Component } from '@angular/core';
import { ApiUserService } from '../api-user.service';
import { User } from '../user';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-api',
  imports: [NgFor],
  templateUrl: './mock-api.component.html',
  styleUrl: './mock-api.component.css'
})
export class MockAPIComponent {
  data : User[] = []
  constructor(private _api: ApiUserService, private _router: Router) { 
    this._api.getAll().subscribe((ans:any)=>{
      this.data = ans;   
    })
  }
  navigateToDetail(id:number){
    this._router.navigate(['users',id])
  }
  createNavigateUser(){
    this._router.navigate(['userapiform'])
  }
}
