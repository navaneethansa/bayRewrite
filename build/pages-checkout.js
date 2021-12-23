"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-checkout"],{

/***/ "./app/components/radio-card/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/radio-card/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioCard": function() { return /* binding */ RadioCard; },
/* harmony export */   "RadioCardGroup": function() { return /* binding */ RadioCardGroup; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const RadioCardGroupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
const RadioCard = props => {
  const getRadioProps = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RadioCardGroupContext);
  const {
    getInputProps,
    getCheckboxProps
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useRadio)(getRadioProps(props));
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    as: "label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", input), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, checkbox, {
    "aria-hidden": false,
    position: "relative",
    cursor: "pointer",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "base",
    height: "full",
    _checked: {
      borderColor: 'blue.600'
    },
    _focus: {
      boxShadow: 'outline'
    },
    px: 4,
    py: 4
  }), input.checked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    position: "absolute",
    top: 0,
    right: 0,
    w: 0,
    h: 0,
    borderStyle: "solid",
    borderWidth: "0 38px 38px 0",
    borderColor: "transparent",
    borderRightColor: "blue.600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {
    color: "white",
    position: "absolute",
    right: "-40px",
    top: "1px"
  })), props.children));
};
const RadioCardGroup = props => {
  const {
    getRootProps,
    getRadioProps
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useRadioGroup)(props);
  const group = getRootProps();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RadioCardGroupContext.Provider, {
    value: getRadioProps
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, group, props.children));
};
RadioCard.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
};
RadioCardGroup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
};

/***/ }),

/***/ "./app/pages/checkout/index.jsx":
/*!**************************************!*\
  !*** ./app/pages/checkout/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _partials_contact_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/contact-info */ "./app/pages/checkout/partials/contact-info.jsx");
/* harmony import */ var _partials_shipping_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/shipping-address */ "./app/pages/checkout/partials/shipping-address.jsx");
/* harmony import */ var _partials_shipping_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/shipping-options */ "./app/pages/checkout/partials/shipping-options.jsx");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _partials_payment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/payment */ "./app/pages/checkout/partials/payment.jsx");
/* harmony import */ var _partials_checkout_skeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partials/checkout-skeleton */ "./app/pages/checkout/partials/checkout-skeleton.jsx");
/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/order-summary */ "./app/components/order-summary/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */














const Checkout = () => {
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    globalError,
    step,
    placeOrder
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Scroll to the top when we get a global error

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (globalError || step === 4) {
      window.scrollTo({
        top: 0
      });
    }
  }, [globalError, step]);

  const submitOrder = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setIsLoading(true);

      try {
        yield placeOrder();
        navigate('/checkout/confirmation');
      } catch (error) {
        setIsLoading(false);
      }
    });

    return function submitOrder() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    background: "gray.50",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Container, {
    "data-testid": "sf-checkout-container",
    maxWidth: "container.xl",
    py: {
      base: 7,
      lg: 16
    },
    px: {
      base: 0,
      lg: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Grid, {
    templateColumns: {
      base: '1fr',
      lg: '66% 1fr'
    },
    gap: {
      base: 10,
      xl: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 4
  }, globalError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Alert, {
    status: "error",
    variant: "left-accent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.AlertIcon, null), globalError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_partials_contact_info__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_partials_shipping_address__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_partials_shipping_options__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_partials_payment__WEBPACK_IMPORTED_MODULE_9__["default"], null), step === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    pt: 3,
    display: {
      base: 'none',
      lg: 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    w: "full",
    onClick: submitOrder,
    isLoading: isLoading,
    "data-testid": "sf-checkout-place-order-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "NTgwLi",
    defaultMessage: [{
      "type": 0,
      "value": "Place Order"
    }]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.GridItem, {
    py: 6,
    px: [4, 4, 4, 0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_order_summary__WEBPACK_IMPORTED_MODULE_11__["default"], {
    showTaxEstimationForm: false,
    showCartItems: true
  }), step === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    display: {
      base: 'none',
      lg: 'block'
    },
    pt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    w: "full",
    onClick: submitOrder,
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "NTgwLi",
    defaultMessage: [{
      "type": 0,
      "value": "Place Order"
    }]
  })))))), step === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    display: {
      lg: 'none'
    },
    position: "sticky",
    bottom: "0",
    px: 4,
    pt: 6,
    pb: 11,
    background: "white",
    borderTop: "1px solid",
    borderColor: "gray.100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    w: "full",
    onClick: submitOrder,
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "NTgwLi",
    defaultMessage: [{
      "type": 0,
      "value": "Place Order"
    }]
  })))));
};

const CheckoutContainer = () => {
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_8__["default"])();

  if (!customer || !customer.customerId || !basket || !basket.basketId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_partials_checkout_skeleton__WEBPACK_IMPORTED_MODULE_10__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_util_checkout_context__WEBPACK_IMPORTED_MODULE_3__.CheckoutProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Checkout, null));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutContainer);

/***/ }),

/***/ "./app/pages/checkout/partials/cc-radio-group.jsx":
/*!********************************************************!*\
  !*** ./app/pages/checkout/partials/cc-radio-group.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_radio_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/radio-card */ "./app/components/radio-card/index.jsx");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/cc-utils */ "./app/utils/cc-utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









const CCRadioGroup = ({
  form,
  value = '',
  isEditingPayment = false,
  togglePaymentEdit = () => null,
  onPaymentIdChange = () => null
}) => {
  var _customer$paymentInst;

  const {
    customer
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
    id: "paymentInstrumentId",
    isInvalid: form.errors.paymentInstrumentId,
    isRequired: !isEditingPayment
  }, form.errors.paymentInstrumentId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.FormErrorMessage, {
    marginTop: 0,
    marginBottom: 4
  }, form.errors.paymentInstrumentId.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_radio_card__WEBPACK_IMPORTED_MODULE_4__.RadioCardGroup, {
    value: value,
    onChange: onPaymentIdChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {
    columns: [1, 1, 2],
    spacing: 4
  }, (_customer$paymentInst = customer.paymentInstruments) === null || _customer$paymentInst === void 0 ? void 0 : _customer$paymentInst.map(payment => {
    var _payment$paymentCard, _payment$paymentCard2, _payment$paymentCard3, _payment$paymentCard4, _payment$paymentCard5;

    const CardIcon = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_5__.getCreditCardIcon)((_payment$paymentCard = payment.paymentCard) === null || _payment$paymentCard === void 0 ? void 0 : _payment$paymentCard.cardType);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_radio_card__WEBPACK_IMPORTED_MODULE_4__.RadioCard, {
      key: payment.paymentInstrumentId,
      value: payment.paymentInstrumentId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      direction: "row"
    }, CardIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardIcon, {
      layerStyle: "ccIcon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      spacing: 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      spacing: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, null, (_payment$paymentCard2 = payment.paymentCard) === null || _payment$paymentCard2 === void 0 ? void 0 : _payment$paymentCard2.cardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, null, "\u2022\u2022\u2022\u2022", ' ', (_payment$paymentCard3 = payment.paymentCard) === null || _payment$paymentCard3 === void 0 ? void 0 : _payment$paymentCard3.numberLastDigits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, null, (_payment$paymentCard4 = payment.paymentCard) === null || _payment$paymentCard4 === void 0 ? void 0 : _payment$paymentCard4.expirationMonth, "/", (_payment$paymentCard5 = payment.paymentCard) === null || _payment$paymentCard5 === void 0 ? void 0 : _payment$paymentCard5.expirationYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, null, payment.paymentCard.holder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
      variant: "link",
      size: "sm",
      colorScheme: "red"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: "G/yZLu",
      defaultMessage: [{
        "type": 0,
        "value": "Remove"
      }]
    }))))));
  }), !isEditingPayment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "outline",
    border: "1px dashed",
    borderColor: "gray.200",
    color: "blue.600",
    height: {
      lg: 'full'
    },
    minHeight: ['44px', '44px', '154px'],
    rounded: "base",
    fontWeight: "medium",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon, {
      boxSize: '15px'
    }),
    onClick: togglePaymentEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "cUwO+6",
    defaultMessage: [{
      "type": 0,
      "value": "Add New Card"
    }]
  }))))));
};

CCRadioGroup.propTypes = {
  /** The form object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /** The current payment ID value */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),

  /** Flag for payment add/edit form, used for setting validation rules */
  isEditingPayment: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Method for toggling the payment add/edit form */
  togglePaymentEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),

  /** Callback for notifying on value change */
  onPaymentIdChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (CCRadioGroup);

/***/ }),

/***/ "./app/pages/checkout/partials/checkout-skeleton.jsx":
/*!***********************************************************!*\
  !*** ./app/pages/checkout/partials/checkout-skeleton.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



const CheckoutSkeleton = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    background: "gray.50",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    "data-testid": "sf-checkout-skeleton",
    maxWidth: "container.xl",
    py: {
      base: 7,
      lg: 16
    },
    px: {
      base: 0,
      lg: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    templateColumns: {
      base: '1fr',
      lg: '66% 1fr'
    },
    gap: {
      base: 10,
      lg: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: "78px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: "78px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: "78px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: "78px"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    py: 6,
    px: [4, 4, 0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: "30px",
    width: "50%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: "30px",
    width: "65%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    w: "full",
    py: 4,
    borderY: "1px",
    borderColor: "gray.200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: 6
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: 6
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: 6
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    height: 6
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutSkeleton);

/***/ }),

/***/ "./app/pages/checkout/partials/contact-info.jsx":
/*!******************************************************!*\
  !*** ./app/pages/checkout/partials/contact-info.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _components_forms_useLoginFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/forms/useLoginFields */ "./app/components/forms/useLoginFields.jsx");
/* harmony import */ var _components_toggle_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/toggle-card */ "./app/components/toggle-card/index.jsx");
/* harmony import */ var _components_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/field */ "./app/components/field/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */











const ContactInfo = () => {
  var _basket$customerInfo, _basket$customerInfo2;

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  const {
    customer,
    basket,
    isGuestCheckout,
    setIsGuestCheckout,
    step,
    login,
    setCheckoutStep,
    goToNextStep
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: {
      email: (customer === null || customer === void 0 ? void 0 : customer.email) || ((_basket$customerInfo = basket.customerInfo) === null || _basket$customerInfo === void 0 ? void 0 : _basket$customerInfo.email) || '',
      password: ''
    }
  });
  const fields = (0,_components_forms_useLoginFields__WEBPACK_IMPORTED_MODULE_5__["default"])({
    form
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [showPasswordField, setShowPasswordField] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [signOutConfirmDialogIsOpen, setSignOutConfirmDialogIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
      setError(null);

      try {
        yield login(data);
        goToNextStep();
      } catch (error) {
        if (/invalid credentials/i.test(error.message)) {
          setError(formatMessage({
            id: "5S2I6Q",
            defaultMessage: [{
              "type": 0,
              "value": "Incorrect username or password, please try again."
            }]
          }));
        } else {
          setError(error.message);
        }
      }
    });

    return function submitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const toggleGuestCheckout = () => {
    if (error) {
      setError(null);
    }

    setShowPasswordField(!showPasswordField);
    setIsGuestCheckout(!isGuestCheckout);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_6__.ToggleCard, {
    id: "step-0",
    title: formatMessage({
      id: "BEqvr/",
      defaultMessage: [{
        "type": 0,
        "value": "Contact Info"
      }]
    }),
    editing: step === 0,
    isLoading: form.formState.isSubmitting,
    onEdit: () => {
      if (!isGuestCheckout) {
        setSignOutConfirmDialogIsOpen(true);
      } else {
        setCheckoutStep(0);
      }
    },
    editLabel: !isGuestCheckout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: "F62y+K",
      defaultMessage: [{
        "type": 0,
        "value": "Sign Out"
      }]
    }) : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_6__.ToggleCardEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 6
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.AlertIcon, null), error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 5,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_field__WEBPACK_IMPORTED_MODULE_7__["default"], fields.email), showPasswordField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_field__WEBPACK_IMPORTED_MODULE_7__["default"], fields.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
    variant: "link",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "V/JHlm",
    defaultMessage: [{
      "type": 0,
      "value": "Forgot password?"
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
    type: "submit"
  }, !showPasswordField ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "fuzq0p",
    defaultMessage: [{
      "type": 0,
      "value": "Checkout as guest"
    }]
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "odXlk8",
    defaultMessage: [{
      "type": 0,
      "value": "Log in"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
    variant: "outline",
    onClick: toggleGuestCheckout
  }, !showPasswordField ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "AYIKp4",
    defaultMessage: [{
      "type": 0,
      "value": "Already have an account? Log in"
    }]
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "fuzq0p",
    defaultMessage: [{
      "type": 0,
      "value": "Checkout as guest"
    }]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_6__.ToggleCardSummary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, null, (basket === null || basket === void 0 ? void 0 : (_basket$customerInfo2 = basket.customerInfo) === null || _basket$customerInfo2 === void 0 ? void 0 : _basket$customerInfo2.email) || (customer === null || customer === void 0 ? void 0 : customer.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(SignOutConfirmationDialog, {
    isOpen: signOutConfirmDialogIsOpen,
    onClose: () => setSignOutConfirmDialogIsOpen(false),
    onConfirm: /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield customer.logout();
      yield basket.getOrCreateBasket();
      history.replace('/');
      setSignOutConfirmDialogIsOpen(false);
    })
  })));
};

const SignOutConfirmationDialog = ({
  isOpen,
  onConfirm,
  onClose
}) => {
  const cancelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.AlertDialog, {
    isOpen: isOpen,
    leastDestructiveRef: cancelRef,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.AlertDialogOverlay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.AlertDialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.AlertDialogHeader, {
    fontSize: "lg",
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "F62y+K",
    defaultMessage: [{
      "type": 0,
      "value": "Sign Out"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.AlertDialogBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "MPcjO/",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to sign out? You will need to sign back in to proceed with your current order."
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.AlertDialogFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
    ref: cancelRef,
    variant: "outline",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "47FYwb",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
    colorScheme: "red",
    onClick: onConfirm,
    ml: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "F62y+K",
    defaultMessage: [{
      "type": 0,
      "value": "Sign Out"
    }]
  }))))));
};

SignOutConfirmationDialog.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (ContactInfo);

/***/ }),

/***/ "./app/pages/checkout/partials/payment-selection.jsx":
/*!***********************************************************!*\
  !*** ./app/pages/checkout/partials/payment-selection.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _components_forms_credit_card_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/forms/credit-card-fields */ "./app/components/forms/credit-card-fields.jsx");
/* harmony import */ var _cc_radio_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cc-radio-group */ "./app/pages/checkout/partials/cc-radio-group.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */










const PaymentSelection = ({
  form,
  hideSubmitButton,
  onSubmit = () => null
}) => {
  var _customer$paymentInst;

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    customer,
    basket
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_5__.useCheckout)();
  const hasSavedCards = (customer === null || customer === void 0 ? void 0 : (_customer$paymentInst = customer.paymentInstruments) === null || _customer$paymentInst === void 0 ? void 0 : _customer$paymentInst.length) > 0;
  const [isEditingPayment, setIsEditingPayment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!hasSavedCards);
  form = form || (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (payment) {
      yield onSubmit(payment);
    });

    return function submitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // Acts as our `onChange` handler for paymentInstrumentId radio group. We do this
  // manually here so we can toggle off the 'add payment' form as needed.


  const onPaymentIdChange = value => {
    if (value && isEditingPayment) {
      togglePaymentEdit();
    }

    form.reset({
      paymentInstrumentId: value
    });
  }; // Opens/closes the 'add payment' form. Notice that when toggling either state,
  // we reset the form so as to remove any payment selection.


  const togglePaymentEdit = () => {
    form.reset({
      paymentInstrumentId: ''
    });
    setIsEditingPayment(!isEditingPayment);
    form.trigger();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    spacing: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    border: "1px solid",
    borderColor: "gray.100",
    rounded: "base",
    overflow: "hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.RadioGroup, {
    value: "cc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    py: 3,
    px: [4, 4, 6],
    bg: "gray.50",
    borderBottom: "1px solid",
    borderColor: "gray.100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Radio, {
    value: "cc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    direction: "row",
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "A8Tnga",
    defaultMessage: [{
      "type": 0,
      "value": "Credit Card"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Tooltip, {
    hasArrow: true,
    placement: "top",
    label: formatMessage({
      id: "Au/ysp",
      defaultMessage: [{
        "type": 0,
        "value": "This is a secure SSL encrypted payment."
      }]
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.LockIcon, {
    color: "gray.700",
    boxSize: 5
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__.FormattedNumber, {
    value: basket.orderTotal,
    style: "currency",
    currency: basket.currency
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    p: [4, 4, 6],
    borderBottom: "1px solid",
    borderColor: "gray.100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    spacing: 6
  }, hasSavedCards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
    name: "paymentInstrumentId",
    defaultValue: "",
    control: form.control,
    rules: {
      required: !isEditingPayment ? formatMessage({
        id: "iPMbLb",
        defaultMessage: [{
          "type": 0,
          "value": "Please select a payment method."
        }]
      }) : false
    },
    render: ({
      value
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_cc_radio_group__WEBPACK_IMPORTED_MODULE_7__["default"], {
      form: form,
      value: value,
      isEditingPayment: isEditingPayment,
      togglePaymentEdit: togglePaymentEdit,
      onPaymentIdChange: onPaymentIdChange
    })
  }), isEditingPayment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, hasSavedCards && {
    px: [4, 4, 6],
    py: 6,
    rounded: 'base',
    border: '1px solid',
    borderColor: 'blue.600'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    spacing: 6
  }, hasSavedCards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Heading, {
    as: "h3",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "cUwO+6",
    defaultMessage: [{
      "type": 0,
      "value": "Add New Card"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_forms_credit_card_fields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    form: form
  }), !hideSubmitButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    isLoading: form.formState.isSubmitting,
    type: "submit",
    w: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "8iXlvA",
    defaultMessage: [{
      "type": 0,
      "value": "Save & Continue"
    }]
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    py: 3,
    px: [4, 4, 6],
    bg: "gray.50",
    borderColor: "gray.100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Radio, {
    value: "paypal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    py: "2px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.PaypalIcon, {
    width: "auto",
    height: "20px"
  })))))))));
};

PaymentSelection.propTypes = {
  /** The form object returnd from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /** Show or hide the submit button (for controlling the form from outside component) */
  hideSubmitButton: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /** Callback for form submit */
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (PaymentSelection);

/***/ }),

/***/ "./app/pages/checkout/partials/payment.jsx":
/*!*************************************************!*\
  !*** ./app/pages/checkout/partials/payment.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _util_usePaymentForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/usePaymentForms */ "./app/pages/checkout/util/usePaymentForms.js");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/cc-utils */ "./app/utils/cc-utils.js");
/* harmony import */ var _components_toggle_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/toggle-card */ "./app/components/toggle-card/index.jsx");
/* harmony import */ var _payment_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-selection */ "./app/pages/checkout/partials/payment-selection.jsx");
/* harmony import */ var _shipping_address_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shipping-address-selection */ "./app/pages/checkout/partials/shipping-address-selection.jsx");
/* harmony import */ var _components_address_display__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/address-display */ "./app/components/address-display/index.jsx");
/* harmony import */ var _components_promo_code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/promo-code */ "./app/components/promo-code/index.jsx");


const _excluded = ["removePromoCode"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */













const Payment = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();
  const {
    step,
    setCheckoutStep,
    selectedShippingAddress,
    selectedBillingAddress,
    selectedPayment,
    getPaymentMethods,
    removePayment
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_4__.useCheckout)();
  const {
    paymentMethodForm,
    billingAddressForm,
    billingSameAsShipping,
    setBillingSameAsShipping,
    reviewOrder
  } = (0,_util_usePaymentForms__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const _usePromoCode = (0,_components_promo_code__WEBPACK_IMPORTED_MODULE_11__.usePromoCode)(),
        {
    removePromoCode
  } = _usePromoCode,
        promoCodeProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_usePromoCode, _excluded);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getPaymentMethods();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCard, {
    id: "step-3",
    title: formatMessage({
      id: "NmK6zy",
      defaultMessage: [{
        "type": 0,
        "value": "Payment"
      }]
    }),
    editing: step === 3,
    isLoading: paymentMethodForm.formState.isSubmitting || billingAddressForm.formState.isSubmitting,
    disabled: selectedPayment == null,
    onEdit: () => setCheckoutStep(3)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCardEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    mt: -2,
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_promo_code__WEBPACK_IMPORTED_MODULE_11__.PromoCode, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, promoCodeProps, {
    itemProps: {
      border: 'none'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 6
  }, !(selectedPayment !== null && selectedPayment !== void 0 && selectedPayment.paymentCard) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_payment_selection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: paymentMethodForm,
    hideSubmitButton: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Heading, {
    as: "h3",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "A8Tnga",
    defaultMessage: [{
      "type": 0,
      "value": "Credit Card"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    direction: "row",
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PaymentCardSummary, {
    payment: selectedPayment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    variant: "link",
    size: "sm",
    colorScheme: "red",
    onClick: removePayment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "G/yZLu",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Divider, {
    borderColor: "gray.100"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Heading, {
    as: "h3",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "c7/79+",
    defaultMessage: [{
      "type": 0,
      "value": "Billing Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Checkbox, {
    name: "billingSameAsShipping",
    isChecked: billingSameAsShipping,
    onChange: e => setBillingSameAsShipping(e.target.checked)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontSize: "sm",
    color: "gray.700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "ipwTkh",
    defaultMessage: [{
      "type": 0,
      "value": "Same as shipping address"
    }]
  }))), billingSameAsShipping && selectedShippingAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    pl: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_10__["default"], {
    address: selectedShippingAddress
  }))), !billingSameAsShipping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_shipping_address_selection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: billingAddressForm,
    selectedAddress: selectedBillingAddress,
    hideSubmitButton: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    pt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    w: "full",
    onClick: reviewOrder
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "PNj3WE",
    defaultMessage: [{
      "type": 0,
      "value": "Review Order"
    }]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_7__.ToggleCardSummary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 6
  }, selectedPayment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Heading, {
    as: "h3",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "A8Tnga",
    defaultMessage: [{
      "type": 0,
      "value": "Credit Card"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PaymentCardSummary, {
    payment: selectedPayment
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Divider, {
    borderColor: "gray.100"
  }), selectedBillingAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Heading, {
    as: "h3",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "c7/79+",
    defaultMessage: [{
      "type": 0,
      "value": "Billing Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_10__["default"], {
    address: selectedBillingAddress
  })))));
};

const PaymentCardSummary = ({
  payment
}) => {
  var _payment$paymentCard;

  const CardIcon = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_6__.getCreditCardIcon)(payment === null || payment === void 0 ? void 0 : (_payment$paymentCard = payment.paymentCard) === null || _payment$paymentCard === void 0 ? void 0 : _payment$paymentCard.cardType);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 3
  }, CardIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CardIcon, {
    layerStyle: "ccIcon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, payment.paymentCard.cardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, "\u2022\u2022\u2022\u2022 ", payment.paymentCard.numberLastDigits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, payment.paymentCard.expirationMonth, "/", payment.paymentCard.expirationYear)));
};

PaymentCardSummary.propTypes = {
  payment: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (Payment);

/***/ }),

/***/ "./app/pages/checkout/partials/shipping-address-selection.jsx":
/*!********************************************************************!*\
  !*** ./app/pages/checkout/partials/shipping-address-selection.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _components_radio_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/radio-card */ "./app/components/radio-card/index.jsx");
/* harmony import */ var _components_action_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/action-card */ "./app/components/action-card/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_address_display__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/address-display */ "./app/components/address-display/index.jsx");
/* harmony import */ var _components_forms_address_fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/forms/address-fields */ "./app/components/forms/address-fields.jsx");
/* harmony import */ var _components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/forms/form-action-buttons */ "./app/components/forms/form-action-buttons.jsx");




const _excluded = ["addressId", "creationDate", "lastModified", "preferred"],
      _excluded2 = ["id", "_type"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */














const ShippingAddressEditForm = ({
  title,
  hasSavedAddresses,
  toggleAddressEdit,
  hideSubmitButton,
  form,
  submitButtonLabel
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, hasSavedAddresses && {
    gridColumn: [1, 1, 'span 2'],
    paddingX: [4, 4, 6],
    paddingY: 6,
    rounded: 'base',
    border: '1px solid',
    borderColor: 'blue.600'
  }, {
    "data-testid": "sf-shipping-address-edit-form"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Stack, {
    spacing: 6
  }, hasSavedAddresses && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Heading, {
    as: "h3",
    size: "sm"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_forms_address_fields__WEBPACK_IMPORTED_MODULE_13__["default"], {
    form: form
  }), hasSavedAddresses && !hideSubmitButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_forms_form_action_buttons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    saveButtonLabel: formatMessage({
      id: "bhUBy4",
      defaultMessage: [{
        "type": 0,
        "value": "Save & Continue to Shipping Method"
      }]
    }),
    onCancel: toggleAddressEdit
  }) : !hideSubmitButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Button, {
    type: "submit",
    width: "full",
    disabled: form.formState.isSubmitting
  }, formatMessage({
    id: "O3zHDW",
    defaultMessage: [{
      "type": 1,
      "value": "submitButtonLabel"
    }]
  }, {
    submitButtonLabel
  })))))));
};

ShippingAddressEditForm.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  hasSavedAddresses: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  toggleAddressEdit: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  hideSubmitButton: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  submitButtonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};

const ShippingAddressSelection = ({
  form,
  selectedAddress,
  submitButtonLabel = 'Submit',
  hideSubmitButton = false,
  onSubmit = /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
    return null;
  })
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const {
    customer
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_8__.useCheckout)();
  const hasSavedAddresses = customer.addresses && customer.addresses.length > 0;
  const [isEditingAddress, setIsEditingAddress] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!hasSavedAddresses);
  const [selectedAddressId, setSelectedAddressId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  form = form || (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: _objectSpread({}, selectedAddress)
  });
  const matchedAddress = hasSavedAddresses && selectedAddress && customer.addresses.find(savedAddress => {
    const {
      addressId,
      creationDate,
      lastModified,
      preferred
    } = savedAddress,
          address = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(savedAddress, _excluded);

    const {
      id,
      _type
    } = selectedAddress,
          selectedAddr = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedAddress, _excluded2);

    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.shallowEquals)(address, selectedAddr);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // Automatically select the customer's default/preferred shipping address
    if (customer.addresses) {
      const address = customer.addresses.find(addr => addr.preferred === true);

      if (address) {
        form.reset(_objectSpread({}, address));
      }
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // If the customer deletes all their saved addresses during checkout,
    // we need to make sure to display the address form.
    if (!(customer !== null && customer !== void 0 && customer.addresses) && !isEditingAddress) {
      setIsEditingAddress(true);
    }
  }, [customer]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (matchedAddress) {
      form.reset(_objectSpread({
        addressId: matchedAddress.addressId
      }, matchedAddress));
    }

    if (!matchedAddress && selectedAddressId) {
      setIsEditingAddress(true);
    }
  }, [matchedAddress]); // Updates the selected customer address if we've an address selected
  // else saves a new customer address

  const submitForm = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (address) {
      if (selectedAddressId) {
        address = _objectSpread(_objectSpread({}, address), {}, {
          addressId: selectedAddressId
        });
      }

      setIsEditingAddress(false);
      form.reset({
        addressId: ''
      });
      yield onSubmit(address);
    });

    return function submitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // Acts as our `onChange` handler for addressId radio group. We do this
  // manually here so we can toggle off the 'add address' form as needed.


  const handleAddressIdSelection = addressId => {
    if (addressId && isEditingAddress) {
      setIsEditingAddress(false);
    }

    const address = customer.addresses.find(addr => addr.addressId === addressId);
    form.reset(_objectSpread({}, address));
  };

  const removeSavedAddress = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (addressId) {
      if (addressId === selectedAddressId) {
        setSelectedAddressId(undefined);
        setIsEditingAddress(false);
        form.reset({
          addressId: ''
        });
      }

      yield customer.removeSavedAddress(addressId);
    });

    return function removeSavedAddress(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // Opens/closes the 'add address' form. Notice that when toggling either state,
  // we reset the form so as to remove any address selection.


  const toggleAddressEdit = (address = undefined) => {
    if (address !== null && address !== void 0 && address.addressId) {
      setSelectedAddressId(address.addressId);
      form.reset(_objectSpread({}, address));
      setIsEditingAddress(true);
    } else {
      setSelectedAddressId(undefined);
      form.reset({
        addressId: ''
      });
      setIsEditingAddress(!isEditingAddress);
    }

    form.trigger();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Stack, {
    spacing: 4
  }, hasSavedAddresses && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
    name: "addressId",
    defaultValue: "",
    control: form.control,
    rules: {
      required: !isEditingAddress
    },
    render: ({
      value
    }) => {
      var _customer$addresses;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_radio_card__WEBPACK_IMPORTED_MODULE_9__.RadioCardGroup, {
        value: value,
        onChange: handleAddressIdSelection
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.SimpleGrid, {
        columns: [1, 1, 2],
        spacing: 4,
        gridAutoFlow: "row dense"
      }, (_customer$addresses = customer.addresses) === null || _customer$addresses === void 0 ? void 0 : _customer$addresses.map((address, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        key: address.addressId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_radio_card__WEBPACK_IMPORTED_MODULE_9__.RadioCard, {
        value: address.addressId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_action_card__WEBPACK_IMPORTED_MODULE_10__["default"], {
        padding: 0,
        border: "none",
        onRemove: () => removeSavedAddress(address.addressId),
        onEdit: () => toggleAddressEdit(address),
        "data-testid": `sf-checkout-shipping-address-${index}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_12__["default"], {
        address: address
      })), isEditingAddress && address.addressId === selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Box, {
        width: 3,
        height: 3,
        borderLeft: "1px solid",
        borderTop: "1px solid",
        borderColor: "blue.600",
        position: "absolute",
        left: "50%",
        bottom: "-23px",
        background: "white",
        transform: "rotate(45deg)"
      })), isEditingAddress && address.addressId === selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ShippingAddressEditForm, {
        title: formatMessage({
          id: "pQ2F3h",
          defaultMessage: [{
            "type": 0,
            "value": "Edit Shipping Address"
          }]
        }),
        hasSavedAddresses: hasSavedAddresses,
        toggleAddressEdit: toggleAddressEdit,
        hideSubmitButton: hideSubmitButton,
        form: form,
        submitButtonLabel: submitButtonLabel
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Button, {
        variant: "outline",
        border: "1px dashed",
        borderColor: "gray.200",
        color: "blue.600",
        height: ['44px', '44px', '167px'],
        rounded: "base",
        fontWeight: "medium",
        leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_11__.PlusIcon, {
          boxSize: '15px'
        }),
        onClick: toggleAddressEdit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "fIHFDI",
        defaultMessage: [{
          "type": 0,
          "value": "Add New Address"
        }]
      }), isEditingAddress && !selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Box, {
        width: 3,
        height: 3,
        borderLeft: "1px solid",
        borderTop: "1px solid",
        borderColor: "blue.600",
        position: "absolute",
        left: "50%",
        bottom: "-23px",
        background: "white",
        transform: "rotate(45deg)"
      }))));
    }
  }), isEditingAddress && !selectedAddressId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ShippingAddressEditForm, {
    title: formatMessage({
      id: "fIHFDI",
      defaultMessage: [{
        "type": 0,
        "value": "Add New Address"
      }]
    }),
    hasSavedAddresses: hasSavedAddresses,
    toggleAddressEdit: toggleAddressEdit,
    hideSubmitButton: hideSubmitButton,
    form: form,
    submitButtonLabel: submitButtonLabel
  }), !isEditingAddress && !hideSubmitButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Box, {
    pt: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Button, {
    type: "submit",
    width: "full",
    disabled: !form.formState.isValid || form.formState.isSubmitting
  }, formatMessage({
    id: "O3zHDW",
    defaultMessage: [{
      "type": 1,
      "value": "submitButtonLabel"
    }]
  }, {
    submitButtonLabel
  }))))));
};

ShippingAddressSelection.propTypes = {
  /** The form object returnd from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),

  /** Optional address to use as default selection */
  selectedAddress: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),

  /** Override the submit button label */
  submitButtonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /** Show or hide the submit button (for controlling the form from outside component) */
  hideSubmitButton: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /** Callback for form submit */
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (ShippingAddressSelection);

/***/ }),

/***/ "./app/pages/checkout/partials/shipping-address.jsx":
/*!**********************************************************!*\
  !*** ./app/pages/checkout/partials/shipping-address.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShippingAddress; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _components_toggle_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/toggle-card */ "./app/components/toggle-card/index.jsx");
/* harmony import */ var _shipping_address_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shipping-address-selection */ "./app/pages/checkout/partials/shipping-address-selection.jsx");
/* harmony import */ var _components_address_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/address-display */ "./app/components/address-display/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






function ShippingAddress() {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    step,
    selectedShippingAddress,
    setShippingAddress,
    setCheckoutStep,
    goToNextStep
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_2__.useCheckout)();
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const submitAndContinue = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (address) {
      setIsLoading(true);
      yield setShippingAddress(address);
      goToNextStep();
      setIsLoading(false);
    });

    return function submitAndContinue(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_3__.ToggleCard, {
    id: "step-1",
    title: formatMessage({
      id: "DP5VOH",
      defaultMessage: [{
        "type": 0,
        "value": "Shipping Address"
      }]
    }),
    editing: step === 1,
    isLoading: isLoading,
    disabled: selectedShippingAddress == null,
    onEdit: () => setCheckoutStep(1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_3__.ToggleCardEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_shipping_address_selection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedAddress: selectedShippingAddress,
    submitButtonLabel: formatMessage({
      id: "Fmc5ut",
      defaultMessage: [{
        "type": 0,
        "value": "Continue to Shipping Method"
      }]
    }),
    onSubmit: submitAndContinue
  })), selectedShippingAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_3__.ToggleCardSummary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_5__["default"], {
    address: selectedShippingAddress
  })));
}

/***/ }),

/***/ "./app/pages/checkout/partials/shipping-options.jsx":
/*!**********************************************************!*\
  !*** ./app/pages/checkout/partials/shipping-options.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShippingOptions; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_toggle_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/toggle-card */ "./app/components/toggle-card/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







function ShippingOptions() {
  var _basket$shippingItems, _shippingItem$priceAd;

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    basket,
    step,
    shippingMethods,
    getShippingMethods,
    setCheckoutStep,
    selectedShippingMethod,
    selectedShippingAddress,
    setShippingMethod,
    goToNextStep
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_3__.useCheckout)();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    shouldUnregister: false,
    defaultValues: {
      shippingMethodId: (selectedShippingMethod === null || selectedShippingMethod === void 0 ? void 0 : selectedShippingMethod.id) || (shippingMethods === null || shippingMethods === void 0 ? void 0 : shippingMethods.defaultShippingMethodId)
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (step === 2) {
      getShippingMethods();
    }
  }, [step]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const defaultMethodId = shippingMethods === null || shippingMethods === void 0 ? void 0 : shippingMethods.defaultShippingMethodId;
    const methodId = form.getValues().shippingMethodId;

    if (!selectedShippingMethod && !methodId && defaultMethodId) {
      form.reset({
        shippingMethodId: defaultMethodId
      });
    }

    if (selectedShippingMethod && methodId !== selectedShippingMethod.id) {
      form.reset({
        shippingMethodId: selectedShippingMethod.id
      });
    }
  }, [selectedShippingMethod, shippingMethods]);

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      shippingMethodId
    }) {
      yield setShippingMethod(shippingMethodId);
      goToNextStep();
    });

    return function submitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const shippingItem = basket === null || basket === void 0 ? void 0 : (_basket$shippingItems = basket.shippingItems) === null || _basket$shippingItems === void 0 ? void 0 : _basket$shippingItems[0];
  const selectedMethodDisplayPrice = Math.min(shippingItem.price || 0, shippingItem.priceAfterItemDiscount || 0); // Note that this card is disabled when there is no shipping address as well as no shipping method.
  // We do this because we apply the default shipping method to the basket before checkout - so when
  // landing on checkout the first time will put you at the first step (contact info), but the shipping
  // method step would appear filled out already. This fix attempts to avoid any confusion in the UI.

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_5__.ToggleCard, {
    id: "step-2",
    title: formatMessage({
      id: "XU21FV",
      defaultMessage: [{
        "type": 0,
        "value": "Shipping & Gift Options"
      }]
    }),
    editing: step === 2,
    isLoading: form.formState.isSubmitting,
    disabled: selectedShippingMethod == null || !selectedShippingAddress,
    onEdit: () => setCheckoutStep(2)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_5__.ToggleCardEdit, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm),
    "data-testid": "sf-checkout-shipping-options-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
    spacing: 6
  }, (shippingMethods === null || shippingMethods === void 0 ? void 0 : shippingMethods.applicableShippingMethods) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
    name: "shippingMethodId",
    control: form.control,
    defaultValue: "",
    render: ({
      value,
      onChange
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.RadioGroup, {
      name: "shipping-options-radiogroup",
      value: value,
      onChange: onChange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      spacing: 5
    }, shippingMethods.applicableShippingMethods.map(opt => {
      var _opt$shippingPromotio;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Radio, {
        value: opt.id,
        key: opt.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
        justify: "space-between",
        w: "full"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, null, opt.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
        fontWeight: "bold"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedNumber, {
        value: opt.price,
        style: "currency",
        currency: basket.currency
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
        fontSize: "sm",
        color: "gray.600"
      }, opt.description), (_opt$shippingPromotio = opt.shippingPromotions) === null || _opt$shippingPromotio === void 0 ? void 0 : _opt$shippingPromotio.map(promo => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
          key: promo.promotionId,
          fontSize: "sm",
          color: "green.500"
        }, promo.calloutMsg);
      }));
    })))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    variant: "link",
    size: "sm",
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "vrBTnC",
    defaultMessage: [{
      "type": 0,
      "value": "Do you want to send this as a gift?"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    w: "full",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "0g/1TG",
    defaultMessage: [{
      "type": 0,
      "value": "Continue to Payment"
    }]
  }))))))), selectedShippingMethod && selectedShippingAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_toggle_card__WEBPACK_IMPORTED_MODULE_5__.ToggleCardSummary, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    justify: "space-between",
    w: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, null, selectedShippingMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
    fontWeight: "bold"
  }, selectedMethodDisplayPrice === 0 ? 'Free' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedNumber, {
    value: selectedMethodDisplayPrice,
    style: "currency",
    currency: basket.currency
  })), selectedMethodDisplayPrice !== shippingItem.price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
    fontWeight: "normal",
    textDecoration: "line-through",
    color: "gray.500",
    marginLeft: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedNumber, {
    style: "currency",
    currency: basket.currency,
    value: shippingItem.price
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
    fontSize: "sm",
    color: "gray.700"
  }, selectedShippingMethod.description), shippingItem === null || shippingItem === void 0 ? void 0 : (_shippingItem$priceAd = shippingItem.priceAdjustments) === null || _shippingItem$priceAd === void 0 ? void 0 : _shippingItem$priceAd.map(adjustment => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
      key: adjustment.priceAdjustmentId,
      fontSize: "sm",
      color: "green.500"
    }, adjustment.itemText);
  })));
}

/***/ }),

/***/ "./app/pages/checkout/util/checkout-context.js":
/*!*****************************************************!*\
  !*** ./app/pages/checkout/util/checkout-context.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutProvider": function() { return /* binding */ CheckoutProvider; },
/* harmony export */   "useCheckout": function() { return /* binding */ useCheckout; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _commerce_api_contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../commerce-api/contexts */ "./app/commerce-api/contexts.js");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/cc-utils */ "./app/utils/cc-utils.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/utils */ "./app/utils/utils.js");



const _excluded = ["id", "preferred", "creationDate", "lastModified", "addressId", "addressName"],
      _excluded2 = ["expiry", "paymentInstrumentId"],
      _excluded3 = ["id", "preferred", "creationDate", "lastModified", "addressId", "addressName"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const CheckoutContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createContext();
const CheckoutProvider = ({
  children
}) => {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const api = (0,_commerce_api_contexts__WEBPACK_IMPORTED_MODULE_7__.useCommerceAPI)();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    // @TODO: use contants to represent checkout steps like const CHECKOUT_STEP_2_SHIPPING = 2
    step: undefined,
    isGuestCheckout: false,
    shippingMethods: undefined,
    paymentMethods: undefined,
    globalError: undefined,
    sectionError: undefined
  });
  const mergeState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(data => {
    // If we become unmounted during an async call that results in updating state, we
    // skip the update to avoid React errors about setting state in unmounted components.
    if (!mounted.current) {
      return;
    }

    setState(_state => _objectSpread(_objectSpread({}, _state), data));
  }); // We use this to track mounted state.

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var _basket$customerInfo;

    if (customer.isRegistered && state.isGuestCheckout) {
      mergeState({
        isGuestCheckout: false
      });
    }

    if (customer.isGuest && (_basket$customerInfo = basket.customerInfo) !== null && _basket$customerInfo !== void 0 && _basket$customerInfo.email && !state.isGuestCheckout) {
      mergeState({
        isGuestCheckout: true
      });
    } // Derive the starting step for checkout based on current state of basket.
    // A failed condition sets the current step and returns early (order matters).


    if (customer.customerId && basket.basketId && state.step == undefined) {
      var _basket$customerInfo2, _basket$shipments$, _basket$shipments$2;

      if (!((_basket$customerInfo2 = basket.customerInfo) !== null && _basket$customerInfo2 !== void 0 && _basket$customerInfo2.email)) {
        mergeState({
          step: 0
        });
        return;
      }

      if (basket.shipments && !((_basket$shipments$ = basket.shipments[0]) !== null && _basket$shipments$ !== void 0 && _basket$shipments$.shippingAddress)) {
        mergeState({
          step: 1
        });
        return;
      }

      if (basket.shipments && !((_basket$shipments$2 = basket.shipments[0]) !== null && _basket$shipments$2 !== void 0 && _basket$shipments$2.shippingMethod)) {
        mergeState({
          step: 2
        });
        return;
      }

      if (!basket.paymentInstruments || !basket.billingAddress) {
        mergeState({
          step: 3
        });
        return;
      }

      mergeState({
        step: 4
      });
    }
  }, [customer, basket]); // We combine our state and actions into a single context object. This is much more
  // convenient than having to import and bind actions seprately. State updates will
  // cause this object to be reinitialized, which may lead to unecesary rerenders,
  // however, the performance impact is negligible/non-existent. If performance
  // becomes an issue later on, further steps may be taken to optimize it.

  const ctx = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => {
    return _objectSpread(_objectSpread({}, state), {}, {
      // Getter functions
      // Provides convenient access to various data points and derivations.
      // ----------------
      get customer() {
        return customer;
      },

      get basket() {
        return basket;
      },

      get selectedShippingAddress() {
        return basket.shipments && basket.shipments[0].shippingAddress;
      },

      get selectedShippingMethod() {
        return basket.shipments && basket.shipments[0].shippingMethod;
      },

      get selectedPayment() {
        return basket.paymentInstruments && basket.paymentInstruments[0];
      },

      get selectedBillingAddress() {
        return basket.billingAddress;
      },

      get isBillingSameAsShipping() {
        if (!ctx.selectedShippingAddress) {
          return false;
        }

        if (!ctx.selectedBillingAddress && ctx.selectedShippingAddress) {
          return true;
        }

        const result = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__.isMatchingAddress)(ctx.selectedBillingAddress, ctx.selectedShippingAddress);
        return result;
      },

      // Local state setters
      // Callbacks/functions for setting local state data
      // ----------------
      goToNextStep() {
        mergeState({
          step: state.step + 1
        });
      },

      setCheckoutStep(step) {
        mergeState({
          step
        });
      },

      setIsGuestCheckout(isGuestCheckout) {
        mergeState({
          isGuestCheckout
        });
      },

      // Async functions
      // Convenience methods for interacting with remote customer and basket data.
      // ----------------

      /**
       * Logs in a registered customer or applies a guest email to basket.
       * @param {Object} credentials
       */
      login({
        email,
        password
      }) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          if (!password) {
            yield basket.updateCustomerInfo({
              email
            });
          } else {
            yield customer.login({
              email,
              password
            });
          }
        })();
      },

      /**
       * Applies the given address to the basket's shipment. Accepts CustomerAddress and OrderAddress.
       * @see {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customeraddress}
       * @see {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#orderaddress}
       * @param {Object} addressData
       */
      setShippingAddress(addressData) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          const {
            id,
            preferred,
            creationDate,
            lastModified,
            addressId,
            addressName
          } = addressData,
                address = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(addressData, _excluded);

          yield basket.setShippingAddress(address); // Add/Update the address to the customer's account if they are registered.

          if (!state.isGuestCheckout) {
            !addressId ? customer.addSavedAddress(address) : customer.updateSavedAddress(_objectSpread(_objectSpread({}, address), {}, {
              addressId: addressId
            }));
          }
        })();
      },

      /**
       * Removes a customer's saved address from their account.
       * @param {string} addressId - The name/identifier of the address to be removed
       */
      removeSavedAddress(addressId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          yield customer.removeSavedAddress(addressId);
        })();
      },

      /**
       * Gets the applicable shipping methods for the basket's items and stores it in local state.
       */
      getShippingMethods() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          const shippingMethods = yield basket.getShippingMethods();
          mergeState({
            shippingMethods
          });
        })();
      },

      /**
       * Sets the shipment's shipping method on the basket.
       * @param {string} id - The shipping method id from applicable shipping methods
       */
      setShippingMethod(id) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          yield basket.setShippingMethod(id);
        })();
      },

      /**
       * Gets the applicable payment methods for the order.
       */
      getPaymentMethods() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          const paymentMethods = yield api.shopperBaskets.getPaymentMethodsForBasket({
            parameters: {
              basketId: basket.basketId
            }
          });
          mergeState({
            paymentMethods
          });
        })();
      },

      /**
       * Applies the given payment instrument to the basket.
       * @see {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#orderpaymentinstrument}
       * @param {Object} payment
       */
      setPayment(payment) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          const {
            expiry,
            paymentInstrumentId
          } = payment,
                selectedPayment = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(payment, _excluded2);

          if (paymentInstrumentId) {
            // Customer selected a saved card
            yield basket.setPaymentInstrument({
              customerPaymentInstrumentId: paymentInstrumentId
            });
            return;
          } // The form gives us the expiration date as `MM/YY` - so we need to split it into
          // month and year to submit them as individual fields.


          const [expirationMonth, expirationYear] = expiry.split('/');
          const paymentInstrument = {
            paymentMethodId: 'CREDIT_CARD',
            paymentCard: _objectSpread(_objectSpread({}, selectedPayment), {}, {
              number: selectedPayment.number.replace(/ /g, ''),
              cardType: (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_8__.getPaymentInstrumentCardType)(selectedPayment.cardType),
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
          yield basket.setPaymentInstrument(paymentInstrument); // Save the payment instrument to the customer's account if they are registered

          if (!state.isGuestCheckout && !selectedPayment.id) {
            customer.addSavedPaymentInstrument(paymentInstrument);
          }
        })();
      },

      /**
       * Removes the currently applied payment instrument from the basket. Multiple payment
       * instruments can be applied to the basket, however we are only dealing with one.
       */
      removePayment() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          yield basket.removePaymentInstrument();
        })();
      },

      /**
       * Applies the given address to the basket's billing address. Accepts CustomerAddress and OrderAddress.
       * @see {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customeraddress}
       * @see {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#orderaddress}
       * @param {Object} addressData
       */
      setBillingAddress(addressData) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          const {
            id,
            preferred,
            creationDate,
            lastModified,
            addressId,
            addressName
          } = addressData,
                address = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(addressData, _excluded3);

          yield basket.setBillingAddress(address); // Save the address to the customer's account if they are registered and its a new address

          if (!state.isGuestCheckout && !id && !addressId) {
            customer.addSavedAddress(address);
          }
        })();
      },

      placeOrder() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          mergeState({
            globalError: undefined
          });

          try {
            yield basket.createOrder();
          } catch (error) {
            mergeState({
              globalError: error.message
            });
            throw error;
          }
        })();
      }

    });
  }, [state, customer, basket, mergeState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(CheckoutContext.Provider, {
    value: ctx
  }, children);
};
CheckoutProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
};
/**
 * A hook for managing checkout state and actions
 * @returns {Object} Checkout data and actions
 */

const useCheckout = () => {
  return react__WEBPACK_IMPORTED_MODULE_3__.useContext(CheckoutContext);
};

/***/ }),

/***/ "./app/pages/checkout/util/usePaymentForms.js":
/*!****************************************************!*\
  !*** ./app/pages/checkout/util/usePaymentForms.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _util_checkout_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/checkout-context */ "./app/pages/checkout/util/checkout-context.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



/**
 * A hook for managing and coordinating the billing address and payment method forms.
 * @returns {Object}
 */

const usePaymentForms = () => {
  const {
    selectedPayment,
    selectedBillingAddress,
    selectedShippingAddress,
    setPayment,
    setBillingAddress,
    isBillingSameAsShipping,
    goToNextStep
  } = (0,_util_checkout_context__WEBPACK_IMPORTED_MODULE_4__.useCheckout)(); // This local state value manages the 'checked' state of the billing address form's
  // checkbox for `Same as shipping address`. We initialize its value by checking if the
  // currently applied billing address matches the currently applied shipping address.

  const [billingSameAsShipping, setBillingSameAsShipping] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isBillingSameAsShipping);
  const paymentMethodForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
  const billingAddressForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: _objectSpread({}, selectedBillingAddress)
  }); // This effect watches for changes to our basket's shipping/billing address. If they
  // are applied to the basket and they match, we update our local state value for the
  // `Same as shipping address` checkbox. This is necessary because when we initialized
  // `billingSameAsShipping` in `useState`, we may not have had the basket data yet, so
  // this ensures its properly set and in sync with our basket's state.

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!billingSameAsShipping && isBillingSameAsShipping) {
      setBillingSameAsShipping(true);
    }
  }, [isBillingSameAsShipping]);

  const submitPaymentMethodForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (payment) {
      // Make sure we only apply the payment if there isnt already one applied.
      // This works because a payment cannot be edited, only removed. In the UI,
      // we ensure that the any applied payment is removed before showing the
      // the payment form.
      if (!selectedPayment) {
        yield setPayment(payment);
      } // Once the payment is applied to the basket, we submit the billing address.


      return billingAddressForm.handleSubmit(submitBillingAddressForm)();
    });

    return function submitPaymentMethodForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const submitBillingAddressForm = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (address) {
      if (!billingSameAsShipping) {
        yield setBillingAddress(address);
      } else {
        yield setBillingAddress(selectedShippingAddress);
      } // Once the billing address is applied to the basket, we can move to the final
      // step in the process, which lets the customer review all checkout info.


      goToNextStep();
    });

    return function submitBillingAddressForm(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // We need to submit the payment form and billing address form one at a time,
  // but from a single control/button. So we kick off the payment submit first
  // and let that function take over the next step.
  // ------
  // TODO: Figure out how to run the form validations simultaneuously before
  // submitting the forms, so one doesn't need to wait on the other to check for
  // client-side validation errors.


  const reviewOrder = () => {
    return paymentMethodForm.handleSubmit(submitPaymentMethodForm)();
  };

  return {
    paymentMethodForm,
    billingAddressForm,
    billingSameAsShipping,
    setBillingSameAsShipping,
    reviewOrder
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePaymentForms);

/***/ })

}]);
//# sourceMappingURL=pages-checkout.js.map