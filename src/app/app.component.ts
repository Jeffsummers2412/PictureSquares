import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AuthService } from '../services/auth';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { CameraPage } from '../pages/camera/camera';
import { AboutPage } from '../pages/about/about';
import { DisplayPage } from '../pages/display/display';


@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  rootPage:any = SigninPage;
  signinPage = SigninPage;
  registerPage = RegisterPage;
  aboutPage = AboutPage;
  displayPage = DisplayPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;


  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private authService: AuthService,
    private menuCtrl: MenuController) {
      firebase.initializeApp({
        
        apiKey: "AIzaSyCU3eUGc6BrfYVFI3yBM7GL4DcCP5IOPx4",
        authDomain: "p5summers-58bfe.firebaseapp.com"

    

      });
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.isAuthenticated = true;
          this.rootPage = CameraPage;
        }else{
          this.isAuthenticated = false;
          this.rootPage = SigninPage;
        }
      });
      platform.ready().then(() => {
     

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}