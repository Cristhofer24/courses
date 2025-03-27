import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authWg: AuthService,private router: Router) { }

  loginWithGoogle() {
    this.authWg.loginWithGoogle().then((result)=>
      this.router.navigate(['/courses']
      )
    .catch((error) => console.log("Error al iniciar sesion", error)
  ));

  }

}
