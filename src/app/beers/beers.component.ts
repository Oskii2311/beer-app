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
  beers: Array<Beer>;

  ngOnInit() {
    this.BeerService.getBeers(1, 20)
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
        console.log(this.beers)

      });
  }

}
