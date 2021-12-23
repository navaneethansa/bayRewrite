"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-page-not-found"],{

/***/ "./app/pages/page-not-found/index.jsx":
/*!********************************************!*\
  !*** ./app/pages/page-not-found/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const PageNotFound = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
    layerStyle: "page",
    className: "page-not-found",
    height: '100%',
    padding: {
      lg: 8,
      md: 6,
      sm: 0,
      base: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, intl.formatMessage({
    id: "8+0PQZ",
    defaultMessage: [{
      "type": 0,
      "value": "The page you're looking for can't be found"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    h: "100%",
    justify: "center",
    align: "center",
    flexDirection: "column",
    px: {
      base: 5,
      md: 12
    },
    py: {
      base: 48,
      md: 60
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
    boxSize: ['30px', '32px'],
    mb: 8
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
    as: "h2",
    fontSize: ['xl', '2xl', '2xl', '3xl'],
    mb: 2,
    align: "center"
  }, intl.formatMessage({
    id: "8+0PQZ",
    defaultMessage: [{
      "type": 0,
      "value": "The page you're looking for can't be found"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
    mb: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    textAlign: "center"
  }, intl.formatMessage({
    id: "c0a6lZ",
    defaultMessage: [{
      "type": 0,
      "value": "Please try retyping the address, going back to the previous page, or going to the home page."
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: ['column', 'row'],
    width: ['100%', 'auto']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    variant: "outline",
    bg: "white",
    onClick: () => history.goBack(),
    borderColor: 'gray.200'
  }, intl.formatMessage({
    id: "NV26qx",
    defaultMessage: [{
      "type": 0,
      "value": "Back to previous page"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_3__["default"],
    to: '/'
  }, intl.formatMessage({
    id: "0nWAOY",
    defaultMessage: [{
      "type": 0,
      "value": "Go to home page"
    }]
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ })

}]);
//# sourceMappingURL=pages-page-not-found.js.map