import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Keg } from '../../models/keg.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css'],
  providers: [KegService]
})
export class AdminPortalComponent implements OnInit {
  kegs: any[];
  selectedKeg = null;
  newKeg = null;
  sale = null;
  ABVsorted = null;
  priceSorted = null;
  brandSorted = null;
  nameSorted = null;
  constructor(private router: Router, private kegService: KegService) { }

  ngOnInit() {
    this.kegService.getKegs().subscribe(kegs => this.kegs = kegs)
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

  sortABV(){
    if (this.ABVsorted == null) {
      this.kegs.sort(function(a, b){return a.alcContent - b.alcContent});
      this.ABVsorted = "DESC";
    } else {
      this.kegs.sort(function(a, b){return b.alcContent -  a.alcContent});
      this.ABVsorted = null;
    }
  }

  sortPrice(){
    if (this.priceSorted == null) {
      this.kegs.sort(function(a, b){return a.price - b.price});
      this.priceSorted = "DESC";
    } else {
      this.kegs.sort(function(a, b){return b.price -  a.price});
      this.priceSorted = null;
    }
  }

  sortBrand() {
    if (this.brandSorted == null) {
      this.kegs.sort(function(a, b){
        if (a.brand > b.brand) {
          return -1
        } else {
          return 1
        }
      });
      this.brandSorted = "DESC";
    } else {
      this.kegs.sort(function(a, b){
        if (a.brand < b.brand) {
          return -1
        } else {
          return 1
        }
      });
      this.brandSorted = null;
    }
  }

  sortName() {
    if (this.nameSorted == null) {
      this.kegs.sort(function(a, b){
        if (a.name > b.name) {
          return -1
        } else {
          return 1
        }
      });
      this.nameSorted = "DESC";
    } else {
      this.kegs.sort(function(a, b){
        if (a.name < b.name) {
          return -1
        } else {
          return 1
        }
      });
      this.nameSorted = null;
    }
  }

}
