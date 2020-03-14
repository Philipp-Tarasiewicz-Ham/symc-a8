import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {createFeatureSelector, select, Store} from '@ngrx/store';
import { CONFIG } from '../store/top-level-c-one.config';
import { increment, decrement, reset } from '../store/top-level-c-one.actions';
import {selectFeatureCount} from '../store/top-level-c-one.selectors';

@Component({
  selector: 'app-top-level-c-one',
  templateUrl: './top-level-c-one.component.html',
  styleUrls: ['./top-level-c-one.component.scss']
})
export class TopLevelCOneComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = store.pipe(select(selectFeatureCount));
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
