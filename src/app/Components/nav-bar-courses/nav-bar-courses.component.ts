import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav-bar-courses',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './nav-bar-courses.component.html',
  styleUrl: './nav-bar-courses.component.css'
})
export class NavBarCoursesComponent {
constructor(private auth:AuthService , private router:Router  ){}

logOut(){
  this.auth.logOut().then(
    ()=> this.router.navigate(['/home'])
  ).catch((error)=>console.log("Error al cerrar sesion",error));
}

}
