import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLevelCHomeComponent } from './top-level-c-home/top-level-c-home.component';
import { TopLevelCOneComponent } from './top-level-c-one/top-level-c-one.component';
import { TopLevelCTwoComponent } from './top-level-c-two/top-level-c-two.component';
import { TopLevelCThreeComponent } from './top-level-c-three/top-level-c-three.component';

const routes: Routes = [{
  path: '', component: TopLevelCHomeComponent, children: [
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: TopLevelCOneComponent },
    { path: 'two', component: TopLevelCTwoComponent },
    { path: 'three', component: TopLevelCThreeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopLevelCRoutingModule { }
