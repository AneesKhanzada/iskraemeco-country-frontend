import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Country} from './../model/country';

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {
  
  public country = {};

  constructor( private router:Router) { 
    this.country = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {  
  }

}
