import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SchoolEvent } from '../../models/school';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {


  schoolEvent: SchoolEvent;
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private schoolService: SchoolService) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit(): void {
    this.schoolEvent = new SchoolEvent();
  }

  save() {
    this.schoolEvent.name = this.name.value;

    this.schoolService.addSchoolEvent(this.schoolEvent).then(schoolEvent => {
      this.dialogRef.close(schoolEvent);
    });
    
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
