import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 @IonicPage()
@Component({
  selector: 'page-registerbaby',
  templateUrl: 'registerbaby.html',
})
export class RegisterbabyPage {
  lugar: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lugar=navParams.get('lugar');
  }

 

}
