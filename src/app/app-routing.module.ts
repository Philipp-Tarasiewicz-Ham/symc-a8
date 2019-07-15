import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full'},
  { path: 'a', loadChildren: () => import('./top-level-a/top-level-a.module').then(mod => mod.TopLevelAModule) },
  { path: 'b', loadChildren: () => import('./top-level-b/top-level-b.module').then(mod => mod.TopLevelBModule) },
  { path: 'c', loadChildren: () => import('./top-level-c/top-level-c.module').then(mod => mod.TopLevelCModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
