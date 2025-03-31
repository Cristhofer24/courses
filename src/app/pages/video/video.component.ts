import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
   constructor(private auth:AuthService , private router:Router ){}
    
      returnCourse(){
        this.router.navigate(['/courses']);
      }

}
