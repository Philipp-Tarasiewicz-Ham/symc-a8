import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopLevelBRoutingModule } from './top-level-b-routing.module';
import { TopLevelBHomeComponent } from './top-level-b-home/top-level-b-home.component';

@NgModule({
  declarations: [TopLevelBHomeComponent],
  imports: [
    CommonModule,
    TopLevelBRoutingModule
  ]
})
export class TopLevelBModule { }
