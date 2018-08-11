import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Beer } from '../../../shared/beer';
import { BeerService } from '../../../shared/beer.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  beer: Beer;
  relatedBeer: {
    abv: Beer[],
    ebc: Beer[],
    ibu: Beer[]
  } = { abv: [], ebc: [], ibu: [] };
  isLodaingRelated = {
    abv: true,
    ebc: true,
    ibu: true
  };
  isLoading = true;

  constructor(
    private router: Router,
    private BeerService: BeerService,
    private route: ActivatedRoute
  ) { }

  getInit() {
    this.route.params.subscribe(params => {
      this.BeerService.getSingleBeer(params['id'])
        .subscribe((beer: Beer) => {
          this.beer = beer[0];
          this.isLoading = false;
          this.getRelatedBeers();
        });
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.getInit();
  }

  getIntiger(value: string): number {
    return Math.floor(parseInt(value, 10));
  }

  getRelatedBeers(): void {
    const abv = this.getIntiger(this.beer.abv);
    const ebc = this.getIntiger(this.beer.ebc);
    const ibu = this.getIntiger(this.beer.ibu);

    this.BeerService.getRelatedByAbv(abv)
      .subscribe((beers: Beer[]) => {
        this.relatedBeer.abv = beers.sort((v1, v2) => {
          return +v1.abv - +v2.abv;
        }).reverse();
        this.isLodaingRelated.abv = false;
      });
    this.BeerService.getRelatedByEbc(ebc)
      .subscribe((beers: Beer[]) => {
        this.relatedBeer.ebc = beers.sort((v1, v2) => {
          return +v1.ebc - +v2.ebc;
        }).reverse();
        this.isLodaingRelated.ebc = false;

      });
    this.BeerService.getRelatedByIbu(ibu)
      .subscribe((beers: Beer[]) => {
        this.relatedBeer.ibu = beers.sort((v1, v2) => {
          return +v1.ibu - +v2.ibu;
        }).reverse();
        this.isLodaingRelated.ibu = false;
      });
  }

  hideDetails(): void {
    this.router.navigateByUrl('listing');
    document.querySelector('html').style.overflow = 'auto';
  }
}
