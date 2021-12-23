"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-login-redirect"],{

/***/ "./app/pages/login-redirect/index.jsx":
/*!********************************************!*\
  !*** ./app/pages/login-redirect/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// This page is here along witht the `callback` route to handle the redirect
// after a user logs in using the SLAS Implementation



const LoginRedirect = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    "data-testid": "login-redirect-page-heading"
  }, intl.formatMessage({
    id: "login-redirect.message.welcome",
    defaultMessage: [{
      "type": 0,
      "value": "Login Redirect"
    }]
  })));
};

LoginRedirect.getTemplateName = () => 'login-redirect';

/* harmony default export */ __webpack_exports__["default"] = (LoginRedirect);

/***/ })

}]);
//# sourceMappingURL=pages-login-redirect.js.map