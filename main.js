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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"sceneContainer\"\u003E\u003Cdiv class=\"stargateContainer\"\u003E\u003Cdiv class=\"stargate-body\"\u003E\u003Cdiv class=\"stargate-turning-part\" [ngClass]=\"{'turnAnimation':stargateisTurning}\"\u003E\u003Cdiv class=\"symbolContainer\" *ngFor=\"let symbol of stargateNumberOfSymbols; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*9+'deg)'}\"\u003E\u003Cdiv class=\"buttonSymbol\"\u003E\u003Cdiv class=\"symbol\"\u003E{{symbol}}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-1\"\u003E\u003Cdiv class=\"borderCubeContainer\" *ngFor=\"let num of stargateExtBorderNumber; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*2.4+'deg)'}\"\u003E\u003Cdiv class=\"borderCube\"\u003E\u003Cdiv class=\"cub\"\u003E|\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-2\"\u003E\u003Cdiv class=\"borderCubeContainer\" *ngFor=\"let num of stargateExtBorderNumber; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*2.4+'deg)'}\"\u003E\u003Cdiv class=\"borderCube\"\u003E\u003Cdiv class=\"cub\"\u003Ex\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-3\"\u003E\u003Cdiv class=\"borderCubeContainer\" *ngFor=\"let num of stargateExtBorderNumber; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*2.4+'deg)'}\"\u003E\u003Cdiv class=\"borderCube\"\u003E\u003Cdiv class=\"cub\"\u003E)\u003C\u002Fdiv\u003E\u003Cdiv class=\"cub\"\u003E(\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-center\" (click)=\"rotateStargate()\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronsContainer\"\u003E\u003Cdiv class=\"chevronContainer chevron1Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron2Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron3Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron4Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron4\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron5Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron5\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron6Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron6\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron7Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron7\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron8Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron8\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron9Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron9\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
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

module.exports = "/* --------- BREAK POINTS --------- */\n/* ------ GIVER SCREEN SIZE ------ */\n.sceneContainer {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.sceneContainer .stargateContainer {\n    margin: 20px;\n    overflow: hidden;\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%; }\n.sceneContainer .stargate-body {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: #000000;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part {\n      z-index: 4;\n      position: absolute;\n      border: 1px solid #2c2c2c;\n      height: 440px;\n      width: 440px;\n      border-radius: 50%;\n      background-color: #4a4a4a;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part .symbolContainer {\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center; }\n.sceneContainer .stargate-body .stargate-turning-part .buttonSymbol {\n        position: absolute;\n        width: 32px;\n        height: 35px;\n        display: flex;\n        border-right: 1px solid black;\n        justify-content: center;\n        align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part .symbol {\n        font-family: 'Stargate';\n        font-size: 18px; }\n.sceneContainer .stargate-body .stargate-border-1 {\n      position: absolute;\n      cursor: pointer;\n      z-index: 1000;\n      height: 385px;\n      width: 385px;\n      background-color: #494949;\n      border-radius: 50%;\n      border: 1px solid black; }\n.sceneContainer .stargate-body .stargate-border-2 {\n      z-index: 2;\n      position: absolute;\n      cursor: pointer;\n      height: 454px;\n      border-top: 1px solid black;\n      background-color: #494949;\n      width: 454px;\n      border-radius: 50%;\n      z-index: 2; }\n.sceneContainer .stargate-body .stargate-border-3 {\n      z-index: 2;\n      position: absolute;\n      cursor: pointer;\n      height: 493px;\n      border-top: 1px solid black;\n      background-color: #494949;\n      width: 493px;\n      border-radius: 50%;\n      z-index: 1; }\n.sceneContainer .stargate-body .stargate-border-3 .borderCube {\n        width: 8px;\n        height: 19px !important;\n        border-left: 1px solid black;\n        border-radius: 3px !important; }\n.sceneContainer .stargate-body .stargate-border-3 .borderCube .cub {\n          font-size: 25px !important; }\n.sceneContainer .stargate-body .borderCubeContainer {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center; }\n.sceneContainer .stargate-body .borderCubeContainer .borderCube {\n        position: absolute;\n        width: 8px;\n        height: 5px;\n        display: flex;\n        border-right: 1px solid black;\n        justify-content: center;\n        overflow: hidden;\n        align-items: center; }\n.sceneContainer .stargate-body .borderCubeContainer .borderCube .cub {\n          height: 2px;\n          width: 2px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 17px; }\n.sceneContainer .stargate-body .stargate-center {\n      border-top: 1px solid black;\n      cursor: pointer;\n      z-index: 1000;\n      height: 375px;\n      width: 375px;\n      background-color: #2e3d55;\n      border-radius: 50%; }\n.sceneContainer .chevronsContainer {\n    z-index: 5;\n    height: 100%;\n    width: 100%; }\n.sceneContainer .turnAnimation {\n    -webkit-animation: spin 12s linear infinite;\n    animation: spin 12s linear infinite; }\n.sceneContainer .chevronContainer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n.sceneContainer .chevronContainer .chevron-border {\n      width: 90px;\n      height: 25px;\n      display: flex;\n      justify-content: center;\n      border-top: 6px solid #494949; }\n.sceneContainer .chevronContainer .chevron {\n      top: 1px;\n      position: absolute;\n      -webkit-clip-path: polygon(20% 0%, 80% 0%, 55% 100%, 45% 100%);\n      clip-path: polygon(20% 0%, 80% 0%, 55% 100%, 45% 100%);\n      background-color: #3a3a3a;\n      height: 28px;\n      width: 50px; }\n.sceneContainer .chevronBack {\n    top: 5px;\n    position: absolute;\n    -webkit-clip-path: polygon(10% 0%, 90% 0%, 65% 100%, 35% 100%);\n    clip-path: polygon(10% 0%, 90% 0%, 65% 100%, 35% 100%);\n    height: 32px;\n    width: 50px;\n    background-color: #313131;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .chevronInterior {\n    top: 2px;\n    position: absolute;\n    -webkit-clip-path: polygon(30% 0%, 70% 0%, 55% 100%, 45% 100%);\n            clip-path: polygon(30% 0%, 70% 0%, 55% 100%, 45% 100%);\n    background: linear-gradient(to bottom, #ff7400 0%, #cc222a 100%);\n    height: 20px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .chevron2Container {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.sceneContainer .chevron3Container {\n    -webkit-transform: rotate(81deg);\n            transform: rotate(81deg); }\n.sceneContainer .chevron4Container {\n    -webkit-transform: rotate(117deg);\n            transform: rotate(117deg); }\n.sceneContainer .chevron5Container {\n    -webkit-transform: rotate(161deg);\n            transform: rotate(161deg); }\n.sceneContainer .chevron6Container {\n    -webkit-transform: rotate(198deg);\n            transform: rotate(198deg); }\n.sceneContainer .chevron7Container {\n    -webkit-transform: rotate(243deg);\n            transform: rotate(243deg); }\n.sceneContainer .chevron8Container {\n    -webkit-transform: rotate(279deg);\n            transform: rotate(279deg); }\n.sceneContainer .chevron9Container {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg); }\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n#homeDashboardContainer {\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden; }\n#homeDashboardContainer mat-toolbar {\n    position: relative;\n    height: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n    z-index: 100; }\n#homeDashboardContainer mat-toolbar button.menu {\n      position: absolute;\n      right: 40px; }\n#homeDashboardContainer mat-toolbar button.menu mat-icon {\n        font-size: 40px;\n        height: 40px;\n        width: 40px;\n        display: flex;\n        color: #ff5721;\n        justify-content: center;\n        align-items: center; }\n#homeDashboardContainer mat-toolbar .langFlag {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      cursor: pointer;\n      border-radius: 2.5px; }\n#homeDashboardContainer mat-toolbar .toolBarContainer {\n      height: 100%;\n      width: 400px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .topText {\n        color: #ff5721;\n        width: calc(100% - 2px);\n        height: calc(50% - 2px);\n        font-size: 45px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-bottom: 2px solid #ff5722;\n        border-right: 2px solid #ff5722; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .bottomText {\n        color: #cccccc;\n        width: calc(100% - 2px);\n        height: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-left: 2px solid #ff5722;\n        font-size: 27px;\n        flex-wrap: wrap; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .bottomText .txt {\n          display: flex;\n          align-items: center;\n          width: 60%;\n          height: 50%; }\n#homeDashboardContainer .globalContainer {\n    height: calc(100vh - 150px);\n    width: 100%; }\n#homeDashboardContainer .globalContainer #topPage {\n      height: 100%;\n      width: 100%;\n      background-color: #ff5722; }\n#homeDashboardContainer .globalContainer #scene01Container {\n      height: 100vh;\n      width: 100%; }\n@media screen and (max-width: 1600px) {\n    #homeDashboardContainer .langFlag {\n      background-color: bisque; } }\n@media screen and (max-width: 1200px) {\n    #homeDashboardContainer .langFlag {\n      background-color: blue; } }\n@media screen and (max-width: 992px) {\n    #homeDashboardContainer .langFlag {\n      background-color: gold; } }\n@media screen and (max-width: 768px) {\n    #homeDashboardContainer mat-toolbar {\n      height: 100px; }\n      #homeDashboardContainer mat-toolbar .toolBarContainer {\n        width: 250px; }\n        #homeDashboardContainer mat-toolbar .toolBarContainer .topText {\n          font-size: 25px; }\n        #homeDashboardContainer mat-toolbar .toolBarContainer .bottomText {\n          font-size: 15px; }\n    #homeDashboardContainer .globalContainer {\n      height: calc(100vh - 100px);\n      width: 100%; }\n    #homeDashboardContainer .langFlag {\n      background-color: green; } }\n@media screen and (max-width: 576px) {\n    #homeDashboardContainer mat-toolbar {\n      justify-content: normal; }\n    #homeDashboardContainer .langFlag {\n      background-color: red; } }\nmat-sidenav-container {\n  position: absolute;\n  height: calc(100% - 64px);\n  width: 100%; }\nmat-sidenav-container mat-sidenav {\n    padding-left: 25px;\n    padding-right: 25px;\n    background-color: #263238;\n    color: white; }\nmat-sidenav-container mat-sidenav .matNavContainer .profilContainer img {\n      height: 170px;\n      margin: 5px;\n      border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzXFxyZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL0Q6XFxEZXZlbG9wcGVtZW50XFxSZW1pRnJvbnRpZXJlLmdpdGh1Yi5pby9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcaG9tZVxcaW5jbHVkZXNcXHNjZW5lMDFcXHNjZW5lMDEuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBWUEsb0NBQUE7QUNaQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQVJ2QjtJQVdRLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7QUFuQjFCO0lBdUJRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUl6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtBQWpDM0I7TUFvQ1ksVUFBVTtNQUNWLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsYUFBYTtNQUNiLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLCtCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsYUFBYTtNQUNiLHVCQUF1QjtNQUN2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O0lBMkVRLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUE1RW5CO01BK0VZLFlBQVk7TUFDWixXQUFXO01BQ1gseUJBQXlCLEVBQUE7QUFqRnJDO01Bb0ZZLGFBQWE7TUFDYixXQUFXLEVBQUE7QUFJbkI7SUF6Rko7TUEyRlksd0JBQXdCLEVBQUEsRUFDM0I7QUFFTDtJQTlGSjtNQWdHWSxzQkFBc0IsRUFBQSxFQUN6QjtBQUVMO0lBbkdKO01BcUdZLHNCQUFzQixFQUFBLEVBQ3pCO0FBRUw7SUF4R0o7TUEwR1ksYUFBYSxFQUFBO01BMUd6QjtRQTZHZ0IsWUFBWSxFQUFBO1FBN0c1QjtVQStHb0IsZUFBZSxFQUFBO1FBL0duQztVQWtIb0IsZUFBZSxFQUFBO0lBbEhuQztNQXVIWSwyQkFBMkI7TUFDM0IsV0FBVyxFQUFBO0lBeEh2QjtNQTJIWSx1QkFBdUIsRUFBQSxFQUMxQjtBQUVMO0lBOUhKO01BZ0lZLHVCQUF1QixFQUFBO0lBaEluQztNQW1JWSxxQkFBcUIsRUFBQSxFQUN4QjtBQVNUO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7QUFIZjtJQU1RLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVksRUFBQTtBQVRwQjtNQWVvQixhQUFhO01BQ2IsV0FBVztNQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLSBCUkVBSyBQT0lOVFMgLS0tLS0tLS0tICovXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG4kbWF4LWV4dHJhLXNtYWxsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCknO1xyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpXHJcbiRtYXgtc21hbGw6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc7XHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCBsZXNzIHRoYW4gOTkycHgpXHJcbiRtYXgtbWVkaXVtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCknO1xyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgbGVzcyB0aGFuIDEyMDBweClcclxuJG1heC1sYXJnZTogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSc7XHJcbi8vIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCBtb3JlIHRoYW4gMTIwMHB4KVxyXG4kbWF4LWV4dHJhLWxhcmdlOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpJztcclxuXHJcbi8qIC0tLS0tLSBHSVZFUiBTQ1JFRU4gU0laRSAtLS0tLS0gKi9cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBtb3JlIHRoYW4gNTc2cHgpXHJcbiRtaW4tZXh0cmEtc21hbGw6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSc7XHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIG1vcmUgdGhhbiA3NjhweClcclxuJG1pbi1zbWFsbDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIG1vcmUgdGhhbiA5OTJweClcclxuJG1pbi1tZWRpdW06ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBtb3JlIHRoYW4gMTIwMHB4KVxyXG4kbWluLWxhcmdlOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcclxuLy8gTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIG1vcmUgdGhhbiAxMjAwcHgpXHJcbiRtaW4tZXh0cmEtbGFyZ2U6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCknO1xyXG5cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBcclxuLy8gYW5kIChtaW4td2lkdGg6IDEwMDBweClcclxuLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuIFxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogMTAwMHB4KSBcclxuLy8gYW5kIChtaW4td2lkdGg6IDc1MHB4KVxyXG4vLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7IC8vTmV4dXMgMTBcclxuICAgIFxyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNzUwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbiAgICAgXHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA2MDBweClcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNTAwcHgpIHtcclxuICAgXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogNzUwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogNjAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KVxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuICAvLyBMdW1pYSA1NTBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogNjAwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogNDAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiAgLy8gUGl4ZWwyWExcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSAvLyBQaXhlbDIgLSBpUGhvbmUgNi83LzggUGx1c1xyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBcclxuLy8gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSBcclxuLy8gYW5kIChtaW4td2lkdGg6IDM1MHB4KVxyXG4vLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gIC8vIGlQaG9uZSBYXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkgLy8gaVBob25lIDYvNy84IC0gUzMvUzUgLSBOb3RlMyAtIEx1bWlhIDk1MFxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIC8vIFdpa29cclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNDUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogMzUwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogMzAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogMTAwMHB4KSBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNjAwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSAvLyBpUGhvbmUgNC81L1NFXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDQ1MHB4KSB7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogMzAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTAwMHB4KSB7XHJcbi8vIH1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDEwMDBweCkgYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpIHtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KSB7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkgYW5kIChtaW4taGVpZ2h0OiAyNTBweCkge1xyXG4vLyB9XHJcblxyXG5cclxuIiwiLnNjZW5lQ29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5zdGFyZ2F0ZUNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhcmdhdGUtYm9keXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgLy8gYm9yZGVyOiA1MHB4IHNvbGlkICMyNzI5MmY7XHJcblxyXG4gICAgICAgIC8vIG1hcmdpbjogODVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuc3RhcmdhdGUtdHVybmluZy1wYXJ0e1xyXG4gICAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyYzJjMmM7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuc3ltYm9sQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnV0dG9uU3ltYm9se1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN5bWJvbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3RhcmdhdGUnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGFyZ2F0ZS1ib3JkZXItMXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzg1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzODVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJnYXRlLWJvcmRlci0ye1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NTRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgICAgICAgICB3aWR0aDogNDU0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJnYXRlLWJvcmRlci0ze1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OTNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xyXG4gICAgICAgICAgICB3aWR0aDogNDkzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgIC5ib3JkZXJDdWJle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC5jdWJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3JkZXJDdWJlQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJvcmRlckN1YmV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5jdWIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcmdhdGUtY2VudGVye1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzZDU1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb25zQ29udGFpbmVye1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnR1cm5BbmltYXRpb257XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246c3BpbiAxMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uOnNwaW4gMTJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb246c3BpbiAxMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmNoZXZyb25Db250YWluZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cclxuICAgICAgICAuY2hldnJvbi1ib3JkZXJ7XHJcbiAgICAgICAgICAgIC8vIHRvcDogMDtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM0OTQ5NDk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGV2cm9ue1xyXG4gICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItd2lkdGg6IDMwcHggMTVweCAwIDE1cHg7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1jb2xvcjogIzNhM2EzYSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMjAlIDAlLCA4MCUgMCUsIDU1JSAxMDAlLCA0NSUgMTAwJSk7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyMCUgMCUsIDgwJSAwJSwgNTUlIDEwMCUsIDQ1JSAxMDAlKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbkJhY2t7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAzNXB4IDIwcHggMCAyMHB4O1xyXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogIzMxMzEzMSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxMCUgMCUsIDkwJSAwJSwgNjUlIDEwMCUsIDM1JSAxMDAlKTtcclxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAlIDAlLCA5MCUgMCUsIDY1JSAxMDAlLCAzNSUgMTAwJSk7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjMzEzMTMxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jaGV2cm9uSW50ZXJpb3J7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAyMnB4IDExcHggMCAxMXB4O1xyXG4gICAgICAgIC8vIGJvcmRlci1jb2xvcjogI2NkMjUxYyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA3MCUgMCUsIDU1JSAxMDAlLCA0NSUgMTAwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmNzQwMCAwJSwjY2MyMjJhIDEwMCUpO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjFDb250YWluZXJ7XHJcbiAgICAgICAgLmNoZXZyb24xe1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uMkNvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgLmNoZXZyb24ye1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjNDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoODFkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uM3tcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb240Q29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDExN2RlZyk7XHJcbiAgICAgICAgLmNoZXZyb240e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjVDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTYxZGVnKTtcclxuICAgICAgICAuY2hldnJvbjV7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uNkNvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOThkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uNntcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb243Q29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI0M2RlZyk7XHJcbiAgICAgICAgLmNoZXZyb243e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjhDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjc5ZGVnKTtcclxuICAgICAgICAuY2hldnJvbjh7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uOUNvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uOXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgI3skbWF4LWV4dHJhLWxhcmdlfSB7XHJcbn1cclxuQG1lZGlhICN7JG1heC1sYXJnZX0ge1xyXG59XHJcbkBtZWRpYSAjeyRtYXgtbWVkaXVtfSB7XHJcbn1cclxuQG1lZGlhICN7JG1heC1zbWFsbH0ge1xyXG59XHJcbkBtZWRpYSAjeyRtYXgtZXh0cmEtc21hbGx9IHtcclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQGtleWZyYW1lcyBzcGluIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOyB9IH0iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuQGltcG9ydCBcIi4vaW5jbHVkZXMvc2NlbmUwMS9zY2VuZTAxXCI7XHJcblxyXG5cclxuI2hvbWVEYXNoYm9hcmRDb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLC4yMyk7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgICAgICBidXR0b24ubWVudXtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjU3MjE7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9vbEJhckNvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAudG9wVGV4dHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1NzIxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMnB4KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmNTcyMjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZjU3MjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvdHRvbVRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2NjY2NjYztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmY1NzIyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudHh0e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmdsb2JhbENvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICN0b3BQYWdle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICNzY2VuZTAxQ29udGFpbmVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhICN7JG1heC1leHRyYS1sYXJnZX0ge1xyXG4gICAgICAgIC5sYW5nRmxhZ3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAjeyRtYXgtbGFyZ2V9IHtcclxuICAgICAgICAubGFuZ0ZsYWd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhICN7JG1heC1tZWRpdW19IHtcclxuICAgICAgICAubGFuZ0ZsYWd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhICN7JG1heC1zbWFsbH0ge1xyXG4gICAgICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgLnRvb2xCYXJDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAudG9wVGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm90dG9tVGV4dHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdsb2JhbENvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgI3skbWF4LWV4dHJhLXNtYWxsfSB7XHJcbiAgICAgICAgbWF0LXRvb2xiYXJ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGFuZ0ZsYWd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXQtc2lkZW5hdntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG4gICAgICAgIC5tYXROYXZDb250YWluZXJ7XHJcbiAgICAgICAgICAgIC5wcm9maWxDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

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
        this.stargateExtBorderNumber = Array.apply(null, { length: 150 }).map(Function.call, Number);
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
            this.audio.volume = 0.05;
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