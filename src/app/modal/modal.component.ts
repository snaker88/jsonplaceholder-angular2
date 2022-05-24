import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Comment } from '../json-requests.service';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Comment
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
 submit(){
   console.log(this.data)
 }

  ngOnInit(): void {
    this.form = new FormGroup({
      myName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      myBody: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      myEmail: new FormControl('', [Validators.required, Validators.email])
  })
  }

  public myError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
    }

}
