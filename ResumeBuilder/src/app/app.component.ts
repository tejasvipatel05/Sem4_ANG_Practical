import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'ResumeBuilder';

    stu:any = {
        project: []
    }

    tProject = {}

    getdata(e:any) {
        this.stu = {...this.stu,[e.target.name]:e.target.value}
    }

    proData(e:any) {
        this.tProject = {...this.tProject,[e.target.name]:e.target.value}
    }





}
