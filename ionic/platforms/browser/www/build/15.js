webpackJsonp([15],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthcodePageModule", function() { return AuthcodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authcode__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthcodePageModule = /** @class */ (function () {
    function AuthcodePageModule() {
    }
    AuthcodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__authcode__["a" /* AuthcodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__authcode__["a" /* AuthcodePage */]),
            ],
        })
    ], AuthcodePageModule);
    return AuthcodePageModule;
}());

//# sourceMappingURL=authcode.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AuthcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthcodePage = /** @class */ (function () {
    function AuthcodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AuthcodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthcodePage');
    };
    AuthcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authcode',template:/*ion-inline-start:"/Users/hurdmanphilippines/Desktop/Aptiture/monika-project/mvc/mobile/src/pages/authcode/authcode.html"*/'\n\n<ion-content class="master auth-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-row>\n      <img class="logo" src="../assets/imgs/logo@2x.png"/>\n    </ion-row>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n     <form (submit)="doLogin()">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item class="top-radius-5 bottom-radius-5">\n               <ion-input type="email" name="email" placeholder="Enter your code"></ion-input>\n            </ion-item>            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button class="submit-btn" ion-button color="primary" block>Confirm</button>\n         \n        </ion-col>\n      </ion-row>\n     \n      \n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/hurdmanphilippines/Desktop/Aptiture/monika-project/mvc/mobile/src/pages/authcode/authcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AuthcodePage);
    return AuthcodePage;
}());

//# sourceMappingURL=authcode.js.map

/***/ })

});
//# sourceMappingURL=15.js.map