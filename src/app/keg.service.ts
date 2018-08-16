import { Injectable } from '@angular/core';
import { Keg } from '../models/keg.model';
import { KEGS } from './mock-kegs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.kegs = database.list('kegs');
  }

  getKegs() {
    return this.kegs;
  }

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }

  getKegByID(kegId: string) {
    return this.database.object('kegs/' + kegId);
  }

  updateKeg(selectedKeg) {
    let kegInFirebase = this.getKegByID(selectedKeg.$key);
    kegInFirebase.update({
      alcContent: selectedKeg.alcContent,
      name: selectedKeg.name,
      brand: selectedKeg.brand,
      price: selectedKeg.price
    });
  }

  updatePints(localUpdateKeg) {
    let kegInFirebase = this.getKegByID(localUpdateKeg.$key);
    kegInFirebase.update({ pintsLeft: localUpdateKeg.pintsLeft });
  }

  deleteKeg(drainedKeg) {
    let kegInFirebase = this.getKegByID(drainedKeg.$key);
    kegInFirebase.remove();
  }
}
