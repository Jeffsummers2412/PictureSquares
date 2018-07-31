import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';
import { CameraPage } from '../camera/camera';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authService: AuthService) {
  }

  goToCameraPage(form: NgForm){
      this.authService.signin(form.value.email, form.value.password)
      .then(data => this.navCtrl.push(CameraPage))
      .catch(error => console.log(error))
  }
  
}