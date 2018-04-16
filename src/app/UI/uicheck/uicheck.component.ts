import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-uicheck',
  templateUrl: './uicheck.component.html',
  styleUrls: ['./uicheck.component.css']
})
export class UicheckComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  messageDisplay :string=''
  messageType:string=''
  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
    this.messageDisplay="dfsdfsdfsdfsdfdsf"
    this.messageType="success"
  }
}
