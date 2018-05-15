import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterbabyPage} from '../registerbaby/registerbaby';
 
@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  lugares: any = [
    {nombre: 'lugar 1 ', direccopm: 'direc1', categoria: 'cat1'},
    {nombre: 'lugar 2 ', direccopm: 'direc2', categoria: 'cat2'},
    {nombre: 'lugar3 ', direccopm: 'direc3', categoria: 'cat3'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }
  iraVistaDetalle(){
    // alert('Está funcionando');
    this.navCtrl.push(RegisterbabyPage, {lugar:{}});
  }
  irAVistaE(lugar){
    this.navCtrl.push(RegisterbabyPage, {lugar:{lugar}});
  }

}
