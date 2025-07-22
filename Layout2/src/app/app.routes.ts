import { Routes } from '@angular/router';
import { LeftComponent } from './left/left.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { TsComponent } from './ts/ts.component';
import { SpectsComponent } from './spects/spects.component';

export const routes: Routes = [
    {path:"li1", component:LeftComponent},
    {path:"li2", component:LeftComponent},
    {path:"li3", component:LeftComponent},
    {path:"html", component:HtmlComponent},
    {path:"css", component:CssComponent},
    {path:"ts",component:TsComponent},
    {path:"spects",component:SpectsComponent}
];
