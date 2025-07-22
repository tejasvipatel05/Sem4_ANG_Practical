import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,NgIf,FormsModule, NgStyle],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  StudentForm = new FormGroup({
    StuName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    StuEmail: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]),
    StuPassword: new FormControl('',[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$")]),
    StuContact: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]")]),
    StuSpi: new FormControl('',[Validators.required, Validators.min(0), Validators.max(10)]),
    StuAge: new FormControl('',[Validators.required, Validators.min(18)])
  })
}