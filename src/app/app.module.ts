import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultsModule } from './core/layouts/default/defaults.module';






@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
