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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"sceneContainer\"\u003E\u003Cdiv class=\"backgroundScene\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"fullGateContainer\"\u003E\u003Cdiv class=\"stargateContainer\"\u003E\u003Cdiv class=\"stargate-body\"\u003E\u003Cdiv class=\"stargate-turning-part\" [ngClass]=\"{'turnAnimation':stargateisTurning}\"\u003E\u003Cdiv class=\"symbolContainer\" *ngFor=\"let symbol of stargateNumberOfSymbols; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*9+'deg)'}\"\u003E\u003Cdiv class=\"buttonSymbol\"\u003E\u003Cdiv class=\"symbol\"\u003E{{symbol}}\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-1\"\u003E\u003Cdiv class=\"borderCubeContainer\" *ngFor=\"let num of stargateExtBorderNumber; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*2.4+'deg)'}\"\u003E\u003Cdiv class=\"borderCube\"\u003E\u003Cdiv class=\"cub\"\u003E|\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-2\"\u003E\u003Cdiv class=\"borderCubeContainer\" *ngFor=\"let num of stargateExtBorderNumber; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*2.4+'deg)'}\"\u003E\u003Cdiv class=\"borderCube\"\u003E\u003Cdiv class=\"cub\"\u003Ex\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-border-3\"\u003E\u003Cdiv class=\"borderCubeContainer\" *ngFor=\"let num of stargateExtBorderNumber; let i = index\" [ngStyle]=\"{'transform': 'rotate('+i*2.4+'deg)'}\"\u003E\u003Cdiv class=\"borderCube\"\u003E\u003Cdiv class=\"cub\"\u003E)\u003C\u002Fdiv\u003E\u003Cdiv class=\"cub\"\u003E(\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stargate-center\" (click)=\"rotateStargate()\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronsContainer\"\u003E\u003Cdiv class=\"chevronContainer chevron1Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron2Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron3Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron4Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron4\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron7Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron7\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron8Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron8\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronContainer chevron9Container\"\u003E\u003Cdiv class=\"chevron-border\"\u003E\u003Cdiv class=\"chevronBack\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevron chevron9\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevronInterior\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tabletContainer\" [ngClass]=\"{tabletContainerVisible: showTabletSG}\"\u003E\u003Cdiv class=\"tabletBody\" [ngClass]=\"{tabletBodyHidden: !showTabletSG}\" (click)=\"showTablet()\"\u003E\u003Cdiv class=\"buttonCloseTabletContainer\"\u003E\u003Cbutton class=\"buttonTabletSG\" mat-button\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"tabletScreen\"\u003E \u003Cdiv class=\"leftAndMidTabletContainer\"\u003E\u003Cdiv class=\"topCT\"\u003E\u003Cdiv class=\"leftTabletContainer\"\u003E\u003Cdiv class=\"topLeftTabletCT\"\u003E \u003Cp\u003E&nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630;&nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630; &nabla; &#x2637; &infin;  &#x2327;  &#x2634;  &#x2327; &#10; &#8195; &#x2327;  &#x2634; &nabla; &#x2637;  &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#63743; &#x2318; &#8195; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195; &#x2327; &#x2634; &#8195; &#x2327;  &#x2634; &#10; &#8195;  &#10; &nabla; &#x2327; &#x2634; &nabla; &#x2637; &infin; &equiv; &#x2634; &#10; &#8195;  &#x2327; &#63743; &#x2318; &#10; &#8195; &nabla; &#x2637; &infin; &equiv; &#63743; &#x2318; &#x2327; &#x2637; &infin; &equiv; &#x2634; &#x2630;\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"bottomLeftTabletCT\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"midTabletContainer\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"bottomCT\"\u003E\u003Cdiv class=\"first\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"second\"\u003E\u003Cdiv class=\"miniCub\" *ngFor=\"let cube of stargateTabletMiniCub; let i = index\" [ngClass]=\"{filled: cube == 1}\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rightTabletSlotNumber\"\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E1\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E2\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E3\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E4\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E5\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E6\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlotNumber\"\u003E7\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"rightTabletContainer\"\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chevSlot\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
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

module.exports = "/* --------- BREAK POINTS --------- */\n/* ------ GIVER SCREEN SIZE ------ */\n.sceneContainer {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-x: auto;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.sceneContainer .fullGateContainer {\n    position: absolute;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden; }\n.sceneContainer .stargateContainer {\n    overflow: hidden;\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%; }\n.sceneContainer .stargate-body {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part {\n      z-index: 4;\n      position: absolute;\n      border: 1px solid #313233;\n      height: 440px;\n      width: 440px;\n      border-radius: 50%;\n      background-color: #363a3d;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part .symbolContainer {\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center; }\n.sceneContainer .stargate-body .stargate-turning-part .buttonSymbol {\n        position: absolute;\n        width: 32px;\n        height: 31px;\n        display: flex;\n        border-right: 1px solid #2f2f2f;\n        justify-content: center;\n        align-items: center; }\n.sceneContainer .stargate-body .stargate-turning-part .symbol {\n        font-family: 'Stargate';\n        font-size: 18px;\n        font-weight: bold;\n        color: #272a2d;\n        /* text-shadow: -2px 2px 0 black, -1px 1px 0 black; */\n        /* text-shadow: 1px 1px #000000, 2px 2px #000000, 3px 3px #000000; */ }\n.sceneContainer .stargate-body .stargate-border-1 {\n      position: absolute;\n      cursor: pointer;\n      z-index: 1000;\n      height: 385px;\n      width: 385px;\n      background-color: #363a3d;\n      border-radius: 50%;\n      border: 1px solid #2f2f2f; }\n.sceneContainer .stargate-body .stargate-border-2 {\n      z-index: 2;\n      position: absolute;\n      cursor: pointer;\n      height: 454px;\n      border-top: 1px solid #2f2f2f;\n      background-color: #363a3d;\n      width: 454px;\n      border-radius: 50%;\n      z-index: 2; }\n.sceneContainer .stargate-body .stargate-border-3 {\n      z-index: 2;\n      position: absolute;\n      cursor: pointer;\n      height: 493px;\n      border-top: 1px solid #363636;\n      background-color: #363a3d;\n      width: 493px;\n      border-radius: 50%;\n      z-index: 1; }\n.sceneContainer .stargate-body .stargate-border-3 .borderCube {\n        width: 8px;\n        height: 19px !important;\n        border-left: 1px solid #2f2f2f;\n        border-radius: 3px !important; }\n.sceneContainer .stargate-body .stargate-border-3 .borderCube .cub {\n          font-size: 25px !important; }\n.sceneContainer .stargate-body .borderCubeContainer {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center; }\n.sceneContainer .stargate-body .borderCubeContainer .borderCube {\n        position: absolute;\n        width: 8px;\n        height: 5px;\n        display: flex;\n        border-right: 1px solid #2f2f2f;\n        justify-content: center;\n        overflow: hidden;\n        align-items: center;\n        color: #2f2f2f; }\n.sceneContainer .stargate-body .borderCubeContainer .borderCube .cub {\n          height: 2px;\n          width: 2px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 17px; }\n.sceneContainer .stargate-body .stargate-center {\n      border-top: 1px solid #2f2f2f;\n      cursor: pointer;\n      z-index: 1000;\n      height: 375px;\n      width: 375px;\n      background-color: black;\n      border-radius: 50%; }\n.sceneContainer .stargate-body .gateActive {\n      background-color: #2e3d55; }\n.sceneContainer .chevronsContainer {\n    z-index: 5;\n    height: 100%;\n    width: 100%; }\n.sceneContainer .turnAnimation {\n    -webkit-animation: spin 12s linear infinite;\n    animation: spin 12s linear infinite; }\n.sceneContainer .chevronContainer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n.sceneContainer .chevronContainer .chevron-border {\n      width: 90px;\n      height: 25px;\n      display: flex;\n      justify-content: center;\n      border-top: 6px solid #363a3d; }\n.sceneContainer .chevronContainer .chevron {\n      top: 1px;\n      position: absolute;\n      -webkit-clip-path: polygon(20% 0%, 80% 0%, 55% 100%, 45% 100%);\n      clip-path: polygon(20% 0%, 80% 0%, 55% 100%, 45% 100%);\n      background-color: #3a3a3a;\n      height: 28px;\n      width: 50px; }\n.sceneContainer .chevronBack {\n    top: 5px;\n    position: absolute;\n    -webkit-clip-path: polygon(10% 0%, 90% 0%, 65% 100%, 35% 100%);\n    clip-path: polygon(10% 0%, 90% 0%, 65% 100%, 35% 100%);\n    height: 32px;\n    width: 50px;\n    background-color: #313131;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .chevronInterior {\n    top: 0px;\n    position: absolute;\n    -webkit-clip-path: polygon(30% 0%, 70% 0%, 55% 100%, 45% 100%);\n            clip-path: polygon(30% 0%, 70% 0%, 55% 100%, 45% 100%);\n    background: linear-gradient(to bottom, #ff7400 0%, #cc222a 100%);\n    height: 20px;\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.sceneContainer .chevron2Container {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.sceneContainer .chevron3Container {\n    -webkit-transform: rotate(81deg);\n            transform: rotate(81deg); }\n.sceneContainer .chevron4Container {\n    -webkit-transform: rotate(117deg);\n            transform: rotate(117deg); }\n.sceneContainer .chevron5Container {\n    -webkit-transform: rotate(161deg);\n            transform: rotate(161deg); }\n.sceneContainer .chevron6Container {\n    -webkit-transform: rotate(198deg);\n            transform: rotate(198deg); }\n.sceneContainer .chevron7Container {\n    -webkit-transform: rotate(243deg);\n            transform: rotate(243deg); }\n.sceneContainer .chevron8Container {\n    -webkit-transform: rotate(279deg);\n            transform: rotate(279deg); }\n.sceneContainer .chevron9Container {\n    -webkit-transform: rotate(315deg);\n            transform: rotate(315deg); }\n.backgroundScene {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%; }\n.tabletContainer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  height: 400px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.tabletContainerVisible {\n  z-index: 10000; }\n.tabletBody {\n  z-index: 10000;\n  cursor: pointer;\n  height: 400px;\n  width: 550px;\n  background: linear-gradient(to right, #8b8c90 0%, black 100%);\n  border-radius: 20px;\n  border: 2px solid #e2e2e4;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation: tabletAppear 1s;\n          animation: tabletAppear 1s;\n  pointer-events: none; }\n.tabletBody .tabletScreen {\n    cursor: pointer;\n    position: relative;\n    height: 80%;\n    background-color: black;\n    width: 90%; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 75%;\n      height: 100%;\n      color: white; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .topCT {\n        position: absolute;\n        left: 0;\n        top: 0;\n        height: 81%;\n        width: 100%; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .topCT .leftTabletContainer {\n          position: absolute;\n          left: 0;\n          top: 0;\n          width: calc(25% - 16px);\n          height: calc(100% - 26px);\n          border: 1px solid black;\n          margin: 12px;\n          font-size: 10px;\n          margin-right: 0; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .topCT .leftTabletContainer .topLeftTabletCT {\n            border: 1px solid #127cab;\n            height: calc(70% - 18px);\n            width: calc(100% - 8px);\n            margin-bottom: 10px;\n            text-align: right;\n            padding: 3px;\n            color: #127cab;\n            overflow: hidden; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .topCT .leftTabletContainer .topLeftTabletCT p {\n              width: 500px;\n              margin: 0;\n              -webkit-animation: slide 10s linear infinite;\n              animation: slide 10s linear infinite; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .topCT .leftTabletContainer .bottomLeftTabletCT {\n            border-right: 1px solid #127cab;\n            border-left: 1px solid #127cab;\n            height: calc(30%);\n            width: calc(100% - 2px); }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .topCT .midTabletContainer {\n          position: absolute;\n          right: 0;\n          top: 0;\n          width: calc(75% - 26px);\n          height: calc(100% - 26px);\n          margin: 12px;\n          border: 1px solid #127cab; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .bottomCT {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        height: 19%;\n        width: 100%;\n        display: flex;\n        align-items: center; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .bottomCT .first {\n          margin: 10px;\n          margin-right: 5px;\n          margin-top: 0;\n          border: 1px solid #127cab;\n          width: calc(50% - 17px);\n          height: calc(100% - 12px); }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .bottomCT .second {\n          margin: 10px;\n          margin-left: 5px;\n          margin-top: 0;\n          border: 1px solid #127cab;\n          width: calc(25% - 17px);\n          height: calc(100% - 12px);\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-wrap: wrap; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .bottomCT .second .miniCub {\n            width: calc(13.5%);\n            height: calc(19%);\n            border: 1px solid #127cab; }\n.tabletBody .tabletScreen .leftAndMidTabletContainer .bottomCT .second .filled {\n            background-color: #a1d0e4; }\n.tabletBody .tabletScreen .rightTabletSlotNumber {\n      position: absolute;\n      right: 20%;\n      top: 0;\n      width: calc(5% - 5px);\n      height: calc(100% - 20px);\n      padding: 2.5px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap; }\n.tabletBody .tabletScreen .rightTabletSlotNumber .chevSlotNumber {\n        height: calc(13% - 4px);\n        margin: 2px;\n        width: 100%;\n        color: white;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 19px; }\n.tabletBody .tabletScreen .rightTabletContainer {\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: calc(20% - 10px);\n      height: calc(100% - 20px);\n      padding: 10px;\n      padding-left: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap; }\n.tabletBody .tabletScreen .rightTabletContainer .chevSlot {\n        height: calc(13% - 6px);\n        border: 1px solid #127cab;\n        margin: 2px;\n        width: 100%;\n        color: white; }\n.tabletBodyHidden {\n  pointer-events: inherit !important;\n  bottom: -345px;\n  -webkit-animation: tabletDisappear 1s;\n          animation: tabletDisappear 1s; }\n.buttonCloseTabletContainer {\n  position: absolute;\n  right: 0;\n  height: 100%;\n  bottom: 0;\n  width: 5%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.buttonCloseTabletContainer .buttonTabletSG {\n    pointer-events: all;\n    height: 30px;\n    cursor: pointer;\n    width: 15px;\n    border: 1px solid #e2e2e4;\n    padding: 0;\n    margin: 0;\n    min-width: 0;\n    min-height: 0; }\n@media screen and (max-width: 576px) {\n  .fullGateContainer, .tabletContainer {\n    width: 150% !important; }\n  .tabletContainer {\n    left: 0; } }\n@-webkit-keyframes tabletAppear {\n  from {\n    bottom: -345px; }\n  to {\n    bottom: 0; } }\n@keyframes tabletAppear {\n  from {\n    bottom: -345px; }\n  to {\n    bottom: 0; } }\n@-webkit-keyframes tabletDisappear {\n  from {\n    bottom: 0; }\n  to {\n    bottom: -345px; } }\n@keyframes tabletDisappear {\n  from {\n    bottom: 0; }\n  to {\n    bottom: -345px; } }\n@-webkit-keyframes slide {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  100% {\n    -webkit-transform: translate3d(-400px, 0, 0);\n            transform: translate3d(-400px, 0, 0); } }\n@keyframes slide {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  100% {\n    -webkit-transform: translate3d(-400px, 0, 0);\n            transform: translate3d(-400px, 0, 0); } }\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n#homeDashboardContainer {\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden; }\n#homeDashboardContainer mat-toolbar {\n    position: relative;\n    height: 150px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n    z-index: 100; }\n#homeDashboardContainer mat-toolbar button.menu {\n      position: absolute;\n      right: 40px; }\n#homeDashboardContainer mat-toolbar button.menu mat-icon {\n        font-size: 40px;\n        height: 40px;\n        width: 40px;\n        display: flex;\n        color: #ff5721;\n        justify-content: center;\n        align-items: center; }\n#homeDashboardContainer mat-toolbar .langFlag {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      cursor: pointer;\n      border-radius: 2.5px; }\n#homeDashboardContainer mat-toolbar .toolBarContainer {\n      height: 100%;\n      width: 400px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-wrap: wrap; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .topText {\n        color: #ff5721;\n        width: calc(100% - 2px);\n        height: calc(50% - 2px);\n        font-size: 45px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-bottom: 2px solid #ff5722;\n        border-right: 2px solid #ff5722; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .bottomText {\n        color: #cccccc;\n        width: calc(100% - 2px);\n        height: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-left: 2px solid #ff5722;\n        font-size: 27px;\n        flex-wrap: wrap; }\n#homeDashboardContainer mat-toolbar .toolBarContainer .bottomText .txt {\n          display: flex;\n          align-items: center;\n          width: 60%;\n          height: 50%; }\n#homeDashboardContainer .globalContainer {\n    height: calc(100vh - 150px);\n    width: 100%; }\n#homeDashboardContainer .globalContainer #topPage {\n      height: 100%;\n      width: 100%;\n      background-color: #ff5722; }\n#homeDashboardContainer .globalContainer #scene01Container {\n      height: 100vh;\n      width: 100%; }\n@media screen and (max-width: 1600px) {\n    #homeDashboardContainer .langFlag {\n      background-color: bisque; } }\n@media screen and (max-width: 1200px) {\n    #homeDashboardContainer .langFlag {\n      background-color: blue; } }\n@media screen and (max-width: 992px) {\n    #homeDashboardContainer .langFlag {\n      background-color: gold; } }\n@media screen and (max-width: 768px) {\n    #homeDashboardContainer mat-toolbar {\n      height: 100px; }\n      #homeDashboardContainer mat-toolbar .toolBarContainer {\n        width: 250px; }\n        #homeDashboardContainer mat-toolbar .toolBarContainer .topText {\n          font-size: 25px; }\n        #homeDashboardContainer mat-toolbar .toolBarContainer .bottomText {\n          font-size: 15px; }\n    #homeDashboardContainer .globalContainer {\n      height: calc(100vh - 100px);\n      width: 100%; }\n    #homeDashboardContainer .langFlag {\n      background-color: green; } }\n@media screen and (max-width: 576px) {\n    #homeDashboardContainer mat-toolbar {\n      justify-content: normal; }\n    #homeDashboardContainer .langFlag {\n      background-color: red; } }\nmat-sidenav-container {\n  position: absolute;\n  height: calc(100% - 64px);\n  width: 100%; }\nmat-sidenav-container mat-sidenav {\n    padding-left: 25px;\n    padding-right: 25px;\n    background-color: #263238;\n    color: white; }\nmat-sidenav-container mat-sidenav .matNavContainer .profilContainer img {\n      height: 170px;\n      margin: 5px;\n      border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzXFxyZXNwb25zaXZlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL0Q6XFxEZXZlbG9wcGVtZW50XFxSZW1pRnJvbnRpZXJlLmdpdGh1Yi5pby9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcaG9tZVxcaW5jbHVkZXNcXHNjZW5lMDFcXHNjZW5lMDEuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvRDpcXERldmVsb3BwZW1lbnRcXFJlbWlGcm9udGllcmUuZ2l0aHViLmlvL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFBO0FBWUEsb0NBQUE7QUNaQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFUdkI7SUFZUSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7QUFuQnhCO0lBd0JRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtBQS9CMUI7SUFrQ1Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBSTdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0FBNUMzQjtNQStDWSxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xC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QUEvRC9CO1VBa0VvQixhQUFhO1VBQ2IsbUJBQW1CO1VBQ25CLFVBQVU7VUFDVixXQUFXLEVBQUE7QUFyRS9CO0lBMkVRLDJCQUEyQjtJQUMzQixXQUFXLEVBQUE7QUE1RW5CO01BK0VZLFlBQVk7TUFDWixXQUFXO01BQ1gseUJBQXlCLEVBQUE7QUFqRnJDO01Bb0ZZLGFBQWE7TUFDYixXQUFXLEVBQUE7QUFJbkI7SUF6Rko7TUEyRlksd0JBQXdCLEVBQUEsRUFDM0I7QUFFTDtJQTlGSjtNQWdHWSxzQkFBc0IsRUFBQSxFQUN6QjtBQUVMO0lBbkdKO01BcUdZLHNCQUFzQixFQUFBLEVBQ3pCO0FBRUw7SUF4R0o7TUEwR1ksYUFBYSxFQUFBO01BMUd6QjtRQTZHZ0IsWUFBWSxFQUFBO1FBN0c1QjtVQStHb0IsZUFBZSxFQUFBO1FBL0duQztVQWtIb0IsZUFBZSxFQUFBO0lBbEhuQztNQXVIWSwyQkFBMkI7TUFDM0IsV0FBVyxFQUFBO0lBeEh2QjtNQTJIWSx1QkFBdUIsRUFBQSxFQUMxQjtBQUVMO0lBOUhKO01BZ0lZLHVCQUF1QixFQUFBO0lBaEluQztNQW1JWSxxQkFBcUIsRUFBQSxFQUN4QjtBQVNUO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7QUFIZjtJQU1RLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVksRUFBQTtBQVRwQjtNQWVvQixhQUFhO01BQ2IsV0FBVztNQUNYLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLSBCUkVBSyBQT0lOVFMgLS0tLS0tLS0tICovXHJcbi8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KVxyXG4kbWF4LWV4dHJhLXNtYWxsOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCknO1xyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpXHJcbiRtYXgtc21hbGw6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSc7XHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCBsZXNzIHRoYW4gOTkycHgpXHJcbiRtYXgtbWVkaXVtOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCknO1xyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgbGVzcyB0aGFuIDEyMDBweClcclxuJG1heC1sYXJnZTogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSc7XHJcbi8vIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCBtb3JlIHRoYW4gMTIwMHB4KVxyXG4kbWF4LWV4dHJhLWxhcmdlOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpJztcclxuXHJcbi8qIC0tLS0tLSBHSVZFUiBTQ1JFRU4gU0laRSAtLS0tLS0gKi9cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBtb3JlIHRoYW4gNTc2cHgpXHJcbiRtaW4tZXh0cmEtc21hbGw6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSc7XHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIG1vcmUgdGhhbiA3NjhweClcclxuJG1pbi1zbWFsbDogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpJztcclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIG1vcmUgdGhhbiA5OTJweClcclxuJG1pbi1tZWRpdW06ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSc7XHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBtb3JlIHRoYW4gMTIwMHB4KVxyXG4kbWluLWxhcmdlOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpJztcclxuLy8gTGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIG1vcmUgdGhhbiAxMjAwcHgpXHJcbiRtaW4tZXh0cmEtbGFyZ2U6ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCknO1xyXG5cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBcclxuLy8gYW5kIChtaW4td2lkdGg6IDEwMDBweClcclxuLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuIFxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogMTAwMHB4KSBcclxuLy8gYW5kIChtaW4td2lkdGg6IDc1MHB4KVxyXG4vLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7IC8vTmV4dXMgMTBcclxuICAgIFxyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNzUwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSB7XHJcbiAgICAgXHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA2MDBweClcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNTAwcHgpIHtcclxuICAgXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogNzUwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogNjAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KVxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuICAvLyBMdW1pYSA1NTBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogNjAwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogNDAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiAgLy8gUGl4ZWwyWExcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSAvLyBQaXhlbDIgLSBpUGhvbmUgNi83LzggUGx1c1xyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDUwMHB4KSB7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBcclxuLy8gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSBcclxuLy8gYW5kIChtaW4td2lkdGg6IDM1MHB4KVxyXG4vLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG5cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gIC8vIGlQaG9uZSBYXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDc1MHB4KSB7XHJcbi8vICAgICB9XHJcbi8vICAgICBAbWVkaWEgc2NyZWVuIFxyXG4vLyAgICAgYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkgLy8gaVBob25lIDYvNy84IC0gUzMvUzUgLSBOb3RlMyAtIEx1bWlhIDk1MFxyXG4vLyAgICAgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkge1xyXG4vLyAgICAgfVxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogNjAwcHgpIC8vIFdpa29cclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNDUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogMzUwcHgpIFxyXG4vLyBhbmQgKG1pbi13aWR0aDogMzAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcblxyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBcclxuLy8gICAgIGFuZCAobWF4LWhlaWdodDogMTAwMHB4KSBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNzUwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSBcclxuLy8gICAgIGFuZCAobWluLWhlaWdodDogNjAwcHgpIHtcclxuLy8gICAgIH1cclxuLy8gICAgIEBtZWRpYSBzY3JlZW4gXHJcbi8vICAgICBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSAvLyBpUGhvbmUgNC81L1NFXHJcbi8vICAgICBhbmQgKG1pbi1oZWlnaHQ6IDQ1MHB4KSB7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIFxyXG4vLyBhbmQgKG1heC13aWR0aDogMzAwcHgpXHJcbi8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMTAwMHB4KSB7XHJcbi8vIH1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDEwMDBweCkgYW5kIChtaW4taGVpZ2h0OiA3NTBweCkge1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpIHtcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQwMHB4KSB7XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkgYW5kIChtaW4taGVpZ2h0OiAyNTBweCkge1xyXG4vLyB9XHJcblxyXG5cclxuIiwiLnNjZW5lQ29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZnVsbEdhdGVDb250YWluZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFyZ2F0ZUNvbnRhaW5lcntcclxuICAgICAgICAvLyBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH0gLy8jMjRhMWZmXHJcbiAgICAuc3RhcmdhdGUtYm9keXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC8vIGJvcmRlcjogNTBweCBzb2xpZCAjMjcyOTJmO1xyXG5cclxuICAgICAgICAvLyBtYXJnaW46IDg1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnN0YXJnYXRlLXR1cm5pbmctcGFydHtcclxuICAgICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzEzMjMzOyAvLyMzMTMyMzNcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjNhM2Q7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5zeW1ib2xDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idXR0b25TeW1ib2x7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMmYyZjJmO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zeW1ib2x7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1N0YXJnYXRlJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNzJhMmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGV4dC1zaGFkb3c6IC0ycHggMnB4IDAgYmxhY2ssIC0xcHggMXB4IDAgYmxhY2s7ICovXHJcbiAgICAvKiB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMDAwMDAwLCAycHggMnB4ICMwMDAwMDAsIDNweCAzcHggIzAwMDAwMDsgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcmdhdGUtYm9yZGVyLTF7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzg1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjNhM2Q7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJmMmYyZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJnYXRlLWJvcmRlci0ye1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NTRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyZjJmMmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjNhM2Q7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NTRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcmdhdGUtYm9yZGVyLTN7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ5M3B4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzM2MzYzNjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2M2EzZDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ5M3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAuYm9yZGVyQ3ViZXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzJmMmYyZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC5jdWJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3JkZXJDdWJlQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJvcmRlckN1YmV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzJmMmYyZjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJmMmYyZjtcclxuXHJcbiAgICAgICAgICAgICAgICAuY3ViIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0YXJnYXRlLWNlbnRlcntcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyZjJmMmY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNzVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2F0ZUFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJlM2Q1NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbnNDb250YWluZXJ7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudHVybkFuaW1hdGlvbntcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjpzcGluIDEycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246c3BpbiAxMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjpzcGluIDEycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbkNvbnRhaW5lcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblxyXG4gICAgICAgIC5jaGV2cm9uLWJvcmRlcntcclxuICAgICAgICAgICAgLy8gdG9wOiAwO1xyXG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgIzM2M2EzZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZXZyb257XHJcbiAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci13aWR0aDogMzBweCAxNXB4IDAgMTVweDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjM2EzYTNhIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigyMCUgMCUsIDgwJSAwJSwgNTUlIDEwMCUsIDQ1JSAxMDAlKTtcclxuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIwJSAwJSwgODAlIDAlLCA1NSUgMTAwJSwgNDUlIDEwMCUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uQmFja3tcclxuICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAvLyBib3JkZXItd2lkdGg6IDM1cHggMjBweCAwIDIwcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjMzEzMTMxIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDEwJSAwJSwgOTAlIDAlLCA2NSUgMTAwJSwgMzUlIDEwMCUpO1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMCUgMCUsIDkwJSAwJSwgNjUlIDEwMCUsIDM1JSAxMDAlKTtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICMzMTMxMzE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNoZXZyb25JbnRlcmlvcntcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAvLyBib3JkZXItd2lkdGg6IDIycHggMTFweCAwIDExcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiAjY2QyNTFjIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDcwJSAwJSwgNTUlIDEwMCUsIDQ1JSAxMDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY3NDAwIDAlLCNjYzIyMmEgMTAwJSk7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jaGV2cm9uMUNvbnRhaW5lcntcclxuICAgICAgICAuY2hldnJvbjF7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb24yQ29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAuY2hldnJvbjJ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uM0NvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4MWRlZyk7XHJcbiAgICAgICAgLmNoZXZyb24ze1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjRDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTE3ZGVnKTtcclxuICAgICAgICAuY2hldnJvbjR7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uNUNvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjFkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uNXtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb242Q29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE5OGRlZyk7XHJcbiAgICAgICAgLmNoZXZyb242e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hldnJvbjdDb250YWluZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQzZGVnKTtcclxuICAgICAgICAuY2hldnJvbjd7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9uOENvbnRhaW5lcntcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzlkZWcpO1xyXG4gICAgICAgIC5jaGV2cm9uOHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb245Q29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgICAgICAgLmNoZXZyb245e1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kU2NlbmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRhYmxldENvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGFibGV0Q29udGFpbmVyVmlzaWJsZXtcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcbi50YWJsZXRCb2R5e1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAgIzhiOGM5MCAwJSxibGFjayAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJlMmU0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiB0YWJsZXRBcHBlYXIgMXM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAudGFibGV0U2NyZWVue1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgLmxlZnRBbmRNaWRUYWJsZXRDb250YWluZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIC50b3BDVHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgxJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgLmxlZnRUYWJsZXRDb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDE2cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50b3BMZWZ0VGFibGV0Q1R7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjdjYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg3MCUgLSAxOHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTI3Y2FiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOnNsaWRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbjpzbGlkZSAxMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOnNsaWRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJvdHRvbUxlZnRUYWJsZXRDVHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzEyN2NhYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMTI3Y2FiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMzAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1pZFRhYmxldENvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDc1JSAtIDI2cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjdjYWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJvdHRvbUNUe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTklO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuZmlyc3R7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEyN2NhYjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxN3B4KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNlY29uZHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjdjYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMTdweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMnB4KTsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1pbmlDdWJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEzLjUlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDE5JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjdjYWI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWxsZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMWQwZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHRUYWJsZXRTbG90TnVtYmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNSUgLSA1cHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAuY2hldlNsb3ROdW1iZXJ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTMlIC0gNHB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodFRhYmxldENvbnRhaW5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygyMCUgLSAxMHB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgLmNoZXZTbG90IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMyUgLSA2cHgpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEyN2NhYjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRhYmxldEJvZHlIaWRkZW57XHJcbiAgICBwb2ludGVyLWV2ZW50czogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAtMzQ1cHg7XHJcbiAgICBhbmltYXRpb246IHRhYmxldERpc2FwcGVhciAxcztcclxufVxyXG4uYnV0dG9uQ2xvc2VUYWJsZXRDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmJ1dHRvblRhYmxldFNHe1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmU0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhICN7JG1heC1leHRyYS1sYXJnZX0ge1xyXG59XHJcbkBtZWRpYSAjeyRtYXgtbGFyZ2V9IHtcclxufVxyXG5AbWVkaWEgI3skbWF4LW1lZGl1bX0ge1xyXG59XHJcbkBtZWRpYSAjeyRtYXgtc21hbGx9IHtcclxufVxyXG5AbWVkaWEgI3skbWF4LWV4dHJhLXNtYWxsfSB7XHJcbiAgICAuZnVsbEdhdGVDb250YWluZXIsIC50YWJsZXRDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDE1MCUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gICAgLnRhYmxldENvbnRhaW5lcntcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRhYmxldEFwcGVhciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3R0b206IC0zNDVweDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyB0YWJsZXREaXNhcHBlYXIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvdHRvbTogLTM0NXB4O1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGV7XHJcbiAgICAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTQwMHB4LCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4geyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cclxuQGtleWZyYW1lcyBzcGluIHsgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOyB9IH0iLCJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuQGltcG9ydCBcIi4vaW5jbHVkZXMvaW5jbHVkZXNfaG9tZV9pbmRleFwiO1xyXG5cclxuXHJcbiNob21lRGFzaGJvYXJkQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwuMjMpO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAgICAgYnV0dG9uLm1lbnV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1NzIxO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYW5nRmxhZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvb2xCYXJDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgLnRvcFRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNTcyMTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDJweCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjU3MjI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmY1NzIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3R0b21UZXh0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmNTcyMjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnR4dHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5nbG9iYWxDb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAjdG9wUGFnZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAjc2NlbmUwMUNvbnRhaW5lcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAjeyRtYXgtZXh0cmEtbGFyZ2V9IHtcclxuICAgICAgICAubGFuZ0ZsYWd7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgI3skbWF4LWxhcmdlfSB7XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAjeyRtYXgtbWVkaXVtfSB7XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAjeyRtYXgtc21hbGx9IHtcclxuICAgICAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgIC50b29sQmFyQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgLnRvcFRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJvdHRvbVRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nbG9iYWxDb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYW5nRmxhZ3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhICN7JG1heC1leHRyYS1zbWFsbH0ge1xyXG4gICAgICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhbmdGbGFne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgbWF0LXNpZGVuYXZ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxuICAgICAgICAubWF0TmF2Q29udGFpbmVye1xyXG4gICAgICAgICAgICAucHJvZmlsQ29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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
        this.stargateTabletMiniCub = [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0];
        this.showTabletSG = false;
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
    HomeComponentMain.prototype.showTablet = function () {
        this.showTabletSG = !this.showTabletSG;
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