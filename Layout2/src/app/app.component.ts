import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { LeftComponent } from "./left/left.component";
import { LinkComponent } from "./link/link.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, LeftComponent, LinkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Layout2';
}
