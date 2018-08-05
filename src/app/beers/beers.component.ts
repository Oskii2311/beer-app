import { Component, OnInit } from '@angular/core';
import { BeerService } from '../shared/beer.service';
import { Beer } from '../shared/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  isLoading = false;
  pageNumber = 1;
  constructor(private BeerService: BeerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getBeers(this.pageNumber, 20)
  }

  getBeers(pageNumber, amountsOfBeer) {
    this.isLoading = true;
    this.BeerService.getBeers(pageNumber, amountsOfBeer)
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
        this.isLoading = false;
        this.pageNumber += 1;
      });
  }

}
