import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLevelBHomeComponent } from './top-level-b-home/top-level-b-home.component';
import { TopLevelBOneComponent } from './top-level-b-one/top-level-b-one.component';
import { TopLevelBTwoComponent } from './top-level-b-two/top-level-b-two.component';
import { TopLevelBThreeComponent } from './top-level-b-three/top-level-b-three.component';

const routes: Routes = [{
  path: '', component: TopLevelBHomeComponent, children: [
    { path: 'one', component: TopLevelBOneComponent },
    { path: 'two', component: TopLevelBTwoComponent },
    { path: 'three', component: TopLevelBThreeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopLevelBRoutingModule { }
