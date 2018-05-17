import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    login:string = "LoginPage";
    addbaby :string = "AddbabyPage";
    problemas :string = "ProblemassaludPage";
    tabla :string = "TablaparametrosPage";

  rootPage:string = "WelcomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pagina:any){
      this.rootPage = pagina;
      this.menuCtrl.close();
  }
/*  irAtras(){
    this.navCtrl.pop();
  }
  irRoot(){
    this.navCtrl.popToRoot();
  }
  */
}
