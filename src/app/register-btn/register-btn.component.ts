import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-register-btn',
  templateUrl: './register-btn.component.html',
  styleUrls: ['./register-btn.component.css']
})
export class RegisterBtnComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /*
  openDialog(): void {
    this.dialog.open(RegisterDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  */

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
