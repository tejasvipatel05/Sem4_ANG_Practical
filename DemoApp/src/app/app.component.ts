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
  title = 'DemoApp';
  d = new Date();
  num = 8.3;
  isEnable = true;
  data = '';
  host = ['yellow','red','pink','blue','grey','magenta','cadetblue','aquamarine'];
  size = 10;
  demohost = 'lavender';
  counter = 0;
  n = 9876543.219;

  ngOnInit() {
    setInterval(() => {
      // this.isEnable = !this.isEnable;
      if(this.isEnable) {
        this.isEnable = false;
        this.demohost = 'lavender';
      }
      else {
        this.demohost = 'green';
        this.isEnable = true;
      }
    }, 1000); 
  }
  btnclick(){
    this.counter++;
  }

  displayData(e:any){
    this.data = e.target.value;
    console.log(this.data);
  }
}

