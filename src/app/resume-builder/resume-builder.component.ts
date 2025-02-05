import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-resume-builder',
  imports: [CommonModule, NgFor],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css'
})
export class ResumeBuilderComponent {
  title = 'ResumeBuilder';
  stu:any={}

  project:any=[]
  temp:any={}

  fillData(e:any){
    this.stu={...this.stu,[e.target.name]:e.target.value}
  }
  projectData(e:any){
    this.temp={...this.temp,[e.target.name]:e.target.value}
  }
  insertdata(){
    this.project.push(this.temp)
  }
}
