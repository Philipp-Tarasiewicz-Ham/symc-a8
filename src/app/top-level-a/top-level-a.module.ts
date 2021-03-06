import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopLevelARoutingModule } from './top-level-a-routing.module';
import { TopLevelAHomeComponent } from './top-level-a-home/top-level-a-home.component';
import { TopLevelAOneComponent } from './top-level-a-one/top-level-a-one.component';
import { TopLevelATwoComponent } from './top-level-a-two/top-level-a-two.component';
import { TopLevelAThreeComponent } from './top-level-a-three/top-level-a-three.component';
import { ExampleComponent } from './top-level-a-one/example/example.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CasbRoutedWizardComponent } from './top-level-a-three/casb-routed-wizard/casb-routed-wizard.component';

@NgModule({
  declarations: [
    TopLevelAHomeComponent, TopLevelAOneComponent, TopLevelATwoComponent, TopLevelAThreeComponent, ExampleComponent,
    CasbRoutedWizardComponent
  ],
  imports: [
    CommonModule,
    TopLevelARoutingModule,
    ReactiveFormsModule
  ]
})
export class TopLevelAModule { }
