import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopLevelAModule } from './top-level-a/top-level-a.module';
import { TopLevelBModule } from './top-level-b/top-level-b.module';
import { TopLevelCModule } from './top-level-c/top-level-c.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopLevelAModule,
    TopLevelBModule,
    TopLevelCModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
