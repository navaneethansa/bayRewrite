"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-product-detail"],{

/***/ "./app/pages/product-detail/index.jsx":
/*!********************************************!*\
  !*** ./app/pages/product-detail/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _commerce_api_hooks_useEinstein__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commerce-api/hooks/useEinstein */ "./app/commerce-api/hooks/useEinstein.js");
/* harmony import */ var _components_recommended_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/recommended-products */ "./app/components/recommended-products/index.jsx");
/* harmony import */ var _partials_product_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../partials/product-view */ "./app/partials/product-view/index.jsx");
/* harmony import */ var pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/universal/errors */ "./node_modules/pwa-kit-react-sdk/ssr/universal/errors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-toast */ "./app/hooks/use-toast.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



 // Components

 // Hooks





 // Project Components


 // Others/Utils

 // constant






const ProductDetail = ({
  category,
  product,
  isLoading
}) => {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useHistory)();
  const einstein = (0,_commerce_api_hooks_useEinstein__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const variant = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.useVariant)(product);
  const toast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_14__.useToast)();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const [primaryCategory, setPrimaryCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(category); // This page uses the `primaryCategoryId` to retrieve the category data. This attribute
  // is only available on `master` products. Since a variation will be loaded once all the
  // attributes are selected (to get the correct inventory values), the category information
  // is overridden. This will allow us to keep the initial category around until a different
  // master product is loaded.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (category) {
      setPrimaryCategory(category);
    }
  }, [category]);
  /**************** Product Variant ****************/

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // update the variation attributes parameter on
    // the url accordingly as the variant changes
    const updatedUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_13__.rebuildPathWithParams)(`${location.pathname}${location.search}`, {
      pid: variant === null || variant === void 0 ? void 0 : variant.productId
    });
    history.replace(updatedUrl);
  }, [variant]);
  /**************** Wishlist ****************/

  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_6__["default"])();

  const handleAddToWishlist = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (quantity) {
      try {
        yield wishlist.createListItem({
          id: product.id,
          quantity
        });
        toast({
          title: formatMessage({
            id: "DdR2q8",
            defaultMessage: [{
              "type": 1,
              "value": "quantity"
            }, {
              "type": 0,
              "value": " "
            }, {
              "type": 6,
              "value": "quantity",
              "options": {
                "one": {
                  "value": [{
                    "type": 0,
                    "value": "item"
                  }]
                },
                "other": {
                  "value": [{
                    "type": 0,
                    "value": "items"
                  }]
                }
              },
              "offset": 0,
              "pluralType": "cardinal"
            }, {
              "type": 0,
              "value": " added to wishlist"
            }]
          }, {
            quantity: 1
          }),
          status: 'success',
          action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Button, {
            variant: "link",
            onClick: () => navigate('/account/wishlist')
          }, "View")
        });
      } catch {
        toast({
          title: formatMessage({
            id: "+y/wae",
            defaultMessage: [{
              "type": 1,
              "value": "errorMessage"
            }]
          }, {
            errorMessage: _constants__WEBPACK_IMPORTED_MODULE_12__.API_ERROR_MESSAGE
          }),
          status: 'error'
        });
      }
    });

    return function handleAddToWishlist(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**************** Add To Cart ****************/


  const showToast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_14__.useToast)();

  const showError = () => {
    showToast({
      title: formatMessage({
        id: "+y/wae",
        defaultMessage: [{
          "type": 1,
          "value": "errorMessage"
        }]
      }, {
        errorMessage: _constants__WEBPACK_IMPORTED_MODULE_12__.API_ERROR_MESSAGE
      }),
      status: 'error'
    });
  };

  const handleAddToCart = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (variant, quantity) {
      try {
        if (!(variant !== null && variant !== void 0 && variant.orderable) || !quantity) return; // The basket accepts an array of `ProductItems`, so lets create a single
        // item array to add to the basket.

        const productItems = [{
          productId: variant.productId,
          quantity,
          price: variant.price
        }];
        yield basket.addItemToBasket(productItems);
      } catch (error) {
        showError(error);
      }
    });

    return function handleAddToCart(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**************** Einstein ****************/


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (product) {
      einstein.sendViewProduct(product);
    }
  }, [product]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    className: "sf-product-detail-page",
    layerStyle: "page",
    "data-testid": "product-details-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, product === null || product === void 0 ? void 0 : product.pageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: product === null || product === void 0 ? void 0 : product.pageDescription
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_partials_product_view__WEBPACK_IMPORTED_MODULE_10__["default"], {
    product: product,
    category: (primaryCategory === null || primaryCategory === void 0 ? void 0 : primaryCategory.parentCategoryTree) || [],
    addToCart: (variant, quantity) => handleAddToCart(variant, quantity),
    addToWishlist: (_, quantity) => handleAddToWishlist(quantity),
    isProductLoading: isLoading,
    isCustomerProductListLoading: !wishlist.isInitialized
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    direction: "row",
    spacing: [0, 0, 0, 16]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Accordion, {
    allowMultiple: true,
    allowToggle: true,
    maxWidth: '896px',
    flex: [1, 1, 1, 5]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionButton, {
    height: "64px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    flex: "1",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "lg"
  }, formatMessage({
    id: "OrvEHn",
    defaultMessage: [{
      "type": 0,
      "value": "Product Detail"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionPanel, {
    mb: 6,
    mt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: product === null || product === void 0 ? void 0 : product.longDescription
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionButton, {
    height: "64px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    flex: "1",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "lg"
  }, formatMessage({
    id: "V+9Zzz",
    defaultMessage: [{
      "type": 0,
      "value": "Size & Fit"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionPanel, {
    mb: 6,
    mt: 4
  }, formatMessage({
    id: "LiHQih",
    defaultMessage: [{
      "type": 0,
      "value": "Coming Soon"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionButton, {
    height: "64px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    flex: "1",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "lg"
  }, formatMessage({
    id: "dUxyza",
    defaultMessage: [{
      "type": 0,
      "value": "Reviews"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionPanel, {
    mb: 6,
    mt: 4
  }, "Coming Soon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionButton, {
    height: "64px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    flex: "1",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "lg"
  }, formatMessage({
    id: "KV/9Hv",
    defaultMessage: [{
      "type": 0,
      "value": "Questions"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionIcon, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.AccordionPanel, {
    mb: 6,
    mt: 4
  }, "Coming Soon"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Box, {
    display: ['none', 'none', 'none', 'block'],
    flex: 4
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Stack, {
    spacing: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_20__["default"], {
      id: "Cm91xY",
      defaultMessage: [{
        "type": 0,
        "value": "Complete The Set"
      }]
    }),
    recommender: 'complete-the-set',
    products: product && [product.id],
    mx: {
      base: -4,
      md: -8,
      lg: 0
    },
    shouldFetch: () => product === null || product === void 0 ? void 0 : product.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_20__["default"], {
      id: "unUv/E",
      defaultMessage: [{
        "type": 0,
        "value": "You Might Also Like"
      }]
    }),
    recommender: 'pdp-similar-items',
    products: product && [product.id],
    mx: {
      base: -4,
      md: -8,
      lg: 0
    },
    shouldFetch: () => product === null || product === void 0 ? void 0 : product.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_20__["default"], {
      id: "mfahwZ",
      defaultMessage: [{
        "type": 0,
        "value": "Recently Viewed"
      }]
    }),
    recommender: 'viewed-recently-einstein',
    mx: {
      base: -4,
      md: -8,
      lg: 0
    }
  }))));
};

ProductDetail.getTemplateName = () => 'product-detail';

ProductDetail.shouldGetProps = ({
  previousLocation,
  location
}) => {
  const previousParams = new URLSearchParams((previousLocation === null || previousLocation === void 0 ? void 0 : previousLocation.search) || '');
  const params = new URLSearchParams(location.search); // If the product changed via the pathname or `pid` param, allow updated
  // data to be retrieved.

  return (previousLocation === null || previousLocation === void 0 ? void 0 : previousLocation.pathname) !== location.pathname || previousParams.get('pid') !== params.get('pid');
};

ProductDetail.getProps = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    res,
    params,
    location,
    api
  }) {
    var _product, _product3, _category;

    const {
      productId
    } = params;
    let category, product;
    const urlParams = new URLSearchParams(location.search);
    product = yield api.shopperProducts.getProduct({
      parameters: {
        id: urlParams.get('pid') || productId,
        allImages: true
      }
    });

    if ((_product = product) !== null && _product !== void 0 && _product.primaryCategoryId) {
      var _product2;

      category = yield api.shopperProducts.getCategory({
        parameters: {
          id: (_product2 = product) === null || _product2 === void 0 ? void 0 : _product2.primaryCategoryId,
          levels: 1
        }
      });
    } // Set the `cache-control` header values similar to those on the product-list.


    if (res) {
      res.set('Cache-Control', 'max-age=900');
    } // The `commerce-isomorphic-sdk` package does not throw errors, so
    // we have to check the returned object type to inconsistencies.


    if (typeof ((_product3 = product) === null || _product3 === void 0 ? void 0 : _product3.type) === 'string') {
      throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_11__.HTTPNotFound(product.detail);
    }

    if (typeof ((_category = category) === null || _category === void 0 ? void 0 : _category.type) === 'string') {
      throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_11__.HTTPNotFound(category.detail);
    }

    return {
      category,
      product
    };
  });

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}();

ProductDetail.propTypes = {
  /**
   * The category object used for breadcrumb construction.
   */
  category: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /**
   * The product object to be shown on the page..
   */
  product: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /**
   * The current state of `getProps` when running this value is `true`, otherwise it's
   * `false`. (Provided internally)
   */
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * The current react router match object. (Provided internally)
   */
  match: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

/***/ })

}]);
//# sourceMappingURL=pages-product-detail.js.map