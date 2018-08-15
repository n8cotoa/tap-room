import { Component } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I\'d Tap That';

  kegs: Keg[] = [
    new Keg('Kegger', 'Keg & Friends', 3.50, 4.5),
    new Keg('Hardest Cider', 'Keg Land', 4.50, 7.5),
    new Keg('Reds Pale Ale', 'Are You Keggers?', 5.50, 8.5)
  ];

  selectedKeg = null;

  newKeg = null;

  sale = null;

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

  addNewKeg(name: string, brand: string, price: number, alcContent:number){
    if (name === undefined || brand === undefined || price === undefined || alcContent === undefined) {
      this.newKeg = null;
    } else {
      let keg = new Keg(name, brand, price, alcContent);
      this.kegs.push(keg);
      this.newKeg = null;
      console.log(this.kegs)
    }
  }

  startSale(keg: Keg) {
    if (this.sale === keg) {
      this.sale = null;
    } else {
    this.sale = keg;
    }
  }

}
