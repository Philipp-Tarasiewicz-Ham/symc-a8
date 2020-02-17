import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-casb-routed-wizard',
  templateUrl: './casb-routed-wizard.component.html',
  styleUrls: ['./casb-routed-wizard.component.scss']
})
export class CasbRoutedWizardComponent implements OnInit {

  constructor(private router: Router) {
    console.log('This is CasbRoutedWizardComponent', router);
  }

  ngOnInit() {
  }

}
