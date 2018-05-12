import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
 import {Http, Headers, Response} from '@angular/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}}

@Component ({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {

  private nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  private messageFormControl = new FormControl('', [
    Validators.required,
  ]);

  private emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  public email: string;
  public name: string;
  public message: string;
  public saved = false;
  public loading = false;

  constructor(public dialogRef: MatDialogRef<RegisterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private http: Http
   ) {}

  sendInformation() {
    this.loading = true;
    const headers = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.post(
      'https://0gza7dizjd.execute-api.us-west-2.amazonaws.com/PROD/sendform',
      {
        'name': this.name,
        'email': this.email,
        'message': this.message
      },
      {
        'headers' : headers
      }
    ).subscribe(res => {
      this.loading = false;
      this.saved = true;
    });
  }

  submitForm() {



  }
}
