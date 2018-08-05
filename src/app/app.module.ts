import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BeersComponent } from './beers/beers.component';
import { BeerService } from './shared/beer.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
