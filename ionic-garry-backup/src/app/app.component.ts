import { Component, ViewChild } from '@angular/core';
import { ModalController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Splash } from '../pages/splash/index';

import { LoginPage } from '../pages/login/index';
import { ForgotPasswordPage } from '../pages/login/forgot-password/index';
import { TenantsPage } from '../pages/tenants/index';
import { AddTenantPage } from '../pages/tenants/add/index';
import { EditTenantPage } from '../pages/tenants/edit/index';
import { CasePage } from '../pages/case/index';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public modalCtrl: ModalController
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: LoginPage },
      { title: 'Tenants',   component: TenantsPage },
      { title: 'Users',     component: LoginPage },
      { title: 'Sites',     component: LoginPage },
      { title: 'Alarms',    component: LoginPage },
      { title: 'Cases',     component: CasePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
