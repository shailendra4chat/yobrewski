import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BeersService } from '../beers/beers-service';

@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
  providers: [BeersService]
})
export class BeerPage{

  beerObj: any;
  beerId: number;

  constructor(public navCtrl: NavController, public params:NavParams, public beersService: BeersService) {
    this.beerId = params.get("beerId");
    this.beersService.getBeer(this.beerId).subscribe(
                               beer => {
                                 this.beerObj = beer[0];
                                 console.log(this.beerObj);
                                }, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }
}
