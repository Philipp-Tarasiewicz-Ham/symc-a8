import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private exampleData: string[] = ['one', 'two', 'three'];

  constructor() {

  }

  getData() {
    return this.exampleData;
  }
}