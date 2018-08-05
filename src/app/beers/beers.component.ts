import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/beer.service';
import { Beer } from '../shared/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  constructor(private BeerService: BeerService) { }
  beers: Beer[];
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;
    this.getBeers(1, 20)
  }

  getBeers(pageNumber, amountsOfBeer) {
    this.BeerService.getBeers(pageNumber, amountsOfBeer)
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
        this.isLoading = false;
      });
  }

}
