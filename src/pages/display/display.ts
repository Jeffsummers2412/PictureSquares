import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  public image1: string;
  public image2: string;
  public image3: string;
  public image4: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenshot: Screenshot) {
    this.image1 = navParams.get("image1");
    this.image2 = navParams.get("image2");
    this.image3 = navParams.get("image3");
    this.image4 = navParams.get("image4");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

savePicture(){
  this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then().catch();
}

}
