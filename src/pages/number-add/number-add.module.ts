import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberAddPage } from './number-add';

@NgModule({
  declarations: [
    NumberAddPage,
  ],
  imports: [
    IonicPageModule.forChild(NumberAddPage),
  ],
})
export class NumberAddPageModule {}
