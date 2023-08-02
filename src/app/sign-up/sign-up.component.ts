import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  emailExists: boolean = false;
  loading: boolean = false;
  successful: boolean = false;
  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    public dialogRef: MatDialogRef<SignUpComponent>
  ) {}

  onRegister(email: string, password: string): void {
    this.loading = true;
    this.emailExists = false;
    this.databaseService
      .registerUser(email, password)
      .then((res) => {
        if (res) {
          this.successful = true;
          setTimeout(() => {
            this.dialogRef.close();
          }, 750);
        }
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.code);
        console.log(
          '%cYou can ignore the error below. If you see this error, it means that the entered email or password is incorrect. Please enter a valid email and password. If you do not have an account, please sign up. If you forgot your password, please click on the "Forgot Password?" link. You can Read the message abovee for more information.',
          'font-size: 15px; color: red;'
        );
        console.log('------------------------------------------------------');
        this.loading = false;
        this.emailExists = true;
      });
  }
}
