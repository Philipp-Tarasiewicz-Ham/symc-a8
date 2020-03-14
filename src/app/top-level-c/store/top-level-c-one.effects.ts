import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DataService} from '../../_services/data.service';
import {loadTodos, loadTodosSuccess} from './top-level-c-one.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class TopLevelCOneEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(loadTodos),
    mergeMap(() => this.dataService.getAllTodos()
      .pipe(
        map((todos) => loadTodosSuccess({ payload: todos })),
        catchError(() => EMPTY)
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
