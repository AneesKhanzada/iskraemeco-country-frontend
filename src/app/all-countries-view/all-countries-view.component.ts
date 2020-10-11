import { Component, OnInit } from '@angular/core';
import { CountryService } from './../country.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Country} from './../model/country';
@Component({
  selector: 'app-all-countries-view',
  templateUrl: './all-countries-view.component.html',
  styleUrls: ['./all-countries-view.component.css']
})
export class AllCountriesViewComponent implements OnInit {

  countries:Country[];
  
  constructor(private countryService: CountryService, private router:Router) { }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe((data: any[])=>{
      this.countries = data;
    })  
  }

  gotoCountry(country:Country) {
    this.router.navigateByUrl('/country', { state: country });
  }

}