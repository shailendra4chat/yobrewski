import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BeersService } from './beers-service';

import { BeerPage } from '../beer/beer';

@Component({
  selector: 'page-beers',
  templateUrl: 'beers.html',
  providers: [BeersService]
})
export class BeersPage implements OnInit{

  beers: any[];

  constructor(public navCtrl: NavController, public beersService: BeersService) {
    
  }

  getBeers(){
    this.beersService.getBeers().subscribe(
                               beers => {
                                 console.log(beers);
                                 this.beers = beers;
                                }, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });

  }

  getBeerPage(beerId){
    console.log("clicked getBeerPage", beerId)
    this.navCtrl.push(BeerPage, {
      "beerId": beerId
    })
  }

  ngOnInit(){
      this.getBeers()
  }
}
