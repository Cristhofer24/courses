import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [],
  templateUrl: './hardware.component.html',
  styleUrl: './hardware.component.css'
})
export class HardwareComponent {
  constructor(private auth:AuthService , private router:Router ){}

  returnCourse(){
    this.router.navigate(['/courses']);
  }

  goToVideo(){
    this.router.navigate(['/video']);
  }

}
