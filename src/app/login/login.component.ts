import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    private _fb = inject(FormBuilder);
    private _rouer = inject(Router);

    loginform:FormGroup=this._fb.group({
      username: [''],
      password:['']
    })


    onlogin(){
      const localusername = localStorage.getItem('username')
      const localpassword = localStorage.getItem('password')
      
      if(this.loginform.get('username')?.value == localusername && this.loginform.get('password')?.value == localpassword){
        this._rouer.navigate(['arrayofobject'])
      }
      else{
        alert("Username or Password not correct !!!")
      }
    }
}
