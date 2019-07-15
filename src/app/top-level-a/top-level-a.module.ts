import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopLevelARoutingModule } from './top-level-a-routing.module';
import { TopLevelAHomeComponent } from './top-level-a-home/top-level-a-home.component';

@NgModule({
  declarations: [TopLevelAHomeComponent],
  imports: [
    CommonModule,
    TopLevelARoutingModule
  ]
})
export class TopLevelAModule { }
