import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import { loadTodos } from '../store/top-level-c-one.actions';
import { selectFeatureTodos } from '../store/top-level-c-one.selectors';

@Component({
  selector: 'app-top-level-c-one',
  templateUrl: './top-level-c-one.component.html',
  styleUrls: ['./top-level-c-one.component.scss']
})
export class TopLevelCOneComponent implements OnInit {
  todos$: Observable<any[]>;

  constructor(private store: Store) {
    this.todos$ = store.pipe(select(selectFeatureTodos));
  }

  ngOnInit() {
  }

  loadTodos() {
    this.store.dispatch(loadTodos());
  }
}
