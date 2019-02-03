(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/pug-loader/index.js!./src/app/modules/main/home/home.component.pug":
/*!********************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/modules/main/home/home.component.pug ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv id=\"homeDashboardContainer\"\u003E\u003Cmat-toolbar class=\"example-toolbar\" color=\"primary\"\u003E\u003Cdiv class=\"langFlag flag\" [ngClass]=\"{'flag-fr':translate.currentLang == 'fr', 'flag-gb':translate.currentLang == 'en'}\" (click)=\"changeLang()\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton class=\"menu\" mat-icon-button=\"\"\u003E\u003Cmat-icon\u003Emenu\u003C\u002Fmat-icon\u003E\u003C\u002Fbutton\u003E\u003Cdiv class=\"toolBarContainer\"\u003E\u003Cdiv class=\"topText\"\u003E{{ '1' | translate }}\u003C\u002Fdiv\u003E\u003Cdiv class=\"bottomText\"\u003E\u003Cdiv class=\"txt\"\u003E{{ '2' | translate }}\u003C\u002Fdiv\u003E\u003Cdiv class=\"txt\"\u003E{{ '3' | translate }}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmat-toolbar\u003E\u003Cdiv class=\"globalContainer\"\u003E\u003Cdiv id=\"topPage\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"scene01Container\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./includes/scene01/scene01.pug */ "./src/app/modules/main/home/includes/scene01/scene01.pug")) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-loader/index.js!./src/app/modules/main/home/includes/scene01/scene01.pug":
/*!******************************************************************************************!*\
  !*** ./node_modules/pug-loader!./src/app/modules/main/home/includes/scene01/scene01.pug ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"sceneContainer\"\u003E\u003Cdiv class=\"stargateContainer\"\u003E\u003Cdiv class=\"stargate-body\"\u003E\u003Cdiv class=\"stargate-turning-part\" [ngClass]=\"{'turnAnimation':stargateisTurning}\"\u003E\u003Cdiv class=\"symbolContainer\" *ngFor=\"let symbol of stargateNumberOfSymbols; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*9+'deg)'}\"\u003E\u003Cdiv class=\"buttonSymbol\"\u003E\u003Cdiv class=\"symbol\"\u003E{{symbol}}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-center\" (click)=\"rotateStargate()\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronsContainer\"\u003E\u003Cdiv class=\"chevronContainer chevron1Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron2Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron3Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron4Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron4\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron5Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron5\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron6Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron6\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron7Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron7\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron8Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron8\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron9Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron9\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    initialNavigation: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/main/main.module */ "./src/app/modules/main/main.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _modules_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n "

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'root',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



// import { FlexLayoutModule } from '@angular/flex-layout'
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // MatAutocompleteModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                // MatButtonToggleModule,
                // MatCardModule,
                // MatBottomSheetModule,
                // MatCheckboxModule,
                // MatChipsModule,
                // MatDatepickerModule,
                // MatDialogModule,
                // MatDividerModule,
                // MatExpansionModule,
                // MatGridListModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                // MatInputModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                // MatNativeDateModule,
                // MatPaginatorModule,
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                // MatRadioModule,
                // MatRippleModule,
                // MatSelectModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                // MatSliderModule,
                // MatSlideToggleModule,
                // MatSnackBarModule,
                // MatSortModule,
                // MatStepperModule,
                // MatTableModule,
                // MatTabsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            ],
            exports: [
                // MatAutocompleteModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                // MatButtonToggleModule,
                // MatCardModule,
                // MatBottomSheetModule,
                // MatCheckboxModule,
                // MatChipsModule,
                // MatDatepickerModule,
                // MatDialogModule,
                // MatDividerModule,
                // MatExpansionModule,
                // MatGridListModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                // MatInputModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                // MatNativeDateModule,
                // MatPaginatorModule,
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                // MatRadioModule,
                // MatRippleModule,
                // MatSelectModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                // MatSliderModule,
                // MatSlideToggleModule,
                // MatSnackBarModule,
                // MatSortModule,
                // MatStepperModule,
                // MatTableModule,
                // MatTabsModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/main/cssPart/cssPart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/main/cssPart/cssPart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cssPartContainer\">\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/main/cssPart/cssPart.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/main/cssPart/cssPart.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cssPartContainer {\n  background-color: green;\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Nzc1BhcnQvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxjc3NQYXJ0XFxjc3NQYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vY3NzUGFydC9jc3NQYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Nzc1BhcnRDb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/main/cssPart/cssPart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/main/cssPart/cssPart.component.ts ***!
  \***********************************************************/
/*! exports provided: CssPartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPartComponent", function() { return CssPartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CssPartComponent = /** @class */ (function () {
    function CssPartComponent() {
    }
    CssPartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'css-page',
            template: __webpack_require__(/*! ./cssPart.component.html */ "./src/app/modules/main/cssPart/cssPart.component.html"),
            styles: [__webpack_require__(/*! ./cssPart.component.scss */ "./src/app/modules/main/cssPart/cssPart.component.scss")]
        })
    ], CssPartComponent);
    return CssPartComponent;
}());



/***/ }),

/***/ "./src/app/modules/main/home/home.component.pug":
/*!******************************************************!*\
  !*** ./src/app/modules/main/home/home.component.pug ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/modules/main/home/home.component.pug */ "./node_modules/pug-loader/index.js!./src/app/modules/main/home/home.component.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/modules/main/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/main/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* --------- BREAK POINTS --------- */\n/* ------ GIVER SCREEN SIZE ------ */\n.sceneContainer {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.sceneContainer .stargateContainer {\n    margin: 20px;\n    overflow: hidden;\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%; }\n.sceneContainer .stargate-body {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: #27292f;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part {\n      position: absolute;\n      height: 440px;\n      width: 440px;\n      border-radius: 50%;\n      background-color: #4a4a4a;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n.sceneContainer .stargate-body .stargate-turning-part .symbolContainer {\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center; }\n.sceneContainer .stargate-body .stargate-turning-part .buttonSymbol {\n        position: absolute;\n        width: 32px;\n        height: 35px;\n        display: flex;\n        border-right: 1px solid black;\n        justify-content: center;\n        align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part .symbol {\n        font-family: 'Stargate';\n        font-size: 18px; }\n.sceneContainer .stargate-body .stargate-border-1 {\n      position: absolute;\n      cursor: pointer;\n      z-index: 1000;\n      height: 385px;\n      width: 385px;\n      background-color: #2c2c2c;\n      border-radius: 50%; }\n.sceneContainer .stargate-body .stargate-center {\n      cursor: pointer;\n      z-index: 1000;\n      height: 380px;\n      width: 380px;\n      background-color: #2e3d55;\n      border-radius: 50%; }\n.sceneContainer .chevronsContainer {\n    height: 100%;\n    width: 100%; }\n.sceneContainer .turnAnimation {\n    -webkit-animation: spin 12s linear infinite;\n    animation: spin 12s linear infinite; }\n.sceneContainer .chevronContainer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n.sceneContainer .chevronContainer .chevron-border {\n      width: 90px;\n      height: 25px;\n      display: flex;\n      justify-content: center;\n      border-top: 5px solid #494949; }\n.sceneContainer .chevronContainer .chevron {\n      top: 1px;\n      position: absolute;\n      -webkit-clip-path: polygon(20% 0%, 80% 0%, 55% 100%, 45% 100%);\n      clip-path: polygon(20% 0%, 80% 0%, 55% 100%, 45% 100%);\n      background-color: #3a3a3a;\n      height: 28px;\n      width: 50px; }\n.sceneContainer .chevronBack {\n    top: 5px;\n    position: absolute;\n    -webkit-clip-path: polygon(10% 0%, 90% 0%, 65% 100%, 35% 100%);\n    clip-path: polygon(10% 0%, 90% 0%, 65% 100%, 35% 100%);\n    height: 32px;\n    width: 50px;\n    background-color: #313131;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .chevronInterior {\n    top: 2px;\n    position: absolute;\n    -webkit-clip-path: polygon(30% 0%, 70% 0%, 55% 100%, 45% 100%);\n            clip-path: polygon(30% 0%, 70% 0%, 55% 100%, 45% 100%);\n    background: linear-gradient(to bottom, #ff7400 0%, #cc222a 100%);\n    height: 20px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .chevron2Container {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.sceneContainer .chevron3Container {\n    -webkit-transform: rotate(81deg);\n            transform: rotate(81deg); }\n.sceneContainer .chevron4Container {\n    -webkit-transform: rotate(117deg);\n            transform: rotate(117deg); }\n.sceneContainer .chevron5Container {\n    -webkit-transform: rotate(161deg);\n            transform: rotate(161deg); }\n.sceneContainer .chevron6Container {\n    -webkit-transform: rotate(198deg);\n            transform: rotate(198deg); }\n.sceneContainer .chevron7Container {\n    -webkit-transform: rotate(243deg);\n            transform: rotate(243deg); }\n.sceneContainer .chevron8Container {\n    -webkit-transform: rotate(279deg);\n            transform: rotate(279deg); }\n.sceneContainer .chevron9Container {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg); }\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n#homeDashboardContainer {\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden; }\n#homeDashboardContainer mat-toolbar {\n    position: relative;\n    height: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n    z-index: 100; }\n#homeDashboardContainer mat-toolbar button.menu {\n      position: absolute;\n      right: 40px; }\n#homeDashboardContainer mat-toolbar button.menu mat-icon {\n        font-size: 40px;\n        height: 40px;\n        width: 40px;\n        display: flex;\n        color: #ff5721;\n        justify-content: center;\n        align-items: center; }\n#homeDashboardContainer mat-toolbar .langFlag {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      cursor: pointer;\n      border-radius: 2.5px; }\n#homeDashboardContainer mat-toolbar .toolBarContainer {\n      height: 100%;\n      width: 400px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .topText {\n        color: #ff5721;\n        width: calc(100% - 2px);\n        height: calc(50% - 2px);\n        font-size: 45px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-bottom: 2px solid #ff5722;\n        border-right: 2px solid #ff5722; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .bottomText {\n        color: #cccccc;\n        width: calc(100% - 2px);\n        height: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-left: 2px solid #ff5722;\n        font-size: 27px;\n        flex-wrap: wrap; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .bottomText .txt {\n          display: flex;\n          align-items: center;\n          width: 60%;\n          height: 50%; }\n#homeDashboardContainer .globalContainer {\n    height: calc(100vh - 150px);\n    width: 100%; }\n#homeDashboardContainer .globalContainer #topPage {\n      height: 100%;\n      width: 100%;\n      background-color: #ff5722; }\n#homeDashboardContainer .globalContainer #scene01Container {\n      height: 100vh;\n      width: 100%; }\n@media screen and (max-width: 1600px) {\n    #homeDashboardContainer .langFlag {\n      background-color: bisque; } }\n@media screen and (max-width: 1200px) {\n    #homeDashboardContainer .langFlag {\n      background-color: blue; } }\n@media screen and (max-width: 992px) {\n    #homeDashboardContainer .langFlag {\n      background-color: gold; } }\n@media screen and (max-width: 768px) {\n    #homeDashboardContainer mat-toolbar {\n      height: 100px; }\n      #homeDashboardContainer mat-toolbar .toolBarContainer {\n        width: 250px; }\n        #homeDashboardContainer mat-toolbar .toolBarContainer .topText {\n          font-size: 25px; }\n        #homeDashboardContainer mat-toolbar .toolBarContainer .bottomText {\n          font-size: 15px; }\n    #homeDashboardContainer .globalContainer {\n      height: calc(100vh - 100px);\n      width: 100%; }\n    #homeDashboardContainer .langFlag {\n      background-color: green; } }\n@media screen and (max-width: 576px) {\n    #homeDashboardContainer mat-toolbar {\n      justify-content: normal; }\n    #homeDashboardContainer .langFlag {\n      background-color: red; } }\nmat-sidenav-container {\n  position: absolute;\n  height: calc(100% - 64px);\n  width: 100%; }\nmat-sidenav-container mat-sidenav {\n    padding-left: 25px;\n    padding-right: 25px;\n    background-color: #263238;\n    color: white; }\nmat-sidenav-container mat-sidenav .matNavContainer .profilContainer img {\n      height: 170px;\n      margin: 5px;\n      border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzXFxyZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL0Q6XFxEZXZlbG9wcGVtZW50XFxSZW1pRnJvbnRpZXJlLmdpdGh1Yi5pby9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcaG9tZVxcaW5jbHVkZXNcXHNjZW5lMDFcXHNjZW5lMDEuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBWUEsb0NBQUE7QUNaQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQVJ2QjtJQVdRLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7QUFuQjFCO0lBdUJRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUEwQjtJQUkxQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtBQWpDM0I7TUFvQ1ksa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QiwrQkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7QUF6Q25DO1FBNENnQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFFbEIsYUFBYTtRQUNiLHVCQUF1QixFQUFBO0FBbER2QztRQXFEZ0Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7QUEzRG5DO1FBOERnQix1QkFBdUI7UUFDdkIsZUFBZSxFQUFBO0FBL0QvQjtNQW1FWSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGFBQWE7TUFDYixhQUFhO01BQ2IsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixrQkFBa0IsRUFBQTtBQXpFOUI7TUE0RVksZUFBZTtNQUNmLGFBQWE7TUFDYixhQUFhO01BQ2IsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixrQkFBa0IsRUFBQTtBQWpGOUI7SUFxRlEsWUFBWTtJQUNaLFdBQVcsRUFBQTtBQXRGbkI7SUF5RlEsMkNBQTBDO0lBRTFDLG1DQUFrQyxFQUFBO0FBM0YxQztJQThGUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtBQW5HL0I7TUF3R1ksV0FBVztNQUNYLFlBQVk7TUFDWixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLDZCQUE2QixFQUFBO0FBNUd6QztNQStHWSxRQUFRO01BQ1Isa0JBQWtCO01BSWxCLDhEQUE4RDtNQUM5RCxzREFBc0Q7TUFDdEQseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixXQUFXLEVBQUE7QUF4SHZCO0lBNEhRLFFBQVE7SUFDUixrQkFBa0I7SUFJbEIsOERBQThEO0lBQzlELHNEQUFzRDtJQUN0RCxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUEwQjtJQUMxQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0FBeEkzQjtJQTJJUSxRQUFRO0lBQ1Isa0JBQWtCO0lBSWxCLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQsZ0VBQStEO0lBQy9ELFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtBQXRKM0I7SUE2SlEsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBO0FBN0poQztJQW1LUSxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7QUFuS2hDO0lBeUtRLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtBQXpLakM7SUErS1EsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0FBL0tqQztJQXFMUSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7QUFyTGpDO0lBMkxRLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQTtBQTNMakM7SUFpTVEsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBO0FBak1qQztJQXVNUSxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7QUFtQmpDO0VBQTBCO0lBQU8saUNBQWlDLEVBQUEsRUFBQTtBQUNsRTtFQUFrQjtJQUFPLGlDQUFpQztJQUFFLHlCQUF3QixFQUFBLEVBQUE7QUN2TnBGO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUh0QjtJQU1RLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEVBQWtFO0lBQ2xFLFlBQVksRUFBQTtBQVpwQjtNQWVZLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7QUFoQnZCO1FBbUJnQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixtQkFBbUIsRUFBQTtBQXpCbkM7TUE2Qlksa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixVQUFVO01BQ1YsZUFBZTtNQUNmLG9CQUFvQixFQUFBO0FBakNoQztNQW9DWSxZQUFZO01BQ1osWUFBWTtNQUNaLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGVBQWUsRUFBQTtBQXpDM0I7UUE0Q2dCLGNBQWM7UUFDZCx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQ0FBZ0M7UUFDaEMsK0JBQStCLEVBQUE7QUFwRC9DO1FBdURnQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsZUFBZTtRQUNmLGVBQWUsRUFBQTtBQS9EL0I7VUFrRW9CLGFBQWE7VUFDYixtQkFBbUI7VUFDbkIsVUFBVTtVQUNWLFdBQVcsRUFBQTtBQXJFL0I7SUEyRVEsMkJBQTJCO0lBQzNCLFdBQVcsRUFBQTtBQTVFbkI7TUErRVksWUFBWTtNQUNaLFdBQVc7TUFDWCx5QkFBeUIsRUFBQTtBQWpGckM7TUFvRlksYUFBYTtNQUNiLFdBQVcsRUFBQTtBQUluQjtJQXpGSjtNQTJGWSx3QkFBd0IsRUFBQSxFQUMzQjtBQUVMO0lBOUZKO01BZ0dZLHNCQUFzQixFQUFBLEVBQ3pCO0FBRUw7SUFuR0o7TUFxR1ksc0JBQXNCLEVBQUEsRUFDekI7QUFFTDtJQXhHSjtNQTBHWSxhQUFhLEVBQUE7TUExR3pCO1FBNkdnQixZQUFZLEVBQUE7UUE3RzVCO1VBK0dvQixlQUFlLEVBQUE7UUEvR25DO1VBa0hvQixlQUFlLEVBQUE7SUFsSG5DO01BdUhZLDJCQUEyQjtNQUMzQixXQUFXLEVBQUE7SUF4SHZCO01BMkhZLHVCQUF1QixFQUFBLEVBQzFCO0FBRUw7SUE5SEo7TUFnSVksdUJBQXVCLEVBQUE7SUFoSW5DO01BbUlZLHFCQUFxQixFQUFBLEVBQ3hCO0FBU1Q7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTtBQUhmO0lBTVEsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0FBVHBCO01BZW9CLGFBQWE7TUFDYixXQUFXO01BQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tIEJSRUFLIFBPSU5UUyAtLS0tLS0tLS0gKi9cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbiRtYXgtZXh0cmEtc21hbGw6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSc7XHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweClcclxuJG1heC1zbWFsbDogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJztcclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweClcclxuJG1heC1tZWRpdW06ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSc7XHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxyXG4kbWF4LWxhcmdlOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpJztcclxuLy8gTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIG1vcmUgdGhhbiAxMjAwcHgpXHJcbiRtYXgtZXh0cmEtbGFyZ2U6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCknO1xyXG5cclxuLyogLS0tLS0tIEdJVkVSIFNDUkVFTiBTSVpFIC0tLS0tLSAqL1xyXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIG1vcmUgdGhhbiA1NzZweClcclxuJG1pbi1leHRyYS1zbWFsbDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpJztcclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgbW9yZSB0aGFuIDc2OHB4KVxyXG4kbWluLXNtYWxsOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCknO1xyXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbW9yZSB0aGFuIDk5MnB4KVxyXG4kbWluLW1lZGl1bTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpJztcclxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIG1vcmUgdGhhbiAxMjAwcHgpXHJcbiRtaW4tbGFyZ2U6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCknO1xyXG4vLyBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgbW9yZSB0aGFuIDEyMDBweClcclxuJG1pbi1leHRyYS1sYXJnZTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSc7XHJcblxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogMTAwMHB4KVxyXG4vLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gXHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gXHJcbi8vIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogNzUwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHsgLy9OZXh1cyAxMFxyXG4gICAgXHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA3NTBweClcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNjAwcHgpIHtcclxuICAgICBcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KVxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA1MDBweCkge1xyXG4gICBcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gXHJcbi8vIGFuZCAobWF4LXdpZHRoOiA3NTBweCkgXHJcbi8vIGFuZCAobWluLXdpZHRoOiA2MDBweClcclxuLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNzUwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA2MDBweClcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNTAwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gIC8vIEx1bWlhIDU1MFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gXHJcbi8vIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgXHJcbi8vIGFuZCAobWluLXdpZHRoOiA0MDBweClcclxuLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuICAvLyBQaXhlbDJYTFxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIC8vIFBpeGVsMiAtIGlQaG9uZSA2LzcvOCBQbHVzXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA2MDBweClcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNTAwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogNDAwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogMzUwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiAgLy8gaVBob25lIFhcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSAvLyBpUGhvbmUgNi83LzggLSBTMy9TNSAtIE5vdGUzIC0gTHVtaWEgOTUwXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA2MDBweCkgLy8gV2lrb1xyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA0NTBweCkge1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gXHJcbi8vIGFuZCAobWF4LXdpZHRoOiAzNTBweCkgXHJcbi8vIGFuZCAobWluLXdpZHRoOiAzMDBweClcclxuLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuXHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiAxMDAwcHgpIFxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIFxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIC8vIGlQaG9uZSA0LzUvU0VcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNDUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gXHJcbi8vIGFuZCAobWF4LXdpZHRoOiAzMDBweClcclxuLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAxMDAwcHgpIHtcclxuLy8gfVxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMTAwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIGFuZCAobWluLWhlaWdodDogNDAwcHgpIHtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDI1MHB4KSB7XHJcbi8vIH1cclxuXHJcblxyXG4iLCIuc2NlbmVDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnN0YXJnYXRlQ29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFyZ2F0ZS1ib2R5e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICMyNzI5MmY7XHJcbiAgICAgICAgLy8gYm9yZGVyOiA1MHB4IHNvbGlkICMyNzI5MmY7XHJcblxyXG4gICAgICAgIC8vIG1hcmdpbjogODVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuc3RhcmdhdGUtdHVybmluZy1wYXJ0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICAgICAgICAgIC5zeW1ib2xDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b25TeW1ib2x7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3ltYm9se1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTdGFyZ2F0ZSc7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJnYXRlLWJvcmRlci0xe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzODVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM4NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGFyZ2F0ZS1jZW50ZXJ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzZDU1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb25zQ29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50dXJuQW5pbWF0aW9ue1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOnNwaW4gMTJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbjpzcGluIDEycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOnNwaW4gMTJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5jaGV2cm9uQ29udGFpbmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHJcbiAgICAgICAgLmNoZXZyb24tYm9yZGVye1xyXG4gICAgICAgICAgICAvLyB0b3A6IDA7XHJcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjNDk0OTQ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hldnJvbntcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAzMHB4IDE1cHggMCAxNXB4O1xyXG4gICAgICAgICAgICAvLyBib3JkZXItY29sb3I6ICMzYTNhM2EgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAwJSwgODAlIDAlLCA1NSUgMTAwJSwgNDUlIDEwMCUpO1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDU1JSAxMDAlLCA0NSUgMTAwJSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb25CYWNre1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vIGJvcmRlci13aWR0aDogMzVweCAyMHB4IDAgMjBweDtcclxuICAgICAgICAvLyBib3JkZXItY29sb3I6ICMzMTMxMzEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCA5MCUgMCUsIDY1JSAxMDAlLCAzNSUgMTAwJSk7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwJSwgOTAlIDAlLCA2NSUgMTAwJSwgMzUlIDEwMCUpO1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzMxMzEzMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbkludGVyaW9ye1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIC8vIGJvcmRlci13aWR0aDogMjJweCAxMXB4IDAgMTFweDtcclxuICAgICAgICAvLyBib3JkZXItY29sb3I6ICNjZDI1MWMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgNzAlIDAlLCA1NSUgMTAwJSwgNDUlIDEwMCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZjc0MDAgMCUsI2NjMjIyYSAxMDAlKTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNoZXZyb24xQ29udGFpbmVye1xyXG4gICAgICAgIC5jaGV2cm9uMXtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjJDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uMntcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb24zQ29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDgxZGVnKTtcclxuICAgICAgICAuY2hldnJvbjN7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uNENvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTdkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uNHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb241Q29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE2MWRlZyk7XHJcbiAgICAgICAgLmNoZXZyb241e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjZDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTk4ZGVnKTtcclxuICAgICAgICAuY2hldnJvbjZ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uN0NvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDNkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uN3tcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb244Q29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3OWRlZyk7XHJcbiAgICAgICAgLmNoZXZyb244e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjlDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxuICAgICAgICAuY2hldnJvbjl7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhICN7JG1heC1leHRyYS1sYXJnZX0ge1xyXG59XHJcbkBtZWRpYSAjeyRtYXgtbGFyZ2V9IHtcclxufVxyXG5AbWVkaWEgI3skbWF4LW1lZGl1bX0ge1xyXG59XHJcbkBtZWRpYSAjeyRtYXgtc21hbGx9IHtcclxufVxyXG5AbWVkaWEgI3skbWF4LWV4dHJhLXNtYWxsfSB7XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XHJcbkBrZXlmcmFtZXMgc3BpbiB7IDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTsgfSB9IiwiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9yZXNwb25zaXZlXCI7XHJcbkBpbXBvcnQgXCIuL2luY2x1ZGVzL3NjZW5lMDEvc2NlbmUwMVwiO1xyXG5cclxuXHJcbiNob21lRGFzaGJvYXJkQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwuMjMpO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAgICAgYnV0dG9uLm1lbnV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1NzIxO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYW5nRmxhZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvb2xCYXJDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgLnRvcFRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNTcyMTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDJweCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjU3MjI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmY1NzIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3R0b21UZXh0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmNTcyMjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnR4dHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5nbG9iYWxDb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAjdG9wUGFnZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAjc2NlbmUwMUNvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAjeyRtYXgtZXh0cmEtbGFyZ2V9IHtcclxuICAgICAgICAubGFuZ0ZsYWd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgI3skbWF4LWxhcmdlfSB7XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAjeyRtYXgtbWVkaXVtfSB7XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAjeyRtYXgtc21hbGx9IHtcclxuICAgICAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgIC50b29sQmFyQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgLnRvcFRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvdHRvbVRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nbG9iYWxDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYW5nRmxhZ3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhICN7JG1heC1leHRyYS1zbWFsbH0ge1xyXG4gICAgICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWF0LXNpZGVuYXZ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxuICAgICAgICAubWF0TmF2Q29udGFpbmVye1xyXG4gICAgICAgICAgICAucHJvZmlsQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/main/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponentMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentMain", function() { return HomeComponentMain; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var HomeComponentMain = /** @class */ (function () {
    // public mobileQuery: MediaQueryList;
    // private _mobileQueryListener: () => void;
    function HomeComponentMain(
    // changeDetectorRef: ChangeDetectorRef, 
    // media: MediaMatcher, 
    translate) {
        // this.mobileQuery = media.matchMedia('(max-width: 600px)');
        // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // this.mobileQuery.addListener(this._mobileQueryListener);
        this.translate = translate;
        this.isScrolled = false;
        this.stargateisTurning = false;
        this.stargateNumberOfSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        translate.setDefaultLang('fr');
        translate.use('fr');
    }
    HomeComponentMain.prototype.ngOnDestroy = function () {
        // this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    HomeComponentMain.prototype.changeLang = function () {
        this.translate.currentLang == 'fr' ? this.translate.use('en') : this.translate.use('fr');
    };
    HomeComponentMain.prototype.rotateStargate = function () {
        this.stargateisTurning = !this.stargateisTurning;
        if (this.stargateisTurning) {
            this.audio = new Audio();
            this.audio.src = "assets/audio/roll.mp3";
            this.audio.load();
            this.audio.loop = true;
            this.audio.play();
            this.audio.volume = 0.2;
        }
        else {
            if (this.audio) {
                this.audio.pause();
            }
        }
    };
    HomeComponentMain = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-root',
            template: __webpack_require__(/*! ./home.component.pug */ "./src/app/modules/main/home/home.component.pug"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/main/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HomeComponentMain);
    return HomeComponentMain;
}());



/***/ }),

/***/ "./src/app/modules/main/home/includes/scene01/scene01.pug":
/*!****************************************************************!*\
  !*** ./src/app/modules/main/home/includes/scene01/scene01.pug ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var req = __webpack_require__(/*! !./node_modules/pug-loader!./src/app/modules/main/home/includes/scene01/scene01.pug */ "./node_modules/pug-loader/index.js!./src/app/modules/main/home/includes/scene01/scene01.pug");
module.exports = (req['default'] || req).apply(req, [])

/***/ }),

/***/ "./src/app/modules/main/main-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/main-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/main/home/home.component.ts");
/* harmony import */ var _cssPart_cssPart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssPart/cssPart.component */ "./src/app/modules/main/cssPart/cssPart.component.ts");





var routes = [
    {
        path: 'main',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponentMain"],
        children: [
            {
                path: 'css',
                component: _cssPart_cssPart_component__WEBPACK_IMPORTED_MODULE_4__["CssPartComponent"]
            }
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: createTranslateLoader, MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/modules/main/main-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/main/home/home.component.ts");
/* harmony import */ var _cssPart_cssPart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cssPart/cssPart.component */ "./src/app/modules/main/cssPart/cssPart.component.ts");








function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponentMain"], _cssPart_cssPart_component__WEBPACK_IMPORTED_MODULE_9__["CssPartComponent"]],
            providers: []
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Developpement\RemiFrontiere.github.io\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map