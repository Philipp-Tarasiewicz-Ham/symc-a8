import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { TopLevelCRoutingModule } from './top-level-c-routing.module';
import { TopLevelCHomeComponent } from './top-level-c-home/top-level-c-home.component';
import { TopLevelCOneComponent } from './top-level-c-one/top-level-c-one.component';
import { TopLevelCTwoComponent } from './top-level-c-two/top-level-c-two.component';
import { TopLevelCThreeComponent } from './top-level-c-three/top-level-c-three.component';

import { reducer } from './store/top-level-c-one.reducers';
import { CONFIG } from './store/top-level-c-one.config';
import {EffectsModule} from '@ngrx/effects';
import {TopLevelCOneEffects} from './store/top-level-c-one.effects';

@NgModule({
  declarations: [TopLevelCHomeComponent, TopLevelCOneComponent, TopLevelCTwoComponent, TopLevelCThreeComponent],
  imports: [
    CommonModule,
    TopLevelCRoutingModule,
    StoreModule.forFeature(CONFIG.KEY, reducer),
    EffectsModule.forFeature([TopLevelCOneEffects])
  ]
})
export class TopLevelCModule { }
