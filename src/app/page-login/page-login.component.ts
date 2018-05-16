import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import {  Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}}
@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  
  spin=""

  key = "6LeAdFkUAAAAAFV5w8gWTeHOOYhXnnQGgkxeeTWq"

  matcher = new MyErrorStateMatcher();

  public username: string;

  public password: string;

  public captchaSolved = true;

  constructor( public dialog: MatDialog,private http: HttpClient ) { }

  resolved(captchaResponse: object) {
    if(captchaResponse!=null){
      this.captchaSolved = true;
    }
  }

  formHasError(){
    return (this.usernameFormControl.hasError('required') || 
           this.passwordFormControl.hasError('required')
           || !this.captchaSolved 
          );
  }

  sendInformation() {
    if(this.formHasError()){
      const alertdialogRef = this.dialog.open(DialogAlertComponent, {
        width: '400px',
      });
      this.usernameFormControl.markAsDirty();
      this.passwordFormControl.markAsDirty();
      alertdialogRef.afterClosed().subscribe(result => {
      });
    }
    else{
      console.log("sending info...")
      this.spin = "spin"

      return this.http.post(
        'http://192.168.0.5:3000/usuarios/getSession',
        {
          'username': this.username,
          'password': this.password,
        },
      ).subscribe(res => {
        this.spin = "";
        localStorage.setItem("token",res['token']);
        window.location.href = "http://192.168.0.5:4200/";
      });
    }
  }

  ngOnInit() {
  }

}
