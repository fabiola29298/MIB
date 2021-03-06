import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
 

export const firebaseConfig = {
  apiKey: "AIzaSyDnQLopzd8oGw3p9CIDTx5Isfo1zcKlr2o",
    authDomain: "enero2017firebase.firebaseapp.com",
    databaseURL: "https://enero2017firebase.firebaseio.com",
    projectId: "enero2017firebase",
    storageBucket: "enero2017firebase.appspot.com",
    messagingSenderId: "894981594921"
};

@NgModule({
  declarations: [
    MyApp


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atras'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
