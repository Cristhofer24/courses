import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { AbaoutComponent } from './pages/abaout/abaout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';

import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RegisterComponent } from './Auth/register/register.component';
import { CrudComponent } from './pages/crud/crud.component';

export const routes: Routes = [
  {path:'',component:NavBarComponent,
   children:[
    {path:'home',component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'about', component:AbaoutComponent},
    {path:'contact', component:ContactComponent},
    {path:'register', component:RegisterComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }

   ]
  },

      {path:'courses',component:CoursesComponent},
      {path:'crud',component:CrudComponent},


  { path: '**', redirectTo: '/home'}


];
