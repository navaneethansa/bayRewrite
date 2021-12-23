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

/***/ "./app/request-processor.js":
/*!**********************************!*\
  !*** ./app/request-processor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"processRequest\": () => (/* binding */ processRequest)\n/* harmony export */ });\n/*\n * Copyright (c) 2021, salesforce.com, inc.\n * All rights reserved.\n * SPDX-License-Identifier: BSD-3-Clause\n * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause\n */\n// This is an EXAMPLE file. To enable request processing, rename it to\n// 'request-processor.js' and update the processRequest function so that\n// it processes requests in whatever way your project requires.\n// Uncomment the following line for the example code to work.\n// import {QueryParameters} from 'pwa-kit-react-sdk/utils/ssr-request-processing'\n\n/**\n * The processRequest function is called for *every* non-proxy, non-bundle\n * request received. That is, all requests that will result in pages being\n * rendered, or the Express app requestHook function being invoked. Because\n * this function runs for every request, it is important that processing\n * take as little time as possible. Do not make external requests from\n * this code. Make your code error tolerant; throwing an error from\n * this function will cause a 500 error response to be sent to the\n * requesting client.\n *\n * The processRequest function is passed details of the incoming request,\n * function to support request-class setting plus parameters that refer to\n * the target for which this code is being run.\n *\n * The function must return an object with 'path' and 'querystring'. These\n * may be the same values passed in, or modified values.\n *\n * Processing query strings can be challenging, because there are multiple\n * formats in use, URL-quoting may be required, and the order of parameters\n * in the URL may be important. To avoid issues, use the QueryParameters\n * class from the SDK's 'utils/ssr-request-processing' module. This\n * class will correctly preserve the order, case, values and encoding of\n * the parameters. The QueryParameters class is documented in the SDK.\n *\n * @param path {String} the path part of the URL, beginning with a '/'\n * @param querystring {String} the query string part of the URL, without\n * any initial '?'\n * @param headers {Headers} the headers of the incoming request. This should\n * be considered read-only (although header values can be changed, most headers\n * are not passed to the origin, so changes have no effect).\n * @param setRequestClass {function} call this with a string to set the\n * \"class\" of the incoming request. By default, requests have no class.\n * @param parameters {Object}\n * @param parameters.appHostname {String} the \"application host name\" is the\n * hostname to which requests are sent for this target: the website's hostname.\n * @param parameters.deployTarget {String} the target's id. Use this to have\n * different processing for different targets.\n * @param parameters.proxyConfigs {Object[]} an array of proxy configuration\n * object, each one containing protocol, host and path for a proxy. Use this\n * to have different processing for different backends.\n * @returns {{path: String, querystring: String}}\n */\nconst processRequest = ({\n  // Uncomment the following lines for the example code to work.\n  // headers,\n  // setRequestClass,\n  // parameters,\n  path,\n  querystring\n}) => {\n  // Uncomment the snippet below for the example code to work.\n\n  /***************************************************************************\n  // Example code for filtering query parameters and detecting bots user.\n   console.assert(parameters, 'Missing parameters')\n   // This is an EXAMPLE processRequest implementation. You should\n  // replace it with code that processes your requests as needed.\n   // This example code will remove any of the parameters whose keys appear\n  // in the 'exclusions' array.\n  const exclusions = [\n      'gclid',\n      'utm_campaign',\n      'utm_content',\n      'utm_medium',\n      'utm_source'\n  ]\n   // Build a first QueryParameters object from the given querystring\n  const incomingParameters = new QueryParameters(querystring)\n   // Build a second QueryParameters from the first, with all\n  // excluded parameters removed\n  const filteredParameters = QueryParameters.from(\n      incomingParameters.parameters.filter(\n          // parameter.key is always lower-case\n          (parameter) => !exclusions.includes(parameter.key)\n      )\n  )\n   // Re-generate the querystring\n  querystring = filteredParameters.toString()\n   // This example code will detect bots by examining the user-agent,\n  // and will set the request class to 'bot' for all such requests.\n  const ua = headers.getHeader('user-agent')\n  // This check\n  const botcheck = /bot|crawler|spider|crawling/i\n  if (botcheck.test(ua)) {\n      setRequestClass('bot')\n  }\n  ***************************************************************************/\n  // Return the path unchanged, and the updated query string\n  return {\n    path,\n    querystring\n  };\n};\n\n//# sourceURL=webpack://bay-rewrite/./app/request-processor.js?");

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
/******/ 	__webpack_modules__["./app/request-processor.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;