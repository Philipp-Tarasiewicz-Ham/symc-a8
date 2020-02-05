import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-top-level-a-two',
  templateUrl: './top-level-a-two.component.html',
  styleUrls: ['./top-level-a-two.component.scss']
})
export class TopLevelATwoComponent implements OnInit {
  myForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
