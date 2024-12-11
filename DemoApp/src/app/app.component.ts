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
  host = 'yellow';

  ngOnInit() {
    setInterval(() => {
      if(this.isEnable == true) {
        this.isEnable = false;
      }
      else {
        this.host = 'blue';
        this.isEnable = true;
      }
    }, 1000); 
  }
}

