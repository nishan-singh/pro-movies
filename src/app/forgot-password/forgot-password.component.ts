import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  loading: boolean = false;
  emailNotExists: boolean = false;
  successful: boolean = false;

  constructor(
    private database: DatabaseService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>
  ) {}

  sendEmail(email: string) {
    this.loading = true;
    this.database
      .sendPasswordResetEmail(email)
      .then((res) => {
        this.successful = true;
        setTimeout(() => {
          this.dialogRef.close();
        }, 750);
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
        this.emailNotExists = true;
      });
  }
}
