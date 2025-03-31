import { CoursSoftService } from './../../Services/cours-soft.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Courses } from '../courses/Interfaces/courses';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgFor],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

    form:FormGroup;
    courses: Courses[] = [];
    constructor(private formbuilder:FormBuilder , private coursSoftService:CoursSoftService){
      this.form = this.formbuilder.group({
        title:[""],
        description:[''],
        link:['']
      })
    }
ngOnInit(): void {
  this.loadCourses();
}

    addCourseSoftware(){
      if(this.form.invalid)return;
      this.coursSoftService.addCourseSoftware(this.form.value);
    }

    loadCourses() {
      this.coursSoftService.getCourses().then(snapshot => {
        this.courses = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: Number(doc.id) // Convert the id to a number
          } as Courses;
        });
      });
    }


  // Método para actualizar un curso
  updateCourse(courseId: number) {
    const updatedCourse: Partial<Courses> = {
      title: 'Nuevo Título', // Reemplaza con los datos que deseas actualizar
      description: 'Nueva Descripción',
      link: 'https://nuevo-enlace.com'
    };
    this.coursSoftService.updateCourse(courseId, updatedCourse).then(() => {
      this.loadCourses(); // Recargar la lista de cursos
    });
  }

  // Método para eliminar un curso
  deleteCourse(courseId: number) {
    this.coursSoftService.deleteCourse(courseId).then(() => {
      this.loadCourses(); // Recargar la lista de cursos
    });
  }

  }

