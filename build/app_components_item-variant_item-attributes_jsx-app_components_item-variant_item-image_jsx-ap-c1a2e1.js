"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1"],{

/***/ "./app/components/item-variant/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/item-variant/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useItemVariant": function() { return /* binding */ useItemVariant; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * This component and associated context/hook provide a convenient wrapper
 * around a group of components used for rendering product variant details.
 */

const ItemVariantContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const useItemVariant = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ItemVariantContext);
};
/**
 * The Provider component for rendering product item and variant detail.
 */

const ItemVariantProvider = ({
  variant,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemVariantContext.Provider, {
    value: variant
  }, children);
};

ItemVariantProvider.propTypes = {
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
/* harmony default export */ __webpack_exports__["default"] = (ItemVariantProvider);

/***/ }),

/***/ "./app/components/item-variant/item-attributes.jsx":
/*!*********************************************************!*\
  !*** ./app/components/item-variant/item-attributes.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _promo_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../promo-popover */ "./app/components/promo-popover/index.jsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");



const _excluded = ["includeQuantity", "currency"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint-disable no-unused-vars */








/**
 * In the context of a cart product item variant, this component renders a styled
 * list of the selected variation values as well as any promos (w/ info popover).
 */

const ItemAttributes = _ref => {
  var _variant$priceAdjustm2;

  let {
    includeQuantity,
    currency
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const variant = (0,___WEBPACK_IMPORTED_MODULE_6__.useItemVariant)();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [promos, setPromos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    currency: activeCurrency
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useCurrency)(); // Create a mapping of variation values to their associated attributes. This allows us
  // the render the readable names/labels rather than variation value IDs.

  const variationValues = Object.keys(variant.variationValues || []).map(key => {
    var _variant$variationAtt, _attr$values$find;

    const value = variant.variationValues[key];
    const attr = (_variant$variationAtt = variant.variationAttributes) === null || _variant$variationAtt === void 0 ? void 0 : _variant$variationAtt.find(attr => attr.id === key);
    return {
      id: key,
      name: (attr === null || attr === void 0 ? void 0 : attr.name) || key,
      value: ((_attr$values$find = attr.values.find(val => val.value === value)) === null || _attr$values$find === void 0 ? void 0 : _attr$values$find.name) || value
    };
  }); // Fetch all the promotions given by price adjustments. We display this info in
  // the promotion info popover when applicable.

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    ;

    (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      var _variant$priceAdjustm;

      let ids;

      if (((_variant$priceAdjustm = variant.priceAdjustments) === null || _variant$priceAdjustm === void 0 ? void 0 : _variant$priceAdjustm.length) > 0) {
        ids = variant.priceAdjustments.map(adj => adj.promotionId).filter(id => {
          return !promos.find(promo => promo.id === id);
        });
      }

      if (ids && ids.length > 0) {
        const promos = yield basket.getPromotions(ids);

        if (promos !== null && promos !== void 0 && promos.data) {
          setPromos(promos.data);
        }
      }
    })();
  }, [variant.priceAdjustments]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    spacing: 1.5,
    flex: 1
  }, props), variationValues === null || variationValues === void 0 ? void 0 : variationValues.map(variationValue => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    lineHeight: 1,
    color: "gray.700",
    fontSize: "sm",
    key: variationValue.id
  }, variationValue.name, ": ", variationValue.value)), includeQuantity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    lineHeight: 1,
    color: "gray.700",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "xD3Bn3",
    defaultMessage: [{
      "type": 0,
      "value": "Quantity: "
    }, {
      "type": 1,
      "value": "quantity"
    }],
    values: {
      quantity: variant.quantity
    }
  })), ((_variant$priceAdjustm2 = variant.priceAdjustments) === null || _variant$priceAdjustm2 === void 0 ? void 0 : _variant$priceAdjustm2.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    lineHeight: 1,
    color: "gray.700",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "B/orA3",
    defaultMessage: [{
      "type": 0,
      "value": "Promotions"
    }]
  }), ': ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    as: "span",
    color: "green.500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__.FormattedNumber, {
    style: "currency",
    currency: currency || basket.currency || activeCurrency,
    value: variant.priceAdjustments[0].price
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_promo_popover__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ml: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, null, promos === null || promos === void 0 ? void 0 : promos.map(promo => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
    key: promo === null || promo === void 0 ? void 0 : promo.id,
    fontSize: "sm"
  }, promo === null || promo === void 0 ? void 0 : promo.calloutMsg))))));
};

ItemAttributes.propTypes = {
  includeQuantity: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (ItemAttributes);

/***/ }),

/***/ "./app/components/item-variant/item-image.jsx":
/*!****************************************************!*\
  !*** ./app/components/item-variant/item-image.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./app/components/item-variant/index.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/image-groups-utils */ "./app/utils/image-groups-utils.js");


const _excluded = ["imageProps", "ratio"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






/**
 * In the context of a cart product item variant, this component renders the item's
 * main image.
 *
 * @todo = This component will render a `SALE` badge when the qualifier is available
 * on the custom property `c_isSale`. This will need to be expanded upon to handle
 * different badge/qualifiers and property names.
 */

const ItemImage = _ref => {
  var _findImageGroupBy, _findImageGroupBy$ima;

  let {
    imageProps,
    ratio = 1
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const variant = (0,___WEBPACK_IMPORTED_MODULE_4__.useItemVariant)(); // We find the 'small' images in the variant's image groups based on variationValues and pick the first one

  const image = (_findImageGroupBy = (0,_utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_5__.findImageGroupBy)(variant === null || variant === void 0 ? void 0 : variant.imageGroups, {
    viewType: 'small',
    selectedVariationAttributes: variant === null || variant === void 0 ? void 0 : variant.variationValues
  })) === null || _findImageGroupBy === void 0 ? void 0 : (_findImageGroupBy$ima = _findImageGroupBy.images) === null || _findImageGroupBy$ima === void 0 ? void 0 : _findImageGroupBy$ima[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: "84px",
    backgroundColor: "gray.100"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AspectRatio, {
    ratio: ratio
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
    position: "relative"
  }, variant.c_isSale && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Badge, {
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: 2,
    marginTop: 2,
    fontSize: "10px",
    variant: "solid",
    colorScheme: "blue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "3rGMFt",
    defaultMessage: [{
      "type": 0,
      "value": "Sale"
    }]
  })), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Image, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alt: image.alt,
    src: image.disBaseLink,
    ignoreFallback: true
  }, imageProps)))));
};

ItemImage.propTypes = {
  imageProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  ratio: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (ItemImage);

/***/ }),

/***/ "./app/components/item-variant/item-name.jsx":
/*!***************************************************!*\
  !*** ./app/components/item-variant/item-name.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link */ "./app/components/link/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



/**
 * In the context of a cart product item variant, this components simply renders
 * the item's name using the cart item field `productName`. We use this field
 * rather than variant `name` field as the variant detail may not yet be
 * available upon rendering.
 */

const ItemName = props => {
  var _variant$master;

  const variant = (0,___WEBPACK_IMPORTED_MODULE_2__.useItemVariant)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_link__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    fontWeight: "bold"
  }, props, {
    color: "black.600",
    to: `/product/${variant === null || variant === void 0 ? void 0 : (_variant$master = variant.master) === null || _variant$master === void 0 ? void 0 : _variant$master.masterId}`
  }), variant.productName || variant.name);
};

/* harmony default export */ __webpack_exports__["default"] = (ItemName);

/***/ }),

/***/ "./app/components/item-variant/item-price.jsx":
/*!****************************************************!*\
  !*** ./app/components/item-variant/item-price.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");


const _excluded = ["currency", "align", "baseDirection"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









const PricePerItem = ({
  currency,
  basket,
  basePrice
}) => {
  const {
    currency: activeCurrency
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useCurrency)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
    fontSize: {
      base: '12px',
      lg: '14px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedNumber, {
    style: "currency",
    currency: currency || basket.currency || activeCurrency,
    value: basePrice
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "zODu/+",
    defaultMessage: [{
      "type": 0,
      "value": "ea"
    }]
  }));
};

PricePerItem.propTypes = {
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  basket: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  basePrice: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/**
 * In the context of a cart product item variant, this component renders the item's
 * pricing, taking into account applied discounts as well as base item prices.
 */

const ItemPrice = _ref => {
  let {
    currency,
    align = 'right',
    baseDirection = 'column'
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const variant = (0,___WEBPACK_IMPORTED_MODULE_5__.useItemVariant)();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    currency: activeCurrency
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useCurrency)();
  const {
    price,
    basePrice,
    priceAfterItemDiscount
  } = variant;
  const displayPrice = priceAfterItemDiscount ? Math.min(price, priceAfterItemDiscount) : price;
  const hasDiscount = displayPrice !== price;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Stack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    textAlign: align,
    direction: hasDiscount ? 'column' : {
      base: baseDirection,
      lg: 'row'
    },
    justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
    alignItems: "baseline",
    spacing: hasDiscount ? 0 : 1,
    wrap: "row"
  }, props), basePrice && price !== basePrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_6__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PricePerItem, {
    currency: currency,
    basePrice: basePrice,
    basket: basket
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
    fontWeight: "bold",
    lineHeight: {
      base: '0.5',
      lg: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedNumber, {
    style: "currency",
    currency: currency || basket.currency || activeCurrency,
    value: displayPrice
  }), hasDiscount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
    as: "span",
    fontSize: "sm",
    fontWeight: "normal",
    textDecoration: "line-through",
    color: "gray.500",
    marginLeft: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__.FormattedNumber, {
    style: "currency",
    currency: currency || basket.currency || activeCurrency,
    value: price
  }))), basePrice && price !== basePrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_6__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(PricePerItem, {
    currency: currency,
    basePrice: basePrice,
    basket: basket
  })));
};

ItemPrice.propTypes = {
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  align: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  baseDirection: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (ItemPrice);

/***/ }),

/***/ "./app/components/promo-popover/index.jsx":
/*!************************************************!*\
  !*** ./app/components/promo-popover/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/popover/dist/chakra-ui-popover.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/portal/dist/chakra-ui-portal.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");


const _excluded = ["header", "children"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





/**
 * This component renders a small info icon and displays a popover when hovered. It could be adapted
 * to handle any kind of popover if needed, but for now its been set up to be used/shared for displaying
 * promotions applied to products and/or orders on cart, checkout, order confirmation and order history.
 */

const PromoPopover = _ref => {
  let {
    header,
    children
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    position: "relative"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Popover, {
    isLazy: true,
    placement: "top",
    boundary: "scrollParent",
    trigger: "hover",
    variant: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.PopoverTrigger, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.InfoIcon, {
      display: "block",
      boxSize: "18px",
      mt: "-2px",
      ml: "-1px",
      color: "gray.600"
    }),
    display: "block",
    size: "xs",
    height: "14px",
    width: "14px",
    minWidth: "auto",
    position: "relative",
    variant: "unstyled"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "2BHb6K",
    defaultMessage: [{
      "type": 0,
      "value": "Applied promotions info"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.PopoverContent, {
    border: "none",
    borderRadius: "base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    boxShadow: "lg",
    zIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.PopoverArrow, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.PopoverCloseButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.PopoverHeader, {
    borderBottom: "none"
  }, header || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontWeight: "bold",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "+O5yEM",
    defaultMessage: [{
      "type": 0,
      "value": "Promotions Applied"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.PopoverBody, {
    pt: 0
  }, children))))));
};

PromoPopover.propTypes = {
  header: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any)
};
/* harmony default export */ __webpack_exports__["default"] = (PromoPopover);

/***/ })

}]);
//# sourceMappingURL=app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1.js.map