import { Component, OnInit } from '@angular/core';
import {DataService} from '../../_services/data.service';

@Component({
  selector: 'app-top-level-a-one',
  templateUrl: './top-level-a-one.component.html',
  styleUrls: ['./top-level-a-one.component.scss']
})
export class TopLevelAOneComponent implements OnInit {
  exampleData: string[];

  constructor(private dataService: DataService) {
    this.exampleData = dataService.getData();
  }

  ngOnInit() {
  }

}
