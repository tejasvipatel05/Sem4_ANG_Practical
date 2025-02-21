import { NgIf, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, NgIf, NgStyle],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  user:any={
    userName:'',
    userContact:'',
    userEmail:'',
    userPassword:'',
    userSPI:0,
    userAge:0
  }
}
