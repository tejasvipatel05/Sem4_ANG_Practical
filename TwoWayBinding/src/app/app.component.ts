import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingleDimensionalComponent } from "./single-dimensional/single-dimensional.component";
import { MultidimentionalComponent } from './multidimentional/multidimentional.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SingleDimensionalComponent, MultidimentionalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TwoWayBinding';
}
