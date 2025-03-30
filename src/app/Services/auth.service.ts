import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth,provider);
  }

  loginWithEmailPassword(email:string,password:string){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  registerWithEmailPassword(email:string,password:string){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  logOut(){
    return signOut(this.auth);
  }

}
