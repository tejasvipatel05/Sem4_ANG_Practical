import { Routes } from '@angular/router';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ArrayComponent } from './array/array.component';
import { ArrayOfObjectsComponent } from './array-of-objects/array-of-objects.component';
import { HomeComponent } from './home/home.component';
import { DirDemoComponent } from './dir-demo/dir-demo.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"resumebuilder", component:ResumeBuilderComponent},
    {path:"array", component:ArrayComponent},
    {path:"arrayofobject",component:ArrayOfObjectsComponent},
    {path:"directive", component:DirDemoComponent},
    {path:"templatedriven", component:TemplateDrivenComponent},
    {path:"reactiveform",component:ReactiveformComponent},
    {path:"formbuilder",component:FormBuilderComponent},
    {path:"authentication", component:SignUpComponent},
    {path:"loginform", component:LoginComponent}
];
