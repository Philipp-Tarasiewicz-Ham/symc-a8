import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectFeatureFormState} from '../store/top-level-c-one.selectors';
import {FormGroupState} from 'ngrx-forms';
import {MyFormState} from '../store/top-level-c-one.reducers';

@Component({
  selector: 'app-top-level-c-one',
  templateUrl: './top-level-c-one.component.html',
  styleUrls: ['./top-level-c-one.component.scss']
})
export class TopLevelCOneComponent implements OnInit {
  formState$: Observable<FormGroupState<MyFormState>>;

  constructor(private store: Store) {
    this.formState$ = store.pipe(select(selectFeatureFormState));
  }

  ngOnInit() {
  }
}
