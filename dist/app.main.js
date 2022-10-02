"use strict";
(self["webpackChunketch_a_sketch"] = self["webpackChunketch_a_sketch"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./src/grid.js");

console.log(_grid__WEBPACK_IMPORTED_MODULE_0__.App.drawGrid())

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
const App = () => {
    let grid
    const board = document.querySelector('.board');
    let drawGrid = (value) => {
        board.style.gridTemplateRows = `repeat(${value}, 1fr)`
        board.style.gridTemplateColumns = `repeat(${value}, 1fr)`
        for (let i = 0; i < value**2; i++) {
            let cell = document.createElement('div')
            cell.classList.add('cell');
            board.append(cell)
            grid = document.querySelectorAll('.cell')
        }
    }

    const resetGrid = () => {
        while(board.firstChild){
            board.removeChild(board.lastChild)
        }
    }

    return {
        drawGrid,
        resetGrid
    }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFDN0IsWUFBWSwrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7QUNEakI7QUFDUDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsTUFBTTtBQUN2RCxvREFBb0QsTUFBTTtBQUMxRCx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9ncmlkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2dyaWRcIjtcbmNvbnNvbGUubG9nKEFwcC5kcmF3R3JpZCgpKSIsImV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgbGV0IGdyaWRcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xuICAgIGxldCBkcmF3R3JpZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3ZhbHVlfSwgMWZyKWBcbiAgICAgICAgYm9hcmQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt2YWx1ZX0sIDFmcilgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUqKjI7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQoY2VsbClcbiAgICAgICAgICAgIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXNldEdyaWQgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlKGJvYXJkLmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgYm9hcmQucmVtb3ZlQ2hpbGQoYm9hcmQubGFzdENoaWxkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHJhd0dyaWQsXG4gICAgICAgIHJlc2V0R3JpZFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9