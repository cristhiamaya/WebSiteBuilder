import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  public contactFormGroup;

  @Output() nextStepFunc: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.contactFormGroup = new FormGroup({
      email: new FormControl("", Validators.compose([
         Validators.pattern("[^ @]*@[^ @]*")
      ])),
      name: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      notes: new FormControl()
   });
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }
}
