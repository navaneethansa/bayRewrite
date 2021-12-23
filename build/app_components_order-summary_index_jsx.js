"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["app_components_order-summary_index_jsx"],{

/***/ "./app/components/forms/promo-code-fields.jsx":
/*!****************************************************!*\
  !*** ./app/components/forms/promo-code-fields.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _usePromoCodeFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usePromoCodeFields */ "./app/components/forms/usePromoCodeFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");


const _excluded = ["form", "prefix"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const PromoCodeFields = _ref => {
  let {
    form,
    prefix = ''
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const fields = (0,_usePromoCodeFields__WEBPACK_IMPORTED_MODULE_4__["default"])({
    form,
    prefix
  });
  const code = form.watch('code');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_field__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    inputProps: {
      flex: 1,
      mr: 2
    }
  }, fields.code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    type: "submit",
    fontSize: "sm",
    isLoading: form.formState.isSubmitting,
    disabled: (code === null || code === void 0 ? void 0 : code.length) < 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "EWw/tK",
    defaultMessage: [{
      "type": 0,
      "value": "Apply"
    }]
  }))));
};

PromoCodeFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (PromoCodeFields);

/***/ }),

/***/ "./app/components/forms/usePromoCodeFields.jsx":
/*!*****************************************************!*\
  !*** ./app/components/forms/usePromoCodeFields.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ usePromoCodeFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

function usePromoCodeFields({
  form: {
    control,
    errors
  },
  prefix = ''
}) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const fields = {
    code: {
      name: `${prefix}code`,
      label: formatMessage({
        id: "CyOkb5",
        defaultMessage: [{
          "type": 0,
          "value": "Promo Code"
        }]
      }),
      type: 'text',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "GH9wCg",
          defaultMessage: [{
            "type": 0,
            "value": "Please provide a valid promo code"
          }]
        })
      },
      error: errors[`${prefix}code`],
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/order-summary/index.jsx":
/*!************************************************!*\
  !*** ./app/components/order-summary/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link */ "./app/components/link/index.jsx");
/* harmony import */ var _promo_code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../promo-code */ "./app/components/promo-code/index.jsx");
/* harmony import */ var _item_variant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _item_variant_item_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../item-variant/item-image */ "./app/components/item-variant/item-image.jsx");
/* harmony import */ var _item_variant_item_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../item-variant/item-name */ "./app/components/item-variant/item-name.jsx");
/* harmony import */ var _item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../item-variant/item-attributes */ "./app/components/item-variant/item-attributes.jsx");
/* harmony import */ var _item_variant_item_price__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../item-variant/item-price */ "./app/components/item-variant/item-price.jsx");
/* harmony import */ var _promo_popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../promo-popover */ "./app/components/promo-popover/index.jsx");


const _excluded = ["removePromoCode"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */















const CartItems = ({
  basket
}) => {
  var _basket$productItems;

  basket = basket || (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [cartItemsExpanded, setCartItemsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 5,
    width: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    variant: "link",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.BasketIcon, {
      boxSize: "22px"
    }),
    rightIcon: cartItemsExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, null),
    onClick: () => setCartItemsExpanded(!cartItemsExpanded)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "rkxMdY",
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
    }, {
      "type": 0,
      "value": " in cart"
    }],
    values: {
      itemCount: basket.itemAccumulatedCount
    }
  }))), cartItemsExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 5,
    align: "flex-start",
    divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Divider, null)
  }, (_basket$productItems = basket.productItems) === null || _basket$productItems === void 0 ? void 0 : _basket$productItems.map((product, idx) => {
    const variant = _objectSpread(_objectSpread(_objectSpread({}, product), basket._productItemsDetail && basket._productItemsDetail[product.productId]), {}, {
      price: product.price
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_item_variant__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: product.productId,
      index: idx,
      variant: variant
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
      width: "full",
      alignItems: "flex-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_item_variant_item_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
      width: "80px",
      mr: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
      spacing: 1,
      marginTop: "-3px"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_item_variant_item_name__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_11__["default"], {
      includeQuantity: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_item_variant_item_price__WEBPACK_IMPORTED_MODULE_12__["default"], {
      baseDirection: "row"
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    as: _link__WEBPACK_IMPORTED_MODULE_6__["default"],
    to: "/cart",
    variant: "link",
    width: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "s7dATg",
    defaultMessage: [{
      "type": 0,
      "value": "Edit cart"
    }]
  }))));
};

CartItems.propTypes = {
  basket: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};

const OrderSummary = ({
  basket,
  showPromoCodeForm = false,
  showCartItems = false,
  isEstimate = false,
  fontSize = 'md'
}) => {
  var _basket$shippingItems, _shippingItem$priceAd, _basket, _basket2, _basket$orderPriceAdj, _shippingItem$priceAd2, _shippingItem$priceAd3, _basket4, _basket5, _basket6, _basket$couponItems;

  basket = basket || (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const _usePromoCode = (0,_promo_code__WEBPACK_IMPORTED_MODULE_7__.usePromoCode)(),
        {
    removePromoCode
  } = _usePromoCode,
        promoCodeProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_usePromoCode, _excluded);

  const shippingItem = (_basket$shippingItems = basket.shippingItems) === null || _basket$shippingItems === void 0 ? void 0 : _basket$shippingItems[0];
  const hasShippingPromos = (shippingItem === null || shippingItem === void 0 ? void 0 : (_shippingItem$priceAd = shippingItem.priceAdjustments) === null || _shippingItem$priceAd === void 0 ? void 0 : _shippingItem$priceAd.length) > 0;

  if (!basket.basketId && !basket.orderNo) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    "data-testid": "sf-order-summary",
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    fontSize: fontSize,
    pt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "ivNR8s",
    defaultMessage: [{
      "type": 0,
      "value": "Order Summary"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4,
    align: "flex-start"
  }, showCartItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CartItems, {
    basket: basket
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    w: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "L8seEc",
    defaultMessage: [{
      "type": 0,
      "value": "Subtotal"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__.FormattedNumber, {
    style: "currency",
    currency: (_basket = basket) === null || _basket === void 0 ? void 0 : _basket.currency,
    value: (_basket2 = basket) === null || _basket2 === void 0 ? void 0 : _basket2.productSubTotal
  }))), (_basket$orderPriceAdj = basket.orderPriceAdjustments) === null || _basket$orderPriceAdj === void 0 ? void 0 : _basket$orderPriceAdj.map(adjustment => {
    var _basket3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
      justify: "space-between",
      key: adjustment.priceAdjustmentId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
      fontSize: fontSize
    }, adjustment.itemText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
      color: "green.500",
      fontSize: fontSize
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__.FormattedNumber, {
      style: "currency",
      currency: (_basket3 = basket) === null || _basket3 === void 0 ? void 0 : _basket3.currency,
      value: adjustment.price
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    lineHeight: 1,
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "PRlD0A",
    defaultMessage: [{
      "type": 0,
      "value": "Shipping"
    }]
  }), hasShippingPromos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    as: "span",
    ml: 1
  }, "(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "T/K9MQ",
    defaultMessage: [{
      "type": 0,
      "value": "promo applied"
    }]
  }), ")")), hasShippingPromos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_promo_popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    ml: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, shippingItem === null || shippingItem === void 0 ? void 0 : (_shippingItem$priceAd2 = shippingItem.priceAdjustments) === null || _shippingItem$priceAd2 === void 0 ? void 0 : _shippingItem$priceAd2.map(adjustment => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    key: adjustment.priceAdjustmentId,
    fontSize: "sm"
  }, adjustment.itemText))))), shippingItem !== null && shippingItem !== void 0 && (_shippingItem$priceAd3 = shippingItem.priceAdjustments) !== null && _shippingItem$priceAd3 !== void 0 && _shippingItem$priceAd3.some(({
    appliedDiscount
  }) => (appliedDiscount === null || appliedDiscount === void 0 ? void 0 : appliedDiscount.type) === 'free') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    as: "span",
    color: "green.500",
    textTransform: "uppercase",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "tf1lIh",
    defaultMessage: [{
      "type": 0,
      "value": "Free"
    }]
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__.FormattedNumber, {
    value: basket.shippingTotal,
    style: "currency",
    currency: basket.currency
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "AwzkSM",
    defaultMessage: [{
      "type": 0,
      "value": "Tax"
    }]
  })), basket.taxTotal != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__.FormattedNumber, {
    value: basket.taxTotal,
    style: "currency",
    currency: basket.currency
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: fontSize,
    color: "gray.700"
  }, "TBD"))), showPromoCodeForm ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    w: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_promo_code__WEBPACK_IMPORTED_MODULE_7__.PromoCode, promoCodeProps)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4,
    w: "full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    w: "full",
    justify: "space-between"
  }, isEstimate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "+dLAnb",
    defaultMessage: [{
      "type": 0,
      "value": "Estimated Total"
    }]
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "7PMLfK",
    defaultMessage: [{
      "type": 0,
      "value": "Order Total"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__.FormattedNumber, {
    style: "currency",
    currency: (_basket4 = basket) === null || _basket4 === void 0 ? void 0 : _basket4.currency,
    value: ((_basket5 = basket) === null || _basket5 === void 0 ? void 0 : _basket5.orderTotal) || ((_basket6 = basket) === null || _basket6 === void 0 ? void 0 : _basket6.productTotal)
  }))), ((_basket$couponItems = basket.couponItems) === null || _basket$couponItems === void 0 ? void 0 : _basket$couponItems.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    p: 4,
    border: "1px solid",
    borderColor: "gray.100",
    borderRadius: "base",
    bg: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "medium",
    fontSize: fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "JQ1EGX",
    defaultMessage: [{
      "type": 0,
      "value": "Promotions applied"
    }]
  }), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Stack, null, basket.couponItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    key: item.couponItemId,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    flex: "1",
    fontSize: "sm",
    textTransform: "uppercase",
    color: "gray.800"
  }, item.code), !basket.orderNo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    variant: "link",
    size: "sm",
    colorScheme: "red",
    onClick: () => removePromoCode(item.couponItemId)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "G/yZLu",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  })))))))));
};

OrderSummary.propTypes = {
  basket: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  showPromoCodeForm: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  showCartItems: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  isEstimate: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};
/* harmony default export */ __webpack_exports__["default"] = (OrderSummary);

/***/ }),

/***/ "./app/components/promo-code/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/promo-code/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePromoCode": function() { return /* binding */ usePromoCode; },
/* harmony export */   "PromoCode": function() { return /* binding */ PromoCode; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _components_forms_promo_code_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/forms/promo-code-fields */ "./app/components/forms/promo-code-fields.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









const usePromoCode = () => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useToast)();

  const submitPromoCode = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
      code
    }) {
      try {
        yield basket.applyPromoCode(code);
        form.reset({
          code: ''
        });
        toast({
          title: formatMessage({
            id: "ZMphaV",
            defaultMessage: [{
              "type": 0,
              "value": "Promotion applied"
            }]
          }),
          status: 'success',
          position: 'top-right',
          isClosable: true
        });
      } catch (err) {
        form.setError('code', {
          type: 'manual',
          message: formatMessage({
            id: "O8DHNx",
            defaultMessage: [{
              "type": 0,
              "value": "Check the code and try again, it may already be applied or the promo has expired"
            }]
          })
        });
      }
    });

    return function submitPromoCode(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const removePromoCode = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (couponItemId) {
      try {
        yield basket.removePromoCode(couponItemId);
        toast({
          title: formatMessage({
            id: "p2EAP0",
            defaultMessage: [{
              "type": 0,
              "value": "Promotion removed"
            }]
          }),
          status: 'success',
          position: 'top-right',
          isClosable: true
        });
      } catch (err) {
        toast({
          title: formatMessage({
            id: "+y/wae",
            defaultMessage: [{
              "type": 1,
              "value": "errorMessage"
            }]
          }, {
            errorMessage: _constants__WEBPACK_IMPORTED_MODULE_7__.API_ERROR_MESSAGE
          }),
          status: 'error',
          position: 'top-right',
          isClosable: true
        });
      }
    });

    return function removePromoCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    form,
    submitPromoCode,
    removePromoCode
  };
};
const PromoCode = ({
  form,
  submitPromoCode,
  itemProps
}) => {
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (form.formState.isSubmitSuccessful) {
      setOpen(false);
    }
  }, [form.formState.isSubmitSuccessful]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Accordion, {
    allowToggle: true,
    index: isOpen ? 0 : -1,
    onChange: () => setOpen(!isOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionItem, itemProps, ({
    isExpanded
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionButton, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button,
    justifyContent: "flex-start",
    variant: "link",
    fontSize: "sm",
    rightIcon: isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronUpIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, null),
    onClick: () => form.reset()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "D8RblK",
    defaultMessage: [{
      "type": 0,
      "value": "Do you have a promo code?"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionPanel, {
    px: 0,
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    "data-testid": "promo-code-form",
    as: "form",
    p: 4,
    background: "white",
    border: "1px solid",
    borderColor: "gray.100",
    borderRadius: "base",
    onSubmit: form.handleSubmit(submitPromoCode)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_forms_promo_code_fields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    form: form,
    maxWidth: "350px"
  }))))));
};
PromoCode.propTypes = {
  /** The form object returned from `usePromoCode` hook */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),

  /** The submit callback returned from `usePromoCode` hook */
  submitPromoCode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),

  /** Props applied to inner AccordionItem. Useful for style overrides. */
  itemProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (PromoCode);

/***/ })

}]);
//# sourceMappingURL=app_components_order-summary_index_jsx.js.map