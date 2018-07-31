import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'
import { DisplayPage } from '../display/display';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  public image1: string;
  public image2: string;
  public image3: string;
  public image4: string;

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture1(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,

      targetWidth: 1000,
      targetHeight: 1000
    }).then((ImageData) =>{
      this.image1 = "data:image/jpeg;base64," + ImageData;
    }, (err) => {
      console.log(err);
    });
  }

  takePicture2(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,

      targetWidth: 1000,
      targetHeight: 1000
    }).then((ImageData) =>{
      this.image2 = "data:image/jpeg;base64," + ImageData;
    }, (err) => {
      console.log(err);
    });
  }

  takePicture3(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,

      targetWidth: 1000,
      targetHeight: 1000
    }).then((ImageData) =>{
      this.image3 = "data:image/jpeg;base64," + ImageData;
    }, (err) => {
      console.log(err);
    });
  }

  takePicture4(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,

      targetWidth: 1000,
      targetHeight: 1000
    }).then((ImageData) =>{
      this.image4 = "data:image/jpeg;base64," + ImageData;
    }, (err) => {
      console.log(err);
    });
  }

  toDisplayPage(){
    this.navCtrl.push(DisplayPage, 
      {image1: this.image1,
      image2: this.image2,
      image3: this.image3,
      image4: this.image4});
}
}