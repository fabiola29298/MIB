import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddbabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbaby',
  templateUrl: 'addbaby.html',
})
export class AddbabyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  presentLoading() {
   let loader = this.loadingCtrl.create({
     content: "Please wait...",
     duration: 3000
   });
   loader.present();
 }

}
