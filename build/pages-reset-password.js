"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-reset-password"],{

/***/ "./app/pages/reset-password/index.jsx":
/*!********************************************!*\
  !*** ./app/pages/reset-password/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/seo */ "./app/components/seo/index.jsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components_reset_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/reset-password */ "./app/components/reset-password/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */











const ResetPassword = () => {
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const [submittedEmail, setSubmittedEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [showSubmittedSuccess, setShowSubmittedSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      email
    }) {
      try {
        yield customer.getResetPasswordToken(email);
        setSubmittedEmail(email);
        setShowSubmittedSuccess(!showSubmittedSuccess);
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function submitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    "data-testid": "reset-password-page",
    bg: "gray.50",
    py: [8, 16]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Reset password",
    description: "Reset customer password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Container, {
    paddingTop: 16,
    width: ['100%', '407px'],
    bg: "white",
    paddingBottom: 14,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: "base"
  }, !showSubmittedSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_reset_password__WEBPACK_IMPORTED_MODULE_6__["default"], {
    form: form,
    submitForm: submitForm,
    clickSignIn: () => navigate('/login')
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    justify: "center",
    align: "center",
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_7__.BrandLogo, {
    width: "60px",
    height: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    align: "center",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "xHP4/6",
    defaultMessage: [{
      "type": 0,
      "value": "Password Reset"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    spacing: 6,
    pt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    align: "center",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "1b9Q93",
    defaultMessage: [{
      "type": 0,
      "value": "You will receive an email at "
    }, {
      "type": 8,
      "value": "b",
      "children": [{
        "type": 1,
        "value": "email"
      }]
    }, {
      "type": 0,
      "value": " with a link to reset your password shortly."
    }],
    values: {
      email: submittedEmail,
      // eslint-disable-next-line react/display-name
      b: chunks => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("b", null, chunks)
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
    onClick: () => navigate('/login')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "odTkf5",
    defaultMessage: [{
      "type": 0,
      "value": "Back to sign in"
    }]
  }))))));
};

ResetPassword.getTemplateName = () => 'reset-password';

ResetPassword.propTypes = {
  match: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (ResetPassword);

/***/ })

}]);
//# sourceMappingURL=pages-reset-password.js.map