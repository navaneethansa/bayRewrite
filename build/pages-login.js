"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-login"],{

/***/ "./app/pages/login/index.jsx":
/*!***********************************!*\
  !*** ./app/pages/login/index.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ "./app/components/seo/index.jsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/login */ "./app/components/login/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */











const Login = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
      try {
        yield customer.login(data);
      } catch (error) {
        const message = /invalid credentials/i.test(error.message) ? formatMessage({
          id: "5S2I6Q",
          defaultMessage: [{
            "type": 0,
            "value": "Incorrect username or password, please try again."
          }]
        }) : error.message;
        form.setError('global', {
          type: 'manual',
          message
        });
      }
    });

    return function submitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // If customer is registered push to account page


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (customer.authType != null && customer.isRegistered) {
      var _location$state;

      if (location !== null && location !== void 0 && (_location$state = location.state) !== null && _location$state !== void 0 && _location$state.directedFrom) {
        navigate(location.state.directedFrom);
      } else {
        navigate('/account');
      }
    }
  }, [customer]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {
    "data-testid": "login-page",
    bg: "gray.50",
    py: [8, 16]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Sign in",
    description: "Customer sign in"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {
    paddingTop: 16,
    width: ['100%', '407px'],
    bg: "white",
    paddingBottom: 14,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: "base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_login__WEBPACK_IMPORTED_MODULE_7__["default"], {
    form: form,
    submitForm: submitForm,
    clickCreateAccount: () => navigate('/registration'),
    clickForgotPassword: () => navigate('/reset-password')
  })));
};

Login.getTemplateName = () => 'login';

Login.propTypes = {
  match: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);
//# sourceMappingURL=pages-login.js.map