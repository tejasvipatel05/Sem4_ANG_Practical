import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { LogoComponent } from './logo/logo.component';

export const routes: Routes = [
    {path:"maincontent", component:MaincontentComponent, title:"Main Content"},
    {path:"logo", component:LogoComponent, title:"Logo"}
];
