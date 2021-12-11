import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFrameworkComponent } from './angular-framework/angular-framework.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularFrameworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
