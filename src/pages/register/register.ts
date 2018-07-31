import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms'
import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private authService: AuthService,
    private alertController: AlertController) {
  }

 onRegister(form: NgForm){
  this.authService.register(form.value.email, form.value.password)
   .then(data => this.navCtrl.push(SigninPage))
   .catch(error => {
     let alert = this.alertController.create({
       title: error,
       buttons: ['ok']
     })
     alert.present();
   });
 }
}