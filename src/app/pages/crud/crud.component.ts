import { CoursSoftService } from './../../Services/cours-soft.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

    form:FormGroup;

    constructor(private formbuilder:FormBuilder , private coursSoftService:CoursSoftService){
      this.form = this.formbuilder.group({
        title:[""],
        description:[''],
        link:['']
      })
    }


    addCourseSoftware(){
      if(this.form.invalid)return;
      this.coursSoftService.addCourseSoftware(this.form.value).then(()=>console.log("Curso Agregado"));
    }
}
