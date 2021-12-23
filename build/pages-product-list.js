"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-product-list"],{

/***/ "./app/components/breadcrumb/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/breadcrumb/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/breadcrumb/dist/chakra-ui-breadcrumb.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");


const _excluded = ["categories"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



 // Components

 // Icons

 // Others


/**
 * A simplification of the Chakra `Breadcrumb` component for our project needs. Given
 * a list of categories, display a breadcrumb and it's items.
 */

const Breadcrumb = _ref => {
  let {
    categories
  } = _ref,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useStyleConfig)('Breadcrumb');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Breadcrumb, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "sf-breadcrumb"
  }, styles.container, {
    separator: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, styles.icon)
  }, rest), categories.map(category => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbItem, {
    key: category.id,
    "data-testid": "sf-crumb-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbLink, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: (0,_utils_url__WEBPACK_IMPORTED_MODULE_5__.categoryUrlBuilder)(category, intl.locale)
  }, styles.link), category.name))));
};

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.propTypes = {
  /**
   * The categories to be displayed in this breadcrumb.
   */
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

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

/***/ "./app/hooks/use-categories.js":
/*!*************************************!*\
  !*** ./app/hooks/use-categories.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCategories": function() { return /* binding */ useCategories; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts */ "./app/contexts/index.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * Custom React hook to get the categories
 * @returns {{categories: Object, setCategories: function}[]}
 */

const useCategories = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.CategoriesContext);

/***/ }),

/***/ "./app/pages/product-list/index.jsx":
/*!******************************************!*\
  !*** ./app/pages/product-list/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/select/dist/chakra-ui-select.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pagination */ "./app/components/pagination/index.jsx");
/* harmony import */ var _components_product_tile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/product-tile */ "./app/components/product-tile/index.jsx");
/* harmony import */ var _components_responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var _partials_refinements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./partials/refinements */ "./app/pages/product-list/partials/refinements.jsx");
/* harmony import */ var _partials_selected_refinements__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./partials/selected-refinements */ "./app/pages/product-list/partials/selected-refinements.jsx");
/* harmony import */ var _partials_empty_results__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/empty-results */ "./app/pages/product-list/partials/empty-results.jsx");
/* harmony import */ var _partials_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./partials/page-header */ "./app/pages/product-list/partials/page-header.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");
/* harmony import */ var _hooks_use_search_params__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/use-search-params */ "./app/hooks/use-search-params.js");
/* harmony import */ var _hooks_use_categories__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-categories */ "./app/hooks/use-categories.js");
/* harmony import */ var pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/universal/errors */ "./node_modules/pwa-kit-react-sdk/ssr/universal/errors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _components_loading_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/loading-spinner */ "./app/components/loading-spinner/index.jsx");




const _excluded = ["searchQuery", "productSearchResult", "staticContext", "location", "isLoading"],
      _excluded2 = ["sortUrls", "productSearchResult", "basePath"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




 // Components

 // Project Components







 // Icons

 // Hooks





 // Others

 // Constants



 // NOTE: You can ignore certain refinements on a template level by updating the below
// list of ignored refinements.

const REFINEMENT_DISALLOW_LIST = ['c_isNew'];
/*
 * This is a simple product listing page. It displays a paginated list
 * of product hit objects. Allowing for sorting and filtering based on the
 * allowable filters and sort refinements.
 */

const ProductList = props => {
  var _productSearchResult$, _category, _category2, _category3, _selectedSortingOptio;

  const {
    searchQuery,
    productSearchResult,
    // eslint-disable-next-line react/prop-types
    staticContext,
    location,
    isLoading
  } = props,
        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, _excluded);

  const {
    total,
    sortingOptions
  } = productSearchResult || {};
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_24__.useDisclosure)();
  const [sortOpen, setSortOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_25__["default"])();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_22__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useHistory)();
  const params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useParams)();
  const {
    categories
  } = (0,_hooks_use_categories__WEBPACK_IMPORTED_MODULE_19__.useCategories)();
  const toast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_16__.useToast)(); // Get the current category from global state.

  let category = undefined;

  if (!searchQuery) {
    category = categories[params.categoryId];
  }

  const basePath = `${location.pathname}${location.search}`; // Reset scroll position when `isLoaded` becomes `true`.

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    isLoading && window.scrollTo(0, 0);
    setFiltersLoading(isLoading);
  }, [isLoading]); // Get urls to be used for pagination, page size changes, and sorting.

  const pageUrls = (0,_hooks__WEBPACK_IMPORTED_MODULE_15__.usePageUrls)({
    total
  });
  const sortUrls = (0,_hooks__WEBPACK_IMPORTED_MODULE_15__.useSortUrls)({
    options: sortingOptions
  });
  const limitUrls = (0,_hooks__WEBPACK_IMPORTED_MODULE_15__.useLimitUrls)(); // If we are loaded and still have no products, show the no results component.

  const showNoResults = !isLoading && productSearchResult && !(productSearchResult !== null && productSearchResult !== void 0 && productSearchResult.hits);
  /**************** Wishlist ****************/

  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_17__["default"])(); // keep track of the items has been add/remove to/from wishlist

  const [wishlistLoading, setWishlistLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);

  const addItemToWishlist = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (product) {
      try {
        setWishlistLoading([...wishlistLoading, product.productId]);
        yield wishlist.createListItem({
          id: product.productId,
          quantity: 1
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
          action:
          /*#__PURE__*/
          // it would be better if we could use <Button as={Link}>
          // but unfortunately the Link component is not compatible
          // with Chakra Toast, since the ToastManager is rendered via portal
          // and the toast doesn't have access to intl provider, which is a
          // requirement of the Link component.
          react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.Button, {
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
            errorMessage: _constants__WEBPACK_IMPORTED_MODULE_21__.API_ERROR_MESSAGE
          }),
          status: 'error'
        });
      } finally {
        setWishlistLoading(wishlistLoading.filter(id => id !== product.productId));
      }
    });

    return function addItemToWishlist(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const removeItemFromWishlist = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* (product) {
      try {
        setWishlistLoading([...wishlistLoading, product.productId]);
        yield wishlist.removeListItemByProductId(product.productId);
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
            errorMessage: _constants__WEBPACK_IMPORTED_MODULE_21__.API_ERROR_MESSAGE
          }),
          status: 'error'
        });
      } finally {
        setWishlistLoading(wishlistLoading.filter(id => id !== product.productId));
      }
    });

    return function removeItemFromWishlist(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**************** Filters ****************/


  const [searchParams, {
    stringify: stringifySearchParams
  }] = (0,_hooks__WEBPACK_IMPORTED_MODULE_15__.useSearchParams)();
  const [filtersLoading, setFiltersLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // Toggles filter on and off

  const toggleFilter = (value, attributeId, selected, allowMultiple = true) => {
    const searchParamsCopy = _objectSpread({}, searchParams); // Remove the `offset` search param if present.


    delete searchParamsCopy.offset; // If we aren't allowing for multiple selections, simply clear any value set for the
    // attribute, and apply a new one if required.

    if (!allowMultiple) {
      delete searchParamsCopy.refine[attributeId];

      if (!selected) {
        searchParamsCopy.refine[attributeId] = value.value;
      }
    } else {
      // Get the attibute value as an array.
      let attributeValue = searchParamsCopy.refine[attributeId] || [];
      let values = Array.isArray(attributeValue) ? attributeValue : attributeValue.split('|'); // Either set the value, or filter the value out.

      if (!selected) {
        values.push(value.value);
      } else {
        var _values;

        values = (_values = values) === null || _values === void 0 ? void 0 : _values.filter(v => v !== value.value);
      } // Update the attribute value in the new search params.


      searchParamsCopy.refine[attributeId] = values; // If the update value is an empty array, remove the current attribute key.

      if (searchParamsCopy.refine[attributeId].length === 0) {
        delete searchParamsCopy.refine[attributeId];
      }
    }

    navigate(`${location.pathname}?${stringifySearchParams(searchParamsCopy)}`);
  }; // Clears all filters


  const resetFilters = () => {
    navigate(window.location.pathname);
  };

  let selectedSortingOptionLabel = productSearchResult === null || productSearchResult === void 0 ? void 0 : (_productSearchResult$ = productSearchResult.sortingOptions) === null || _productSearchResult$ === void 0 ? void 0 : _productSearchResult$.find(option => option.id === (productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.selectedSortingOption)); // API does not always return a selected sorting order

  if (!selectedSortingOptionLabel) {
    selectedSortingOptionLabel = productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.sortingOptions[0];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "sf-product-list-page",
    "data-testid": "sf-product-list-page",
    layerStyle: "page",
    paddingTop: {
      base: 6,
      lg: 8
    }
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_6__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, (_category = category) === null || _category === void 0 ? void 0 : _category.pageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: (_category2 = category) === null || _category2 === void 0 ? void 0 : _category2.pageDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "keywords",
    content: (_category3 = category) === null || _category3 === void 0 ? void 0 : _category3.pageKeywords
  })), showNoResults ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_empty_results__WEBPACK_IMPORTED_MODULE_12__["default"], {
    searchQuery: searchQuery,
    category: category
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Stack, {
    display: {
      base: 'none',
      lg: 'flex'
    },
    direction: "row",
    justify: "flex-start",
    align: "flex-start",
    spacing: 4,
    marginBottom: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Flex, {
    align: "left",
    width: "287px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_page_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
    searchQuery: searchQuery,
    category: category,
    productSearchResult: productSearchResult,
    isLoading: isLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Box, {
    flex: 1,
    paddingTop: '45px'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_selected_refinements__WEBPACK_IMPORTED_MODULE_11__["default"], {
    filters: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.refinements,
    toggleFilter: toggleFilter,
    selectedFilterValues: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.selectedRefinements
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Box, {
    paddingTop: '45px'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Sort, {
    sortUrls: sortUrls,
    productSearchResult: productSearchResult,
    basePath: basePath
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_responsive__WEBPACK_IMPORTED_MODULE_9__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_page_header__WEBPACK_IMPORTED_MODULE_13__["default"], {
    searchQuery: searchQuery,
    category: category,
    productSearchResult: productSearchResult,
    isLoading: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Stack, {
    display: {
      base: 'flex',
      md: 'none'
    },
    direction: "row",
    justify: "flex-start",
    align: "center",
    spacing: 1,
    height: 12,
    borderColor: "gray.100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Flex, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.Button, {
    fontSize: "sm",
    colorScheme: "black",
    variant: "outline",
    marginRight: 2,
    display: "inline-flex",
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_14__.FilterIcon, {
      boxSize: 5
    }),
    onClick: onOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_29__["default"], {
    id: "9Obw6C",
    defaultMessage: [{
      "type": 0,
      "value": "Filter"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Flex, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.Button, {
    maxWidth: "245px",
    fontSize: "sm",
    marginRight: 2,
    colorScheme: "black",
    variant: "outline",
    display: "inline-flex",
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, {
      boxSize: 5
    }),
    onClick: () => setSortOpen(true)
  }, formatMessage({
    id: "RlxeOk",
    defaultMessage: [{
      "type": 0,
      "value": "Sort By: "
    }, {
      "type": 1,
      "value": "sortOption"
    }]
  }, {
    sortOption: (_selectedSortingOptio = selectedSortingOptionLabel) === null || _selectedSortingOptio === void 0 ? void 0 : _selectedSortingOptio.label
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Box, {
    marginBottom: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_selected_refinements__WEBPACK_IMPORTED_MODULE_11__["default"], {
    filters: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.refinements,
    toggleFilter: toggleFilter,
    selectedFilterValues: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.selectedRefinements
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Grid, {
    templateColumns: {
      base: '1fr',
      md: '280px 1fr'
    },
    columnGap: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Stack, {
    display: {
      base: 'none',
      md: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_refinements__WEBPACK_IMPORTED_MODULE_10__["default"], {
    isLoading: filtersLoading,
    toggleFilter: toggleFilter,
    filters: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.refinements,
    selectedFilters: searchParams.refine
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.SimpleGrid, {
    columns: [2, 2, 3, 3],
    spacingX: 4,
    spacingY: {
      base: 12,
      lg: 16
    }
  }, isLoading || !productSearchResult ? new Array(searchParams.limit).fill(0).map((value, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_product_tile__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
    key: index
  })) : productSearchResult.hits.map(productSearchItem => {
    const productId = productSearchItem.productId;
    const isInWishlist = !!wishlist.findItemByProductId(productId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_product_tile__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "data-testid": `sf-product-tile-${productSearchItem.productId}`,
      key: productSearchItem.productId,
      product: productSearchItem,
      enableFavourite: true,
      isFavourite: isInWishlist,
      onFavouriteToggle: isFavourite => {
        const action = isFavourite ? addItemToWishlist : removeItemFromWishlist;
        return action(productSearchItem);
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Flex, {
    justifyContent: ['center', 'center', 'flex-start'],
    paddingTop: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentURL: basePath,
    urls: pageUrls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__.Select, {
    display: "none",
    value: basePath,
    onChange: ({
      target
    }) => {
      history.push(target.value);
    }
  }, limitUrls.map((href, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("option", {
    key: href,
    value: href
  }, _constants__WEBPACK_IMPORTED_MODULE_21__.DEFAULT_LIMIT_VALUES[index]))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.Modal, {
    isOpen: isOpen,
    onClose: onClose,
    size: "full",
    motionPreset: "slideInBottom",
    scrollBehavior: "inside"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.ModalOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.ModalContent, {
    top: 0,
    marginTop: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.ModalHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Text, {
    fontWeight: "bold",
    fontSize: "2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_29__["default"], {
    id: "9Obw6C",
    defaultMessage: [{
      "type": 0,
      "value": "Filter"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.ModalCloseButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.ModalBody, {
    py: 4
  }, filtersLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_components_loading_spinner__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_partials_refinements__WEBPACK_IMPORTED_MODULE_10__["default"], {
    toggleFilter: toggleFilter,
    filters: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.refinements,
    selectedFilters: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.selectedRefinements
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.ModalFooter // justify="space-between"
  , {
    display: "block",
    width: "full",
    borderTop: "1px solid",
    borderColor: "gray.100",
    paddingBottom: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.Button, {
    width: "full",
    onClick: onClose
  }, formatMessage({
    id: "3cfRtZ",
    defaultMessage: [{
      "type": 0,
      "value": "View "
    }, {
      "type": 1,
      "value": "prroductCount"
    }, {
      "type": 0,
      "value": " items"
    }]
  }, {
    prroductCount: productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.total
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.Button, {
    width: "full",
    variant: "outline",
    onClick: () => resetFilters()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_29__["default"], {
    id: "MsGXc3",
    defaultMessage: [{
      "type": 0,
      "value": "Clear Filters"
    }]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.Drawer, {
    placement: "bottom",
    isOpen: sortOpen,
    onClose: () => setSortOpen(false),
    size: "sm",
    motionPreset: "slideInBottom",
    scrollBehavior: "inside",
    isFullHeight: false,
    height: "50%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.DrawerOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.DrawerContent, {
    marginTop: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.DrawerHeader, {
    boxShadow: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Text, {
    fontWeight: "bold",
    fontSize: "2xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_29__["default"], {
    id: "8d6kio",
    defaultMessage: [{
      "type": 0,
      "value": "Sort By"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.DrawerCloseButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_31__.DrawerBody, null, sortUrls.map((href, idx) => {
    var _selectedSortingOptio2, _productSearchResult$2, _productSearchResult$3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_27__.Button, {
      width: "full",
      onClick: () => {
        setSortOpen(false);
        history.push(href);
      },
      fontSize: 'md',
      key: idx,
      marginTop: 0,
      variant: "menu-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.Text, {
      as: ((_selectedSortingOptio2 = selectedSortingOptionLabel) === null || _selectedSortingOptio2 === void 0 ? void 0 : _selectedSortingOptio2.label) === (productSearchResult === null || productSearchResult === void 0 ? void 0 : (_productSearchResult$2 = productSearchResult.sortingOptions[idx]) === null || _productSearchResult$2 === void 0 ? void 0 : _productSearchResult$2.label) && 'u'
    }, productSearchResult === null || productSearchResult === void 0 ? void 0 : (_productSearchResult$3 = productSearchResult.sortingOptions[idx]) === null || _productSearchResult$3 === void 0 ? void 0 : _productSearchResult$3.label));
  })))));
};

ProductList.getTemplateName = () => 'product-list';

ProductList.shouldGetProps = ({
  previousLocation,
  location
}) => !previousLocation || previousLocation.pathname !== location.pathname || previousLocation.search !== location.search;

ProductList.getProps = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(function* ({
    res,
    params,
    location,
    api
  }) {
    var _productSearchResult$4, _category$type;

    const {
      categoryId
    } = params;
    const urlParams = new URLSearchParams(location.search);
    let searchQuery = urlParams.get('q');
    let isSearch = false;

    if (searchQuery) {
      isSearch = true;
    } // In case somebody navigates to /search without a param


    if (!categoryId && !isSearch) {
      // We will simulate search for empty string
      return {
        searchQuery: ' ',
        productSearchResult: {}
      };
    }

    const searchParams = (0,_hooks_use_search_params__WEBPACK_IMPORTED_MODULE_18__.parse)(location.search, false);

    if (!searchParams.refine.includes(`cgid=${categoryId}`) && categoryId) {
      searchParams.refine.push(`cgid=${categoryId}`);
    } // only search master products


    searchParams.refine.push('htype=master'); // Set the `cache-control` header values to align with the Commerce API settings.

    if (res) {
      res.set('Cache-Control', 'public, must-revalidate, max-age=900');
    }

    const [category, productSearchResult] = yield Promise.all([isSearch ? Promise.resolve() : api.shopperProducts.getCategory({
      parameters: {
        id: categoryId,
        levels: 0
      }
    }), api.shopperSearch.productSearch({
      parameters: searchParams
    })]); // Apply disallow list to refinements.

    productSearchResult.refinements = productSearchResult === null || productSearchResult === void 0 ? void 0 : (_productSearchResult$4 = productSearchResult.refinements) === null || _productSearchResult$4 === void 0 ? void 0 : _productSearchResult$4.filter(({
      attributeId
    }) => !REFINEMENT_DISALLOW_LIST.includes(attributeId)); // The `isomorphic-sdk` returns error objects when they occur, so we
    // need to check the category type and throw if required.

    if (category !== null && category !== void 0 && (_category$type = category.type) !== null && _category$type !== void 0 && _category$type.endsWith('category-not-found')) {
      throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_20__.HTTPNotFound(category.detail);
    }

    return {
      searchQuery: searchQuery,
      productSearchResult
    };
  });

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}();

ProductList.propTypes = {
  /**
   * The search result object showing all the product hits, that belong
   * in the supplied category.
   */
  productSearchResult: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),

  /*
   * Indicated that `getProps` has been called but has yet to complete.
   *
   * Notes: This prop is internally provided.
   */
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /*
   * Object that represents the current location, it consists of the `pathname`
   * and `search` values.
   *
   * Notes: This prop is internally provided.
   */
  location: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  searchQuery: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  onAddToWishlistClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onRemoveWishlistClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

const Sort = _ref4 => {
  let {
    sortUrls,
    productSearchResult,
    basePath
  } = _ref4,
      otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref4, _excluded2);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_25__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useHistory)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_32__.FormControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "sf-product-list-sort",
    id: "page_sort",
    width: "auto"
  }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__.Select, {
    value: basePath.replace(/(offset)=(\d+)/i, '$1=0'),
    onChange: ({
      target
    }) => {
      history.push(target.value);
    },
    height: 11,
    width: "240px"
  }, sortUrls.map((href, index) => {
    var _productSearchResult$5;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("option", {
      key: href,
      value: href
    }, intl.formatMessage({
      id: "RlxeOk",
      defaultMessage: [{
        "type": 0,
        "value": "Sort By: "
      }, {
        "type": 1,
        "value": "sortOption"
      }]
    }, {
      sortOption: productSearchResult === null || productSearchResult === void 0 ? void 0 : (_productSearchResult$5 = productSearchResult.sortingOptions[index]) === null || _productSearchResult$5 === void 0 ? void 0 : _productSearchResult$5.label
    }));
  })));
};

Sort.propTypes = {
  sortUrls: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  productSearchResult: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  basePath: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};

/***/ }),

/***/ "./app/pages/product-list/partials/checkbox-refinements.jsx":
/*!******************************************************************!*\
  !*** ./app/pages/product-list/partials/checkbox-refinements.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const CheckboxRefinements = ({
  filter,
  toggleFilter,
  selectedFilters
}) => {
  var _filter$values;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    spacing: 1
  }, (_filter$values = filter.values) === null || _filter$values === void 0 ? void 0 : _filter$values.filter(refinementValue => refinementValue.hitCount > 0).map(value => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      key: value.value
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
      isChecked: !!selectedFilters,
      onChange: () => toggleFilter(value, filter.attributeId, !!selectedFilters, false)
    }, value.label));
  }));
};

CheckboxRefinements.propTypes = {
  filter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  selectedFilters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (CheckboxRefinements);

/***/ }),

/***/ "./app/pages/product-list/partials/color-refinements.jsx":
/*!***************************************************************!*\
  !*** ./app/pages/product-list/partials/color-refinements.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./app/constants.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const ColorRefinements = ({
  filter,
  toggleFilter,
  selectedFilters
}) => {
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useMultiStyleConfig)('SwatchGroup', {
    variant: 'circle',
    disabled: false
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {
    columns: 2,
    spacing: 2,
    mt: 1
  }, filter.values.filter(refinementValue => refinementValue.hitCount > 0).map((value, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
      onClick: () => toggleFilter(value, filter.attributeId, selectedFilters === null || selectedFilters === void 0 ? void 0 : selectedFilters.includes(value.value)),
      spacing: 1,
      cursor: "pointer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.swatch, {
      color: selectedFilters !== null && selectedFilters !== void 0 && selectedFilters.includes(value.value) ? 'black' : 'gray.200',
      border: selectedFilters !== null && selectedFilters !== void 0 && selectedFilters.includes(value.value) ? '1px' : '0',
      "aria-checked": selectedFilters === null || selectedFilters === void 0 ? void 0 : selectedFilters.includes(value.value),
      variant: "outline",
      marginRight: 0,
      marginBottom: "-1px"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.swatchButton, {
      marginRight: 0,
      border: value.label.toLowerCase() === 'white' && '1px solid black'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      marginRight: 0,
      height: "100%",
      width: "100%",
      minWidth: "32px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_3__.cssColorGroups[value.presentationId.toLowerCase()],
      background: value.presentationId.toLowerCase() === 'miscellaneous' && _constants__WEBPACK_IMPORTED_MODULE_3__.cssColorGroups[value.presentationId.toLowerCase()]
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
      display: "flex",
      alignItems: "center",
      fontSize: "sm",
      marginBottom: "1px"
    }, `${value.label} (${value.hitCount})`)));
  }));
};

ColorRefinements.propTypes = {
  filter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  selectedFilters: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (ColorRefinements);

/***/ }),

/***/ "./app/pages/product-list/partials/empty-results.jsx":
/*!***********************************************************!*\
  !*** ./app/pages/product-list/partials/empty-results.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_recommended_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/recommended-products */ "./app/components/recommended-products/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const EmptySearchResults = ({
  searchQuery,
  category
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    "data-testid": "sf-product-empty-list-page",
    direction: "column",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 28,
    paddingBottom: 28
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
    boxSize: [6, 12, 12, 12],
    marginBottom: 5
  }), !searchQuery ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: ['l', 'l', 'xl', '2xl'],
    fontWeight: "700",
    marginBottom: 2
  }, intl.formatMessage({
    id: "product_list_page.no_results",
    defaultMessage: [{
      "type": 0,
      "value": "We couldn’t find anything for "
    }, {
      "type": 1,
      "value": "category"
    }, {
      "type": 0,
      "value": ". Try searching for a product or "
    }, {
      "type": 1,
      "value": "link"
    }, {
      "type": 0,
      "value": "."
    }]
  }, {
    category: category.name,
    link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
      to: '/'
    }, intl.formatMessage({
      id: "product_list_page.no_results.contact_us",
      defaultMessage: [{
        "type": 0,
        "value": "contact us"
      }]
    }))
  })), ' ') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: ['lg', 'lg', 'xl', '3xl'],
    fontWeight: "700",
    marginBottom: 2
  }, intl.formatMessage({
    id: "product_list_page.no_results_search_query",
    defaultMessage: [{
      "type": 0,
      "value": "We couldn’t find anything for \""
    }, {
      "type": 1,
      "value": "searchQuery"
    }, {
      "type": 0,
      "value": "\""
    }]
  }, {
    searchQuery: searchQuery
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: ['md', 'md', 'md', 'md'],
    fontWeight: "400"
  }, intl.formatMessage({
    id: "product_list_page.no_results_double_check",
    defaultMessage: [{
      "type": 0,
      "value": "Double-check your spelling and try again or "
    }, {
      "type": 1,
      "value": "link"
    }]
  }, {
    link: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
      variant: "link",
      to: '/'
    }, intl.formatMessage({
      id: "product_list_page.no_results.contact_us",
      defaultMessage: [{
        "type": 0,
        "value": "contact us"
      }]
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 16,
    marginTop: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "knAdWV",
      defaultMessage: [{
        "type": 0,
        "value": "Top Sellers"
      }]
    }),
    recommender: 'home-top-revenue-for-category',
    mx: {
      base: -4,
      md: -8,
      lg: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "y/sA02",
      defaultMessage: [{
        "type": 0,
        "value": "Most Viewed"
      }]
    }),
    recommender: 'products-in-all-categories',
    mx: {
      base: -4,
      md: -8,
      lg: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "y/sA02",
      defaultMessage: [{
        "type": 0,
        "value": "Most Viewed"
      }]
    }),
    recommender: 'products-in-all-categories',
    mx: {
      base: -4,
      md: -8,
      lg: 0
    }
  }))));
};

EmptySearchResults.propTypes = {
  searchQuery: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  category: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (EmptySearchResults);

/***/ }),

/***/ "./app/pages/product-list/partials/link-refinements.jsx":
/*!**************************************************************!*\
  !*** ./app/pages/product-list/partials/link-refinements.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/link */ "./app/components/link/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const LinkRefinements = ({
  filter
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    spacing: 1
  }, filter.values.map(value => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      display: "flex",
      alignItems: "center",
      lineHeight: {
        base: '44px',
        lg: '24px'
      },
      key: value.value,
      href: `/category/${value.value}`,
      useNavLink: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
      fontSize: "sm"
    }, value.label));
  }));
};

LinkRefinements.propTypes = {
  filter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (LinkRefinements);

/***/ }),

/***/ "./app/pages/product-list/partials/page-header.jsx":
/*!*********************************************************!*\
  !*** ./app/pages/product-list/partials/page-header.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/transition/dist/chakra-ui-transition.esm.js");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/breadcrumb */ "./app/components/breadcrumb/index.jsx");


const _excluded = ["category", "productSearchResult", "isLoading", "searchQuery"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Components

 // Project Components



const PageHeader = _ref => {
  let {
    category,
    productSearchResult,
    isLoading,
    searchQuery
  } = _ref,
      otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
    "data-testid": "sf-product-list-breadcrumb"
  }), category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], {
    categories: category.parentCategoryTree
  }), searchQuery && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, null, "Search Results for"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
    as: "h2",
    size: "lg",
    marginRight: 2
  }, `${(category === null || category === void 0 ? void 0 : category.name) || searchQuery || ''}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
    as: "h2",
    size: "lg",
    marginRight: 2
  }, _utils_utils__WEBPACK_IMPORTED_MODULE_4__.isServer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, "(", productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.total, ")") : // Fade in the total when available. When it's changed or not available yet, do not render it
  !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Fade, {
    in: true
  }, "(", productSearchResult === null || productSearchResult === void 0 ? void 0 : productSearchResult.total, ")"))));
};

PageHeader.propTypes = {
  category: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  productSearchResult: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  searchQuery: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (PageHeader);

/***/ }),

/***/ "./app/pages/product-list/partials/radio-refinements.jsx":
/*!***************************************************************!*\
  !*** ./app/pages/product-list/partials/radio-refinements.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/radio/dist/chakra-ui-radio.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const RadioRefinements = ({
  filter,
  toggleFilter,
  selectedFilters
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.RadioGroup, {
    value: selectedFilters
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    spacing: 1
  }, filter.values.filter(refinementValue => refinementValue.hitCount > 0).map(value => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
      key: value.value
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Radio, {
      display: "flex",
      alignItems: "center",
      height: {
        base: '44px',
        lg: '24px'
      },
      value: value.value,
      onChange: () => toggleFilter(value, filter.attributeId, selectedFilters === null || selectedFilters === void 0 ? void 0 : selectedFilters.includes(value.value), false),
      fontSize: "sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      marginLeft: -1,
      fontSize: "sm"
    }, value.label)));
  }))));
};

RadioRefinements.propTypes = {
  filter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  selectedFilters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (RadioRefinements);

/***/ }),

/***/ "./app/pages/product-list/partials/refinements.jsx":
/*!*********************************************************!*\
  !*** ./app/pages/product-list/partials/refinements.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_refinements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-refinements */ "./app/pages/product-list/partials/color-refinements.jsx");
/* harmony import */ var _size_refinements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size-refinements */ "./app/pages/product-list/partials/size-refinements.jsx");
/* harmony import */ var _radio_refinements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio-refinements */ "./app/pages/product-list/partials/radio-refinements.jsx");
/* harmony import */ var _checkbox_refinements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-refinements */ "./app/pages/product-list/partials/checkbox-refinements.jsx");
/* harmony import */ var _link_refinements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link-refinements */ "./app/pages/product-list/partials/link-refinements.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./app/constants.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */










const componentMap = {
  cgid: _link_refinements__WEBPACK_IMPORTED_MODULE_6__["default"],
  c_refinementColor: _color_refinements__WEBPACK_IMPORTED_MODULE_2__["default"],
  c_size: _size_refinements__WEBPACK_IMPORTED_MODULE_3__["default"],
  price: _radio_refinements__WEBPACK_IMPORTED_MODULE_4__["default"]
};

const Refinements = ({
  filters,
  toggleFilter,
  selectedFilters,
  isLoading
}) => {
  // Getting the indices of filters to open accordions by default
  let filtersIndexes = filters === null || filters === void 0 ? void 0 : filters.map((filter, idx) => idx); // Use saved state for accordions

  if (!_utils_utils__WEBPACK_IMPORTED_MODULE_7__.isServer) {
    const savedExpandedAccordionIndexes = window.localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__.FILTER_ACCORDION_SATE) && JSON.parse(window.localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_8__.FILTER_ACCORDION_SATE));

    if (savedExpandedAccordionIndexes) {
      filtersIndexes = filters === null || filters === void 0 ? void 0 : filters.map((filter, index) => {
        if (savedExpandedAccordionIndexes.includes(filter.attributeId)) {
          return index;
        }
      }).filter(index => index !== undefined);
    }
  } // Handle saving acccordion state


  const updateAccordionState = expandedIndex => {
    const filterState = filters === null || filters === void 0 ? void 0 : filters.filter((filter, index) => expandedIndex.includes(index)).map(filter => filter.attributeId);
    window.localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_8__.FILTER_ACCORDION_SATE, JSON.stringify(filterState));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    spacing: 8
  }, filtersIndexes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Accordion, {
    pointerEvents: isLoading ? 'none' : 'auto',
    onChange: updateAccordionState,
    opacity: isLoading ? 0.2 : 1,
    allowMultiple: true,
    allowToggle: true,
    defaultIndex: filtersIndexes,
    reduceMotion: true
  }, filters === null || filters === void 0 ? void 0 : filters.map((filter, idx) => {
    // Render the appropriate component for the refinement type, fallback to checkboxes
    const Values = componentMap[filter.attributeId] || _checkbox_refinements__WEBPACK_IMPORTED_MODULE_5__["default"];
    const selectedFiltersArray = selectedFilters === null || selectedFilters === void 0 ? void 0 : selectedFilters[filter.attributeId];

    if (filter.values) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
        key: filter.attributeId,
        divider: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Divider, null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionItem, {
        paddingTop: idx !== 0 ? 6 : 0,
        borderBottom: idx === filters.length - 1 ? '1px solid gray.200' : 'none',
        paddingBottom: 6,
        borderTop: idx === 0 && 'none'
      }, ({
        isExpanded
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionButton, {
        paddingTop: 0,
        paddingBottom: isExpanded ? 2 : 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
        flex: "1",
        textAlign: "left",
        fontSize: "md",
        fontWeight: 600
      }, filter.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.AccordionPanel, {
        paddingLeft: 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Values, {
        selectedFilters: selectedFiltersArray,
        filter: filter,
        toggleFilter: toggleFilter
      })))));
    } else {
      return null;
    }
  })));
};

Refinements.propTypes = {
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  selectedFilters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (Refinements);

/***/ }),

/***/ "./app/pages/product-list/partials/selected-refinements.jsx":
/*!******************************************************************!*\
  !*** ./app/pages/product-list/partials/selected-refinements.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const SelectedRefinements = ({
  toggleFilter,
  selectedFilterValues,
  filters
}) => {
  var _selectedFilters, _selectedFilters2;

  const priceFilterValues = filters === null || filters === void 0 ? void 0 : filters.find(filter => filter.attributeId === 'price');
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const resetFilters = () => {
    selectedFilters = [];
    navigate(window.location.pathname);
  };

  let selectedFilters = [];

  for (const key in selectedFilterValues) {
    const filters = selectedFilterValues[key].split('|');
    filters === null || filters === void 0 ? void 0 : filters.forEach(filter => {
      var _priceFilterValues$va, _priceFilterValues$va2;

      const selected = {
        uiLabel: key === 'price' ? priceFilterValues === null || priceFilterValues === void 0 ? void 0 : (_priceFilterValues$va = priceFilterValues.values) === null || _priceFilterValues$va === void 0 ? void 0 : (_priceFilterValues$va2 = _priceFilterValues$va.find(priceFilter => priceFilter.value === filter)) === null || _priceFilterValues$va2 === void 0 ? void 0 : _priceFilterValues$va2.label : filter,
        value: key,
        apiLabel: filter
      };

      if (selected.value !== 'htype' && selected.value !== 'cgid') {
        selectedFilters.push(selected);
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Wrap, {
    direction: "row",
    align: "center",
    display: "flex",
    flexWrap: "wrap",
    "data-testid": "sf-selected-refinements"
  }, (_selectedFilters = selectedFilters) === null || _selectedFilters === void 0 ? void 0 : _selectedFilters.map((filter, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.WrapItem, {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
      marginLeft: 0,
      marginRight: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
      marginTop: 1,
      padding: 5,
      color: "black",
      colorScheme: "gray",
      size: "sm",
      iconSpacing: 1,
      rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_3__.CloseIcon, {
        color: "black",
        boxSize: 4,
        mr: "-7px",
        mb: "-6px"
      }),
      onClick: () => toggleFilter({
        value: filter.apiLabel
      }, filter.value, true)
    }, filter.uiLabel)));
  }), ((_selectedFilters2 = selectedFilters) === null || _selectedFilters2 === void 0 ? void 0 : _selectedFilters2.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.WrapItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    padding: {
      sm: 0,
      base: 2
    },
    variant: "link",
    size: "sm",
    onClick: resetFilters
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "cqlObT",
    defaultMessage: [{
      "type": 0,
      "value": "Clear All"
    }]
  })))));
};

SelectedRefinements.propTypes = {
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  selectedFilterValues: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (SelectedRefinements);

/***/ }),

/***/ "./app/pages/product-list/partials/size-refinements.jsx":
/*!**************************************************************!*\
  !*** ./app/pages/product-list/partials/size-refinements.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const SizeRefinements = ({
  filter,
  toggleFilter,
  selectedFilters
}) => {
  var _filter$values;

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useMultiStyleConfig)('SwatchGroup', {
    variant: 'square',
    disabled: false
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {
    templateColumns: "repeat(auto-fit, 44px)",
    spacing: 4,
    mt: 1
  }, (_filter$values = filter.values) === null || _filter$values === void 0 ? void 0 : _filter$values.filter(refinementValue => refinementValue.hitCount > 0).map((value, idx) => {
    const selected = Array.isArray(selectedFilters) ? selectedFilters === null || selectedFilters === void 0 ? void 0 : selectedFilters.includes(value.value) : selectedFilters === value.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: idx
    }, styles.swatch, {
      borderColor: selected ? 'black' : 'gray.200',
      backgroundColor: selected ? 'black' : 'white',
      color: selected ? 'white' : 'gray.900',
      onClick: () => toggleFilter(value, filter.attributeId, selected),
      "aria-checked": selectedFilters == value.value,
      variant: "outline",
      marginBottom: 0,
      marginRight: 0
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Center, styles.swatchButton, value.label));
  }));
};

SizeRefinements.propTypes = {
  filter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  selectedFilterValues: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  categoryId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  selectedFilters: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  toggleFilter: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (SizeRefinements);

/***/ })

}]);
//# sourceMappingURL=pages-product-list.js.map