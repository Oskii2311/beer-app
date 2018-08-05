import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = `https://api.punkapi.com/v2/beers`;

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }
  
  getBeers(pageNumber, amountsOfBeer) {
    return this.http.get(`${url}?page=${pageNumber}&per_page=${amountsOfBeer}`);
  }

}
