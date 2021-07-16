import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompoundComponentsModule } from './../../projects/compound-components/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CompoundComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
