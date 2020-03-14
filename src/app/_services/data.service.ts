import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private exampleData: string[] = ['one', 'two', 'three'];

  constructor(private http: HttpClient) {

  }

  getData() {
    return this.exampleData;
  }

  getAllTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
