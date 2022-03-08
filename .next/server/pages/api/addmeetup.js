"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addmeetup";
exports.ids = ["pages/api/addmeetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/addmeetup/index.js":
/*!**************************************!*\
  !*** ./pages/api/addmeetup/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function addMeetUpHandler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            let client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://abdul:abdul@cluster0.mvh28.mongodb.net/meetups?retryWrites=true&w=majority`);\n            let db = client.db();\n            let meetupCollection = db.collection(\"meetups\");\n            let result = await meetupCollection.insertOne(req.body);\n            console.log(result);\n            res.status(201).json({\n                message: \"meetup inserted\",\n                response: result\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMeetUpHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkbWVldHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztlQUV0QkMsZ0JBQWdCLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDekMsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztRQUMxQixHQUFHLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUssQ0FBQ0wsd0RBQW1CLEVBQUUsd0ZBQXdGO1lBQ2hJLEdBQUcsQ0FBQ08sRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUU7WUFDbEIsR0FBRyxDQUFDQyxnQkFBZ0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsQ0FBUztZQUM5QyxHQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLGdCQUFnQixDQUFDRyxTQUFTLENBQUNULEdBQUcsQ0FBQ1UsSUFBSTtZQUN0REMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU07WUFDbEJQLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO2dCQUFBQSxPQUFPLEVBQUcsQ0FBaUI7Z0JBQUdDLFFBQVEsRUFBR1IsTUFBTTtZQUFBLENBQUM7UUFDeEUsQ0FBQyxDQUFDLEtBQUssRUFBRVMsS0FBSyxFQUFFLENBQUM7WUFDZk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEtBQUs7UUFDbkIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVsQixnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfanMvLi9wYWdlcy9hcGkvYWRkbWVldHVwL2luZGV4LmpzPzg4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkTWVldFVwSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoYG1vbmdvZGIrc3J2Oi8vYWJkdWw6YWJkdWxAY2x1c3RlcjAubXZoMjgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgKTtcclxuICAgICAgbGV0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICAgIGxldCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmluc2VydE9uZShyZXEuYm9keSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2UgOiBcIm1lZXR1cCBpbnNlcnRlZFwiICwgcmVzcG9uc2UgOiByZXN1bHR9KVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTWVldFVwSGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiYWRkTWVldFVwSGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addmeetup/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addmeetup/index.js"));
module.exports = __webpack_exports__;

})();