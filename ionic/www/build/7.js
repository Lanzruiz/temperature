webpackJsonp([7],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegsuccessPageModule", function() { return RegsuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsuccess__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegsuccessPageModule = /** @class */ (function () {
    function RegsuccessPageModule() {
    }
    RegsuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__regsuccess__["a" /* RegsuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__regsuccess__["a" /* RegsuccessPage */]),
            ],
        })
    ], RegsuccessPageModule);
    return RegsuccessPageModule;
}());

//# sourceMappingURL=regsuccess.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegsuccessPage; });
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
 * Generated class for the RegsuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegsuccessPage = /** @class */ (function () {
    function RegsuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegsuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegsuccessPage');
    };
    RegsuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsuccess',template:/*ion-inline-start:"/Users/hurdmanphilippines/Desktop/Aptiture/monika-project/ionic/src/pages/regsuccess/regsuccess.html"*/'\n\n<ion-content class="master regsuccess-content" padding>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n  <div class="login-box">\n     <form (submit)="doUpload()">\n    \n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-label>Success!</ion-label>\n          </ion-list>\n          <ion-list>\n            <ion-label class="paragraph">Your profile has been successfully <br/>\n                 created. Please proceed on the user<br/>\n                 profile to complete some of the<br/>\n                 information we need. \n            </ion-label>\n          </ion-list>\n          \n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col margin-top-40">\n          <button class="submit-btn" ion-button color="primary" block>Done</button>\n         \n        </ion-col>\n      </ion-row>\n      \n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hurdmanphilippines/Desktop/Aptiture/monika-project/ionic/src/pages/regsuccess/regsuccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegsuccessPage);
    return RegsuccessPage;
}());

//# sourceMappingURL=regsuccess.js.map

/***/ })

});
//# sourceMappingURL=7.js.map