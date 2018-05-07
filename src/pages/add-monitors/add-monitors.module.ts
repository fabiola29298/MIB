import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMonitorsPage } from './add-monitors';

@NgModule({
  declarations: [
    AddMonitorsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMonitorsPage),
  ],
})
export class AddMonitorsPageModule {}
