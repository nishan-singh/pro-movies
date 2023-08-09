import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(public auth: AngularFireAuth) {
    this.auth.setPersistence('none');
  }

  loggedInUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  checkUserStatus() {
    return this.auth.authState;
  }

  registerUser(userEmail: string, userPassword: string) {
    return this.auth.createUserWithEmailAndPassword(userEmail, userPassword);
  }

  sendPasswordResetEmail(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }
}
