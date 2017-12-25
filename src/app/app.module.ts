import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';


@NgModule({
  // Components come here
  declarations: [
    AppComponent,
    CribListingComponent
  ],
  // Modules needed for our application
  imports: [
    BrowserModule
  ],
  // Injectable services come here
  providers: [],
  // Main component from which angular should bootstrap with
  bootstrap: [AppComponent]
})
export class AppModule { }
