import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from '../../models/keg.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-tap-menu',
  templateUrl: './tap-menu.component.html',
  styleUrls: ['./tap-menu.component.css'],
  providers: [KegService]
})
export class TapMenuComponent implements OnInit {

  kegs: FirebaseListObservable<any[]>;
  selectedKeg = null;
  newKeg = null;
  sale = null;

  constructor(private router: Router, private kegService: KegService) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }





  editKeg(keg: Keg) {
    if (this.selectedKeg === keg) {
      this.selectedKeg = null;
    } else {
    this.selectedKeg = keg;
    }
  }

  endEdit() {
    this.selectedKeg = null;
  }

  addKeg() {
    this.newKeg = true;
  }

  addNewKeg(name: string, brand: string, price: number, alcContent: number) {
    if (name === undefined || brand === undefined || price === undefined || alcContent === undefined) {
      this.newKeg = null;
    } else {
      const keg: Keg = new Keg(name, brand, price, alcContent);
      this.kegService.addKeg(keg);
      this.newKeg = null;
    }
  }

  startSale(keg: Keg) {
    if (this.sale === keg) {
      this.sale = null;
    } else {
    this.sale = keg;
    }
  }

  sellPint(keg: Keg, pints) {
    keg.pintsLeft -= pints;
  }

  pintsRunningOut(keg) {
    if (keg.pintsLeft <= 10) {
      return 'pintDanger';
    } else if (keg.pintsLeft <= 50) {
      return 'pintWarning';
    } else if (keg.pintsLeft <= 100) {
      return 'pintOkay';
    } else {
      return 'pintPlenty';
    }
  }

  priceColor(keg) {
    if (keg.price <= 2) {
      return 'pintPlenty';
    } else if (keg.price <= 4) {
      return 'pintOkay';
    } else {
      return 'pintWarning';
    }
  }

  // sorted = null;
  //
  // sortABV(){
  //   if (this.sorted == null) {
  //     this.kegs.sort(function(a, b){return a.alcContent - b.alcContent});
  //     this.sorted = "DESC";
  //   } else {
  //     this.kegs.sort(function(a, b){return b.alcContent -  a.alcContent});
  //     this.sorted = null;
  //   }
  // }

}
