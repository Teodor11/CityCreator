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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_packs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile_packs */ \"./src/tile_packs.ts\");\n// City creator -> index.ts\r\n\r\nfunction main() {\r\n    document.getElementById(\"create\").addEventListener(\"click\", createMap);\r\n}\r\nfunction getRandomMatchingTileId(matching_tiles, row_frequency_type) {\r\n    const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\r\n    let matching_tiles_frequencies = [];\r\n    for (let i = 0; i < matching_tiles.length; i++) {\r\n        const el = matching_tiles[i];\r\n        const frequency = !isNaN(el.frequency[row_frequency_type - 1]) ? el.frequency[row_frequency_type - 1] : 1;\r\n        for (let j = 0; j < frequency; j++) {\r\n            matching_tiles_frequencies.push(el.id);\r\n        }\r\n    }\r\n    const result = matching_tiles_frequencies[getRandomInteger(0, matching_tiles_frequencies.length - 1)];\r\n    return result;\r\n}\r\nconst getTile = (tiles, id) => tiles.find(el => el.id == id);\r\nfunction createMap() {\r\n    const rows = parseInt(document.getElementById(\"options_rows\").value);\r\n    const columns = parseInt(document.getElementById(\"options_columns\").value);\r\n    const areas_count = parseInt(document.getElementById(\"options_areas\").value);\r\n    ///////////////////////////////////////////////////\r\n    /////// choose pack here //////////////////////////\r\n    const pack = _tile_packs__WEBPACK_IMPORTED_MODULE_0__.pack_tram;\r\n    ///////////////////////////////////////////////////\r\n    const tiles = pack.tiles;\r\n    let map = [];\r\n    //rows\r\n    for (let i = 0; i < rows; i++) {\r\n        map[i] = [];\r\n        const row_frequency_type = Math.floor(i / (Math.ceil(rows / areas_count)));\r\n        //columns\r\n        for (let j = 0; j < columns; j++) {\r\n            // 1- or 2-element array with true/false values\r\n            console.log(tiles, i, j, map);\r\n            const left_values = j > 0 ? [getTile(tiles, map[i][j - 1]).right] : [true, false]; //check right value of the left tile\r\n            const top_values = i > 0 ? [getTile(tiles, map[i - 1][j]).bottom] : [true, false]; //check bottom value of the top tile\r\n            const right_values = [true, false];\r\n            const bottom_values = [true, false];\r\n            const matching_tiles = tiles.filter(el => left_values.includes(el.left) && top_values.includes(el.top)\r\n                && right_values.includes(el.right) && bottom_values.includes(el.bottom) && el.id > 0);\r\n            map[i][j] = getRandomMatchingTileId(matching_tiles, row_frequency_type);\r\n        }\r\n    }\r\n    renderMap(map, pack);\r\n}\r\nfunction renderMap(map, pack) {\r\n    let code = \"\";\r\n    //rows\r\n    for (let i = 0; i < map.length; i++) {\r\n        code += `<div class=\"result_row\">`;\r\n        //columns\r\n        for (let j = 0; j < map[i].length; j++) {\r\n            const el = getTile(pack.tiles, map[i][j]);\r\n            code += `<div class=\"result_tile\">\r\n                <img src=\"./tile_packs/${pack.directory}/${el.image}\" alt=\"${el.image}\" style=\"transform: rotate(${el.rotate}deg);\" />\r\n            </div>`;\r\n        }\r\n        code += \"</div>\";\r\n    }\r\n    const result_el = document.getElementById(\"result\");\r\n    result_el.style.backgroundColor = pack.background || \"white\";\r\n    result_el.classList.remove(\"hidden\");\r\n    result_el.innerHTML = code;\r\n}\r\ndocument.addEventListener(\"DOMContentLoaded\", function () { main(); });\r\n\n\n//# sourceURL=webpack://city-creator/./src/index.ts?");

/***/ }),

/***/ "./src/tile_packs.ts":
/*!***************************!*\
  !*** ./src/tile_packs.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pack_default\": () => (/* binding */ pack_default),\n/* harmony export */   \"pack_violet\": () => (/* binding */ pack_violet),\n/* harmony export */   \"pack_tram\": () => (/* binding */ pack_tram)\n/* harmony export */ });\nconst pack_default = {\r\n    name: \"default\",\r\n    directory: \"00_default\",\r\n    tiles: [\r\n        { id: 0, top: false, bottom: false, left: false, right: false, image: \"\", rotate: 0 },\r\n        { id: 1, top: false, bottom: false, left: true, right: true, image: \"street1.png\", rotate: 0 },\r\n        { id: 2, top: true, bottom: true, left: false, right: false, image: \"street1.png\", rotate: 90 },\r\n        { id: 3, top: true, bottom: false, left: true, right: false, image: \"street2.png\", rotate: 0 },\r\n        { id: 4, top: true, bottom: false, left: false, right: true, image: \"street2.png\", rotate: 90 },\r\n        { id: 5, top: false, bottom: true, left: false, right: true, image: \"street2.png\", rotate: 180 },\r\n        { id: 6, top: false, bottom: true, left: true, right: false, image: \"street2.png\", rotate: 270 },\r\n        { id: 7, top: true, bottom: false, left: true, right: true, image: \"street3.png\", rotate: 0 },\r\n        { id: 8, top: true, bottom: true, left: false, right: true, image: \"street3.png\", rotate: 90 },\r\n        { id: 9, top: false, bottom: true, left: true, right: true, image: \"street3.png\", rotate: 180 },\r\n        { id: 10, top: true, bottom: true, left: true, right: false, image: \"street3.png\", rotate: 270 },\r\n        { id: 11, top: true, bottom: true, left: true, right: true, image: \"street4.png\", rotate: 0 },\r\n        { id: 12, top: false, bottom: false, left: false, right: false, image: \"street5.png\", rotate: 0 },\r\n        { id: 13, top: false, bottom: true, left: false, right: false, image: \"street6.png\", rotate: 0 },\r\n        { id: 14, top: false, bottom: false, left: true, right: false, image: \"street6.png\", rotate: 90 },\r\n        { id: 15, top: true, bottom: false, left: false, right: false, image: \"street6.png\", rotate: 180 },\r\n        { id: 16, top: false, bottom: false, left: false, right: true, image: \"street6.png\", rotate: 270 },\r\n    ]\r\n};\r\nconst pack_violet = {\r\n    name: \"violet\",\r\n    directory: \"01_violet\",\r\n    background: \"#DC9EE2\",\r\n    tiles: [\r\n        { id: 0, top: false, bottom: false, left: false, right: false, image: \"\", rotate: 0 },\r\n        { id: 1, top: false, bottom: false, left: true, right: true, image: \"street1.png\", frequency: [6], rotate: 0 },\r\n        { id: 2, top: true, bottom: true, left: false, right: false, image: \"street1.png\", frequency: [6], rotate: 90 },\r\n        { id: 3, top: true, bottom: false, left: true, right: false, image: \"street2.png\", frequency: [2], rotate: 0 },\r\n        { id: 4, top: true, bottom: false, left: false, right: true, image: \"street2.png\", frequency: [2], rotate: 90 },\r\n        { id: 5, top: false, bottom: true, left: false, right: true, image: \"street2.png\", frequency: [2], rotate: 180 },\r\n        { id: 6, top: false, bottom: true, left: true, right: false, image: \"street2.png\", frequency: [2], rotate: 270 },\r\n        { id: 7, top: true, bottom: false, left: true, right: true, image: \"street3.png\", frequency: [2], rotate: 0 },\r\n        { id: 8, top: true, bottom: true, left: false, right: true, image: \"street3.png\", frequency: [2], rotate: 90 },\r\n        { id: 9, top: false, bottom: true, left: true, right: true, image: \"street3.png\", frequency: [2], rotate: 180 },\r\n        { id: 10, top: true, bottom: true, left: true, right: false, image: \"street3.png\", frequency: [2], rotate: 270 },\r\n        { id: 11, top: true, bottom: true, left: true, right: true, image: \"street4.png\", frequency: [2], rotate: 0 },\r\n        { id: 12, top: false, bottom: false, left: false, right: false, image: \"street5.png\", frequency: [9], rotate: 0 },\r\n        { id: 13, top: false, bottom: true, left: false, right: false, image: \"street6.png\", frequency: [1], rotate: 0 },\r\n        { id: 14, top: false, bottom: false, left: true, right: false, image: \"street6.png\", frequency: [1], rotate: 90 },\r\n        { id: 15, top: true, bottom: false, left: false, right: false, image: \"street6.png\", frequency: [1], rotate: 180 },\r\n        { id: 16, top: false, bottom: false, left: false, right: true, image: \"street6.png\", frequency: [1], rotate: 270 },\r\n    ]\r\n};\r\nconst pack_tram = {\r\n    name: \"tram\",\r\n    directory: \"02_tram\",\r\n    background: \"#9FE888\",\r\n    tiles: [\r\n        { id: 10, top: false, bottom: false, left: true, right: true, image: '1a.png', rotate: 0, frequency: [4, 5, 6] },\r\n        { id: 11, top: false, bottom: false, left: true, right: true, image: '1b.png', rotate: 0, frequency: [3, 2, 1] },\r\n        { id: 12, top: false, bottom: false, left: true, right: true, image: '1c.png', rotate: 0, frequency: [3, 2, 1] },\r\n        { id: 13, top: true, bottom: true, left: false, right: false, image: '1a.png', rotate: 90, frequency: [4, 5, 6] },\r\n        { id: 14, top: true, bottom: true, left: false, right: false, image: '1b.png', rotate: 90, frequency: [3, 2, 1] },\r\n        { id: 15, top: true, bottom: true, left: false, right: false, image: '1c.png', rotate: 90, frequency: [3, 2, 1] },\r\n        { id: 16, top: false, bottom: false, left: true, right: true, image: '1b.png', rotate: 180, frequency: [3, 2, 1] },\r\n        { id: 17, top: false, bottom: false, left: true, right: true, image: '1c.png', rotate: 180, frequency: [3, 2, 1] },\r\n        { id: 18, top: true, bottom: true, left: false, right: false, image: '1b.png', rotate: 270, frequency: [3, 2, 1] },\r\n        { id: 19, top: true, bottom: true, left: false, right: false, image: '1c.png', rotate: 270, frequency: [3, 2, 1] },\r\n        { id: 20, top: true, bottom: false, left: true, right: false, image: '2.png', rotate: 0, frequency: [1, 2, 4] },\r\n        { id: 21, top: true, bottom: false, left: false, right: true, image: '2.png', rotate: 90, frequency: [1, 2, 4] },\r\n        { id: 22, top: false, bottom: true, left: false, right: true, image: '2.png', rotate: 180, frequency: [1, 2, 4] },\r\n        { id: 23, top: false, bottom: true, left: true, right: false, image: '2.png', rotate: 270, frequency: [1, 2, 4] },\r\n        { id: 30, top: true, bottom: false, left: true, right: true, image: '3.png', rotate: 0, frequency: [6, 4, 2] },\r\n        { id: 31, top: true, bottom: true, left: false, right: true, image: '3.png', rotate: 90, frequency: [6, 4, 2] },\r\n        { id: 32, top: false, bottom: true, left: true, right: true, image: '3.png', rotate: 180, frequency: [6, 4, 2] },\r\n        { id: 33, top: true, bottom: true, left: true, right: false, image: '3.png', rotate: 270, frequency: [6, 4, 2] },\r\n        { id: 40, top: true, bottom: true, left: true, right: true, image: '4.png', rotate: 0, frequency: [6, 3, 1] },\r\n        { id: 50, top: false, bottom: false, left: false, right: false, image: '5a.png', rotate: 0, frequency: [1, 2, 5] },\r\n        { id: 51, top: false, bottom: false, left: false, right: false, image: '5b.png', rotate: 0, frequency: [0, 2, 5] },\r\n        { id: 52, top: false, bottom: false, left: false, right: false, image: '5c.png', rotate: 0, frequency: [0, 2, 5] },\r\n        { id: 53, top: false, bottom: false, left: false, right: false, image: '5d.png', rotate: 0, frequency: [0, 2, 5] },\r\n        { id: 60, top: false, bottom: true, left: false, right: false, image: '6.png', rotate: 0, frequency: [1, 2, 3] },\r\n        { id: 61, top: false, bottom: false, left: true, right: false, image: '6.png', rotate: 90, frequency: [1, 2, 3] },\r\n        { id: 62, top: true, bottom: false, left: false, right: false, image: '6.png', rotate: 180, frequency: [1, 2, 3] },\r\n        { id: 63, top: false, bottom: false, left: false, right: true, image: '6.png', rotate: 270, frequency: [1, 2, 3] },\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://city-creator/./src/tile_packs.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;