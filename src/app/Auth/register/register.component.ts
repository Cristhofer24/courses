import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { UserCredential } from '../userCredential/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  User : UserCredential={};

constructor(private Auth:AuthService,private router:Router){}

register(){
this.Auth.registerWithEmailPassword(this.User.email||'',this.User.password || '').then(
  ()=>
    this.router.navigate(['/login'])
).catch((error)=>console.log("Error al registrar",error));
}



}
