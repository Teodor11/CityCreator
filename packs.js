/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tile_packs.ts":
/*!***************************!*\
  !*** ./src/tile_packs.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pack_default\": () => (/* binding */ pack_default),\n/* harmony export */   \"pack_violet\": () => (/* binding */ pack_violet),\n/* harmony export */   \"pack_tram\": () => (/* binding */ pack_tram)\n/* harmony export */ });\nconst pack_default = {\r\n    name: \"default\",\r\n    directory: \"00_default\",\r\n    tiles: [\r\n        { id: 0, top: false, bottom: false, left: false, right: false, image: \"\", rotate: 0 },\r\n        { id: 1, top: false, bottom: false, left: true, right: true, image: \"street1.png\", rotate: 0 },\r\n        { id: 2, top: true, bottom: true, left: false, right: false, image: \"street1.png\", rotate: 90 },\r\n        { id: 3, top: true, bottom: false, left: true, right: false, image: \"street2.png\", rotate: 0 },\r\n        { id: 4, top: true, bottom: false, left: false, right: true, image: \"street2.png\", rotate: 90 },\r\n        { id: 5, top: false, bottom: true, left: false, right: true, image: \"street2.png\", rotate: 180 },\r\n        { id: 6, top: false, bottom: true, left: true, right: false, image: \"street2.png\", rotate: 270 },\r\n        { id: 7, top: true, bottom: false, left: true, right: true, image: \"street3.png\", rotate: 0 },\r\n        { id: 8, top: true, bottom: true, left: false, right: true, image: \"street3.png\", rotate: 90 },\r\n        { id: 9, top: false, bottom: true, left: true, right: true, image: \"street3.png\", rotate: 180 },\r\n        { id: 10, top: true, bottom: true, left: true, right: false, image: \"street3.png\", rotate: 270 },\r\n        { id: 11, top: true, bottom: true, left: true, right: true, image: \"street4.png\", rotate: 0 },\r\n        { id: 12, top: false, bottom: false, left: false, right: false, image: \"street5.png\", rotate: 0 },\r\n        { id: 13, top: false, bottom: true, left: false, right: false, image: \"street6.png\", rotate: 0 },\r\n        { id: 14, top: false, bottom: false, left: true, right: false, image: \"street6.png\", rotate: 90 },\r\n        { id: 15, top: true, bottom: false, left: false, right: false, image: \"street6.png\", rotate: 180 },\r\n        { id: 16, top: false, bottom: false, left: false, right: true, image: \"street6.png\", rotate: 270 },\r\n    ]\r\n};\r\nconst pack_violet = {\r\n    name: \"violet\",\r\n    directory: \"01_violet\",\r\n    background: \"#DC9EE2\",\r\n    tiles: [\r\n        { id: 0, top: false, bottom: false, left: false, right: false, image: \"\", rotate: 0 },\r\n        { id: 1, top: false, bottom: false, left: true, right: true, image: \"street1.png\", frequency: [6], rotate: 0 },\r\n        { id: 2, top: true, bottom: true, left: false, right: false, image: \"street1.png\", frequency: [6], rotate: 90 },\r\n        { id: 3, top: true, bottom: false, left: true, right: false, image: \"street2.png\", frequency: [2], rotate: 0 },\r\n        { id: 4, top: true, bottom: false, left: false, right: true, image: \"street2.png\", frequency: [2], rotate: 90 },\r\n        { id: 5, top: false, bottom: true, left: false, right: true, image: \"street2.png\", frequency: [2], rotate: 180 },\r\n        { id: 6, top: false, bottom: true, left: true, right: false, image: \"street2.png\", frequency: [2], rotate: 270 },\r\n        { id: 7, top: true, bottom: false, left: true, right: true, image: \"street3.png\", frequency: [2], rotate: 0 },\r\n        { id: 8, top: true, bottom: true, left: false, right: true, image: \"street3.png\", frequency: [2], rotate: 90 },\r\n        { id: 9, top: false, bottom: true, left: true, right: true, image: \"street3.png\", frequency: [2], rotate: 180 },\r\n        { id: 10, top: true, bottom: true, left: true, right: false, image: \"street3.png\", frequency: [2], rotate: 270 },\r\n        { id: 11, top: true, bottom: true, left: true, right: true, image: \"street4.png\", frequency: [2], rotate: 0 },\r\n        { id: 12, top: false, bottom: false, left: false, right: false, image: \"street5.png\", frequency: [9], rotate: 0 },\r\n        { id: 13, top: false, bottom: true, left: false, right: false, image: \"street6.png\", frequency: [1], rotate: 0 },\r\n        { id: 14, top: false, bottom: false, left: true, right: false, image: \"street6.png\", frequency: [1], rotate: 90 },\r\n        { id: 15, top: true, bottom: false, left: false, right: false, image: \"street6.png\", frequency: [1], rotate: 180 },\r\n        { id: 16, top: false, bottom: false, left: false, right: true, image: \"street6.png\", frequency: [1], rotate: 270 },\r\n    ]\r\n};\r\nconst pack_tram = {\r\n    name: \"tram\",\r\n    directory: \"02_tram\",\r\n    background: \"#9FE888\",\r\n    tiles: [\r\n        { id: 10, top: false, bottom: false, left: true, right: true, image: '1a.png', rotate: 0, frequency: [4, 5, 6] },\r\n        { id: 11, top: false, bottom: false, left: true, right: true, image: '1b.png', rotate: 0, frequency: [3, 2, 1] },\r\n        { id: 12, top: false, bottom: false, left: true, right: true, image: '1c.png', rotate: 0, frequency: [3, 2, 1] },\r\n        { id: 13, top: true, bottom: true, left: false, right: false, image: '1a.png', rotate: 90, frequency: [4, 5, 6] },\r\n        { id: 14, top: true, bottom: true, left: false, right: false, image: '1b.png', rotate: 90, frequency: [3, 2, 1] },\r\n        { id: 15, top: true, bottom: true, left: false, right: false, image: '1c.png', rotate: 90, frequency: [3, 2, 1] },\r\n        { id: 16, top: false, bottom: false, left: true, right: true, image: '1b.png', rotate: 180, frequency: [3, 2, 1] },\r\n        { id: 17, top: false, bottom: false, left: true, right: true, image: '1c.png', rotate: 180, frequency: [3, 2, 1] },\r\n        { id: 18, top: true, bottom: true, left: false, right: false, image: '1b.png', rotate: 270, frequency: [3, 2, 1] },\r\n        { id: 19, top: true, bottom: true, left: false, right: false, image: '1c.png', rotate: 270, frequency: [3, 2, 1] },\r\n        { id: 20, top: true, bottom: false, left: true, right: false, image: '2.png', rotate: 0, frequency: [1, 2, 4] },\r\n        { id: 21, top: true, bottom: false, left: false, right: true, image: '2.png', rotate: 90, frequency: [1, 2, 4] },\r\n        { id: 22, top: false, bottom: true, left: false, right: true, image: '2.png', rotate: 180, frequency: [1, 2, 4] },\r\n        { id: 23, top: false, bottom: true, left: true, right: false, image: '2.png', rotate: 270, frequency: [1, 2, 4] },\r\n        { id: 30, top: true, bottom: false, left: true, right: true, image: '3.png', rotate: 0, frequency: [6, 4, 2] },\r\n        { id: 31, top: true, bottom: true, left: false, right: true, image: '3.png', rotate: 90, frequency: [6, 4, 2] },\r\n        { id: 32, top: false, bottom: true, left: true, right: true, image: '3.png', rotate: 180, frequency: [6, 4, 2] },\r\n        { id: 33, top: true, bottom: true, left: true, right: false, image: '3.png', rotate: 270, frequency: [6, 4, 2] },\r\n        { id: 40, top: true, bottom: true, left: true, right: true, image: '4.png', rotate: 0, frequency: [6, 3, 1] },\r\n        { id: 50, top: false, bottom: false, left: false, right: false, image: '5a.png', rotate: 0, frequency: [1, 2, 5] },\r\n        { id: 51, top: false, bottom: false, left: false, right: false, image: '5b.png', rotate: 0, frequency: [0, 2, 5] },\r\n        { id: 52, top: false, bottom: false, left: false, right: false, image: '5c.png', rotate: 0, frequency: [0, 2, 5] },\r\n        { id: 53, top: false, bottom: false, left: false, right: false, image: '5d.png', rotate: 0, frequency: [0, 2, 5] },\r\n        { id: 60, top: false, bottom: true, left: false, right: false, image: '6.png', rotate: 0, frequency: [1, 2, 3] },\r\n        { id: 61, top: false, bottom: false, left: true, right: false, image: '6.png', rotate: 90, frequency: [1, 2, 3] },\r\n        { id: 62, top: true, bottom: false, left: false, right: false, image: '6.png', rotate: 180, frequency: [1, 2, 3] },\r\n        { id: 63, top: false, bottom: false, left: false, right: true, image: '6.png', rotate: 270, frequency: [1, 2, 3] },\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://city-creator/./src/tile_packs.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/tile_packs.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;