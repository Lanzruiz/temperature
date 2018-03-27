webpackJsonp([1],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadphotoPageModule", function() { return UploadphotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadphoto__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadphotoPageModule = /** @class */ (function () {
    function UploadphotoPageModule() {
    }
    UploadphotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uploadphoto__["a" /* UploadphotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uploadphoto__["a" /* UploadphotoPage */]),
            ],
        })
    ], UploadphotoPageModule);
    return UploadphotoPageModule;
}());

//# sourceMappingURL=uploadphoto.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadphotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(223);
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
 * Generated class for the UploadphotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadphotoPage = /** @class */ (function () {
    function UploadphotoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploadphotoPage.prototype.doUpload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["c" /* RegsuccessPage */]);
    };
    UploadphotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploadphoto',template:/*ion-inline-start:"/Users/hurdmanphilippines/Desktop/Aptiture/monika-project/ionic/src/pages/uploadphoto/uploadphoto.html"*/'\n\n<ion-content class="master uploadphoto-content" padding>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n  <div class="login-box">\n     <form (submit)="doUpload()">\n    \n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-label class="text-underline">Upload a photo here</ion-label>\n          </ion-list>\n          <ion-list>\n            <ion-label>or</ion-label>\n          </ion-list>\n          <ion-list>\n            <ion-label><ion-icon ios="ios-camera" class="con-camera" md="md-camera"></ion-icon> Take a picture</ion-label>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col margin-top-40">\n          <button class="submit-btn" ion-button color="primary" block>Next</button>\n         \n        </ion-col>\n      </ion-row>\n      \n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/hurdmanphilippines/Desktop/Aptiture/monika-project/ionic/src/pages/uploadphoto/uploadphoto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UploadphotoPage);
    return UploadphotoPage;
}());

//# sourceMappingURL=uploadphoto.js.map

/***/ })

});
//# sourceMappingURL=1.js.map