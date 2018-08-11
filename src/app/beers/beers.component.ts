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
  infinity = false;
  noMoreBeers = false;

  constructor(private BeerService: BeerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getBeers(this.pageNumber, 20);
  }

  showScroll(): void {
    document.querySelector('body').style.overflow = 'auto';
  }

  getNoDataInfo(): void {
    this.noMoreBeers = true;
  }

  getCurrentBeers(beers: Beer[]): void {
    this.beers ?
      this.beers = [...this.beers, ...beers] :
      this.beers = [...beers];
  }

  getBeers(pageNumber, amountsOfBeer) {
    this.BeerService.getBeers(pageNumber, amountsOfBeer)
      .subscribe((beers: Beer[]) => {
        if (beers.length === 0) {
          this.getNoDataInfo();
          this.showScroll();
        } else {
          this.isLoading = false;
          this.pageNumber += 1;
          this.getCurrentBeers(beers);
          this.infinity = false;
          this.showScroll();
        }
      });
  }

  hideScroll(): void {
    document.querySelector('body').style.overflow = 'hidden';
  }

  onScroll(event): void {
    if (!this.noMoreBeers) {
      const scroll = Math.ceil(window.pageYOffset);
      const limit = Math.round(document.body.offsetHeight - window.innerHeight);

      if (scroll >= limit) {
        this.infinity = true;
        this.getBeers(this.pageNumber, 20);
        if (this.infinity === true) {
          this.hideScroll();
        }
      }
    }
  }
}
