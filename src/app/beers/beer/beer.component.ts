import { Component, OnInit, Input, Output } from '@angular/core';
import { Beer } from '../../shared/beer';
import { EventEmitter } from '../../../../node_modules/protractor';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  @Input() beer: Beer;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDetails(): void {
    this.router.navigate([{ outlets: { detail: ['detail', this.beer.id] } }]);
  }

}
