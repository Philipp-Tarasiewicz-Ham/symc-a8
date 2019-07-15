import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLevelBHomeComponent } from './top-level-b-home/top-level-b-home.component';

const routes: Routes = [
  { path: '', component: TopLevelBHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopLevelBRoutingModule { }
