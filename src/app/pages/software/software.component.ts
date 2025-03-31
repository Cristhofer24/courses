import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [],
  templateUrl: './software.component.html',
  styleUrl: './software.component.css'
})
export class SoftwareComponent {
  constructor(private auth:AuthService , private router:Router ){}
  
    returnCourse(){
      this.router.navigate(['/courses']);
    }

    goToVideo(){
      this.router.navigate(['/video'])
    }

}
