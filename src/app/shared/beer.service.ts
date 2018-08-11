import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINT_BEERS } from './urls';

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers(pageNumber, amountsOfBeer) {
    return this.http.get(`${END_POINT_BEERS}?page=${pageNumber}&per_page=${amountsOfBeer}`);
  }

  getSingleBeer(id) {
    return this.http.get(`${END_POINT_BEERS}?ids=${id}`);
  }

  getRelatedByAbv(value) {
    return this.http.get(`${END_POINT_BEERS}?abv_gt=${value}`);
  }

  getRelatedByIbu(value) {
    return this.http.get(`${END_POINT_BEERS}?ibu_gt=${value}`);
  }

  getRelatedByEbc(value) {
    return this.http.get(`${END_POINT_BEERS}?ebc_gt=${value}`);
  }
}
