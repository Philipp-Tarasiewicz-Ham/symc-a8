import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopLevelCHomeComponent } from './top-level-c-home/top-level-c-home.component';

const routes: Routes = [
  { path: '', component: TopLevelCHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopLevelCRoutingModule { }
