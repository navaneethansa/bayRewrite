"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-account-wishlist"],{

/***/ "./app/components/page-action-placeholder/index.jsx":
/*!**********************************************************!*\
  !*** ./app/components/page-action-placeholder/index.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const PageActionPlaceHolder = ({
  heading,
  text,
  icon,
  buttonText,
  buttonProps,
  onButtonClick
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 2,
    py: 12,
    px: 4,
    alignItems: "center",
    borderRadius: "base",
    background: "gray.50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, null, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 6,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    align: "center",
    fontSize: "lg",
    fontWeight: "bold"
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    align: "center",
    fontSize: "md",
    color: "gray.700"
  }, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: onButtonClick,
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_3__.PlusIcon, null)
  }, buttonProps), buttonText)));
};

PageActionPlaceHolder.propTypes = {
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  buttonText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  buttonProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  onButtonClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (PageActionPlaceHolder);

/***/ }),

/***/ "./app/pages/account/wishlist/index.jsx":
/*!**********************************************!*\
  !*** ./app/pages/account/wishlist/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var _components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/page-action-placeholder */ "./app/components/page-action-placeholder/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_product_item_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/product-item/index */ "./app/components/product-item/index.jsx");
/* harmony import */ var _partials_wishlist_primary_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partials/wishlist-primary-action */ "./app/pages/account/wishlist/partials/wishlist-primary-action.jsx");
/* harmony import */ var _partials_wishlist_secondary_button_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./partials/wishlist-secondary-button-group */ "./app/pages/account/wishlist/partials/wishlist-secondary-button-group.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../constants */ "./app/constants.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */














const numberOfSkeletonItems = 3;

const AccountWishlist = () => {
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const toast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast)();
  const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  const [localQuantity, setLocalQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [isWishlistItemLoading, setWishlistItemLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_5__["default"])();

  const handleActionClicked = itemId => {
    setWishlistItemLoading(!!itemId);
    setSelectedItem(itemId);
  };

  const handleItemQuantityChanged = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (quantity, item) {
      // This local state allows the dropdown to show the desired quantity
      // while the API call to update it is happening.
      setLocalQuantity(_objectSpread(_objectSpread({}, localQuantity), {}, {
        [item.productId]: quantity
      }));
      setWishlistItemLoading(true);
      setSelectedItem(item.productId);

      try {
        yield wishlist.updateListItem(_objectSpread(_objectSpread({}, item), {}, {
          quantity: parseInt(quantity)
        }));
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

      setWishlistItemLoading(false);
      setSelectedItem(undefined);
      setLocalQuantity(_objectSpread(_objectSpread({}, localQuantity), {}, {
        [item.productId]: undefined
      }));
    });

    return function handleItemQuantityChanged(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (customer.isRegistered) {
      // We want to reset the wishlist here
      // because it is possible that a user
      // adds an item to the wishlist on another page
      // and the wishlist page may not have enough
      // data to render the page.
      // Reset the wishlist will make sure the
      // initialization state is correct.
      if (wishlist.isInitialized) {
        wishlist.reset();
      }

      wishlist.init({
        detail: true
      });
    }
  }, [customer.isRegistered]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 4,
    "data-testid": "account-wishlist-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    as: "h1",
    fontSize: "2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "hp3uqR",
    defaultMessage: [{
      "type": 0,
      "value": "Wishlist"
    }]
  })), !wishlist.hasDetail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__.Box, {
    "data-testid": "sf-wishlist-skeleton"
  }, new Array(numberOfSkeletonItems).fill(0).map((i, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__.Box, {
    key: idx,
    p: [4, 6],
    my: 4,
    border: "1px solid",
    borderColor: "gray.100",
    borderRadius: "base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    width: "full",
    align: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Skeleton, {
    boxSize: ['88px', 36],
    mr: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_14__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Skeleton, {
    h: "20px",
    w: "112px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Skeleton, {
    h: "20px",
    w: "84px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Skeleton, {
    h: "20px",
    w: "140px"
  })))))), wishlist.hasDetail && wishlist.isEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_page_action_placeholder__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-testid": "empty-wishlist",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_8__.HeartIcon, {
      boxSize: 8
    }),
    heading: formatMessage({
      id: "1yoQ91",
      defaultMessage: [{
        "type": 0,
        "value": "No Wishlist Items"
      }]
    }),
    text: formatMessage({
      id: "Mv2pEb",
      defaultMessage: [{
        "type": 0,
        "value": "Continue shopping and add items to your wishlist"
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
  }), wishlist.hasDetail && !wishlist.isEmpty && wishlist.items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_product_item_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: item.id,
    product: _objectSpread(_objectSpread({}, item.product), {}, {
      quantity: localQuantity[item.productId] ? localQuantity[item.productId] : item.quantity
    }),
    showLoading: isWishlistItemLoading && selectedItem === item.productId,
    primaryAction: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_partials_wishlist_primary_action__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    onItemQuantityChange: quantity => handleItemQuantityChanged(quantity, item),
    secondaryActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_partials_wishlist_secondary_button_group__WEBPACK_IMPORTED_MODULE_11__["default"], {
      productListItemId: item.id,
      onClick: handleActionClicked
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AccountWishlist);

/***/ }),

/***/ "./app/pages/account/wishlist/partials/wishlist-primary-action.jsx":
/*!*************************************************************************!*\
  !*** ./app/pages/account/wishlist/partials/wishlist-primary-action.jsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _components_item_variant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _components_product_view_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/product-view-modal */ "./app/components/product-view-modal/index.jsx");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./app/constants.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








/**
 * Renders primary action on a product-item card in the form of a button.
 * Represents the most prominent action you want the user to perform with the product-item
 * eg.: Add to cart option for wishlist items
 */

const WishlistPrimaryAction = () => {
  var _variant$type;

  const variant = (0,_components_item_variant__WEBPACK_IMPORTED_MODULE_3__.useItemVariant)();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const isMasterProduct = (variant === null || variant === void 0 ? void 0 : (_variant$type = variant.type) === null || _variant$type === void 0 ? void 0 : _variant$type.master) || false;
  const showToast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useDisclosure)();

  const handleAddToCart = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item, quantity) {
      setIsLoading(true);
      const productItems = [{
        productId: item.id || item.productId,
        price: item.price,
        quantity
      }];

      try {
        yield basket.addItemToBasket(productItems);
        showToast({
          title: formatMessage({
            id: "2WRHXI",
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
              "value": " added to cart"
            }]
          }, {
            quantity: quantity
          }),
          status: 'success'
        });
        onClose();
      } catch (error) {
        showToast({
          title: formatMessage({
            id: "+y/wae",
            defaultMessage: [{
              "type": 1,
              "value": "errorMessage"
            }]
          }, {
            errorMessage: _constants__WEBPACK_IMPORTED_MODULE_6__.API_ERROR_MESSAGE
          }),
          status: 'error'
        });
      }

      setIsLoading(false);
    });

    return function handleAddToCart(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, isMasterProduct ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    w: 'full',
    variant: 'solid',
    onClick: onOpen
  }, "Select Options"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_product_view_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    product: variant,
    addToCart: (variant, quantity) => handleAddToCart(variant, quantity)
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    variant: 'solid',
    onClick: () => handleAddToCart(variant, variant.quantity),
    w: 'full',
    isLoading: isLoading
  }, "Add To Cart"));
};

/* harmony default export */ __webpack_exports__["default"] = (WishlistPrimaryAction);

/***/ }),

/***/ "./app/pages/account/wishlist/partials/wishlist-secondary-button-group.jsx":
/*!*********************************************************************************!*\
  !*** ./app/pages/account/wishlist/partials/wishlist-secondary-button-group.jsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REMOVE_WISHLIST_ITEM_CONFIRMATION_DIALOG_CONFIG": function() { return /* binding */ REMOVE_WISHLIST_ITEM_CONFIRMATION_DIALOG_CONFIG; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var _components_confirmation_modal_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/confirmation-modal/index */ "./app/components/confirmation-modal/index.jsx");
/* harmony import */ var _components_item_variant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constants */ "./app/constants.js");



/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */










const REMOVE_WISHLIST_ITEM_CONFIRMATION_DIALOG_CONFIG = {
  dialogTitle: (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessage)({
    id: "4UPOXx",
    defaultMessage: [{
      "type": 0,
      "value": "Confirm Remove Item"
    }]
  }),
  confirmationMessage: (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessage)({
    id: "92jEbC",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to remove this item from your wishlist?"
    }]
  }),
  primaryActionLabel: (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessage)({
    id: "dfEp3Z",
    defaultMessage: [{
      "type": 0,
      "value": "Yes, remove item"
    }]
  }),
  alternateActionLabel: (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessage)({
    id: "SRkOX8",
    defaultMessage: [{
      "type": 0,
      "value": "No, keep item"
    }]
  }),
  onPrimaryAction: _utils_utils__WEBPACK_IMPORTED_MODULE_8__.noop
};
/**
 * Renders secondary actions on a product-item card in the form of a button group.
 * Represents other actions you want the user to perform with the product-item (eg.: Remove or Edit)
 */

const WishlistSecondaryButtonGroup = ({
  productListItemId,
  onClick = _utils_utils__WEBPACK_IMPORTED_MODULE_8__.noop
}) => {
  const variant = (0,_components_item_variant__WEBPACK_IMPORTED_MODULE_7__.useItemVariant)();
  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const modalProps = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.useDisclosure)();
  const toast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_12__["default"])();

  const showRemoveItemConfirmation = () => {
    modalProps.onOpen();
  };

  const handleItemRemove = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      onClick(variant.id);

      try {
        yield wishlist.removeListItem(productListItemId);
        toast({
          title: formatMessage({
            id: "9rqdrm",
            defaultMessage: [{
              "type": 0,
              "value": "Item removed from wishlist"
            }]
          }),
          status: 'success'
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
            errorMessage: _constants__WEBPACK_IMPORTED_MODULE_9__.API_ERROR_MESSAGE
          }),
          status: 'error'
        });
      }

      onClick('');
    });

    return function handleItemRemove() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.ButtonGroup, {
    spacing: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
    variant: "link",
    size: "sm",
    onClick: showRemoveItemConfirmation,
    "data-testid": `sf-wishlist-remove-${productListItemId}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "G/yZLu",
    defaultMessage: [{
      "type": 0,
      "value": "Remove"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_confirmation_modal_index__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, REMOVE_WISHLIST_ITEM_CONFIRMATION_DIALOG_CONFIG, {
    onPrimaryAction: handleItemRemove
  }, modalProps)));
};

WishlistSecondaryButtonGroup.propTypes = {
  productListItemId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (WishlistSecondaryButtonGroup);

/***/ })

}]);
//# sourceMappingURL=pages-account-wishlist.js.map