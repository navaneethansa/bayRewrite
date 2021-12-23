"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-cart"],{

/***/ "./app/pages/cart/index.jsx":
/*!**********************************!*\
  !*** ./app/pages/cart/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _partials_cart_cta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/cart-cta */ "./app/pages/cart/partials/cart-cta.jsx");
/* harmony import */ var _partials_cart_secondary_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/cart-secondary-button-group */ "./app/pages/cart/partials/cart-secondary-button-group.jsx");
/* harmony import */ var _partials_cart_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/cart-skeleton */ "./app/pages/cart/partials/cart-skeleton.jsx");
/* harmony import */ var _partials_cart_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/cart-title */ "./app/pages/cart/partials/cart-title.jsx");
/* harmony import */ var _components_confirmation_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/confirmation-modal */ "./app/components/confirmation-modal/index.jsx");
/* harmony import */ var _partials_empty_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/empty-cart */ "./app/pages/cart/partials/empty-cart.jsx");
/* harmony import */ var _components_order_summary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/order-summary */ "./app/components/order-summary/index.jsx");
/* harmony import */ var _components_product_item_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/product-item/index */ "./app/components/product-item/index.jsx");
/* harmony import */ var _components_product_view_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/product-view-modal */ "./app/components/product-view-modal/index.jsx");
/* harmony import */ var _components_recommended_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/recommended-products */ "./app/components/recommended-products/index.jsx");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_20__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Chakra Components

 // Project Components










 // Hooks





 // Constants


 // Utilities



const Cart = () => {
  var _basket$productItems;

  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
  const [localQuantity, setLocalQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const [isCartItemLoading, setCartItemLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.useDisclosure)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__["default"])();
  const toast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_14__.useToast)();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const modalProps = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.useDisclosure)();

  const showError = () => {
    toast({
      title: formatMessage({
        id: "+y/wae",
        defaultMessage: [{
          "type": 1,
          "value": "errorMessage"
        }]
      }, {
        errorMessage: _constants__WEBPACK_IMPORTED_MODULE_19__.API_ERROR_MESSAGE
      }),
      status: 'error'
    });
  };
  /**************** Wishlist ****************/


  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_15__["default"])();

  const handleAddToWishlist = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (product) {
      try {
        yield wishlist.createListItem({
          id: product.productId,
          quantity: product.quantity
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
          action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_23__.Button, {
            variant: "link",
            onClick: () => navigate('/account/wishlist')
          }, "View")
        });
      } catch {
        showError();
      }
    });

    return function handleAddToWishlist(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Set the default shipping method if none is already selected
    if (basket.basketId && basket.shipments.length > 0 && !basket.shipments[0].shippingMethod) {
      ;

      (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* () {
        const shippingMethods = yield basket.getShippingMethods();
        basket.setShippingMethod(shippingMethods.defaultShippingMethodId);
      })();
    }
  }, [basket.basketId]);

  if (!(basket !== null && basket !== void 0 && basket.basketId)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_partials_cart_skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }

  if (!(basket !== null && basket !== void 0 && basket.productItems)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_partials_empty_cart__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isRegistered: customer.isRegistered
    });
  }

  const handleUpdateCart = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (variant, quantity) {
      // close the modal before handle the change
      onClose();

      try {
        setCartItemLoading(true);
        const productIds = basket.productItems.map(({
          productId
        }) => productId); // The user is selecting different variant, and it has not existed in basket

        if (selectedItem.id !== variant.productId && !productIds.includes(variant.productId)) {
          const item = {
            productId: variant.productId,
            quantity,
            price: variant.price
          };
          return yield basket.updateItemInBasket(item, selectedItem.itemId);
        } // The user is selecting different variant, and it has existed in basket
        // remove this item in the basket, change the quantity for the new selected variant in the basket


        if (selectedItem.id !== variant.productId && productIds.includes(variant.productId)) {
          yield basket.removeItemFromBasket(selectedItem.itemId);
          const basketItem = basket.productItems.find(({
            productId
          }) => productId === variant.productId);
          const newQuantity = quantity + basketItem.quantity;
          return yield changeItemQuantity(newQuantity, basketItem);
        } // the user only changes quantity of the same variant


        if (selectedItem.quantity !== quantity) {
          return yield changeItemQuantity(quantity, selectedItem);
        }
      } catch {
        showError();
      } finally {
        setCartItemLoading(false);
        setSelectedItem(undefined);
      }
    });

    return function handleUpdateCart(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  const changeItemQuantity = lodash_debounce__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (quantity, product) {
      // This local state allows the dropdown to show the desired quantity
      // while the API call to update it is happening.
      setLocalQuantity(_objectSpread(_objectSpread({}, localQuantity), {}, {
        [product.itemId]: quantity
      }));
      setCartItemLoading(true);
      setSelectedItem(product);

      try {
        const item = {
          productId: product.id,
          quantity: parseInt(quantity)
        };
        yield basket.updateItemInBasket(item, product.itemId);
      } catch {
        showError();
      } finally {
        // reset the state
        setCartItemLoading(false);
        setSelectedItem(undefined);
        setLocalQuantity(_objectSpread(_objectSpread({}, localQuantity), {}, {
          [product.itemId]: undefined
        }));
      }
    });

    return function (_x4, _x5) {
      return _ref4.apply(this, arguments);
    };
  }(), 750);

  const handleChangeItemQuantity = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (product, value) {
      const {
        stockLevel
      } = basket._productItemsDetail[product.productId].inventory; // Handle removing of the items when 0 is selected.

      if (value === 0) {
        // Flush last call to keep ui in sync with data.
        changeItemQuantity.flush(); // Set the selected item to the current product to the modal acts on it.

        setSelectedItem(product); // Show the modal.

        modalProps.onOpen(); // Return false as 0 isn't valid section.

        return false;
      } // Cancel any pending handlers.


      changeItemQuantity.cancel(); // Allow use to selected values above the inventory.

      if (value > stockLevel || value === product.quantity) {
        return true;
      } // Take action.


      changeItemQuantity(value, product);
      return true;
    });

    return function handleChangeItemQuantity(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();

  const handleRemoveItem = /*#__PURE__*/function () {
    var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (product) {
      setSelectedItem(product);
      setCartItemLoading(true);

      try {
        yield basket.removeItemFromBasket(product.itemId);
        toast({
          title: formatMessage({
            id: "OKPeJz",
            defaultMessage: [{
              "type": 0,
              "value": "Item removed from cart"
            }]
          }),
          status: 'success'
        });
      } catch {
        showError();
      } finally {
        // reset the state
        setCartItemLoading(false);
        setSelectedItem(undefined);
      }
    });

    return function handleRemoveItem(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Box, {
    background: "gray.50",
    flex: "1",
    "data-testid": "sf-cart-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Container, {
    maxWidth: "container.xl",
    px: [4, 6, 6, 4],
    paddingTop: {
      base: 8,
      lg: 8
    },
    paddingBottom: {
      base: 8,
      lg: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Stack, {
    spacing: 24
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_partials_cart_title__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Grid, {
    templateColumns: {
      base: '1fr',
      lg: '66% 1fr'
    },
    gap: {
      base: 10,
      xl: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Stack, {
    spacing: 4
  }, basket.productItems.map((product, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_product_item_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: product.productId,
    index: idx,
    secondaryActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_partials_cart_secondary_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onAddToWishlistClick: handleAddToWishlist,
      onEditClick: product => {
        setSelectedItem(product);
        onOpen();
      },
      onRemoveItemClick: handleRemoveItem
    }),
    product: _objectSpread(_objectSpread(_objectSpread({}, product), basket._productItemsDetail && basket._productItemsDetail[product.productId]), {}, {
      price: product.price,
      quantity: localQuantity[product.itemId] ? localQuantity[product.itemId] : product.quantity
    }),
    onItemQuantityChange: handleChangeItemQuantity.bind(undefined, product),
    showLoading: isCartItemLoading && (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.itemId) === product.itemId,
    handleRemoveItem: handleRemoveItem
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Box, null, isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_product_view_modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    product: selectedItem,
    updateCart: (variant, quantity) => handleUpdateCart(variant, quantity)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Stack, {
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_order_summary__WEBPACK_IMPORTED_MODULE_10__["default"], {
    showPromoCodeForm: true,
    isEstimate: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Box, {
    display: {
      base: 'none',
      lg: 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_partials_cart_cta__WEBPACK_IMPORTED_MODULE_4__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Stack, {
    spacing: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_25__["default"], {
      id: "mfahwZ",
      defaultMessage: [{
        "type": 0,
        "value": "Recently Viewed"
      }]
    }),
    recommender: 'viewed-recently-einstein',
    mx: {
      base: -4,
      sm: -6,
      lg: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_25__["default"], {
      id: "v898P+",
      defaultMessage: [{
        "type": 0,
        "value": "You May Also Like"
      }]
    }),
    recommender: 'product-to-product-einstein',
    products: basket === null || basket === void 0 ? void 0 : (_basket$productItems = basket.productItems) === null || _basket$productItems === void 0 ? void 0 : _basket$productItems.map(item => item.productId),
    shouldFetch: () => {
      var _basket$productItems2;

      return (basket === null || basket === void 0 ? void 0 : basket.basketId) && ((_basket$productItems2 = basket.productItems) === null || _basket$productItems2 === void 0 ? void 0 : _basket$productItems2.length) > 0;
    },
    mx: {
      base: -4,
      sm: -6,
      lg: 0
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.Box, {
    h: "130px",
    position: "sticky",
    bottom: 0,
    bg: "white",
    display: {
      base: 'block',
      lg: 'none'
    },
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_partials_cart_cta__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_confirmation_modal__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _partials_cart_secondary_button_group__WEBPACK_IMPORTED_MODULE_5__.REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG, {
    onPrimaryAction: () => {
      handleRemoveItem(selectedItem);
    },
    onAlternateAction: () => {}
  }, modalProps)));
};

Cart.getTemplateName = () => 'cart';

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./app/pages/cart/partials/cart-cta.jsx":
/*!**********************************************!*\
  !*** ./app/pages/cart/partials/cart-cta.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/link */ "./app/components/link/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const CartCta = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_2__["default"],
    to: "/checkout",
    width: ['95%', '95%', '95%', '100%'],
    marginTop: [6, 6, 2, 2],
    mb: 4,
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.LockIcon, null),
    variant: "solid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "z3Qj9h",
    defaultMessage: [{
      "type": 0,
      "value": "Proceed to Checkout"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    justify: 'center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.VisaIcon, {
    height: 8,
    width: 10,
    mr: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.MastercardIcon, {
    height: 8,
    width: 10,
    mr: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.AmexIcon, {
    height: 8,
    width: 10,
    mr: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.DiscoverIcon, {
    height: 8,
    width: 10,
    mr: 2
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CartCta);

/***/ }),

/***/ "./app/pages/cart/partials/cart-secondary-button-group.jsx":
/*!*****************************************************************!*\
  !*** ./app/pages/cart/partials/cart-secondary-button-group.jsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG": function() { return /* binding */ REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _components_item_variant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _components_confirmation_modal_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/confirmation-modal/index */ "./app/components/confirmation-modal/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");



/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG = {
  dialogTitle: (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessage)({
    id: "nEwlut",
    defaultMessage: [{
      "type": 0,
      "value": "Remove Item?"
    }]
  }),
  confirmationMessage: (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessage)({
    id: "jAOn1A",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to remove this item from your cart?"
    }]
  }),
  primaryActionLabel: (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessage)({
    id: "dfEp3Z",
    defaultMessage: [{
      "type": 0,
      "value": "Yes, remove item"
    }]
  }),
  alternateActionLabel: (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessage)({
    id: "SRkOX8",
    defaultMessage: [{
      "type": 0,
      "value": "No, keep item"
    }]
  }),
  onPrimaryAction: _utils_utils__WEBPACK_IMPORTED_MODULE_6__.noop
};
/**
 * Renders secondary actions on a product-item card in the form of a button group.
 * Represents other actions you want the user to perform with the product-item
 * (eg.: Remove or Edit or Add to wishlist for cart items)
 */

const CartSecondaryButtonGroup = ({
  onAddToWishlistClick = _utils_utils__WEBPACK_IMPORTED_MODULE_6__.noop,
  onEditClick = _utils_utils__WEBPACK_IMPORTED_MODULE_6__.noop,
  onRemoveItemClick = _utils_utils__WEBPACK_IMPORTED_MODULE_6__.noop
}) => {
  const variant = (0,_components_item_variant__WEBPACK_IMPORTED_MODULE_4__.useItemVariant)();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const modalProps = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useDisclosure)();

  const showRemoveItemConfirmation = () => {
    modalProps.onOpen();
  };

  const handleRemoveItem = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      onRemoveItemClick(variant);
    });

    return function handleRemoveItem() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Stack, {
    direction: {
      base: 'column',
      lg: 'row'
    },
    alignItems: {
      base: 'flex-start',
      lg: 'center'
    },
    justifyContent: {
      base: 'flex-start',
      lg: 'space-between'
    },
    divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Divider, {
      display: {
        base: 'block',
        lg: 'none'
      }
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.ButtonGroup, {
    spacing: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "link",
    size: "sm",
    onClick: showRemoveItemConfirmation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "G/yZLu",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  })), customer.isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "link",
    size: "sm",
    onClick: () => onAddToWishlistClick(variant)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "Cl4TrE",
    defaultMessage: [{
      "type": 0,
      "value": "Add to wishlist"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
    variant: "link",
    size: "sm",
    onClick: () => onEditClick(variant)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "wEQDC6",
    defaultMessage: [{
      "type": 0,
      "value": "Edit"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Checkbox, {
    spacing: 2,
    isReadOnly: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "/kLqfV",
    defaultMessage: [{
      "type": 0,
      "value": "This is a gift."
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Box, {
    marginLeft: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Button, {
    marginLeft: 1,
    variant: "link",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "TdTXXf",
    defaultMessage: [{
      "type": 0,
      "value": "Learn more"
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_confirmation_modal_index__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG, {
    onPrimaryAction: handleRemoveItem
  }, modalProps)));
};

CartSecondaryButtonGroup.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onEditClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onAddToWishlistClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onRemoveItemClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (CartSecondaryButtonGroup);

/***/ }),

/***/ "./app/pages/cart/partials/cart-skeleton.jsx":
/*!***************************************************!*\
  !*** ./app/pages/cart/partials/cart-skeleton.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const CartItemSkeleton = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: 4,
    layerStyle: "card",
    boxShadow: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    width: "full",
    bg: "white",
    marginBottom: [4, 3]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: ['88px', '136px'],
    height: ['88px', '136px']
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    marginLeft: [4, 6],
    spacing: 2,
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: "80px",
    height: "20px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: {
      base: '180px',
      sm: '180px',
      md: '280px',
      lg: '280px'
    },
    height: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: {
      base: '120px',
      sm: '120px',
      md: '140px',
      lg: '140px'
    },
    height: 3
  }))));
};

const CartSkeleton = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    background: "gray.50",
    flex: "1",
    paddingBottom: {
      base: 20,
      lg: 55
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    background: "gray.50",
    "data-testid": "sf-cart-skeleton",
    maxWidth: "container.xl",
    p: [4, 6, 6, 4],
    paddingTop: [null, null, null, 6]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    templateColumns: {
      base: '1fr',
      lg: '66% 1fr'
    },
    gap: {
      base: 10,
      xl: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    paddingTop: 4,
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontWeight: "bold",
    fontSize: ['xl', 'xl', 'xl', '2xl']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "2tqQFl",
    defaultMessage: [{
      "type": 0,
      "value": "Cart"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CartItemSkeleton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CartItemSkeleton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
    py: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    paddingTop: {
      base: 0,
      lg: 8
    },
    spacing: 3,
    px: [6, 6, 6, 0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    fontSize: "lg",
    pt: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "ivNR8s",
    defaultMessage: [{
      "type": 0,
      "value": "Order Summary"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
    spacing: 3,
    align: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: {
      base: '180px',
      sm: '180px',
      md: '280px',
      lg: '280px'
    },
    height: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: "120px",
    height: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: {
      base: '180px',
      sm: '180px',
      md: '280px',
      lg: '280px'
    },
    height: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
    width: "120px",
    height: 4
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CartSkeleton);

/***/ }),

/***/ "./app/pages/cart/partials/cart-title.jsx":
/*!************************************************!*\
  !*** ./app/pages/cart/partials/cart-title.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const CartTitle = () => {
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    fontWeight: "bold",
    fontSize: ['xl', 'xl', 'xl', '2xl']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "2tqQFl",
    defaultMessage: [{
      "type": 0,
      "value": "Cart"
    }]
  }), " (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "5H7Fzu",
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
      "value": ")"
    }],
    values: {
      itemCount: basket.itemAccumulatedCount
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CartTitle);

/***/ }),

/***/ "./app/pages/cart/partials/empty-cart.jsx":
/*!************************************************!*\
  !*** ./app/pages/cart/partials/empty-cart.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/link */ "./app/components/link/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const EmptyCart = ({
  isRegistered
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    "data-testid": "sf-cart-empty",
    flex: "1",
    minWidth: "100%",
    width: "full",
    background: "gray.50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Center, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 6,
    width: ['343px', '444px'],
    marginTop: "20%",
    marginBottom: "20%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_2__.BasketIcon, {
    boxSize: [8, 10]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    lineHeight: 1,
    align: "center",
    fontSize: ['18px', '2xl'],
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "nYi7Xz",
    defaultMessage: [{
      "type": 0,
      "value": "Your Cart is Empty"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    align: "center",
    fontSize: "md",
    color: "gray.700"
  }, isRegistered ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "V8WZRT",
    defaultMessage: [{
      "type": 0,
      "value": "Continue shopping to add items to your cart"
    }]
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "3gXwAV",
    defaultMessage: [{
      "type": 0,
      "value": "Sign in to retrieve your saved items or continue shopping"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    justify: "center",
    direction: ['column', 'row'],
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_3__["default"],
    href: '/',
    width: ['343px', '220px'],
    variant: isRegistered ? 'solid' : 'outline',
    color: isRegistered ? 'white' : 'blue.600'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "IUXVjJ",
    defaultMessage: [{
      "type": 0,
      "value": "Continue Shopping"
    }]
  })), !isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_3__["default"],
    href: "/account",
    width: ['343px', '220px'],
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_2__.AccountIcon, null),
    variant: "solid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "Ub+AGc",
    defaultMessage: [{
      "type": 0,
      "value": "Sign In"
    }]
  })))))));
};

EmptyCart.propTypes = {
  isRegistered: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (EmptyCart);

/***/ })

}]);
//# sourceMappingURL=pages-cart.js.map