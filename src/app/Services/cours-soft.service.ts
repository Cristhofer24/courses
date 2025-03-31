import { addDoc, collection, Firestore, getDocs } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Courses } from '../pages/courses/Interfaces/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursSoftService {

  constructor(private firestore: Firestore) { }

  async addCourseSoftware(course: Courses) {
    try {
      const courseRef = collection(this.firestore, "CursosSoftware");

      // Guardar en Firestore
      const docRef = await addDoc(courseRef, course);

      console.log("Curso agregado con ID:", docRef.id);
      return { ...course, id: docRef.id }; // Devuelve el curso con el nuevo ID
    } catch (error) {
      console.error("Error al agregar curso:", error);
      throw error;
    }
  }

}
