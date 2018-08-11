import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './beers/beer/details/details.component';
import { BeersComponent } from './beers/beers.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: BeersComponent },
  {
    path: 'detail/:id',
    component: DetailsComponent,
    outlet: 'detail'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
