import { Auth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UserCredential } from '../userCredential/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: UserCredential = {};

  constructor(private authWg: AuthService, private router: Router) { }

  loginWithGoogle() {
    this.authWg.loginWithGoogle().then(()=>
      this.router.navigate(['/courses']
      )
    .catch((error) => console.log("Error al iniciar sesion", error)
  ));

  }

  loginWithEmail(){
    this.authWg.loginWithEmailPassword(this.user.email || '' , this.user.password ||'').then(
      ()=> this.router.navigate(['/courses']
    ).catch((error) => console.log("Error al iniciar sesion", error))
  )
  }

}
