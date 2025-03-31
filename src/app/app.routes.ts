import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { AbaoutComponent } from './pages/abaout/abaout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HardwareComponent } from './pages/hardware/hardware.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RegisterComponent } from './Auth/register/register.component';
import { SoftwareComponent } from './pages/software/software.component';
import { CrudComponent } from './pages/crud/crud.component';
import { VideoComponent } from './pages/video/video.component';



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
      {path:'hardware', component:HardwareComponent},
      {path:'software', component:SoftwareComponent},
      {path:'courses',component:CoursesComponent},
      {path:'crud',component:CrudComponent},
      {path:'video',component:VideoComponent},


  { path: '**', redirectTo: '/home'}


];
