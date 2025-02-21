import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiUserService } from '../api-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-api-form',
  imports: [FormsModule, ReactiveFormsModule, NgStyle, NgIf],
  templateUrl: './user-api-form.component.html',
  styleUrl: './user-api-form.component.css'
})
export class UserApiFormComponent {
  private _fb = inject(FormBuilder);

  userForm = new FormGroup({
    full_name: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  data: User = new User();
  id: number = -1;
  constructor(private _api: ApiUserService, private _activatedRoute: ActivatedRoute, private _router: Router) { }
  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((ans: any) => {
      console.log(this.data)
      this.data = ans;
      this.userForm.controls['full_name'].setValue(this.data.full_name)
    })
  }
  saveUser(){
    const userData: User = {
      ...this.data,
      full_name: this.userForm.controls['full_name'].value
    };
    if(this.id){
      this._api.update(this.id, userData).subscribe((ans:any)=>{
        console.log("user updated",ans);
        this._router.navigate(['users',this.id])
      })
    }
    else{
      this._api.create(userData).subscribe((ans:any)=>{
        console.log("user created",ans);
        this._router.navigate(['users'])
      })
    }
  }
}
