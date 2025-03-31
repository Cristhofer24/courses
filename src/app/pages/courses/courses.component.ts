import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
constructor(private auth:AuthService , private router:Router  ){}

hardware(){
  this.router.navigate(['/hardware']);
}
software(){
  this.router.navigate(['/software']);
}

logOut(){
  this.auth.logOut().then(
    ()=> this.router.navigate(['/home'])
  ).catch((error)=>console.log("Error al cerrar sesion",error));
}

gotoCrudSoftware(){
  this.router.navigate(['/crud']);
}


}
