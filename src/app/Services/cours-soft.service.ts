import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, orderBy, limit, addDoc, doc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Courses } from '../pages/courses/Interfaces/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursSoftService {

  constructor(private firestore: Firestore) { }

  // Obtener todos los cursos
  getCourses() {
    const courseRef = collection(this.firestore, "CursosSoftware");
    return getDocs(courseRef);
  }

  // Agregar un nuevo curso con ID autoincremental
  async addCourseSoftware(course: Courses) {
    try {
      const courseRef = collection(this.firestore, "CursosSoftware");
      const q = query(courseRef, orderBy("id", "desc"), limit(1));
      const snapshot = await getDocs(q);
      let newId = 1;
      if (!snapshot.empty) {
        const lastCourse = snapshot.docs[0].data() as Courses;
        newId = lastCourse.id + 1;
      }

      const newCourse = { ...course, id: newId };
      await addDoc(courseRef, newCourse);

      console.log("Curso agregado con ID:", newId);
      return newCourse;
    } catch (error) {
      console.error("Error al agregar curso:", error);
      throw error;
    }
  }

  // Actualizar un curso existente por su ID
  async updateCourse(courseId: number, updatedCourse: Partial<Courses>) {
    try {
      const courseRef = collection(this.firestore, "CursosSoftware");
      const q = query(courseRef, orderBy("id", "desc"), limit(1));
      const snapshot = await getDocs(q);
      const courseDoc = snapshot.docs.find(doc => (doc.data() as Courses).id === courseId);

      if (courseDoc) {
        const courseRef = doc(this.firestore, "CursosSoftware", courseDoc.id);
        await updateDoc(courseRef, updatedCourse);
        console.log(`Curso con ID ${courseId} actualizado.`);
      } else {
        console.error(`Curso con ID ${courseId} no encontrado.`);
      }
    } catch (error) {
      console.error("Error al actualizar curso:", error);
      throw error;
    }
  }

  // Eliminar un curso por su ID
  async deleteCourse(courseId: number) {
    try {
      const courseRef = collection(this.firestore, "CursosSoftware");
      const q = query(courseRef, orderBy("id", "desc"), limit(1));
      const snapshot = await getDocs(q);
      const courseDoc = snapshot.docs.find(doc => (doc.data() as Courses).id === courseId);

      if (courseDoc) {
        const courseRef = doc(this.firestore, "CursosSoftware", courseDoc.id);
        await deleteDoc(courseRef);
        console.log(`Curso con ID ${courseId} eliminado.`);
      } else {
        console.error(`Curso con ID ${courseId} no encontrado.`);
      }
    } catch (error) {
      console.error("Error al eliminar curso:", error);
      throw error;
    }
  }
}
