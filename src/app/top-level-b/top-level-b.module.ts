import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopLevelBRoutingModule } from './top-level-b-routing.module';
import { TopLevelBHomeComponent } from './top-level-b-home/top-level-b-home.component';
import { TopLevelBOneComponent } from './top-level-b-one/top-level-b-one.component';
import { TopLevelBTwoComponent } from './top-level-b-two/top-level-b-two.component';
import { TopLevelBThreeComponent } from './top-level-b-three/top-level-b-three.component';

@NgModule({
  declarations: [TopLevelBHomeComponent, TopLevelBOneComponent, TopLevelBTwoComponent, TopLevelBThreeComponent],
  imports: [
    CommonModule,
    TopLevelBRoutingModule
  ]
})
export class TopLevelBModule { }
