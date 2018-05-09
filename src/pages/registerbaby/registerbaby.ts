import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

 @IonicPage()
@Component({
  selector: 'page-registerbaby',
  templateUrl: 'registerbaby.html',
})
export class RegisterbabyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterbabyPage');
  }
//
//     borrar_baby( idx:number ){
//
//       this.bebes.splice( idx, 1 );
//
//     }
//
//     recargar_baby( refresher:Refresher ){
//
//       console.log("Inicio del refresh");
//
//       setTimeout( ()=>{
// //hol
//             console.log("Termino el refresh");
//             this.bebes = BABIES.slice(0);
//             refresher.complete();
//
//       },1500)
//
//     }
//
//     reordenar_baby( indices:any ){
//
//       console.log(indices);
//       this.bebes = reorderArray( this.bebes, indices );
//
//     }
}
