import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLevelAHomeComponent } from './top-level-a-home/top-level-a-home.component';
import { TopLevelAOneComponent } from './top-level-a-one/top-level-a-one.component';
import { TopLevelATwoComponent } from './top-level-a-two/top-level-a-two.component';
import { TopLevelAThreeComponent } from './top-level-a-three/top-level-a-three.component';

const routes: Routes = [{
  path: '', component: TopLevelAHomeComponent, children: [
    { path: 'one', component: TopLevelAOneComponent },
    { path: 'two', component: TopLevelATwoComponent },
    { path: 'three', component: TopLevelAThreeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopLevelARoutingModule { }
