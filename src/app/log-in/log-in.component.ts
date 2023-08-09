import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { DatabaseService } from 'services/database.service';
import { SignUpComponent } from 'app/sign-up/sign-up.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  @ViewChild('userEmail') userEmail: ElementRef;
  @ViewChild('userPassword') userPassword: ElementRef;
  errorMessage: string = '';
  loading: boolean = false;
  loadingPage: boolean = true;

  constructor(
    public dialog: MatDialog,
    private databaseService: DatabaseService,
    private router: Router
  ) {
    setTimeout(() => {
      this.loadingPage = false;
    }, 250);
  }

  onLogin(email: string, password: string) {
    this.loading = true;
    this.databaseService
      .loggedInUser(email, password)
      .then((res) => {
        this.router.navigateByUrl('user/' + res.user?.uid);
      })
      .catch((err) => {
        this.errorMessage = err.message;
        console.log(err.message);
        console.log(err.code);
        console.log(
          '%cYou can ignore the error below. If you see this error, it means that the entered email or password is incorrect. Please enter a valid email and password. If you do not have an account, please sign up. If you forgot your password, please click on the "Forgot Password?" link. You can Read the message abovee for more information.',
          'font-size: 15px; color: red;'
        );
        console.log('------------------------------------------------------');
        this.loading = false;
      });
  }

  openRegisterDialog(): void {
    this.dialog.open(SignUpComponent, {
      panelClass: 'dialog-styling',
    });
  }

  onResetPassword() {
    this.dialog.open(ForgotPasswordComponent, {});
  }
}
