"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-account"],{

/***/ "./app/components/forms/profile-fields.jsx":
/*!*************************************************!*\
  !*** ./app/components/forms/profile-fields.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _useProfileFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useProfileFields */ "./app/components/forms/useProfileFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const ProfileFields = ({
  form,
  prefix = ''
}) => {
  const fields = (0,_useProfileFields__WEBPACK_IMPORTED_MODULE_2__["default"])({
    form,
    prefix
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
    columns: [1, 1, 1, 2],
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.phone));
};

ProfileFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (ProfileFields);

/***/ }),

/***/ "./app/components/forms/update-password-fields.jsx":
/*!*********************************************************!*\
  !*** ./app/components/forms/update-password-fields.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _useUpdatePasswordFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useUpdatePasswordFields */ "./app/components/forms/useUpdatePasswordFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/* harmony import */ var _password_requirements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-requirements */ "./app/components/forms/password-requirements.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const UpdatePasswordFields = ({
  form,
  prefix = ''
}) => {
  const fields = (0,_useUpdatePasswordFields__WEBPACK_IMPORTED_MODULE_2__["default"])({
    form,
    prefix
  });
  const password = form.watch('password');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 5,
    divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.StackDivider, {
      borderColor: "gray.100"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.currentPassword), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "link",
    size: "sm",
    onClick: () => null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "V/JHlm",
    defaultMessage: [{
      "type": 0,
      "value": "Forgot password?"
    }]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 3,
    pb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_password_requirements__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: password
  })));
};

UpdatePasswordFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (UpdatePasswordFields);

/***/ }),

/***/ "./app/components/forms/useProfileFields.jsx":
/*!***************************************************!*\
  !*** ./app/components/forms/useProfileFields.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useProfileFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils_phone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/phone-utils */ "./app/utils/phone-utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


function useProfileFields({
  form: {
    control,
    errors
  },
  prefix = ''
}) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const fields = {
    firstName: {
      name: `${prefix}firstName`,
      label: formatMessage({
        id: "Q6wcZ5",
        defaultMessage: [{
          "type": 0,
          "value": "First Name"
        }]
      }),
      type: 'text',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "3NVyN7",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your first name"
          }]
        })
      },
      error: errors[`${prefix}firstName`],
      control
    },
    lastName: {
      name: `${prefix}lastName`,
      label: formatMessage({
        id: "aheQdn",
        defaultMessage: [{
          "type": 0,
          "value": "Last Name"
        }]
      }),
      type: 'text',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "s/qo4z",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your last name"
          }]
        })
      },
      error: errors[`${prefix}lastName`],
      control
    },
    email: {
      name: `${prefix}email`,
      label: formatMessage({
        id: "sy+pv5",
        defaultMessage: [{
          "type": 0,
          "value": "Email"
        }]
      }),
      placeholder: 'you@email.com',
      type: 'email',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "oLpv29",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter a valid email address"
          }]
        })
      },
      error: errors[`${prefix}email`],
      control
    },
    phone: {
      name: `${prefix}phone`,
      label: formatMessage({
        id: "mXiD5u",
        defaultMessage: [{
          "type": 0,
          "value": "Phone Number"
        }]
      }),
      defaultValue: '',
      type: 'text',
      rules: {
        required: formatMessage({
          id: "BAoId6",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your phone number"
          }]
        })
      },
      error: errors[`${prefix}phone`],
      inputProps: ({
        onChange
      }) => ({
        onChange(evt) {
          onChange((0,_utils_phone_utils__WEBPACK_IMPORTED_MODULE_0__.formatPhoneNumber)(evt.target.value));
        }

      }),
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/forms/useUpdatePasswordFields.jsx":
/*!**********************************************************!*\
  !*** ./app/components/forms/useUpdatePasswordFields.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useUpdatePasswordFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils_password_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/password-utils */ "./app/utils/password-utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


function useUpdatePasswordFields({
  form: {
    control,
    errors
  },
  prefix = ''
}) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const fields = {
    currentPassword: {
      name: `${prefix}currentPassword`,
      label: formatMessage({
        id: "GretYf",
        defaultMessage: [{
          "type": 0,
          "value": "Current Password"
        }]
      }),
      defaultValue: '',
      type: 'password',
      rules: {
        required: formatMessage({
          id: "iiYrag",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your password"
          }]
        })
      },
      error: errors[`${prefix}currentPassword`],
      control
    },
    password: {
      name: `${prefix}password`,
      label: formatMessage({
        id: "Ev6SEF",
        defaultMessage: [{
          "type": 0,
          "value": "New Password"
        }]
      }),
      type: 'password',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "8j72eG",
          defaultMessage: [{
            "type": 0,
            "value": "Please provide a new password"
          }]
        }),
        validate: {
          hasMinChars: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasMinChars || formatMessage({
            id: "ffE6Xw",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least 8 characters"
            }]
          }),
          hasUppercase: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasUppercase || formatMessage({
            id: "wBVQL7",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one uppercase letter"
            }]
          }),
          hasLowercase: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasLowercase || formatMessage({
            id: "0yGJXJ",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one lowercase letter"
            }]
          }),
          hasNumber: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasNumber || formatMessage({
            id: "I866h3",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one number"
            }]
          }),
          hasSpecialChar: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasSpecialChar || formatMessage({
            id: "z34C7B",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one special character"
            }]
          })
        }
      },
      error: errors[`${prefix}password`],
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/pagination/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/pagination/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/select/dist/chakra-ui-select.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");


const _excluded = ["urls", "currentURL"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



 // Components

 // Icons

 // Constants

const SELECT_ID = 'pagination'; // Helpers

const isServer = typeof window === 'undefined';
/**
 * The pagination component is a simple component allowing you to navigate
 * from one page  to the next by means of previous or next buttons, or directly
 * using a select drop down.
 */

const Pagination = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useStyleConfig)('Pagination');
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();

  const {
    urls,
    currentURL
  } = props,
        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const currentIndex = urls.indexOf(currentURL) > 0 ? urls.indexOf(currentURL) : 0;
  const prev = urls[currentIndex - 1];
  const next = urls[currentIndex + 1]; // Determine the current page index.

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "sf-pagination",
    className: "sf-pagination"
  }, styles.container, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.button, {
    as: isServer ? _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Link : react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link // Because we are using a button component as a link, the isDisabled flag isn't working
    // as intended, the workaround is to use the current url when its disabled.
    ,
    href: prev || currentURL,
    to: prev || currentURL,
    "aria-label": "Previous Page",
    isDisabled: !prev,
    variant: "link"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronLeftIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, null, intl.formatMessage({
    id: "pagination.actions.prev",
    defaultMessage: [{
      "type": 0,
      "value": "Prev"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {
    paddingLeft: 4,
    paddingRight: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Select, {
    id: SELECT_ID,
    onChange: e => {
      history.push(e.target.value);
    },
    value: currentURL,
    height: 11
  }, urls.map((href, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("option", {
    key: index,
    value: href
  }, index + 1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, styles.text, intl.formatMessage({
    id: "pagination.actions.current_page_verb",
    defaultMessage: [{
      "type": 0,
      "value": "of"
    }]
  }), ' ', urls.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.button, {
    as: isServer ? _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Link : react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link // Because we are using a button component as a link, the isDisabled flag isn't working
    // as intended, the workaround is to use the current url when its disabled.
    ,
    href: next || currentURL,
    to: next || currentURL,
    "aria-label": "Next Page",
    isDisabled: !next,
    variant: "link"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, null, intl.formatMessage({
    id: "pagination.actions.next",
    defaultMessage: [{
      "type": 0,
      "value": "Next"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, null)));
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  /**
   * A list of URL's representing the pages that can be navigated to.
   */
  urls: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),

  /**
   * The URL representing the current page
   */
  currentURL: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./app/pages/account/addresses.jsx":
/*!*****************************************!*\
  !*** ./app/pages/account/addresses.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/forms/form-action-buttons */ "./app/components/forms/form-action-buttons.jsx");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading-spinner */ "./app/components/loading-spinner/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_action_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/action-card */ "./app/components/action-card/index.jsx");
/* harmony import */ var _components_forms_address_fields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/forms/address-fields */ "./app/components/forms/address-fields.jsx");
/* harmony import */ var _components_address_display__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/address-display */ "./app/components/address-display/index.jsx");
/* harmony import */ var _components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/page-action-placeholder */ "./app/components/page-action-placeholder/index.jsx");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */













const DEFAULT_SKELETON_COUNT = 3;

const BoxArrow = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    width: 3,
    height: 3,
    borderLeft: "1px solid",
    borderTop: "1px solid",
    borderColor: "blue.600",
    position: "absolute",
    left: "50%",
    bottom: "-23px",
    zIndex: 1,
    background: "white",
    transform: "rotate(45deg)"
  });
};

const ShippingAddressForm = ({
  form,
  hasAddresses,
  selectedAddressId,
  toggleEdit,
  submitForm
}) => {
  var _form$errors;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "base",
    position: "relative"
  }, hasAddresses && {
    gridColumn: [1, 'span 2', 'span 2', 'span 2', 'span 3'],
    paddingX: [4, 4, 6],
    paddingY: 6,
    rounded: 'base',
    border: '1px solid',
    borderColor: 'blue.600'
  }), form.formState.isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 6,
    padding: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    as: "h3",
    size: "sm"
  }, selectedAddressId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "uSpe21",
    defaultMessage: [{
      "type": 0,
      "value": "Edit Address"
    }]
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "fIHFDI",
    defaultMessage: [{
      "type": 0,
      "value": "Add New Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 6
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_forms_address_fields__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onCancel: toggleEdit
  })))))));
};

ShippingAddressForm.propTypes = {
  form: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  hasAddresses: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  selectedAddressId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  toggleEdit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  submitForm: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};

const AccountAddresses = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const {
    isRegistered,
    addresses,
    addSavedAddress,
    updateSavedAddress,
    removeSavedAddress
  } = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [selectedAddressId, setSelectedAddressId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.useToast)();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
  const hasAddresses = (addresses === null || addresses === void 0 ? void 0 : addresses.length) > 0;

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (address) {
      try {
        form.clearErrors();

        if (selectedAddressId) {
          yield updateSavedAddress(_objectSpread(_objectSpread({}, address), {}, {
            addressId: selectedAddressId
          }));
        } else {
          yield addSavedAddress(address);
        }

        toggleEdit();
        toast({
          title: selectedAddressId ? formatMessage({
            id: "SeGQoh",
            defaultMessage: [{
              "type": 0,
              "value": "Address Updated"
            }]
          }) : formatMessage({
            id: "py3qts",
            defaultMessage: [{
              "type": 0,
              "value": "New Address Saved"
            }]
          }),
          status: 'success',
          isClosable: true
        });
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

  const removeAddress = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (addressId) {
      try {
        if (addressId === selectedAddressId) {
          setSelectedAddressId(undefined);
          setIsEditing(false);
          form.reset({
            addressId: ''
          });
        }

        yield removeSavedAddress(addressId);
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function removeAddress(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  const toggleEdit = address => {
    form.reset(_objectSpread({}, address));

    if (address !== null && address !== void 0 && address.addressId) {
      setSelectedAddressId(address.addressId);
      setIsEditing(true);
    } else {
      setSelectedAddressId(undefined);
      setIsEditing(!isEditing);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4,
    "data-testid": "account-addresses-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    as: "h1",
    fontSize: "2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "xBrtnx",
    defaultMessage: [{
      "type": 0,
      "value": "Addresses"
    }]
  })), !isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.SimpleGrid, {
    columns: [1, 2, 2, 2, 3],
    spacing: 4
  }, new Array(DEFAULT_SKELETON_COUNT).fill().map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_action_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
      spacing: 2,
      marginBottom: 7
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Skeleton, {
      height: "23px",
      width: "120px"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Skeleton, {
      height: "23px",
      width: "84px"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Skeleton, {
      height: "23px",
      width: "104px"
    })));
  })), hasAddresses && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.SimpleGrid, {
    columns: [1, 2, 2, 2, 3],
    spacing: 4,
    gridAutoFlow: "row dense"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Button, {
    variant: "outline",
    border: "1px dashed",
    borderColor: "gray.200",
    color: "blue.600",
    height: {
      lg: 'full'
    },
    minHeight: 11,
    rounded: "base",
    fontWeight: "medium",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon, {
      display: "block",
      boxSize: '15px'
    }),
    onClick: toggleEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "xg14pg",
    defaultMessage: [{
      "type": 0,
      "value": "Add Address"
    }]
  }), isEditing && !selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(BoxArrow, null)), isEditing && !selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ShippingAddressForm, {
    form: form,
    hasAddresses: hasAddresses,
    submitForm: submitForm,
    selectedAddressId: selectedAddressId,
    toggleEdit: toggleEdit
  }), addresses.map(address => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    key: address.addressId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_action_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    borderColor: "gray.200",
    key: address.addressId,
    onRemove: () => removeAddress(address.addressId),
    onEdit: () => toggleEdit(address)
  }, address.preferred && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Badge, {
    position: "absolute",
    fontSize: "xs",
    right: 4,
    variant: "solid",
    bg: "gray.100",
    color: "gray.900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "lKv8ex",
    defaultMessage: [{
      "type": 0,
      "value": "Default"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_12__["default"], {
    address: address
  }), isEditing && address.addressId === selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(BoxArrow, null)), isEditing && address.addressId === selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ShippingAddressForm, {
    form: form,
    hasAddresses: hasAddresses,
    submitForm: submitForm,
    selectedAddressId: selectedAddressId,
    toggleEdit: toggleEdit
  })))), !hasAddresses && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, !isEditing && isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_13__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_9__.LocationIcon, {
      boxSize: 8
    }),
    heading: formatMessage({
      id: "xYH2SF",
      defaultMessage: [{
        "type": 0,
        "value": "No Saved Addresses"
      }]
    }),
    text: formatMessage({
      id: "SmKUxZ",
      defaultMessage: [{
        "type": 0,
        "value": "Add a new address method for faster checkout"
      }]
    }),
    buttonText: formatMessage({
      id: "xg14pg",
      defaultMessage: [{
        "type": 0,
        "value": "Add Address"
      }]
    }),
    onButtonClick: toggleEdit
  }), isEditing && !selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ShippingAddressForm, {
    form: form,
    hasAddresses: hasAddresses,
    submitForm: submitForm,
    selectedAddressId: selectedAddressId,
    toggleEdit: toggleEdit
  })));
};

AccountAddresses.getTemplateName = () => 'account-addresses';

/* harmony default export */ __webpack_exports__["default"] = (AccountAddresses);

/***/ }),

/***/ "./app/pages/account/index.jsx":
/*!*************************************!*\
  !*** ./app/pages/account/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/seo */ "./app/components/seo/index.jsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile */ "./app/pages/account/profile.jsx");
/* harmony import */ var _addresses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addresses */ "./app/pages/account/addresses.jsx");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders */ "./app/pages/account/orders.jsx");
/* harmony import */ var _payments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payments */ "./app/pages/account/payments.jsx");
/* harmony import */ var _wishlist_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wishlist/index */ "./app/pages/account/wishlist/index.jsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constant */ "./app/pages/account/constant.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _components_loading_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/loading-spinner */ "./app/components/loading-spinner/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



















const Account = () => {
  const {
    path,
    url
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useRouteMatch)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const [mobileNavIndex, setMobileNavIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
  const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onSignoutClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setShowLoading(true);
      yield customer.logout();
      navigate('/login');
    });

    return function onSignoutClick() {
      return _ref.apply(this, arguments);
    };
  }();

  const LogoutButton = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Divider, {
    colorScheme: 'gray',
    marginTop: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button, {
    fontWeight: "500",
    onClick: onSignoutClick,
    padding: 4,
    py: 0,
    variant: "unstyled",
    _hover: {
      background: 'gray.50'
    },
    marginTop: 1,
    borderRadius: "4px",
    cursor: 'pointer',
    height: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Flex, {
    justify: {
      base: 'center',
      lg: 'flex-start'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_6__.SignoutIcon, {
    boxSize: 5,
    mr: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Text, {
    as: "span",
    fontSize: ['md', 'md', 'md', 'sm'],
    fontWeight: "normal"
  }, formatMessage({
    id: "PlBReU",
    defaultMessage: [{
      "type": 0,
      "value": "Log out"
    }]
  }))))); // If we have customer data and they are not registered, push to login page
  // Using Redirect allows us to store the directed page to location
  // so we can direct users back after they are successfully log in


  if (customer.authType != null && !customer.isRegistered) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Redirect, {
      to: {
        pathname: `/${locale}/login`,
        state: {
          directedFrom: location.pathname
        }
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Box, {
    "data-testid": customer.isRegistered ? 'account-page' : 'account-page-skeleton',
    layerStyle: "page",
    paddingTop: [4, 4, 12, 12, 16]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "My Account",
    description: "Customer Account Page"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Grid, {
    templateColumns: {
      base: '1fr',
      lg: '320px 1fr'
    },
    gap: {
      base: 10,
      lg: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Accordion, {
    display: {
      base: 'block',
      lg: 'none'
    },
    allowToggle: true,
    reduceMotion: true,
    index: mobileNavIndex,
    onChange: setMobileNavIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionItem, {
    border: "none",
    background: "gray.50",
    borderRadius: "base"
  }, ({
    isExpanded
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionButton, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button,
    height: 16,
    variant: "ghost",
    color: "black",
    _active: {
      background: 'gray.100'
    },
    _expanded: {
      background: 'transparent'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Flex, {
    align: "center",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Text, {
    as: "span",
    mr: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "2bGejb",
    defaultMessage: [{
      "type": 0,
      "value": "My Account"
    }]
  })), isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronUpIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronDownIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionPanel, {
    px: 4,
    paddingBottom: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Flex, {
    as: "nav",
    spacing: 0,
    direction: "column"
  }, _constant__WEBPACK_IMPORTED_MODULE_12__.navLinks.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button, {
    key: link.name,
    as: _components_link__WEBPACK_IMPORTED_MODULE_5__["default"],
    to: `${url}${link.path}`,
    useNavLink: true,
    variant: "menu-link-mobile",
    justifyContent: "center",
    fontSize: "md",
    fontWeight: "normal",
    onClick: () => setMobileNavIndex(-1)
  }, formatMessage(_constant__WEBPACK_IMPORTED_MODULE_12__.messages[link.name]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LogoutButton, {
    justify: "center"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Stack, {
    display: {
      base: 'none',
      lg: 'flex'
    },
    spacing: 4
  }, showLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_loading_spinner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    wrapperStyles: {
      height: '100vh'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Heading, {
    as: "h6",
    fontSize: "18px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "2bGejb",
    defaultMessage: [{
      "type": 0,
      "value": "My Account"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Flex, {
    spacing: 0,
    as: "nav",
    "data-testid": "account-detail-nav",
    direction: "column"
  }, _constant__WEBPACK_IMPORTED_MODULE_12__.navLinks.map(link => {
    const LinkIcon = link.icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button, {
      key: link.name,
      as: _components_link__WEBPACK_IMPORTED_MODULE_5__["default"],
      to: `${url}${link.path}`,
      useNavLink: true,
      variant: "menu-link",
      leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LinkIcon, {
        boxSize: 5
      })
    }, formatMessage(_constant__WEBPACK_IMPORTED_MODULE_12__.messages[link.name]));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LogoutButton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_profile__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: `${path}/wishlist`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_wishlist_index__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: `${path}/addresses`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_addresses__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: `${path}/orders`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_orders__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__.Route, {
    exact: true,
    path: `${path}/payments`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_payments__WEBPACK_IMPORTED_MODULE_10__["default"], null)))));
};

Account.getTemplateName = () => 'account';

Account.propTypes = {
  match: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./app/pages/account/order-detail.jsx":
/*!********************************************!*\
  !*** ./app/pages/account/order-detail.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cc-utils */ "./app/utils/cc-utils.js");
/* harmony import */ var _util_order_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/order-context */ "./app/pages/account/util/order-context.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/order-summary */ "./app/components/order-summary/index.jsx");
/* harmony import */ var _components_item_variant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _components_item_variant_item_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/item-variant/item-image */ "./app/components/item-variant/item-image.jsx");
/* harmony import */ var _components_item_variant_item_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/item-variant/item-name */ "./app/components/item-variant/item-name.jsx");
/* harmony import */ var _components_item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/item-variant/item-attributes */ "./app/components/item-variant/item-attributes.jsx");
/* harmony import */ var _components_item_variant_item_price__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/item-variant/item-price */ "./app/components/item-variant/item-price.jsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */















const AccountOrderDetail = () => {
  var _order$paymentInstrum, _order$productItems;

  const {
    url,
    params
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_12__.useRouteMatch)();
  const history = (0,react_router__WEBPACK_IMPORTED_MODULE_12__.useHistory)();
  const {
    formatMessage,
    formatDate
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    ordersById,
    productsById,
    isLoading,
    fetchOrder
  } = (0,_util_order_context__WEBPACK_IMPORTED_MODULE_3__.useAccountOrders)();
  const order = ordersById[params.orderNo];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOrder(params.orderNo);
  }, []);
  const shipment = order === null || order === void 0 ? void 0 : order.shipments[0];
  const {
    shippingAddress,
    shippingMethod,
    shippingStatus,
    trackingNumber
  } = shipment || {};
  const paymentCard = order === null || order === void 0 ? void 0 : (_order$paymentInstrum = order.paymentInstruments[0]) === null || _order$paymentInstrum === void 0 ? void 0 : _order$paymentInstrum.paymentCard;
  const CardIcon = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_2__.getCreditCardIcon)(paymentCard === null || paymentCard === void 0 ? void 0 : paymentCard.cardType);
  const itemCount = order === null || order === void 0 ? void 0 : order.productItems.reduce((count, item) => item.quantity + count, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 6,
    "data-testid": "account-order-details-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_4__["default"],
    to: `${url.replace(`/${params.orderNo}`, '')}`,
    variant: "link",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronLeftIcon, null),
    size: "sm",
    onClick: e => {
      if (history.action === 'PUSH') {
        e.preventDefault();
        history.goBack();
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "Zhsl4Z",
    defaultMessage: [{
      "type": 0,
      "value": "Back to Order History"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: [1, 2]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    as: "h1",
    fontSize: ['lg', '2xl']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "fE3ujL",
    defaultMessage: [{
      "type": 0,
      "value": "Order Details"
    }]
  })), !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    direction: ['column', 'row'],
    alignItems: ['flex-start', 'center'],
    spacing: [0, 3],
    divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Divider, {
      visibility: {
        base: 'hidden',
        lg: 'visible'
      },
      orientation: {
        lg: 'vertical'
      },
      h: [0, 4]
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: ['sm', 'md']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "4JYnp2",
    defaultMessage: [{
      "type": 0,
      "value": "Ordered: "
    }, {
      "type": 1,
      "value": "date"
    }],
    values: {
      date: formatDate(new Date(order.creationDate), {
        year: 'numeric',
        day: 'numeric',
        month: 'short'
      })
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    direction: "row",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: ['sm', 'md']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "zXbRZR",
    defaultMessage: [{
      "type": 0,
      "value": "Order Number: "
    }, {
      "type": 1,
      "value": "orderNumber"
    }],
    values: {
      orderNumber: order.orderNo
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Badge, {
    colorScheme: "green"
  }, order.status))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "192px"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    layerStyle: "cardBordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Grid, {
    templateColumns: {
      base: '1fr',
      xl: '60% 1fr'
    },
    gap: {
      base: 6,
      xl: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.SimpleGrid, {
    columns: {
      base: 1,
      sm: 2
    },
    columnGap: 4,
    rowGap: 5,
    py: {
      xl: 6
    }
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "84px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "112px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "56px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "84px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "56px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "112px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "84px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "56px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "60px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "84px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "56px"
  }))), !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "D+bY29",
    defaultMessage: [{
      "type": 0,
      "value": "Shipping Method"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    textTransform: "titlecase"
  }, shippingStatus.replace(/_/g, ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, shippingMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "o1QPc9",
    defaultMessage: [{
      "type": 0,
      "value": "Tracking Number"
    }]
  }), ":", ' ', trackingNumber || formatMessage({
    id: "eKEL/g",
    defaultMessage: [{
      "type": 0,
      "value": "Pending"
    }]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "nFQbxh",
    defaultMessage: [{
      "type": 0,
      "value": "Payment Method"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    direction: "row"
  }, CardIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CardIcon, {
    layerStyle: "ccIcon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, paymentCard === null || paymentCard === void 0 ? void 0 : paymentCard.cardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, "\u2022\u2022\u2022\u2022", ' ', paymentCard === null || paymentCard === void 0 ? void 0 : paymentCard.numberLastDigits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, paymentCard === null || paymentCard === void 0 ? void 0 : paymentCard.expirationMonth, "/", paymentCard === null || paymentCard === void 0 ? void 0 : paymentCard.expirationYear))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "DP5VOH",
    defaultMessage: [{
      "type": 0,
      "value": "Shipping Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, shippingAddress.firstName, " ", shippingAddress.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, shippingAddress.address1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, shippingAddress.city, ", ", shippingAddress.stateCode, ' ', shippingAddress.postalCode))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "c7/79+",
    defaultMessage: [{
      "type": 0,
      "value": "Billing Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, order.billingAddress.firstName, ' ', order.billingAddress.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, order.billingAddress.address1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, order.billingAddress.city, ",", ' ', order.billingAddress.stateCode, ' ', order.billingAddress.postalCode))))), !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    py: {
      base: 6
    },
    px: {
      base: 6,
      xl: 8
    },
    background: "gray.50",
    borderRadius: "base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_order_summary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    basket: order,
    fontSize: "sm"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "full"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4
  }, !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "ItDqLZ",
    defaultMessage: [{
      "type": 1,
      "value": "count"
    }, {
      "type": 0,
      "value": " items"
    }],
    values: {
      count: itemCount
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4
  }, isLoading && [1, 2, 3].map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    key: i,
    p: [4, 6],
    border: "1px solid",
    borderColor: "gray.100",
    borderRadius: "base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    width: "full",
    align: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    boxSize: ['88px', 36],
    mr: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "112px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "84px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Skeleton, {
    h: "20px",
    w: "140px"
  }))))), !isLoading && ((_order$productItems = order.productItems) === null || _order$productItems === void 0 ? void 0 : _order$productItems.map((product, idx) => {
    const variant = _objectSpread(_objectSpread(_objectSpread({}, product), productsById[product.productId]), {}, {
      price: product.price
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
      p: [4, 6],
      key: product.productId,
      border: "1px solid",
      borderColor: "gray.100",
      borderRadius: "base"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_item_variant__WEBPACK_IMPORTED_MODULE_7__["default"], {
      index: idx,
      variant: variant,
      currency: order.currency
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
      width: "full",
      alignItems: "flex-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_item_variant_item_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      width: ['88px', 36],
      mr: 4
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
      spacing: 1,
      marginTop: "-3px",
      flex: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_item_variant_item_name__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
      width: "full",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_10__["default"], {
      includeQuantity: true,
      currency: order.currency
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_item_variant_item_price__WEBPACK_IMPORTED_MODULE_11__["default"], {
      currency: order.currency
    }))))));
  })))));
};

AccountOrderDetail.getTemplateName = () => 'account-order-history';

/* harmony default export */ __webpack_exports__["default"] = (AccountOrderDetail);

/***/ }),

/***/ "./app/pages/account/order-history.jsx":
/*!*********************************************!*\
  !*** ./app/pages/account/order-history.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");
/* harmony import */ var _util_order_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/order-context */ "./app/pages/account/util/order-context.js");
/* harmony import */ var _components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/page-action-placeholder */ "./app/components/page-action-placeholder/index.jsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pagination */ "./app/components/pagination/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */













const AccountOrderHistory = () => {
  var _orderIdsByOffset;

  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  const {
    formatMessage,
    formatDate
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const searchParams = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)({
    limit: 10,
    offset: 0
  });
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    orderIdsByOffset,
    ordersById,
    productsById,
    isLoading,
    fetchOrders,
    paging
  } = (0,_util_order_context__WEBPACK_IMPORTED_MODULE_4__.useAccountOrders)();
  const pageUrls = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.usePageUrls)({
    total: paging.total,
    limit: paging.limit
  });
  const orders = ((_orderIdsByOffset = orderIdsByOffset[searchParams.offset || 0]) === null || _orderIdsByOffset === void 0 ? void 0 : _orderIdsByOffset.map(orderId => ordersById[orderId])) || [];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOrders(searchParams);
    window.scrollTo(0, 0);
  }, [customer, searchParams.offset]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 4,
    "data-testid": "account-order-history-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Heading, {
    as: "h1",
    fontSize: "2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "XBfvKN",
    defaultMessage: [{
      "type": 0,
      "value": "Order History"
    }]
  }))), isLoading && [1, 2, 3].map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    key: i,
    spacing: 4,
    layerStyle: "cardBordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Skeleton, {
    h: "20px",
    w: "112px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Skeleton, {
    h: "20px",
    w: "200px"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid, {
    templateColumns: {
      base: 'repeat(auto-fit, 88px)'
    },
    gap: 4
  }, Array.from(Array(4).keys()).map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Skeleton, {
    key: i,
    w: "88px",
    h: "88px"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Skeleton, {
    h: "20px",
    w: "200px"
  }))), orders.length > 0 && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 4
  }, orders.map(order => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
      key: order.orderNo,
      spacing: 4,
      layerStyle: "cardBordered"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Flex, {
      justifyContent: "space-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, {
      fontWeight: "bold",
      fontSize: "lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "4JYnp2",
      defaultMessage: [{
        "type": 0,
        "value": "Ordered: "
      }, {
        "type": 1,
        "value": "date"
      }],
      values: {
        date: formatDate(new Date(order.creationDate), {
          year: 'numeric',
          day: 'numeric',
          month: 'short'
        })
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
      as: _components_link__WEBPACK_IMPORTED_MODULE_6__["default"],
      to: `${location.pathname}/${order.orderNo}`,
      variant: "link",
      rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronRightIcon, {
        boxSize: 5,
        mx: -1.5
      }),
      fontSize: {
        base: 'sm',
        lg: 'md'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "MnpUD7",
      defaultMessage: [{
        "type": 0,
        "value": "View details"
      }]
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
      direction: "row",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "zXbRZR",
      defaultMessage: [{
        "type": 0,
        "value": "Order Number: "
      }, {
        "type": 1,
        "value": "orderNumber"
      }],
      values: {
        orderNumber: order.orderNo
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Badge, {
      colorScheme: "green"
    }, order.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Grid, {
      templateColumns: {
        base: 'repeat(auto-fit, 88px)'
      },
      gap: 4
    }, order.productItems.map(item => {
      var _productDetail$imageG;

      const productDetail = productsById[item.productId];
      const image = productDetail === null || productDetail === void 0 ? void 0 : (_productDetail$imageG = productDetail.imageGroups) === null || _productDetail$imageG === void 0 ? void 0 : _productDetail$imageG.find(group => group.viewType === 'small').images[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.AspectRatio, {
        key: item.itemId,
        ratio: 1,
        width: "88px",
        w: "88px",
        borderRadius: "base",
        overflow: "hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Img, {
        alt: image === null || image === void 0 ? void 0 : image.alt,
        src: image === null || image === void 0 ? void 0 : image.disBaseLink,
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {
          background: "gray.100",
          boxSize: "full"
        })
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
      direction: {
        base: 'column',
        lg: 'row'
      },
      alignItems: {
        base: 'flex-start',
        lg: 'center'
      },
      spacing: {
        base: '2px',
        lg: 3
      },
      divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Divider, {
        visibility: {
          base: 'hidden',
          lg: 'visible'
        },
        orientation: {
          lg: 'vertical'
        },
        h: {
          base: 0,
          lg: 4
        }
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "OUPaUZ",
      defaultMessage: [{
        "type": 1,
        "value": "count"
      }, {
        "type": 0,
        "value": " items"
      }],
      values: {
        count: order.productItems.length
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__.FormattedNumber, {
      style: "currency",
      currency: order.currency,
      value: order.orderTotal
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: "JWbGSW",
      defaultMessage: [{
        "type": 0,
        "value": "Shipped to: "
      }, {
        "type": 1,
        "value": "name"
      }],
      values: {
        name: `${order.shipments[0].shippingAddress.firstName} ${order.shipments[0].shippingAddress.lastName}`
      }
    }))));
  }), orders.length > 0 && orders.length < paging.total && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {
    pt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
    currentURL: `${location.pathname}${location.search}`,
    urls: pageUrls
  }))), orders.length < 1 && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_7__.ReceiptIcon, {
      boxSize: 8
    }),
    heading: formatMessage({
      id: "TSYROF",
      defaultMessage: [{
        "type": 0,
        "value": "You haven't placed an order yet"
      }]
    }),
    text: formatMessage({
      id: "XQPWe6",
      defaultMessage: [{
        "type": 0,
        "value": "Once you place an order the details will show up here"
      }]
    }),
    buttonText: formatMessage({
      id: "IUXVjJ",
      defaultMessage: [{
        "type": 0,
        "value": "Continue Shopping"
      }]
    }),
    buttonProps: {
      leftIcon: undefined
    },
    onButtonClick: () => navigate('/')
  }));
};

AccountOrderHistory.getTemplateName = () => 'account-order-history';

/* harmony default export */ __webpack_exports__["default"] = (AccountOrderHistory);

/***/ }),

/***/ "./app/pages/account/orders.jsx":
/*!**************************************!*\
  !*** ./app/pages/account/orders.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _order_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history */ "./app/pages/account/order-history.jsx");
/* harmony import */ var _order_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail */ "./app/pages/account/order-detail.jsx");
/* harmony import */ var _util_order_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/order-context */ "./app/pages/account/util/order-context.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const AccountOrders = () => {
  const {
    path
  } = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_order_context__WEBPACK_IMPORTED_MODULE_3__.AccountOrdersProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Route, {
    exact: true,
    path: path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_order_history__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.Route, {
    exact: true,
    path: `${path}/:orderNo`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_order_detail__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};

AccountOrders.getTemplateName = () => 'account-order-history';

/* harmony default export */ __webpack_exports__["default"] = (AccountOrders);

/***/ }),

/***/ "./app/pages/account/payments.jsx":
/*!****************************************!*\
  !*** ./app/pages/account/payments.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cc-utils */ "./app/utils/cc-utils.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/forms/form-action-buttons */ "./app/components/forms/form-action-buttons.jsx");
/* harmony import */ var _components_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading-spinner */ "./app/components/loading-spinner/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_action_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/action-card */ "./app/components/action-card/index.jsx");
/* harmony import */ var _components_forms_credit_card_fields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/forms/credit-card-fields */ "./app/components/forms/credit-card-fields.jsx");
/* harmony import */ var _components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/page-action-placeholder */ "./app/components/page-action-placeholder/index.jsx");



/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */













const DEFAULT_SKELETON_COUNT = 3;

const CardPaymentForm = ({
  hasSavedPayments,
  form,
  submitForm,
  toggleEdit
}) => {
  var _form$errors;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    position: "relative",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "base"
  }, hasSavedPayments && {
    gridColumn: [1, 'span 2', 'span 2', 'span 2', 'span 3'],
    paddingX: [4, 4, 6],
    paddingY: 6,
    rounded: 'base',
    border: '1px solid',
    borderColor: 'blue.600'
  }), form.formState.isSubmitting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 6,
    padding: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Heading, {
    as: "h3",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "DPrDhw",
    defaultMessage: [{
      "type": 0,
      "value": "Add New Payment Method"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 6
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_forms_credit_card_fields__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onCancel: () => toggleEdit()
  })))))));
};

CardPaymentForm.propTypes = {
  form: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  hasSavedPayments: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  submitForm: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  toggleEdit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};

const AccountPaymentMethods = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const {
    isRegistered,
    paymentInstruments,
    addSavedPaymentInstrument,
    removeSavedPaymentInstrument
  } = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.useToast)();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
  const hasSavedPayments = (paymentInstruments === null || paymentInstruments === void 0 ? void 0 : paymentInstruments.length) > 0;

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (values) {
      try {
        form.clearErrors();
        const paymentInstrument = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__.createCreditCardPaymentBodyFromForm)(values);
        yield addSavedPaymentInstrument(paymentInstrument);
        toggleEdit();
        toast({
          title: formatMessage({
            id: "NymXNv",
            defaultMessage: [{
              "type": 0,
              "value": "New Payment Method Saved"
            }]
          }),
          status: 'success',
          isClosable: true
        });
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

  const removePaymentInstrument = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (paymentInstrumentId) {
      try {
        yield removeSavedPaymentInstrument(paymentInstrumentId);
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function removePaymentInstrument(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  const toggleEdit = () => {
    form.reset();
    setIsEditing(!isEditing);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 4,
    "data-testid": "account-payment-methods-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Heading, {
    as: "h1",
    fontSize: "2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "xuTqgN",
    defaultMessage: [{
      "type": 0,
      "value": "Payment Methods"
    }]
  })), !isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.SimpleGrid, {
    columns: [1, 2, 2, 2, 3],
    spacing: 4
  }, new Array(DEFAULT_SKELETON_COUNT).fill().map((_, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_action_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
      spacing: 2,
      marginBottom: 3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Skeleton, {
      height: "23px",
      width: "120px"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Skeleton, {
      height: "23px",
      width: "84px"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Skeleton, {
      height: "23px",
      width: "104px"
    })));
  })), hasSavedPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.SimpleGrid, {
    columns: [1, 2, 2, 2, 3],
    spacing: 4,
    gridAutoFlow: "row dense"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Button, {
    variant: "outline",
    border: "1px dashed",
    borderColor: "gray.200",
    color: "blue.600",
    height: {
      lg: 'full'
    },
    minHeight: 11,
    rounded: "base",
    fontWeight: "medium",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_9__.PlusIcon, {
      display: "block",
      boxSize: '15px'
    }),
    onClick: toggleEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "V+R4NC",
    defaultMessage: [{
      "type": 0,
      "value": "Add Payment Method"
    }]
  }), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    width: 3,
    height: 3,
    borderLeft: "1px solid",
    borderTop: "1px solid",
    borderColor: "blue.600",
    position: "absolute",
    left: "50%",
    bottom: "-23px",
    zIndex: 1,
    background: "white",
    transform: "rotate(45deg)"
  })), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CardPaymentForm, {
    hasSavedPayments: hasSavedPayments,
    form: form,
    toggleEdit: toggleEdit,
    submitForm: submitForm
  }), paymentInstruments.map(payment => {
    var _payment$paymentCard, _payment$paymentCard2, _payment$paymentCard3, _payment$paymentCard4, _payment$paymentCard5;

    const CardIcon = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__.getCreditCardIcon)((_payment$paymentCard = payment.paymentCard) === null || _payment$paymentCard === void 0 ? void 0 : _payment$paymentCard.cardType);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_action_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: payment.paymentInstrumentId,
      onRemove: () => removePaymentInstrument(payment.paymentInstrumentId)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
      direction: "row"
    }, CardIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CardIcon, {
      layerStyle: "ccIcon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
      spacing: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
      spacing: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, (_payment$paymentCard2 = payment.paymentCard) === null || _payment$paymentCard2 === void 0 ? void 0 : _payment$paymentCard2.cardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, "\u2022\u2022\u2022\u2022", ' ', (_payment$paymentCard3 = payment.paymentCard) === null || _payment$paymentCard3 === void 0 ? void 0 : _payment$paymentCard3.numberLastDigits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, (_payment$paymentCard4 = payment.paymentCard) === null || _payment$paymentCard4 === void 0 ? void 0 : _payment$paymentCard4.expirationMonth, "/", (_payment$paymentCard5 = payment.paymentCard) === null || _payment$paymentCard5 === void 0 ? void 0 : _payment$paymentCard5.expirationYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, payment.paymentCard.holder)))));
  })), !hasSavedPayments && !isEditing && isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_12__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_9__.PaymentIcon, {
      boxSize: 8
    }),
    heading: formatMessage({
      id: "YDGR5k",
      defaultMessage: [{
        "type": 0,
        "value": "No Saved Payment Methods"
      }]
    }),
    text: formatMessage({
      id: "m/CSCf",
      defaultMessage: [{
        "type": 0,
        "value": "Add a new payment method for faster checkout"
      }]
    }),
    buttonText: formatMessage({
      id: "V+R4NC",
      defaultMessage: [{
        "type": 0,
        "value": "Add Payment Method"
      }]
    }),
    onButtonClick: toggleEdit
  }), isEditing && !hasSavedPayments && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CardPaymentForm, {
    hasSavedPayments: hasSavedPayments,
    form: form,
    toggleEdit: toggleEdit,
    submitForm: submitForm
  }));
};

AccountPaymentMethods.getTemplateName = () => 'account-payment-methods';

/* harmony default export */ __webpack_exports__["default"] = (AccountPaymentMethods);

/***/ }),

/***/ "./app/pages/account/profile.jsx":
/*!***************************************!*\
  !*** ./app/pages/account/profile.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_toggle_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/toggle-card */ "./app/components/toggle-card/index.jsx");
/* harmony import */ var _components_forms_profile_fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/forms/profile-fields */ "./app/components/forms/profile-fields.jsx");
/* harmony import */ var _components_forms_update_password_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/forms/update-password-fields */ "./app/components/forms/update-password-fields.jsx");
/* harmony import */ var _components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/forms/form-action-buttons */ "./app/components/forms/form-action-buttons.jsx");



const _excluded = ["children", "height", "width"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */










/**
 * This is a specialized Skeleton component that which uses the customers authtype as the
 * `isLoaded` state. It also will revert it's provided size (height, width) when the loaded
 * state changes. This allows you to have skeletons of a specific size, but onece loaded
 * the bounding element will affect the contents size.
 */
// eslint-disable-next-line react/prop-types

const Skeleton = _ref => {
  let {
    children,
    height,
    width
  } = _ref,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const {
    isRegistered
  } = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const size = !isRegistered ? {
    height,
    width
  } : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Skeleton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isLoaded: isRegistered
  }, rest, size), children);
};

const ProfileCard = () => {
  var _form$errors;

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.useToast)();
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    defaultValues: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phoneHome
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    form.reset({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phoneHome
    });
  }, [customer]);

  const submit = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (values) {
      try {
        form.clearErrors();
        yield customer.updateCustomer(values);
        setIsEditing(false);
        toast({
          title: formatMessage({
            id: "B5/YE0",
            defaultMessage: [{
              "type": 0,
              "value": "Profile updated"
            }]
          }),
          status: 'success',
          isClosable: true
        });
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  const {
    isRegistered
  } = customer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCard, {
    id: "my-profile",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
      height: "30px",
      width: "120px"
    }, formatMessage({
      id: "YzZa8+",
      defaultMessage: [{
        "type": 0,
        "value": "My Profile"
      }]
    })),
    editing: isEditing,
    isLoading: form.formState.isSubmitting,
    onEdit: isRegistered ? () => setIsEditing(true) : undefined,
    layerStyle: "cardBordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCardEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    onSubmit: form.handleSubmit(submit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 6
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_6__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_forms_profile_fields__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onCancel: () => setIsEditing(false)
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCardSummary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.SimpleGrid, {
    columns: {
      base: 1,
      lg: 3
    },
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "84px",
    marginBottom: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "TemVby",
    defaultMessage: [{
      "type": 0,
      "value": "Full Name"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "140px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, customer.firstName, " ", customer.lastName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "120px",
    marginBottom: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "sy+pv5",
    defaultMessage: [{
      "type": 0,
      "value": "Email"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "64px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, customer.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "80px",
    marginBottom: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "mXiD5u",
    defaultMessage: [{
      "type": 0,
      "value": "Phone Number"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "120px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, customer.phoneHome || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "uE6ELS",
    defaultMessage: [{
      "type": 0,
      "value": "Not provided"
    }]
  })))))));
};

const PasswordCard = () => {
  var _form$errors2;

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.useToast)();
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();

  const submit = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (values) {
      try {
        form.clearErrors();
        yield customer.updatePassword(values);
        setIsEditing(false);
        toast({
          title: formatMessage({
            id: "Kz7I2o",
            defaultMessage: [{
              "type": 0,
              "value": "Password updated"
            }]
          }),
          status: 'success',
          isClosable: true
        });
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function submit(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  const {
    isRegistered
  } = customer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCard, {
    id: "password",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
      height: "30px",
      width: "120px"
    }, formatMessage({
      id: "5sg7KC",
      defaultMessage: [{
        "type": 0,
        "value": "Password"
      }]
    })),
    editing: isEditing,
    isLoading: form.formState.isSubmitting,
    onEdit: isRegistered ? () => setIsEditing(true) : undefined,
    layerStyle: "cardBordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCardEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", {
    onSubmit: form.handleSubmit(submit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 6
  }, ((_form$errors2 = form.errors) === null || _form$errors2 === void 0 ? void 0 : _form$errors2.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_6__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_forms_update_password_fields__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onCancel: () => setIsEditing(false)
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCardSummary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.SimpleGrid, {
    columns: {
      base: 1,
      lg: 3
    },
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "84px",
    marginBottom: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "5sg7KC",
    defaultMessage: [{
      "type": 0,
      "value": "Password"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Skeleton, {
    height: "21px",
    width: "140px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm"
  }, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"))))));
};

const AccountDetail = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    "data-testid": "account-detail-page",
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    as: "h1",
    fontSize: "24px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "mYx8sv",
    defaultMessage: [{
      "type": 0,
      "value": "Account Details"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(ProfileCard, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PasswordCard, null)));
};

AccountDetail.getTemplateName = () => 'account-detail';

/* harmony default export */ __webpack_exports__["default"] = (AccountDetail);

/***/ }),

/***/ "./app/pages/account/util/order-context.js":
/*!*************************************************!*\
  !*** ./app/pages/account/util/order-context.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountOrdersProvider": function() { return /* binding */ AccountOrdersProvider; },
/* harmony export */   "useAccountOrders": function() { return /* binding */ useAccountOrders; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");



const _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



const AccountOrdersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createContext();
const AccountOrdersProvider = ({
  children
}) => {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    orderIdsByOffset: {},
    ordersById: {},
    paging: {
      limit: 10,
      offset: 0,
      total: 0
    },
    productsById: {},
    isLoading: true
  });
  const mergeState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(data => {
    // If we become unmounted during an async call that results in updating state, we
    // skip the update to avoid React errors about setting state in unmounted components.
    if (!mounted.current) {
      return;
    }

    setState(_state => _objectSpread(_objectSpread({}, _state), data));
  });

  const fetchOrders = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* ({
      offset = 0,
      limit = 10
    }) {
      const orderIds = state.orderIdsByOffset[offset];
      let orders = orderIds === null || orderIds === void 0 ? void 0 : orderIds.map(id => state.ordersById[id]);

      if (!orderIds) {
        mergeState({
          isLoading: true
        });

        const _yield$customer$getCu = yield customer.getCustomerOrders({
          offset,
          limit
        }),
              {
          data = []
        } = _yield$customer$getCu,
              paging = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$customer$getCu, _excluded);

        orders = data;
        mergeState({
          orderIdsByOffset: _objectSpread(_objectSpread({}, state.orderIdsByOffset), {}, {
            [offset]: data.map(order => order.orderNo)
          }),
          ordersById: _objectSpread(_objectSpread({}, state.ordersById), data === null || data === void 0 ? void 0 : data.reduce((acc, order) => {
            return _objectSpread(_objectSpread({}, acc), {}, {
              [order.orderNo]: order
            });
          }, {})),
          paging,
          isLoading: false
        });
      }

      if (orders) {
        let result = {};

        for (let order of orders) {
          const ids = order.productItems.map(item => item.productId).filter(id => !result[id] && !state.productsById[id]);

          if (ids.length < 1) {
            continue;
          }

          const productMap = yield customer.getCustomerOrderProductsDetail(ids);
          result = _objectSpread(_objectSpread({}, result), productMap);
        }

        setState(state => _objectSpread(_objectSpread({}, state), {}, {
          productsById: _objectSpread(_objectSpread({}, state.productsById), result)
        }));
      }
    });

    return function fetchOrders(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const fetchOrder = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (orderNo) {
      let order = state.ordersById[orderNo];

      if (!order) {
        mergeState({
          isLoading: true
        });
        order = yield customer.getOrder(orderNo);
        mergeState({
          ordersById: _objectSpread(_objectSpread({}, state.ordersById), {}, {
            [order.orderNo]: order
          }),
          isLoading: false
        });
      }

      const ids = order.productItems.map(item => item.productId).filter(id => !state.productsById[id]);

      if (ids.length > 0) {
        const productMap = yield customer.getCustomerOrderProductsDetail(ids);
        mergeState({
          productsById: _objectSpread(_objectSpread({}, state.productsById), productMap)
        });
      }
    });

    return function fetchOrder(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // We use this to track mounted state.


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  const ctx = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
    return _objectSpread(_objectSpread({}, state), {}, {
      fetchOrders,
      fetchOrder
    });
  }, [state, customer, mergeState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(AccountOrdersContext.Provider, {
    value: ctx
  }, children);
};
AccountOrdersProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
};
/**
 * A hook for managing account order history state
 * @returns {Object} Data and actions
 */

const useAccountOrders = () => {
  return react__WEBPACK_IMPORTED_MODULE_3__.useContext(AccountOrdersContext);
};

/***/ })

}]);
//# sourceMappingURL=pages-account.js.map