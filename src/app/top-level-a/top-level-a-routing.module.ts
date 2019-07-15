import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLevelAHomeComponent } from './top-level-a-home/top-level-a-home.component';

const routes: Routes = [
  { path: '', component: TopLevelAHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopLevelARoutingModule { }
