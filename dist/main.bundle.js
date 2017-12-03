webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"card card-body\">\n    <h4 class=\"card-title\">About</h4>\n    <p class=\"card-text\">Donato has experienced various engineering environments - everything from a 10 person, bootstrapped startup, to a 100k+ employee, corporate environment. Throughout these different environments, Donato has progressed himself and his immediate and indirect teammates.\n        <br>\nDonato has also started two ventures of his own - Paylasso and Arise Investments. Both ventures' products were built out entirely by Donato. </p>\n\n    <h5 class=\"card-title\">Donato's coaching services focus on:</h5>\n    <div class=\"flex-row\">\n        <p><strong>Professional development:</strong> Become a better leader - both technical and personal.</p>\n        <p><strong>Product development:</strong> How to get your products from point A to point B without breaking the bank. Efficiency, procedures, and policies.</p>\n        <p><strong>Product vetting:</strong> Product and business model validation and vetting.</p>\n        <br>\n        <p>Back-end development with Django, Java, and Scala</p>\n        <p>Front-end development with Javascript and React/Redux, jQuery, and Angular</p>\n        <p>Cloud infrastructure management with AWS</p>\n        <p>Configuration management with Puppet, and Chef</p>\n    </div>\n</div>\n<!--/.Panel-->\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <app-jumbotron></app-jumbotron>\n  <app-services></app-services>\n  <app-about></app-about>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hello';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jumbotron_jumbotron_component__ = __webpack_require__("../../../../../src/app/jumbotron/jumbotron.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__jumbotron_jumbotron_component__["a" /* JumbotronComponent */],
            __WEBPACK_IMPORTED_MODULE_7__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer mdb-color center-on-small-only\">\n\n    <!--Footer Links-->\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <!--First column-->\n            <div class=\"col-md-3 offset-md-1\">\n                <h5 class=\"title\">Donato Perconti </h5>\n                <p>Technology and Business Consultant</p>\n            </div>\n            <!--/.First column-->\n\n            <hr class=\"hidden-md-up\">\n\n            <!--Second column-->\n            <!-- <div class=\"col-md-2 offset-md-1\">\n                <h5 class=\"title\">Links</h5>\n                <ul>\n                    <li><a href=\"#!\">Link 1</a></li>\n                    <li><a href=\"#!\">Link 2</a></li>\n                    <li><a href=\"#!\">Link 3</a></li>\n                    <li><a href=\"#!\">Link 4</a></li>\n                </ul>\n            </div> -->\n            <!--/.Second column-->\n\n            <!-- <hr class=\"hidden-md-up\"> -->\n\n            <!--Third column-->\n            <!-- <div class=\"col-md-2\">\n                <h5 class=\"title\">Links</h5>\n                <ul>\n                    <li><a href=\"#!\">Link 1</a></li>\n                    <li><a href=\"#!\">Link 2</a></li>\n                    <li><a href=\"#!\">Link 3</a></li>\n                    <li><a href=\"#!\">Link 4</a></li>\n                </ul>\n            </div> -->\n            <!--/.Third column-->\n\n            <!-- <hr class=\"hidden-md-up\"> -->\n\n            <!--Fourth column-->\n            <div class=\"col-md-2\">\n                <!-- <h5 class=\"title\">Links</h5> -->\n                <ul>\n                    <li><a href=\"https://medium.com/@dperconti\">Blog</a></li>\n                    <li><a (click)=\"form.show()\">Contact</a></li>\n                </ul>\n            </div>\n            <!--/.Fourth column-->\n\n        </div>\n    </div>\n    <!--/.Footer Links-->\n\n    <hr>\n\n    <!--Social buttons-->\n    <div class=\"text-center mb-3\">\n\n        <a href=\"https://twitter.com/dperconti\" class=\"btn-floating btn-small btn-tw waves-light\" mdbRippleRadius><i class=\"fa fa-twitter\"> </i></a>\n        <a href=\"https://www.linkedin.com/in/dperconti/\" class=\"btn-floating btn-small btn-li waves-light\" mdbRippleRadius><i class=\"fa fa-linkedin\"> </i></a>\n        <a href=\"https://github.com/dperconti\" class=\"btn-floating btn-small btn-git waves-light\" mdbRippleRadius><i class=\"fa fa-github\"> </i></a>\n        <a href=\"https://www.instagram.com/dperconti/\" class=\"btn-floating btn-small btn-ins waves-light\" mdbRippleRadius><i class=\"fa fa-instagram\"> </i></a>\n\n    </div>\n    <!--/.Social buttons-->\n\n    <!--Copyright-->\n    <div class=\"footer-copyright\">\n        <div class=\"container-fluid\">\n            © 2017 Copyright: <a href=\"http://www.dperconti.com\"> dperconti.com </a>\n\n        </div>\n    </div>\n    <!--/.Copyright-->\n\n</footer>\n<!--/.Footer-->\n\n<!--Modal: Login with Avatar Form-->\n<div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalLoginAvatar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n\n            <!--Header-->\n            <div class=\"modal-header\">\n                <img src=\"/assets/profile.jpeg\" class=\"rounded-circle img-responsive\">\n            </div>\n            <!--Body-->\n            <div class=\"modal-body text-center mb-1\">\n\n                <h5 class=\"mt-1 mb-2\">Donato Perconti</h5>\n\n                <div class=\"text-center\">\n                    <a class=\"btn btn-cyan mt-1 waves-light\" href=\"mailto:donato.perconti@gmail.com\" mdbRippleRadius>Email</a>\n                </div>\n            </div>\n\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: Login with Avatar Form-->\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-light blue-grey lighten-5 fixed-top scrolling-navbar\">\n\n    <!-- Navbar brand -->\n    <logo><a class=\"navbar-brand\" href=\"#\">Donato Perconti</a></logo>\n\n    <!-- Collapsible content -->\n    <links>\n\n        <!-- Links -->\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" href=\"https://medium.com/@dperconti\" mdbRippleRadius>Blog</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light\" (click)=\"form.show()\" mdbRippleRadius>Contact</a>\n            </li>\n        </ul>\n        <!-- Links -->\n\n    </links>\n    <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->\n\n<!--Modal: Login with Avatar Form-->\n<div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalLoginAvatar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog cascading-modal modal-avatar modal-sm\" role=\"document\">\n        <!--Content-->\n        <div class=\"modal-content\">\n\n            <!--Header-->\n            <div class=\"modal-header\">\n                <img src=\"/assets/profile.jpeg\" class=\"rounded-circle img-responsive\">\n            </div>\n            <!--Body-->\n            <div class=\"modal-body text-center mb-1\">\n\n                <h5 class=\"mt-1 mb-2\">Donato Perconti</h5>\n\n                <div class=\"text-center\">\n                    <a class=\"btn btn-cyan mt-1 waves-light\" href=\"mailto:donato.perconti@gmail.com\" mdbRippleRadius>Email</a>\n                </div>\n            </div>\n\n        </div>\n        <!--/.Content-->\n    </div>\n</div>\n<!--Modal: Login with Avatar Form-->\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/jumbotron/jumbotron.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 100px;\">\n    <h1 class=\"h1-responsive\">Technology and Business Consulting and Coaching</h1>\n    <p class=\"lead\">Behind Every Great Leader Are Great Mentors And Advisors</p>\n    <hr class=\"my-2\">\n    <p>Your business is not your hobby. Your business is your creation at work. I provide consulting and coaching services for tech-based companies in Portland, OR. My goal is to provide your company with the means necessary to build and maintain scalable, secure, and intuitive software to enable your software to succeed.\n    </p>\n    <!-- <a class=\"btn btn-primary btn-lg\" role=\"button\">Learn more</a> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jumbotron/jumbotron.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jumbotron/jumbotron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumbotronComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumbotronComponent = (function () {
    function JumbotronComponent() {
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    return JumbotronComponent;
}());
JumbotronComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-jumbotron',
        template: __webpack_require__("../../../../../src/app/jumbotron/jumbotron.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jumbotron/jumbotron.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], JumbotronComponent);

//# sourceMappingURL=jumbotron.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n\n  <div class=\"col\">\n      <!-- Card -->\n    <div class=\"card card-image mb-4 aqua-gradient\">\n\n        <!-- Content -->\n        <div class=\"text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4\" style=\"min-height: 350px;\">\n            <div>\n                <h3 class=\"card-title\">Scalable, Secure, and Intuitive</h3>\n                <p>Current technology and emerging trends are difficult to stay on top of. I can ensure that you are using the best technology for your company for the present and for the long term goals.</p>\n                <!-- <a class=\"btn btn-pink waves-light\" mdbRippleRadius><i class=\"fa fa-clone left\"></i> View project</a> -->\n            </div>\n        </div>\n        <!-- Content -->\n    </div>\n    <!-- Card -->\n  </div>\n\n  <div class=\"col\">\n    <!-- Card -->\n    <div class=\"card card-image mb-4 purple-gradient\">\n\n        <!-- Content -->\n        <div class=\"text-white text-center d-flex align-items-center py-5 px-4\" style=\"min-height: 350px;\">\n            <div>\n              <h3 class=\"card-title\">Management</h3>\n              <br>\n              <p>The bottom line of a successful business is the ability to get it done. Process efficiency, communication, and better relationships play a key part in productivity. I can assist in refining and progress these processes. </p>\n            </div>\n        </div>\n        <!-- Content -->\n    </div>\n    <!-- Card -->\n  </div>\n\n  <div class=\"col\">\n    <!-- Card -->\n    <div class=\"card card-image mb-4 blue-gradient\">\n\n        <!-- Content -->\n        <div class=\"text-white text-center d-flex align-items-center py-5 px-4\" style=\"min-height: 350px;\">\n            <div>\n              <h3 class=\"card-title\">Product Vision</h3>\n              <br>\n              <p>\nThe first iteration of a product is often done in haste. Unfortunately, businesses often are unable to progress past that original product and vision. I can help your business plan and execute on numerous evolutions of your product to ensure that the product advances. </p>\n            </div>\n        </div>\n        <!-- Content -->\n    </div>\n    <!-- Card -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/services/services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orange-gradient {\n  background: linear-gradient(40deg, #FFD86F, #FC6262); }\n\n.purple-gradient {\n  background: linear-gradient(40deg, #ff6ec4, #7873f5); }\n\n.peach-gradient {\n  background: linear-gradient(40deg, #FFD86F, #FC6262); }\n\n.aqua-gradient {\n  background: linear-gradient(40deg, #2096ff, #05ffa3); }\n\n.blue-gradient {\n  background: linear-gradient(40deg, #45cafc, #303f9f); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("../../../../../src/app/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/services.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map