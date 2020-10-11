import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCountriesViewComponent } from './all-countries-view/all-countries-view.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountryService } from './country.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AllCountriesViewComponent,
    CountryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],

  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
