"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-checkout-confirmation"],{

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

/***/ "./app/components/forms/post-checkout-registration-fields.jsx":
/*!********************************************************************!*\
  !*** ./app/components/forms/post-checkout-registration-fields.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _useRegistrationFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useRegistrationFields */ "./app/components/forms/useRegistrationFields.jsx");
/* harmony import */ var _password_requirements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-requirements */ "./app/components/forms/password-requirements.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const PostCheckoutRegistrationFields = ({
  form,
  prefix = ''
}) => {
  const fields = (0,_useRegistrationFields__WEBPACK_IMPORTED_MODULE_3__["default"])({
    form,
    prefix
  });
  const password = form.watch(`${prefix}password`);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_5__["default"], fields.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 3,
    paddingBottom: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_5__["default"], fields.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_password_requirements__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: password
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields.firstName, {
    type: "hidden"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields.lastName, {
    type: "hidden"
  })));
};

PostCheckoutRegistrationFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (PostCheckoutRegistrationFields);

/***/ }),

/***/ "./app/pages/checkout/confirmation.jsx":
/*!*********************************************!*\
  !*** ./app/pages/checkout/confirmation.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _utils_cc_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cc-utils */ "./app/utils/cc-utils.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _components_address_display__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/address-display */ "./app/components/address-display/index.jsx");
/* harmony import */ var _components_forms_post_checkout_registration_fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/forms/post-checkout-registration-fields */ "./app/components/forms/post-checkout-registration-fields.jsx");
/* harmony import */ var _components_promo_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/promo-popover */ "./app/components/promo-popover/index.jsx");
/* harmony import */ var _components_item_variant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _components_item_variant_item_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/item-variant/item-image */ "./app/components/item-variant/item-image.jsx");
/* harmony import */ var _components_item_variant_item_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/item-variant/item-name */ "./app/components/item-variant/item-name.jsx");
/* harmony import */ var _components_item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/item-variant/item-attributes */ "./app/components/item-variant/item-attributes.jsx");
/* harmony import */ var _components_item_variant_item_price__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/item-variant/item-price */ "./app/components/item-variant/item-price.jsx");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


















const CheckoutConfirmation = () => {
  var _order$customerInfo, _order$billingAddress, _order$billingAddress2, _order$paymentInstrum, _form$errors, _order$productItems, _order$orderPriceAdju, _order$shippingItems$, _order$shippingItems, _order$shippingItems$2, _order$shippingItems$3, _order$shippingItems$4, _order$shippingItems$5, _order$paymentInstrum2, _order$paymentInstrum3, _order$paymentInstrum4, _order$paymentInstrum5;

  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__["default"])(); // The order data will initially be stored as our basket when first coming to this
  // page. We capture it in local state to use for our UI. A new basket will be automatically
  // created so we should only reference our captured order data here.

  const [order] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(basket);
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: {
      email: (customer === null || customer === void 0 ? void 0 : customer.email) || (order === null || order === void 0 ? void 0 : (_order$customerInfo = order.customerInfo) === null || _order$customerInfo === void 0 ? void 0 : _order$customerInfo.email) || '',
      password: '',
      firstName: customer.firstName || (order === null || order === void 0 ? void 0 : (_order$billingAddress = order.billingAddress) === null || _order$billingAddress === void 0 ? void 0 : _order$billingAddress.firstName),
      lastName: customer.lastName || (order === null || order === void 0 ? void 0 : (_order$billingAddress2 = order.billingAddress) === null || _order$billingAddress2 === void 0 ? void 0 : _order$billingAddress2.lastName)
    }
  }); // If we don't have an order object on first render we need to transition back to a
  // different page. Fow now, we push to the homepage.

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!order || order._type !== 'order') {
      navigate('/');
    }
  }, [order]);

  if (!order || !order.orderNo) {
    return null;
  }

  const CardIcon = (0,_utils_cc_utils__WEBPACK_IMPORTED_MODULE_4__.getCreditCardIcon)((_order$paymentInstrum = order.paymentInstruments[0].paymentCard) === null || _order$paymentInstrum === void 0 ? void 0 : _order$paymentInstrum.cardType);

  const submitForm = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (data) {
      try {
        yield customer.registerCustomer(data);
      } catch (error) {
        const existingAccountMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
          id: "BlJFo9",
          defaultMessage: [{
            "type": 0,
            "value": "This email already has an account."
          }]
        }), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_8__["default"], {
          to: "/login",
          color: "blue.600"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
          id: "2SvpuI",
          defaultMessage: [{
            "type": 0,
            "value": "Log in here"
          }]
        })));
        const message = /the login is already in use/i.test(error.message) ? existingAccountMessage : error.message;
        form.setError('global', {
          type: 'manual',
          message
        });
        return;
      } // Customer is successfully registered with a new account,
      // and the recent order would be associated with this account too.
      // Now redirect to the Account page.


      navigate(`/account`);
    });

    return function submitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    background: "gray.50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Container, {
    maxWidth: "container.md",
    py: {
      base: 7,
      md: 16
    },
    px: {
      base: 0,
      md: 4
    },
    "data-testid": "sf-checkout-confirmation-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    layerStyle: "card",
    rounded: [0, 0, 'base'],
    px: [4, 4, 6],
    py: [6, 6, 8]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    align: "center",
    fontSize: ['2xl']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "kVzyDt",
    defaultMessage: [{
      "type": 0,
      "value": "Thank you for your order!"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "JAcwxt",
    defaultMessage: [{
      "type": 0,
      "value": "Order Number"
    }]
  }), ":", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    as: "span",
    fontWeight: "bold"
  }, order.orderNo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "fCRlK5",
    defaultMessage: [{
      "type": 0,
      "value": "We will send an email to "
    }, {
      "type": 8,
      "value": "b",
      "children": [{
        "type": 1,
        "value": "email"
      }]
    }, {
      "type": 0,
      "value": " with your confirmation number and receipt shortly."
    }],
    values: {
      // eslint-disable-next-line react/display-name
      b: chunks => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("b", null, chunks),
      email: order.customerInfo.email
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Spacer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_8__["default"],
    href: "/",
    variant: "outline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "IUXVjJ",
    defaultMessage: [{
      "type": 0,
      "value": "Continue Shopping"
    }]
  }))))))), customer.isGuest && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    layerStyle: "card",
    rounded: [0, 0, 'base'],
    px: [4, 4, 6],
    py: [6, 6, 8]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    fontSize: "lg",
    marginBottom: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "Olgsm/",
    defaultMessage: [{
      "type": 0,
      "value": "Create an account for faster checkout"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 4
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.AlertIcon, null), form.errors.global.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_forms_post_checkout_registration_fields__WEBPACK_IMPORTED_MODULE_10__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Button, {
    type: "submit",
    width: "full",
    onClick: () => form.clearErrors('global'),
    isLoading: form.formState.isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "5JcXdV",
    defaultMessage: [{
      "type": 0,
      "value": "Create Account"
    }]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    layerStyle: "card",
    rounded: [0, 0, 'base'],
    px: [4, 4, 6],
    py: [6, 6, 8]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    fontSize: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "7xscgD",
    defaultMessage: [{
      "type": 0,
      "value": "Delivery Details"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.SimpleGrid, {
    columns: [1, 1, 2],
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    as: "h3",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "DP5VOH",
    defaultMessage: [{
      "type": 0,
      "value": "Shipping Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_9__["default"], {
    address: order.shipments[0].shippingAddress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    as: "h3",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "D+bY29",
    defaultMessage: [{
      "type": 0,
      "value": "Shipping Method"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, order.shipments[0].shippingMethod.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, order.shipments[0].shippingMethod.description))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    layerStyle: "card",
    rounded: [0, 0, 'base'],
    px: [4, 4, 6],
    py: [6, 6, 8]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    fontSize: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "ivNR8s",
    defaultMessage: [{
      "type": 0,
      "value": "Order Summary"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "au3Vns",
    defaultMessage: [{
      "type": 6,
      "value": "itemCount",
      "options": {
        "=0": {
          "value": [{
            "type": 0,
            "value": "0 items"
          }]
        },
        "one": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " item"
          }]
        },
        "other": {
          "value": [{
            "type": 7
          }, {
            "type": 0,
            "value": " items"
          }]
        }
      },
      "offset": 0,
      "pluralType": "cardinal"
    }],
    values: {
      itemCount: order.productItems.reduce((a, b) => a + b.quantity, 0)
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 5,
    align: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 5,
    align: "flex-start",
    width: "full",
    divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Divider, null)
  }, (_order$productItems = order.productItems) === null || _order$productItems === void 0 ? void 0 : _order$productItems.map((product, idx) => {
    const variant = _objectSpread(_objectSpread(_objectSpread({}, product), order._productItemsDetail && order._productItemsDetail[product.productId]), {}, {
      price: product.price
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_item_variant__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: product.productId,
      index: idx,
      variant: variant
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
      width: "full",
      alignItems: "flex-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_item_variant_item_image__WEBPACK_IMPORTED_MODULE_13__["default"], {
      width: "80px",
      mr: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
      spacing: 1,
      marginTop: "-3px",
      flex: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_item_variant_item_name__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
      width: "full",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_15__["default"], {
      includeQuantity: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_item_variant_item_price__WEBPACK_IMPORTED_MODULE_16__["default"], null)))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    w: "full",
    py: 4,
    borderY: "1px",
    borderColor: "gray.200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "L8seEc",
    defaultMessage: [{
      "type": 0,
      "value": "Subtotal"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__.FormattedNumber, {
    style: "currency",
    currency: order === null || order === void 0 ? void 0 : order.currency,
    value: order === null || order === void 0 ? void 0 : order.productSubTotal
  }))), (_order$orderPriceAdju = order.orderPriceAdjustments) === null || _order$orderPriceAdju === void 0 ? void 0 : _order$orderPriceAdju.map(adjustment => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
    justify: "space-between",
    key: adjustment.priceAdjustmentId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, adjustment.itemText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    color: "green.500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__.FormattedNumber, {
    style: "currency",
    currency: order === null || order === void 0 ? void 0 : order.currency,
    value: adjustment.price
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    lineHeight: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "PRlD0A",
    defaultMessage: [{
      "type": 0,
      "value": "Shipping"
    }]
  }), ((_order$shippingItems$ = order.shippingItems[0].priceAdjustments) === null || _order$shippingItems$ === void 0 ? void 0 : _order$shippingItems$.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    as: "span",
    ml: 1
  }, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "T/K9MQ",
    defaultMessage: [{
      "type": 0,
      "value": "promo applied"
    }]
  }), ")")), ((_order$shippingItems = order.shippingItems) === null || _order$shippingItems === void 0 ? void 0 : (_order$shippingItems$2 = _order$shippingItems[0]) === null || _order$shippingItems$2 === void 0 ? void 0 : (_order$shippingItems$3 = _order$shippingItems$2.priceAdjustments) === null || _order$shippingItems$3 === void 0 ? void 0 : _order$shippingItems$3.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_promo_popover__WEBPACK_IMPORTED_MODULE_11__["default"], {
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, null, (_order$shippingItems$4 = order.shippingItems[0].priceAdjustments) === null || _order$shippingItems$4 === void 0 ? void 0 : _order$shippingItems$4.map(adjustment => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    key: adjustment.priceAdjustmentId,
    fontSize: "sm"
  }, adjustment.itemText))))), (_order$shippingItems$5 = order.shippingItems[0].priceAdjustments) !== null && _order$shippingItems$5 !== void 0 && _order$shippingItems$5.some(({
    appliedDiscount
  }) => (appliedDiscount === null || appliedDiscount === void 0 ? void 0 : appliedDiscount.type) === 'free') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    as: "span",
    color: "green.500",
    textTransform: "uppercase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "tf1lIh",
    defaultMessage: [{
      "type": 0,
      "value": "Free"
    }]
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__.FormattedNumber, {
    value: order.shippingTotal,
    style: "currency",
    currency: order.currency
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "AwzkSM",
    defaultMessage: [{
      "type": 0,
      "value": "Tax"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__.FormattedNumber, {
    value: order.taxTotal,
    style: "currency",
    currency: order.currency
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Flex, {
    w: "full",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "7PMLfK",
    defaultMessage: [{
      "type": 0,
      "value": "Order Total"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_21__.FormattedNumber, {
    style: "currency",
    currency: order === null || order === void 0 ? void 0 : order.currency,
    value: order === null || order === void 0 ? void 0 : order.orderTotal
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    layerStyle: "card",
    rounded: [0, 0, 'base'],
    px: [4, 4, 6],
    py: [6, 6, 8]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Container, {
    variant: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    fontSize: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "8pvKg1",
    defaultMessage: [{
      "type": 0,
      "value": "Payment Details"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.SimpleGrid, {
    columns: [1, 1, 2],
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    as: "h3",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "c7/79+",
    defaultMessage: [{
      "type": 0,
      "value": "Billing Address"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_address_display__WEBPACK_IMPORTED_MODULE_9__["default"], {
    address: order.billingAddress
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Heading, {
    as: "h3",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "A8Tnga",
    defaultMessage: [{
      "type": 0,
      "value": "Credit Card"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    direction: "row"
  }, CardIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CardIcon, {
    layerStyle: "ccIcon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, (_order$paymentInstrum2 = order.paymentInstruments[0].paymentCard) === null || _order$paymentInstrum2 === void 0 ? void 0 : _order$paymentInstrum2.cardType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, "\u2022\u2022\u2022\u2022", ' ', (_order$paymentInstrum3 = order.paymentInstruments[0].paymentCard) === null || _order$paymentInstrum3 === void 0 ? void 0 : _order$paymentInstrum3.numberLastDigits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Text, null, (_order$paymentInstrum4 = order.paymentInstruments[0].paymentCard) === null || _order$paymentInstrum4 === void 0 ? void 0 : _order$paymentInstrum4.expirationMonth, "/", (_order$paymentInstrum5 = order.paymentInstruments[0].paymentCard) === null || _order$paymentInstrum5 === void 0 ? void 0 : _order$paymentInstrum5.expirationYear))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutConfirmation);

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

/***/ })

}]);
//# sourceMappingURL=pages-checkout-confirmation.js.map