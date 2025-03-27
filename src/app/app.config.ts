import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
    eventCoalescing: true }),
    provideRouter(routes),
     provideFirebaseApp(() => initializeApp
     ({"projectId":"app-education-dbc87","appId":"1:967878317891:web:939863357c1a7cce0f81f6",
      "storageBucket":"app-education-dbc87.firebasestorage.app",
      "apiKey":"AIzaSyCOwu_ae9nTS04o1UcwmQlcetOG3LNsz_o",
      "authDomain":"app-education-dbc87.firebaseapp.com",
      "messagingSenderId":"967878317891","measurementId":"G-9E0DZJCVZQ"})),
       provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
