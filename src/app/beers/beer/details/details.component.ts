import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from '../../../shared/beer';
import { BeerService } from '../../../shared/beer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() beer: Beer;
  relatedBeer: {
    abv: Beer[],
    ebc: Beer[],
    ibu: Beer[]
  } = { abv: [], ebc: [], ibu: [] };
  isLodaing = {
    abv: false,
    ebc: false,
    ibu: false
  }
  @Output() closeModal = new EventEmitter<any>();
  constructor(private BeerService: BeerService) { }

  ngOnInit() {
    this.isLodaing = {
      abv: true,
      ebc: true,
      ibu: true
    }
    const abv = Math.floor(parseInt(this.beer.abv, 10));
    const ebc = Math.floor(parseInt(this.beer.ebc, 10));
    const ibu = Math.floor(parseInt(this.beer.ibu, 10));

    this.BeerService.getRelatedByAbv(abv)
      .subscribe((beers: Beer[]) => {
        this.relatedBeer.abv = beers.sort((v1, v2) => {
          return +v1.abv - +v2.abv;
        }).reverse();
        this.isLodaing.abv = false;
      });
    this.BeerService.getRelatedByEbc(ebc)
      .subscribe((beers: Beer[]) => {
        this.relatedBeer.ebc = beers.sort((v1, v2) => {
          return +v1.ebc - +v2.ebc;
        }).reverse();
        this.isLodaing.ebc = false;

      });
    this.BeerService.getRelatedByIbu(ibu)
      .subscribe((beers: Beer[]) => {
        this.relatedBeer.ibu = beers.sort((v1, v2) => {
          return +v1.ibu - +v2.ibu;
        }).reverse();
        this.isLodaing.ibu = false;
      });
  }
  emitCloseModal() {
    this.closeModal.emit();
  }

}
