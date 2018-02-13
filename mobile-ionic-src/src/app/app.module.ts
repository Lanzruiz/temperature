import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/index';
import { ForgotPasswordPage } from '../pages/login/forgot-password/index';
import { SignupPage } from '../pages/login/signup/index';
import { ProfileAuthentication } from '../pages/login/signup/authenticate/index';
import { TenantsPage } from '../pages/tenants/index';
import { AddTenantPage } from '../pages/tenants/add/index';
import { EditTenantPage } from '../pages/tenants/edit/index';
import { Splash } from '../pages/splash/index';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Splash,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    ProfileAuthentication,
    TenantsPage,
    AddTenantPage,
    EditTenantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Splash,
    LoginPage,
    ForgotPasswordPage,
    SignupPage,
    ProfileAuthentication,
    TenantsPage,
    AddTenantPage,
    EditTenantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
