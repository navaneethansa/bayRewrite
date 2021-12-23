"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["app_components_action-card_index_jsx-app_components_address-display_index_jsx-app_components_-47eafc"],{

/***/ "./app/components/action-card/index.jsx":
/*!**********************************************!*\
  !*** ./app/components/action-card/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading-spinner */ "./app/components/loading-spinner/index.jsx");



const _excluded = ["children", "onEdit", "onRemove"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





/**
 * Renders a card-style box with optional edit and remove buttons. Used for
 * lists of addresses, payment methods, or any other list-type content.
 * The provided `onRemove` callback triggers a loading spinner internally
 * if given a promise.
 */

const ActionCard = _ref => {
  let {
    children,
    onEdit,
    onRemove
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);

  const handleRemove = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      setShowLoading(!showLoading);

      try {
        return yield Promise.resolve(onRemove());
      } catch (err) {
        setShowLoading(!showLoading);
        throw err;
      }
    });

    return function handleRemove() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    spacing: 4,
    p: 4,
    position: "relative",
    border: "1px solid",
    borderColor: "gray.100",
    borderRadius: "base"
  }, props), showLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: "row",
    spacing: 4
  }, onEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: onEdit,
    variant: "link",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "wEQDC6",
    defaultMessage: [{
      "type": 0,
      "value": "Edit"
    }]
  })), onRemove && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    variant: "link",
    size: "sm",
    colorScheme: "red",
    onClick: handleRemove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "G/yZLu",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  })))));
};

ActionCard.propTypes = {
  /** Callback fired on edit */
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /** Callback fired on remove click (if promise, will toggle loading spinner) */
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /** Content rendered in card */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (ActionCard);

/***/ }),

/***/ "./app/components/address-display/index.jsx":
/*!**************************************************!*\
  !*** ./app/components/address-display/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const AddressDisplay = ({
  address
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, address.firstName, " ", address.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, address.address1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, address.city, ", ", address.stateCode, " ", address.postalCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, address.countryCode));
};

AddressDisplay.propTypes = {
  address: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (AddressDisplay);

/***/ }),

/***/ "./app/components/forms/address-fields.jsx":
/*!*************************************************!*\
  !*** ./app/components/forms/address-fields.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _useAddressFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAddressFields */ "./app/components/forms/useAddressFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const AddressFields = ({
  form,
  prefix = ''
}) => {
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const fields = (0,_useAddressFields__WEBPACK_IMPORTED_MODULE_3__["default"])({
    form,
    prefix
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {
    columns: [1, 1, 2],
    gap: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.countryCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.address1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    templateColumns: "repeat(8, 1fr)",
    gap: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridItem, {
    colSpan: [4, 4, 4]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.stateCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridItem, {
    colSpan: [4, 4, 4]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.postalCode))), customer.isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.preferred));
};

AddressFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (AddressFields);

/***/ }),

/***/ "./app/components/forms/credit-card-fields.jsx":
/*!*****************************************************!*\
  !*** ./app/components/forms/credit-card-fields.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/dist/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cc-utils */ "./app/utils/cc-utils.js");
/* harmony import */ var _useCreditCardFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useCreditCardFields */ "./app/components/forms/useCreditCardFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */










const CreditCardFields = ({
  form,
  prefix = ''
}) => {
  var _form$getValues$numbe;

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const fields = (0,_useCreditCardFields__WEBPACK_IMPORTED_MODULE_6__["default"])({
    form,
    prefix
  }); // Rerender the fields when we `cardType` changes so the detected
  // card icon appears while typing the card number.
  // https://react-hook-form.com/api#watch

  const cardType = form.watch('cardType');
  const CardIcon = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__.getCreditCardIcon)(form.getValues().cardType);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_field__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields.number, {
    formLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {
      justify: "space-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.FormLabel, null, fields.number.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, {
      direction: "row",
      spacing: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.VisaIcon, {
      layerStyle: "ccIcon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.MastercardIcon, {
      layerStyle: "ccIcon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.AmexIcon, {
      layerStyle: "ccIcon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.DiscoverIcon, {
      layerStyle: "ccIcon"
    }))),
    inputProps: ({
      onChange
    }) => _objectSpread(_objectSpread({}, fields.number.inputProps), {}, {
      onChange(evt) {
        const number = evt.target.value.replace(/[^0-9 ]+/, '');
        const {
          card
        } = card_validator__WEBPACK_IMPORTED_MODULE_4___default().number(number);
        const formattedNumber = card ? (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__.formatCreditCardNumber)(number, card) : number;
        form.setValue('cardType', (card === null || card === void 0 ? void 0 : card.type) || '');
        return onChange(formattedNumber);
      }

    })
  }), CardIcon && ((_form$getValues$numbe = form.getValues().number) === null || _form$getValues$numbe === void 0 ? void 0 : _form$getValues$numbe.length) > 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.InputRightElement, {
    width: "60px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CardIcon, {
    layerStyle: "ccIcon"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_field__WEBPACK_IMPORTED_MODULE_7__["default"], fields.holder), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.SimpleGrid, {
    columns: [2, 2, 3],
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_field__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields.expiry, {
    inputProps: ({
      onChange
    }) => _objectSpread(_objectSpread({}, fields.expiry.inputProps), {}, {
      onChange(evt) {
        let value = evt.target.value.replace('/', ''); // We ignore input values other than digits and `/`.
        // eslint-disable-next-line no-useless-escape

        if (value.match(/[^\d|\/]/g)) {
          return;
        } // Ignore input when we already have MM/YY


        if (value.length > 4) {
          return;
        }

        if (value.length >= 2) {
          value = `${value.substr(0, 2)}/${value.substr(2)}`;
        }

        return onChange(value);
      },

      onKeyDown(evt) {
        if (evt.keyCode === 8 || evt.keyCode === 46) {
          evt.preventDefault();
          return onChange(evt.target.value.slice(0, -1));
        }
      }

    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_field__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields.securityCode, {
    formLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.FormLabel, null, fields.securityCode.label, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Tooltip, {
      hasArrow: true,
      placement: "top",
      label: formatMessage({
        id: "TBI5GJ",
        defaultMessage: [{
          "type": 0,
          "value": "This "
        }, {
          "type": 1,
          "value": "length"
        }, {
          "type": 0,
          "value": "-digit code can be found on the "
        }, {
          "type": 1,
          "value": "side"
        }, {
          "type": 0,
          "value": " of your card."
        }]
      }, {
        length: cardType === 'american-express' ? 4 : 3,
        side: cardType === 'american-express' ? 'front' : 'back'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.InfoIcon, {
      boxSize: 5,
      color: "gray.700",
      ml: 1
    })))
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_field__WEBPACK_IMPORTED_MODULE_7__["default"], fields.cardType));
};

CreditCardFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCardFields);

/***/ }),

/***/ "./app/components/forms/form-action-buttons.jsx":
/*!******************************************************!*\
  !*** ./app/components/forms/form-action-buttons.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




/**
 * Renders a form submit button and a cancel button with configurable labels and callbacks
 * in a responsive layout. Used primarily in forms that can be toggled opened/closed.
 */

const FormActionButtons = ({
  saveButtonProps = {},
  cancelButtonProps = {},
  saveButtonLabel,
  cancelButtonLabel,
  onCancel = () => {}
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    direction: {
      base: 'column',
      lg: 'row-reverse'
    },
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "submit",
    minWidth: 28
  }, saveButtonProps), saveButtonLabel || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "jvo0vs",
    defaultMessage: [{
      "type": 0,
      "value": "Save"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "outline",
    minWidth: 28,
    onClick: onCancel
  }, cancelButtonProps), cancelButtonLabel || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "47FYwb",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel"
    }]
  })));
};

FormActionButtons.propTypes = {
  saveButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  cancelButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  saveButtonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cancelButtonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (FormActionButtons);

/***/ }),

/***/ "./app/components/forms/state-province-options.jsx":
/*!*********************************************************!*\
  !*** ./app/components/forms/state-province-options.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateOptions": function() { return /* binding */ stateOptions; },
/* harmony export */   "provinceOptions": function() { return /* binding */ provinceOptions; }
/* harmony export */ });
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const stateOptions = [{
  value: 'AL',
  label: 'Alabama'
}, {
  value: 'AK',
  label: 'Alaska'
}, {
  value: 'AZ',
  label: 'Arizona'
}, {
  value: 'AR',
  label: 'Arkansas'
}, {
  value: 'CA',
  label: 'California'
}, {
  value: 'CO',
  label: 'Colorado'
}, {
  value: 'CT',
  label: 'Connecticut'
}, {
  value: 'DE',
  label: 'Delaware'
}, {
  value: 'DC',
  label: 'District Of Columbia'
}, {
  value: 'FL',
  label: 'Florida'
}, {
  value: 'GA',
  label: 'Georgia'
}, {
  value: 'HI',
  label: 'Hawaii'
}, {
  value: 'ID',
  label: 'Idaho'
}, {
  value: 'IL',
  label: 'Illinois'
}, {
  value: 'IN',
  label: 'Indiana'
}, {
  value: 'IA',
  label: 'Iowa'
}, {
  value: 'KS',
  label: 'Kansas'
}, {
  value: 'KY',
  label: 'Kentucky'
}, {
  value: 'LA',
  label: 'Louisiana'
}, {
  value: 'ME',
  label: 'Maine'
}, {
  value: 'MD',
  label: 'Maryland'
}, {
  value: 'MA',
  label: 'Massachusetts'
}, {
  value: 'MI',
  label: 'Michigan'
}, {
  value: 'MN',
  label: 'Minnesota'
}, {
  value: 'MS',
  label: 'Mississippi'
}, {
  value: 'MO',
  label: 'Missouri'
}, {
  value: 'MT',
  label: 'Montana'
}, {
  value: 'NE',
  label: 'Nebraska'
}, {
  value: 'NV',
  label: 'Nevada'
}, {
  value: 'NH',
  label: 'New Hampshire'
}, {
  value: 'NJ',
  label: 'New Jersey'
}, {
  value: 'NM',
  label: 'New Mexico'
}, {
  value: 'NY',
  label: 'New York'
}, {
  value: 'NC',
  label: 'North Carolina'
}, {
  value: 'ND',
  label: 'North Dakota'
}, {
  value: 'OH',
  label: 'Ohio'
}, {
  value: 'OK',
  label: 'Oklahoma'
}, {
  value: 'OR',
  label: 'Oregon'
}, {
  value: 'PA',
  label: 'Pennsylvania'
}, {
  value: 'RI',
  label: 'Rhode Island'
}, {
  value: 'SC',
  label: 'South Carolina'
}, {
  value: 'SD',
  label: 'South Dakota'
}, {
  value: 'TN',
  label: 'Tennessee'
}, {
  value: 'TX',
  label: 'Texas'
}, {
  value: 'UT',
  label: 'Utah'
}, {
  value: 'VT',
  label: 'Vermont'
}, {
  value: 'VA',
  label: 'Virginia'
}, {
  value: 'WA',
  label: 'Washington'
}, {
  value: 'WV',
  label: 'West Virginia'
}, {
  value: 'WI',
  label: 'Wisconsin'
}, {
  value: 'WY',
  label: 'Wyoming'
}];
const provinceOptions = [{
  value: 'AB',
  label: 'Alberta'
}, {
  value: 'BC',
  label: 'British Columbia'
}, {
  value: 'MB',
  label: 'Manitoba'
}, {
  value: 'NB',
  label: 'New Brunswick'
}, {
  value: 'NL',
  label: 'Newfoundland and Labrador'
}, {
  value: 'NS',
  label: 'Nova Scotia'
}, {
  value: 'ON',
  label: 'Ontario'
}, {
  value: 'PE',
  label: 'Prince Edward Island'
}, {
  value: 'QC',
  label: 'Quebec'
}, {
  value: 'SK',
  label: 'Saskatchewan'
}, {
  value: 'NT',
  label: 'Northwest Territories'
}, {
  value: 'NU',
  label: 'Nunavut'
}, {
  value: 'YT',
  label: 'Yukon'
}];

/***/ }),

/***/ "./app/components/forms/useAddressFields.jsx":
/*!***************************************************!*\
  !*** ./app/components/forms/useAddressFields.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useAddressFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils_phone_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/phone-utils */ "./app/utils/phone-utils.js");
/* harmony import */ var _state_province_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-province-options */ "./app/components/forms/state-province-options.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  required: {
    id: "Seanpx",
    defaultMessage: [{
      "type": 0,
      "value": "Required"
    }]
  },
  firstName: {
    id: "Q6wcZ5",
    defaultMessage: [{
      "type": 0,
      "value": "First Name"
    }]
  },
  lastName: {
    id: "aheQdn",
    defaultMessage: [{
      "type": 0,
      "value": "Last Name"
    }]
  },
  phone: {
    id: "O95R3Z",
    defaultMessage: [{
      "type": 0,
      "value": "Phone"
    }]
  },
  country: {
    id: "vONi+O",
    defaultMessage: [{
      "type": 0,
      "value": "Country"
    }]
  },
  address: {
    id: "e6Ph5+",
    defaultMessage: [{
      "type": 0,
      "value": "Address"
    }]
  },
  city: {
    id: "TE4fIS",
    defaultMessage: [{
      "type": 0,
      "value": "City"
    }]
  },
  state: {
    id: "ku+mDU",
    defaultMessage: [{
      "type": 0,
      "value": "State"
    }]
  },
  province: {
    id: "f9teca",
    defaultMessage: [{
      "type": 0,
      "value": "Province"
    }]
  },
  zipCode: {
    id: "Solm6E",
    defaultMessage: [{
      "type": 0,
      "value": "Zip Code"
    }]
  },
  postalCode: {
    id: "UqKMjl",
    defaultMessage: [{
      "type": 0,
      "value": "Postal Code"
    }]
  },
  stateCodeInvalid: {
    id: "zHi6BD",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter 2-letter state/province"
    }]
  },
  preferred: {
    id: "z+Zrln",
    defaultMessage: [{
      "type": 0,
      "value": "Set as default"
    }]
  }
});
/**
 * A React hook that provides the field definitions for an address form.
 * @param {Object} form - The object returned from `useForm`
 * @param {Object} form.control - The form control object
 * @param {Object} form.errors - An object containing field errors
 * @returns {Object} Field definitions for use in a form
 */

function useAddressFields({
  form: {
    watch,
    control,
    errors
  },
  prefix = ''
}) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const countryCode = watch('countryCode');
  const fields = {
    firstName: {
      name: `${prefix}firstName`,
      label: formatMessage(messages.firstName),
      defaultValue: '',
      type: 'text',
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
      label: formatMessage(messages.lastName),
      defaultValue: '',
      type: 'text',
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
    phone: {
      name: `${prefix}phone`,
      label: formatMessage(messages.phone),
      defaultValue: '',
      type: 'tel',
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
        inputmode: 'numeric',

        onChange(evt) {
          onChange((0,_utils_phone_utils__WEBPACK_IMPORTED_MODULE_0__.formatPhoneNumber)(evt.target.value));
        }

      }),
      control
    },
    countryCode: {
      name: `${prefix}countryCode`,
      label: formatMessage(messages.country),
      defaultValue: 'US',
      type: 'select',
      options: [{
        value: 'CA',
        label: 'Canada'
      }, {
        value: 'US',
        label: 'United States'
      }],
      rules: {
        required: formatMessage({
          id: "QclMUn",
          defaultMessage: [{
            "type": 0,
            "value": "Please select your country"
          }]
        })
      },
      error: errors[`${prefix}countryCode`],
      control
    },
    address1: {
      name: `${prefix}address1`,
      label: formatMessage(messages.address),
      defaultValue: '',
      type: 'text',
      rules: {
        required: formatMessage({
          id: "c1zaMK",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your address"
          }]
        })
      },
      error: errors[`${prefix}address1`],
      control
    },
    city: {
      name: `${prefix}city`,
      label: formatMessage(messages.city),
      defaultValue: '',
      type: 'text',
      rules: {
        required: formatMessage({
          id: "tiVXug",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your city"
          }]
        })
      },
      error: errors[`${prefix}city`],
      control
    },
    stateCode: {
      name: `${prefix}stateCode`,
      label: formatMessage(countryCode === 'CA' ? messages.province : messages.state),
      defaultValue: '',
      type: 'select',
      options: [{
        value: '',
        label: ''
      }, ...(countryCode === 'CA' ? _state_province_options__WEBPACK_IMPORTED_MODULE_1__.provinceOptions : _state_province_options__WEBPACK_IMPORTED_MODULE_1__.stateOptions)],
      rules: {
        required: formatMessage({
          id: "O9nLUc",
          defaultMessage: [{
            "type": 0,
            "value": "Please select your "
          }, {
            "type": 1,
            "value": "stateOrProvince"
          }]
        }, {
          stateOrProvince: countryCode === 'CA' ? 'province' : 'state'
        })
      },
      error: errors[`${prefix}stateCode`],
      control
    },
    postalCode: {
      name: `${prefix}postalCode`,
      label: formatMessage(countryCode === 'CA' ? messages.postalCode : messages.zipCode),
      defaultValue: '',
      type: 'text',
      rules: {
        required: formatMessage({
          id: "uV4+68",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your "
          }, {
            "type": 1,
            "value": "postalOrZip"
          }]
        }, {
          postalOrZip: countryCode === 'CA' ? 'postal code' : 'zip code'
        })
      },
      error: errors[`${prefix}postalCode`],
      control
    },
    preferred: {
      name: `${prefix}preferred`,
      label: formatMessage(messages.preferred),
      defaultValue: false,
      type: 'checkbox',
      rules: {},
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/forms/useCreditCardFields.jsx":
/*!******************************************************!*\
  !*** ./app/components/forms/useCreditCardFields.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCreditCardFields; }
/* harmony export */ });
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-validator */ "./node_modules/card-validator/dist/index.js");
/* harmony import */ var card_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(card_validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  required: {
    id: "Seanpx",
    defaultMessage: [{
      "type": 0,
      "value": "Required"
    }]
  },
  cardNumberInvalid: {
    id: "IyXU3R",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter a valid card number"
    }]
  },
  nameInvalid: {
    id: "PBSfL4",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter a valid name"
    }]
  },
  dateInvalid: {
    id: "6DCLcI",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter a valid date"
    }]
  },
  codeInvalid: {
    id: "o40Ymt",
    defaultMessage: [{
      "type": 0,
      "value": "Please enter a valid security code"
    }]
  },
  cardNumber: {
    id: "WTocjo",
    defaultMessage: [{
      "type": 0,
      "value": "Card Number"
    }]
  },
  cardType: {
    id: "3AmUG3",
    defaultMessage: [{
      "type": 0,
      "value": "Card Type"
    }]
  },
  cardName: {
    id: "gW8EGu",
    defaultMessage: [{
      "type": 0,
      "value": "Name on Card"
    }]
  },
  expiryDate: {
    id: "5R9heZ",
    defaultMessage: [{
      "type": 0,
      "value": "Expiry Date"
    }]
  },
  securityCode: {
    id: "f0EhUc",
    defaultMessage: [{
      "type": 0,
      "value": "Security Code"
    }]
  }
});
/**
 * A React hook that provides the field definitions for a credit card form.
 * @param {Object} form - The object returned from `useForm`
 * @param {Object} form.control - The form control object
 * @param {Object} form.errors - An object containing field errors
 * @returns {Object} Field definitions for use in a form
 */

function useCreditCardFields({
  form: {
    control,
    errors
  },
  prefix = ''
}) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const fields = {
    number: {
      name: `${prefix}number`,
      label: formatMessage(messages.cardNumber),
      defaultValue: '',
      type: 'text',
      rules: {
        required: formatMessage({
          id: "pS9/Sw",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your card number"
          }]
        }),
        validate: value => card_validator__WEBPACK_IMPORTED_MODULE_0___default().number(value).isValid || formatMessage(messages.cardNumberInvalid)
      },
      error: errors[`${prefix}number`],
      inputProps: {
        inputmode: 'numeric'
      },
      control
    },
    cardType: {
      name: `${prefix}cardType`,
      label: formatMessage(messages.cardType),
      defaultValue: '',
      type: 'hidden',
      error: errors[`${prefix}cardType`],
      control
    },
    holder: {
      name: `${prefix}holder`,
      label: formatMessage(messages.cardName),
      defaultValue: '',
      type: 'text',
      rules: {
        required: formatMessage({
          id: "hCj9FS",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your name as shown on your card"
          }]
        }),
        validate: value => card_validator__WEBPACK_IMPORTED_MODULE_0___default().cardholderName(value).isValid || formatMessage(messages.nameInvalid)
      },
      error: errors[`${prefix}holder`],
      control
    },
    expiry: {
      name: `${prefix}expiry`,
      label: formatMessage(messages.expiryDate),
      defaultValue: '',
      type: 'text',
      placeholder: 'MM/YY',
      rules: {
        required: formatMessage({
          id: "fWz2xP",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your expiry date"
          }]
        }),
        validate: value => card_validator__WEBPACK_IMPORTED_MODULE_0___default().expirationDate(value).isValid || formatMessage(messages.dateInvalid)
      },
      error: errors[`${prefix}expiry`],
      inputProps: {
        inputmode: 'numeric'
      },
      control
    },
    securityCode: {
      name: `${prefix}securityCode`,
      label: formatMessage(messages.securityCode),
      defaultValue: '',
      type: 'password',
      rules: {
        required: formatMessage({
          id: "P5ouV8",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your security code"
          }]
        }),
        validate: value => card_validator__WEBPACK_IMPORTED_MODULE_0___default().cvv(value).isValid || formatMessage(messages.codeInvalid)
      },
      error: errors[`${prefix}securityCode`],
      inputProps: ({
        onChange
      }) => ({
        inputmode: 'numeric',
        maxLength: 4,

        onChange(evt) {
          onChange(evt.target.value.replace(/[^0-9 ]+/, ''));
        }

      }),
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/toggle-card/index.jsx":
/*!**********************************************!*\
  !*** ./app/components/toggle-card/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleCard": function() { return /* binding */ ToggleCard; },
/* harmony export */   "ToggleCardEdit": function() { return /* binding */ ToggleCardEdit; },
/* harmony export */   "ToggleCardSummary": function() { return /* binding */ ToggleCardSummary; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _components_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading-spinner */ "./app/components/loading-spinner/index.jsx");


const _excluded = ["id", "title", "editing", "disabled", "onEdit", "editLabel", "isLoading", "children"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const ToggleCardContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
/**
 * A card-like box that renders one of two states: 'edit' and 'summary'. It takes a single
 * `ToggleCardSummary` and `ToggleCardEdit` component as children and renders one or the
 * other depending on the `editing` prop. See `app/pages/checkout` for example.
 */

const ToggleCard = _ref => {
  let {
    id,
    title,
    editing,
    disabled,
    onEdit,
    editLabel,
    isLoading,
    children
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ToggleCardContext.Provider, {
    value: {
      editing,
      disabled
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    layerStyle: "card",
    rounded: [0, 0, 'base'],
    px: [4, 4, 6],
    "data-testid": `sf-toggle-card-${id}`,
    position: "relative"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: editing || !editing && !disabled ? 4 : 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    fontSize: "lg",
    lineHeight: "30px",
    color: disabled && !editing && 'gray.400'
  }, title), !editing && !disabled && onEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "link",
    size: "sm",
    onClick: onEdit
  }, editLabel || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "wEQDC6",
    defaultMessage: [{
      "type": 0,
      "value": "Edit"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    "data-testid": `sf-toggle-card-${id}-content`
  }, children)), isLoading && editing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};
const ToggleCardEdit = ({
  children
}) => {
  const {
    editing
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ToggleCardContext);
  return editing ? children : null;
};
const ToggleCardSummary = ({
  children
}) => {
  const {
    editing,
    disabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ToggleCardContext);
  return !editing && !disabled ? children : null;
};
ToggleCard.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  editLabel: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  editing: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onEdit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};
ToggleCardEdit.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};
ToggleCardSummary.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};

/***/ }),

/***/ "./app/utils/cc-utils.js":
/*!*******************************!*\
  !*** ./app/utils/cc-utils.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCreditCardNumber": function() { return /* binding */ formatCreditCardNumber; },
/* harmony export */   "getCreditCardIcon": function() { return /* binding */ getCreditCardIcon; },
/* harmony export */   "getPaymentInstrumentCardType": function() { return /* binding */ getPaymentInstrumentCardType; },
/* harmony export */   "createCreditCardPaymentBodyFromForm": function() { return /* binding */ createCreditCardPaymentBodyFromForm; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons */ "./app/components/icons/index.jsx");


const _excluded = ["expiry", "paymentInstrumentId"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Formats a credit card number against given criteria
 * @param {string} cardNumber - The number to be formatted
 * @param {Object} opts
 * @param {number[]} opts.gaps - Indices for space insertion
 * @param {number[]} opts.length - Max number lengths for output
 * @returns {string} Formatted card number for display
 */

const formatCreditCardNumber = (cardNumber = '', opts = {
  gaps: [],
  lengths: []
}) => {
  let trimmedNumber = cardNumber.replace(/[^0-9]/g, '');
  let numberLength = trimmedNumber.length;

  if (numberLength === opts.lengths[0] + 1) {
    trimmedNumber = trimmedNumber.substr(0, opts.lengths[0]);
    numberLength = trimmedNumber.length;
  }

  let numbers = trimmedNumber.split('');
  opts.gaps.forEach((gapIndex, idx) => {
    if (numberLength > gapIndex) {
      numbers.splice(gapIndex + idx, 0, ' ');
    }
  });
  return numbers.join('');
};
/**
 * Returns the icon component for a given card type
 * @param {string} type - The card type
 * @returns {Function|undefined} React component
 */

const getCreditCardIcon = type => {
  if (!type) {
    return undefined;
  }

  return {
    // Visa
    visa: _components_icons__WEBPACK_IMPORTED_MODULE_2__.VisaIcon,
    // MasterCard
    mastercard: _components_icons__WEBPACK_IMPORTED_MODULE_2__.MastercardIcon,
    'master card': _components_icons__WEBPACK_IMPORTED_MODULE_2__.MastercardIcon,
    // American Express
    'american express': _components_icons__WEBPACK_IMPORTED_MODULE_2__.AmexIcon,
    'american-express': _components_icons__WEBPACK_IMPORTED_MODULE_2__.AmexIcon,
    amex: _components_icons__WEBPACK_IMPORTED_MODULE_2__.AmexIcon,
    // Discover
    discover: _components_icons__WEBPACK_IMPORTED_MODULE_2__.DiscoverIcon
  }[type.toLowerCase()];
};
/**
 * Returns the card type string in the format the SDK expects.
 * @param {string} - The card type as given by our cc validator
 * @returns {string|undefined} - The card type in a format expected by the SDK
 */

const getPaymentInstrumentCardType = type => {
  if (!type) {
    return undefined;
  }

  return {
    visa: 'Visa',
    mastercard: 'Master Card',
    'american-express': 'Amex',
    discover: 'Discover'
  }[type];
};
const createCreditCardPaymentBodyFromForm = paymentFormData => {
  // eslint-disable-next-line no-unused-vars
  const {
    expiry,
    paymentInstrumentId
  } = paymentFormData,
        selectedPayment = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(paymentFormData, _excluded); // The form gives us the expiration date as `MM/YY` - so we need to split it into
  // month and year to submit them as individual fields.


  const [expirationMonth, expirationYear] = expiry.split('/');
  return {
    paymentMethodId: 'CREDIT_CARD',
    paymentCard: _objectSpread(_objectSpread({}, selectedPayment), {}, {
      number: selectedPayment.number.replace(/ /g, ''),
      cardType: getPaymentInstrumentCardType(selectedPayment.cardType),
      expirationMonth: parseInt(expirationMonth),
      expirationYear: parseInt(`20${expirationYear}`),
      // TODO: These fields are required for saving the card to the customer's
      // account. Im not sure what they are for or how to get them, so for now
      // we're just passing some values to make it work. Need to investigate.
      issueNumber: '',
      validFromMonth: 1,
      validFromYear: 2020
    })
  };
};

/***/ }),

/***/ "./app/utils/phone-utils.js":
/*!**********************************!*\
  !*** ./app/utils/phone-utils.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPhoneNumber": function() { return /* binding */ formatPhoneNumber; }
/* harmony export */ });
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Formats the given phone number to add spaces and symbols
 * @param {string} - Phone number to be formatted
 * @returns {string}  - Formatted phone number
 */
const formatPhoneNumber = value => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

/***/ })

}]);
//# sourceMappingURL=app_components_action-card_index_jsx-app_components_address-display_index_jsx-app_components_-47eafc.js.map