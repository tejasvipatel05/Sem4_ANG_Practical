import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dir-demo',
  imports: [NgIf, NgStyle, FormsModule,NgClass, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './dir-demo.component.html',
  styleUrl: './dir-demo.component.css'
})
export class DirDemoComponent {
  cartoon = true
  intrvl: any
  mulstyle = {
    // "margin-left": "60vh",
    "height": "30vh",
    // "text-align":"center",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "width": "30vh",
    "border-radius": "50vh",
    "background-color": ""
  }
  month = 0

  count:number = 0

  itr:number = 0

  numSequence(count: number): Array<number> {
    return Array(count); 
  } 

  switchCartoon() {
    this.cartoon = !this.cartoon
  }

  switchOn() {
    if (this.intrvl) {
      clearInterval(this.intrvl)
    }
    this.intrvl = setInterval(() => {
      this.mulstyle['background-color'] = "rgb(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + ")"
    }, 100)
  }

  switchOff() {
    if (this.intrvl) {
      clearInterval(this.intrvl)
    }
  }
}
