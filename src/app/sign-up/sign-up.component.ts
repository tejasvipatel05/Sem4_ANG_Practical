import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
    private _fb = inject(FormBuilder);
    private _rouer = inject(Router);

    signupform:FormGroup=this._fb.group({
      username: [''],
      email:[''],
      password:[''],
      contact:[''],
      semester:['']
    })

    onsignup(){
      localStorage.setItem('username',this.signupform.get('username')?.value);
      localStorage.setItem('password',this.signupform.get('password')?.value);
      this._rouer.navigate(['loginform'])
    }
}
