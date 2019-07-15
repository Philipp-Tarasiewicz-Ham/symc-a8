import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopLevelCRoutingModule } from './top-level-c-routing.module';
import { TopLevelCHomeComponent } from './top-level-c-home/top-level-c-home.component';

@NgModule({
  declarations: [TopLevelCHomeComponent],
  imports: [
    CommonModule,
    TopLevelCRoutingModule
  ]
})
export class TopLevelCModule { }
