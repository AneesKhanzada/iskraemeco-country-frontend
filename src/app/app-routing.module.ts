import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCountriesViewComponent } from './all-countries-view/all-countries-view.component';
import { CountryViewComponent } from './country-view/country-view.component';

const routes: Routes = [
  { path: 'country', component: CountryViewComponent, data :{name:"Invalid",continent:"",population:"",life_expectancy:0,country_language:""} },
  { path: 'countries', component: AllCountriesViewComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
