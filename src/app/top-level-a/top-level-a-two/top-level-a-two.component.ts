import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-top-level-a-two',
  templateUrl: './top-level-a-two.component.html',
  styleUrls: ['./top-level-a-two.component.scss']
})
export class TopLevelATwoComponent implements OnInit {
  myForm = new FormGroup({
    firstName: new FormControl('foo'),
    lastName: new FormControl('bar')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
