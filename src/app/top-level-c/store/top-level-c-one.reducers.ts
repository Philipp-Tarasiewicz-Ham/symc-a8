import { createReducer } from '@ngrx/store';
import {createFormGroupState, FormGroupState, onNgrxForms, updateGroup, validate, wrapReducerWithFormStateUpdate} from 'ngrx-forms';
import {required} from 'ngrx-forms/validation';

export interface MyFormState {
  firstName: string;
  lastName: string;
  age: number;
}

export interface TopLevelCState {
  myForm: FormGroupState<MyFormState>;
}

const FORM_ID = 'topLevelCForm';

export const initialFormState = createFormGroupState<MyFormState>(FORM_ID, {
  firstName: '',
  lastName: '',
  age: 18
});

const initialState: TopLevelCState = {
  myForm: initialFormState
};

const validateMyForm = updateGroup<MyFormState>({
  firstName: validate(required),
  lastName: validate(required)
});

const formReducer = createReducer(
  initialState,
  onNgrxForms(),
);

export const reducer = wrapReducerWithFormStateUpdate(
  formReducer,
    state => state.myForm,
  validateMyForm
);
