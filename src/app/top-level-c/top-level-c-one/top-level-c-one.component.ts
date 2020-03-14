import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import { increment, decrement, reset } from '../store/top-level-c-one.actions';
import { selectFeatureCount } from '../store/top-level-c-one.selectors';
import {DataService} from '../../_services/data.service';

@Component({
  selector: 'app-top-level-c-one',
  templateUrl: './top-level-c-one.component.html',
  styleUrls: ['./top-level-c-one.component.scss']
})
export class TopLevelCOneComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store, private dataService: DataService) {
    this.count$ = store.pipe(select(selectFeatureCount));
  }

  ngOnInit() {
    this.dataService.getAllTodos().subscribe((data) => {
      console.log('success', data);
    }, (error) => {
      console.error('error', error);
    });
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
