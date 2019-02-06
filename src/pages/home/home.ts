import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expandedHeader: boolean = false;
  addressList = ["Address 1", "Address 2", "Address 3", "Address 4", "Address 5"];
  selectedAddressIndex = 0;
  restaurantsList = [
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using " },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding1.png", logo: "assets/imgs/logo2.png", distance: 3.00, time: 30, rate: 4.5 },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo3.png", distance: 3.00, time: 30, rate: 4.5 },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5 }
  ];
  offScreens = ["assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png"]

  constructor(
    public navCtrl: NavController) {

  }

  expandHeader() {
    this.expandedHeader = !this.expandedHeader;
  }
}
