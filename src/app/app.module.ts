import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { CameraPage } from '../pages/camera/camera';
import { AuthService } from '../services/auth';
import { Camera } from '../../node_modules/@ionic-native/camera';
import { AboutPage } from '../pages/about/about';
import { DisplayPage } from '../pages/display/display';
import { Screenshot } from '../../node_modules/@ionic-native/screenshot';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    RegisterPage,
    CameraPage,
    AboutPage,
    DisplayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    RegisterPage,
    CameraPage,
    AboutPage, 
    DisplayPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Camera,
    Screenshot
  ]
})
export class AppModule {}
