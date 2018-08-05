import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../shared/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  constructor() { }

  @Input() beer: Beer;
  ngOnInit() {
  }

}
