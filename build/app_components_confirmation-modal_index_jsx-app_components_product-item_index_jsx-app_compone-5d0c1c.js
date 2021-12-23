"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["app_components_confirmation-modal_index_jsx-app_components_product-item_index_jsx-app_compone-5d0c1c"],{

/***/ "./app/components/confirmation-modal/index.jsx":
/*!*****************************************************!*\
  !*** ./app/components/confirmation-modal/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_account_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/account/constant */ "./app/pages/account/constant.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");


const _excluded = ["dialogTitle", "confirmationMessage", "primaryActionLabel", "alternateActionLabel", "onPrimaryAction", "onAlternateAction"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const ConfirmationModal = _ref => {
  let {
    dialogTitle = _pages_account_constant__WEBPACK_IMPORTED_MODULE_5__.CONFIRMATION_DIALOG_DEFAULT_CONFIG.dialogTitle,
    confirmationMessage = _pages_account_constant__WEBPACK_IMPORTED_MODULE_5__.CONFIRMATION_DIALOG_DEFAULT_CONFIG.confirmationMessage,
    primaryActionLabel = _pages_account_constant__WEBPACK_IMPORTED_MODULE_5__.CONFIRMATION_DIALOG_DEFAULT_CONFIG.primaryActionLabel,
    alternateActionLabel = _pages_account_constant__WEBPACK_IMPORTED_MODULE_5__.CONFIRMATION_DIALOG_DEFAULT_CONFIG.alternateActionLabel,
    onPrimaryAction = _utils_utils__WEBPACK_IMPORTED_MODULE_3__.noop,
    onAlternateAction = _utils_utils__WEBPACK_IMPORTED_MODULE_3__.noop
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();

  const handleConfirmClick = () => {
    onPrimaryAction();
    props.onClose();
  };

  const handleAlternateActionClick = () => {
    onAlternateAction();
    props.onClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AlertDialog, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    isOpen: props.isOpen,
    isCentered: true,
    onClose: handleAlternateActionClick
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AlertDialogOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AlertDialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AlertDialogHeader, null, formatMessage(dialogTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AlertDialogBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, null, formatMessage(confirmationMessage))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AlertDialogFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    variant: "ghost",
    mr: 3,
    onClick: handleAlternateActionClick
  }, formatMessage(alternateActionLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    variant: "solid",
    onClick: handleConfirmClick
  }, formatMessage(primaryActionLabel)))));
};

ConfirmationModal.propTypes = {
  /**
   * Prop to check if modal is open
   */
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),

  /**
   * Callback invoked to open the modal
   */
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),

  /**
   * Callback invoked to close the modal
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),

  /**
   * Text to be displayed as modal header
   */
  dialogTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Text to display in confirmation modal prompting user to pick an action
   */
  confirmationMessage: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Button Label for primary action in confirmation modal
   */
  primaryActionLabel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Button Label for alternate or secondary action in confirmation modal
   */
  alternateActionLabel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),

  /**
   * Action to execute if user selects primary action
   */
  onPrimaryAction: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),

  /**
   * Action to execute if user selects alternate or secondary action
   */
  onAlternateAction: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmationModal);

/***/ }),

/***/ "./app/components/product-item/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/product-item/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/transition/dist/chakra-ui-transition.esm.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var _item_variant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-variant */ "./app/components/item-variant/index.jsx");
/* harmony import */ var _item_variant_item_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-variant/item-image */ "./app/components/item-variant/item-image.jsx");
/* harmony import */ var _item_variant_item_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-variant/item-name */ "./app/components/item-variant/item-name.jsx");
/* harmony import */ var _item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-variant/item-attributes */ "./app/components/item-variant/item-attributes.jsx");
/* harmony import */ var _item_variant_item_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../item-variant/item-price */ "./app/components/item-variant/item-price.jsx");
/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading-spinner */ "./app/components/loading-spinner/index.jsx");
/* harmony import */ var _quantity_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quantity-picker */ "./app/components/quantity-picker/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Chakra Components

 // Project Components








 // Utilities

 // Hooks


/**
 * Component representing a product item usually in a list with details about the product - name, variant, pricing, etc.
 * @param {Object} product Product to be represented in the list item.
 * @param {node} primaryAction Child component representing the most prominent action to be performed by the user.
 * @param {node} secondaryActions Child component representing the other actions relevant to the product to be performed by the user.
 * @param {func} onItemQuantityChange callback function to be invoked whenever item quantity changes.
 * @param {boolean} showLoading Renders a loading spinner with overlay if set to true.
 * @returns A JSX element representing product item in a list (eg: wishlist, cart, etc).
 */

const ProductItem = ({
  product,
  primaryAction,
  secondaryActions,
  onItemQuantityChange = _utils_utils__WEBPACK_IMPORTED_MODULE_10__.noop,
  showLoading = false
}) => {
  const {
    stepQuantity,
    showInventoryMessage,
    inventoryMessage,
    quantity,
    setQuantity
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_11__.useProduct)(product);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    position: "relative",
    "data-testid": `sf-cart-item-${product.productId}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_variant__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: product
  }, showLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    layerStyle: "cardBordered",
    align: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {
    width: "full",
    alignItems: "flex-start",
    backgroundColor: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_variant_item_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: ['88px', '136px'],
    mr: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 3,
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_variant_item_name__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_variant_item_attributes__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_2__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    marginTop: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_variant_item_price__WEBPACK_IMPORTED_MODULE_7__["default"], {
    align: "left"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {
    align: "flex-end",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, {
    fontSize: "sm",
    color: "gray.700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "VSlYv6",
    defaultMessage: [{
      "type": 0,
      "value": "Quantity:"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_quantity_picker__WEBPACK_IMPORTED_MODULE_9__["default"], {
    step: stepQuantity,
    value: quantity,
    min: 0,
    clampValueOnBlur: false,
    onBlur: e => {
      // Default to last known quantity if a user leaves the box with an invalid value
      const {
        value
      } = e.target;

      if (!value) {
        setQuantity(product.quantity);
      }
    },
    onChange: (stringValue, numberValue) => {
      // Set the Quantity of product to value of input if value number
      if (numberValue >= 0) {
        // Call handler
        onItemQuantityChange(numberValue).then(isValidChange => isValidChange && setQuantity(numberValue));
      } else if (stringValue === '') {
        // We want to allow the use to clear the input to start a new input so here we set the quantity to '' so NAN is not displayed
        // User will not be able to add '' qauntity to the cart due to the add to cart button enablement rules
        setQuantity(stringValue);
      }
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_2__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_item_variant_item_price__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    display: ['none', 'block', 'block', 'block']
  }, primaryAction))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, null, product && showInventoryMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Fade, {
    in: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Text, {
    color: "orange.600",
    fontWeight: 600
  }, inventoryMessage))), secondaryActions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    display: ['block', 'none', 'none', 'none'],
    w: 'full'
  }, primaryAction))));
};

ProductItem.propTypes = {
  product: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onItemQuantityChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAddItemToCart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  showLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isWishlistItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  primaryAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  secondaryActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

/***/ }),

/***/ "./app/components/product-view-modal/index.jsx":
/*!*****************************************************!*\
  !*** ./app/components/product-view-modal/index.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _partials_product_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/product-view */ "./app/partials/product-view/index.jsx");
/* harmony import */ var _hooks_use_product_view_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-product-view-modal */ "./app/hooks/use-product-view-modal.js");


const _excluded = ["product", "isOpen", "onClose"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





/**
 * A Modal that contains Product View
 */

const ProductViewModal = _ref => {
  let {
    product,
    isOpen,
    onClose
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const productViewModalData = (0,_hooks_use_product_view_modal__WEBPACK_IMPORTED_MODULE_5__.useProductViewModal)(product);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Modal, {
    "data-testid": 'sf-product-view-modal',
    size: "4xl",
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalCloseButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
    pb: 8,
    bg: "white",
    paddingBottom: 6,
    marginTop: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_partials_product_view__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    showFullLink: true,
    imageSize: "sm",
    product: productViewModalData.product,
    isLoading: productViewModalData.isFetching
  }, props)))));
};

ProductViewModal.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  product: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  actionButtons: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  onModalClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (ProductViewModal);

/***/ }),

/***/ "./app/hooks/use-product-view-modal.js":
/*!*********************************************!*\
  !*** ./app/hooks/use-product-view-modal.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProductViewModal": function() { return /* binding */ useProductViewModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/url */ "./app/utils/url.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _commerce_api_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commerce-api/contexts */ "./app/commerce-api/contexts.js");
/* harmony import */ var _commerce_api_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commerce-api/utils */ "./app/commerce-api/utils.js");
/* harmony import */ var _use_variant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-variant */ "./app/hooks/use-variant.js");
/* harmony import */ var _use_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./app/constants.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









/**
 * This hooks is responsible for fetching a product detail based on the variation selection
 * and managing the variation params on the url when the modal is open/close
 * @param initialProduct - the initial product when the modal is first open
 * @returns object
 */

const useProductViewModal = initialProduct => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useLocation)();
  const api = (0,_commerce_api_contexts__WEBPACK_IMPORTED_MODULE_4__.useCommerceAPI)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialProduct);
  const [isFetching, setIsFetching] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const toast = (0,_use_toast__WEBPACK_IMPORTED_MODULE_7__.useToast)();
  const variant = (0,_use_variant__WEBPACK_IMPORTED_MODULE_6__.useVariant)(product);

  const cleanUpVariantParams = () => {
    const paramToRemove = [...product.variationAttributes.map(({
      id
    }) => id), 'pid'];
    const updatedParams = (0,_utils_url__WEBPACK_IMPORTED_MODULE_3__.removeQueryParamsFromPath)(`${location.search}`, paramToRemove);
    history.replace({
      search: updatedParams
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // when the modal is first mounted,
    // clean up the params in case there are variant params not related to current product
    cleanUpVariantParams();
    return () => {
      cleanUpVariantParams();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // getting product detail based on variant selection for stockLevel
    const getProductDetailByVariant = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
        // Fetch the product detail when the user select different variant
        if (variant && variant.productId !== (product === null || product === void 0 ? void 0 : product.id)) {
          setIsFetching(true);
          const res = yield api.shopperProducts.getProduct({
            parameters: {
              id: variant.productId,
              allImages: true
            }
          });

          if ((0,_commerce_api_utils__WEBPACK_IMPORTED_MODULE_5__.isError)(res)) {
            setIsFetching(false);
            toast({
              title: intl.formatMessage({
                id: "+y/wae",
                defaultMessage: [{
                  "type": 1,
                  "value": "errorMessage"
                }]
              }, {
                errorMessage: _constants__WEBPACK_IMPORTED_MODULE_8__.API_ERROR_MESSAGE
              }),
              status: 'error'
            });
            throw new Error(res);
          }

          setProduct(res);
          setIsFetching(false);
        }
      });

      return function getProductDetailByVariant() {
        return _ref.apply(this, arguments);
      };
    }();

    if (variant) {
      const {
        variationValues
      } = variant; // update the url with the new product id and variation values when the variant changes

      const updatedUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_3__.rebuildPathWithParams)(`${location.pathname}${location.search}`, _objectSpread(_objectSpread({}, variationValues), {}, {
        pid: variant.productId
      }));
      history.replace(updatedUrl);
    }

    getProductDetailByVariant();
  }, [variant]);
  return {
    product,
    variant,
    isFetching
  };
};

/***/ })

}]);
//# sourceMappingURL=app_components_confirmation-modal_index_jsx-app_components_product-item_index_jsx-app_compone-5d0c1c.js.map