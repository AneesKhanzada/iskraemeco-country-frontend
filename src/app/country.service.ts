import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Country} from './model/country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  BASE_URL = "http://localhost:8080";
  
  constructor(private http: HttpClient) { }

  getAllCountries(){
    return this.http.get(this.BASE_URL+"/");
  }

}
