import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { GooglePlacesDirective } from './google-places-directive';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    GooglePlacesDirective,
   
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
