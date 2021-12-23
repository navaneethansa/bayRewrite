"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["app_partials_product-view_index_jsx"],{

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

/***/ "./app/components/image-gallery/index.jsx":
/*!************************************************!*\
  !*** ./app/components/image-gallery/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skeleton": function() { return /* binding */ Skeleton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/image-groups-utils */ "./app/utils/image-groups-utils.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Chakra Components



const EnterKeyNumber = 13;
const LARGE = 'large';
const SMALL = 'small';
/**
 * The skeleton representation of the image gallery component. Use this component while
 * you are waiting for product data to be returnd from the server.
 */

const Skeleton = ({
  size
}) => {
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useMultiStyleConfig)('ImageGallery', {
    size
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    "data-testid": "sf-image-gallery-skeleton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ratio: 1
  }, styles.heroImageSkeleton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Skeleton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, null, new Array(4).fill(0).map((_, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ratio: 1
  }, styles.thumbnailImageSkeleton, {
    key: index
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Skeleton, null))))));
};
Skeleton.propTypes = {
  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/**
 * The image gallery displays a hero image and thumbnails below it. You can control which
 * image groups that are use by passing in the current selected variation values.
 */

const ImageGallery = ({
  imageGroups = [],
  selectedVariationAttributes = {},
  size
}) => {
  var _heroImageGroup$image;

  const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useMultiStyleConfig)('ImageGallery', {
    size
  });
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useLocation)(); // Get the 'hero' image for the current variation.

  const heroImageGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_3__.findImageGroupBy)(imageGroups, {
    viewType: LARGE,
    selectedVariationAttributes
  }), [selectedVariationAttributes]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // reset the selected index when location search changes
    setSelectedIndex(0);
  }, [location.search]); // Get a memoized image group used for the thumbnails. We use the `useMemo` hook
  // so we don't have to waste time filtering the image groups each render if the
  // selected variation attributes haven't changed.

  const thumbnailImageGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_3__.findImageGroupBy)(imageGroups, {
    viewType: SMALL,
    selectedVariationAttributes
  }), [selectedVariationAttributes]);
  const heroImage = heroImageGroup === null || heroImageGroup === void 0 ? void 0 : (_heroImageGroup$image = heroImageGroup.images) === null || _heroImageGroup$image === void 0 ? void 0 : _heroImageGroup$image[selectedIndex];
  const thumbnailImages = (thumbnailImageGroup === null || thumbnailImageGroup === void 0 ? void 0 : thumbnailImageGroup.images) || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    direction: "column"
  }, heroImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, styles.heroImageGroup, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.heroImage, {
    ratio: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Img, {
    alt: heroImage.alt,
    src: heroImage.disBaseLink
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.List, {
    display: 'flex',
    flexWrap: 'wrap'
  }, thumbnailImages.map((image, index) => {
    const selected = index === selectedIndex;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.thumbnailImageItem, {
      tabIndex: 0,
      key: index,
      "data-testid": "image-gallery-thumbnails",
      onKeyDown: e => {
        if (e.keyCode === EnterKeyNumber) {
          return setSelectedIndex(index);
        }
      },
      onClick: () => setSelectedIndex(index),
      borderColor: `${selected ? 'black' : ''}`,
      borderWidth: `${selected ? '1px' : 0}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AspectRatio, {
      ratio: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Img, {
      alt: image.alt,
      src: image.disBaseLink
    })));
  })));
};

ImageGallery.propTypes = {
  /**
   * The images array to be rendered
   */
  imageGroups: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),

  /**
   * The current selected variation values
   */
  selectedVariationAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /**
   * Size of the Image gallery, this will be used to determined the max width from styles
   */
  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (ImageGallery);

/***/ }),

/***/ "./app/components/quantity-picker/index.jsx":
/*!**************************************************!*\
  !*** ./app/components/quantity-picker/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/number-input/dist/chakra-ui-number-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * This is the mobile implementation of the Chakra NumberInput. This simple component essentially
 * is a helper so we don't have to reuse the hooks every time we need a number input since design dictates
 * we use the moobile variation on all screens.
 *
 * NOTE: We can optionally put global logic we see if in here, and various styling decisions in this single
 * component.
 *
 * @param {*} props
 * @returns
 */

const QuantityPicker = props => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useNumberInput)(_objectSpread(_objectSpread({}, props), {}, {
    // Defaults
    focusInputOnChange: false,
    onFocus: e => {
      // eslint-disable-next-line react/prop-types
      const {
        onFocus
      } = props; // This is useful for mobile devices, this allows the user to pop open the keyboard and set the
      // new quantity with one click.

      e.target.select(); // If there is a `onFocus` property define, call it with the event captured.
      // eslint-disable-next-line react/prop-types

      onFocus && onFocus.call(undefined, e);
    }
  }));
  const inc = getIncrementButtonProps({
    variant: 'outline'
  });
  const dec = getDecrementButtonProps({
    variant: 'outline'
  });
  const input = getInputProps({
    maxWidth: '44px',
    textAlign: 'center'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "quantity-decrement"
  }, dec), "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, input), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "quantity-increment"
  }, inc), "+"));
};

/* harmony default export */ __webpack_exports__["default"] = (QuantityPicker);

/***/ }),

/***/ "./app/components/swatch-group/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/swatch-group/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




/**
 * SwatchGroup allows you to create a list of swatches
 * Each Swatch is a link with will direct to a href passed to them
 */

const SwatchGroup = props => {
  const {
    displayName,
    children,
    value,
    label = '',
    variant = 'square',
    onChange = _utils_utils__WEBPACK_IMPORTED_MODULE_3__.noop
  } = props;
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useStyleConfig)('SwatchGroup');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.swatchGroup, {
    role: "radiogroup"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, styles.swatchLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    fontWeight: "semibold"
  }, `${label}:`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, null, displayName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, styles.swatchesWrapper, react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, child => {
    const childValue = child.props.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, {
      selected: childValue === value,
      key: childValue,
      value,
      variant,
      onChange
    });
  })));
};

SwatchGroup.displayName = 'SwatchGroup';
SwatchGroup.propTypes = {
  /**
   * The attribute name of the swatch group. E.g color, size
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   * The selected Swatch value.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   * The display value of the selected option
   */
  displayName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   * The Swatch options to choose between
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),

  /**
   * The shape of the swatches
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['square', 'circle']),

  /**
   * This function is called when a new option is selected
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (SwatchGroup);

/***/ }),

/***/ "./app/components/swatch-group/swatch.jsx":
/*!************************************************!*\
  !*** ./app/components/swatch-group/swatch.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




/**
 * The Swatch Component displays item inside `SwatchGroup`
 */

const Swatch = props => {
  const {
    disabled,
    selected,
    label,
    children,
    href,
    variant = 'square',
    onChange,
    value,
    name
  } = props;
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useMultiStyleConfig)('SwatchGroup', {
    variant,
    disabled,
    selected
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.swatch, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: href,
    "aria-label": name,
    onClick: e => {
      e.preventDefault();
      onChange(value, href);
    },
    "aria-checked": selected,
    variant: "outline"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, styles.swatchButton, children, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, null, label)));
};

Swatch.displayName = 'Swatch';
Swatch.propTypes = {
  /**
   * The children to be rendered within swatch item.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),

  /**
   * Indicates whether the option is disabled
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Indicates whether the option is selected.
   * This props is provided internally by SwatchGroup
   */
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * The shape of the Swatch
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['square', 'circle']),

  /**
   * The label of the option.
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   *  The url of this option
   */
  href: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   * This function is called whenever the user selects an option.
   * It is passed the new value.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),

  /**
   * The value for the option.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   * The display value for each swatch
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Swatch);

/***/ }),

/***/ "./app/partials/product-view/index.jsx":
/*!*********************************************!*\
  !*** ./app/partials/product-view/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/transition/dist/chakra-ui-transition.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./app/hooks/index.js");
/* harmony import */ var _hooks_use_add_to_cart_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-add-to-cart-modal */ "./app/hooks/use-add-to-cart-modal.js");
/* harmony import */ var _components_swatch_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/swatch-group */ "./app/components/swatch-group/index.jsx");
/* harmony import */ var _components_swatch_group_swatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/swatch-group/swatch */ "./app/components/swatch-group/swatch.jsx");
/* harmony import */ var _components_image_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/image-gallery */ "./app/components/image-gallery/index.jsx");
/* harmony import */ var _components_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/breadcrumb */ "./app/components/breadcrumb/index.jsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _hoc_with_registration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hoc/with-registration */ "./app/hoc/with-registration/index.jsx");
/* harmony import */ var _components_responsive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var _components_quantity_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/quantity-picker */ "./app/components/quantity-picker/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






 // project components












const ProductViewHeader = ({
  name,
  price,
  currency,
  category
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    currency: activeCurrency
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useCurrency)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.VStack, {
    mr: 4,
    spacing: 2,
    align: "flex-start",
    marginBottom: [4, 4, 4, 0, 0]
  }, category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    isLoaded: category,
    width: 64
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
    categories: category
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    isLoaded: name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Heading, {
    fontSize: "2xl"
  }, `${name}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    isLoaded: price,
    width: 32
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: "bold",
    fontSize: "md",
    "aria-label": "price"
  }, intl.formatNumber(price, {
    style: 'currency',
    currency: currency || activeCurrency
  }))));
};

ProductViewHeader.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  price: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  category: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
const ButtonWithRegistration = (0,_hoc_with_registration__WEBPACK_IMPORTED_MODULE_10__["default"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Button);
/**
 * Render a product detail view that includes name, image gallery, price,
 * variant selections, action buttons
 */

const ProductView = ({
  product,
  category,
  showFullLink = false,
  imageSize = 'md',
  isWishlistLoading = false,
  addToCart,
  updateCart,
  addToWishlist,
  updateWishlist,
  isProductLoading
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useHistory)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useLocation)();
  const {
    isOpen: isAddToCartModalOpen,
    onOpen: onAddToCartModalOpen,
    onClose: onAddToCartModalClose
  } = (0,_hooks_use_add_to_cart_modal__WEBPACK_IMPORTED_MODULE_4__.useAddToCartModalContext)();
  const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.useTheme)();
  const {
    showLoading,
    showInventoryMessage,
    inventoryMessage,
    quantity,
    minOrderQuantity,
    setQuantity,
    variant,
    variationParams,
    variationAttributes,
    stockLevel,
    stepQuantity
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useProduct)(product);
  const canAddToWishlist = !isProductLoading;
  const canOrder = !isProductLoading && (variant === null || variant === void 0 ? void 0 : variant.orderable) && parseInt(quantity) > 0 && parseInt(quantity) <= stockLevel;

  const renderActionButtons = () => {
    const buttons = [];

    const handleCartItem = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!addToCart && !updateCart) return null;

        if (updateCart) {
          yield updateCart(variant, quantity);
          return;
        }

        yield addToCart(variant, quantity);
        onAddToCartModalOpen({
          product,
          quantity
        });
      });

      return function handleCartItem() {
        return _ref.apply(this, arguments);
      };
    }();

    const handleWishlistItem = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!updateWishlist && !addToWishlist) return null;

        if (updateWishlist) {
          updateWishlist(variant, quantity);
          return;
        }

        addToWishlist(variant, quantity);
      });

      return function handleWishlistItem() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (addToCart || updateCart) {
      buttons.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Button, {
        key: "cart-button",
        onClick: handleCartItem,
        disabled: !canOrder,
        width: "100%",
        variant: "solid",
        marginBottom: 4
      }, updateCart ? intl.formatMessage({
        id: "BWpuKl",
        defaultMessage: [{
          "type": 0,
          "value": "Update"
        }]
      }) : intl.formatMessage({
        id: "ADKef8",
        defaultMessage: [{
          "type": 0,
          "value": "Add to cart"
        }]
      })));
    }

    if (addToWishlist || updateWishlist) {
      buttons.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ButtonWithRegistration, {
        key: "wishlist-button",
        onClick: handleWishlistItem,
        disabled: isWishlistLoading || !canAddToWishlist,
        isLoading: isWishlistLoading,
        width: "100%",
        variant: "outline",
        marginBottom: 4
      }, updateWishlist ? intl.formatMessage({
        id: "BWpuKl",
        defaultMessage: [{
          "type": 0,
          "value": "Update"
        }]
      }) : intl.formatMessage({
        id: "Cl4TrE",
        defaultMessage: [{
          "type": 0,
          "value": "Add to wishlist"
        }]
      })));
    }

    return buttons;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isAddToCartModalOpen) {
      onAddToCartModalClose();
    }
  }, [location.pathname]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    direction: 'column',
    "data-testid": "product-view"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    display: ['block', 'block', 'block', 'none']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductViewHeader, {
    name: product === null || product === void 0 ? void 0 : product.name,
    price: product === null || product === void 0 ? void 0 : product.price,
    currency: product === null || product === void 0 ? void 0 : product.currency,
    category: category
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Flex, {
    direction: ['column', 'column', 'column', 'row']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    flex: 1,
    mr: [0, 0, 0, 6, 6]
  }, product ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_image_gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: imageSize,
    imageGroups: product.imageGroups,
    selectedVariationAttributes: variationParams
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_responsive__WEBPACK_IMPORTED_MODULE_11__.HideOnMobile, null, showFullLink && product && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    to: `/product/${product.master.masterId}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    color: "blue.600"
  }, intl.formatMessage({
    id: "1LE+iY",
    defaultMessage: [{
      "type": 0,
      "value": "See full details"
    }]
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_image_gallery__WEBPACK_IMPORTED_MODULE_7__.Skeleton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.VStack, {
    align: "stretch",
    spacing: 8,
    flex: 1,
    marginBottom: [16, 16, 16, 0, 0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    display: ['none', 'none', 'none', 'block']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductViewHeader, {
    name: product === null || product === void 0 ? void 0 : product.name,
    price: product === null || product === void 0 ? void 0 : product.price,
    currency: product === null || product === void 0 ? void 0 : product.currency,
    category: category
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.VStack, {
    align: "stretch",
    spacing: 4
  }, showLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    height: 6,
    width: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    height: 20,
    width: 64
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    height: 6,
    width: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Skeleton, {
    height: 20,
    width: 64
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, variationAttributes.map(variationAttribute => {
    const {
      id,
      name,
      selectedValue,
      values = []
    } = variationAttribute;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_swatch_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: id,
      onChange: (_, href) => {
        if (!href) return;
        history.replace(href);
      },
      variant: id === 'color' ? 'circle' : 'square',
      value: selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.value,
      displayName: (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.name) || '',
      label: name
    }, values.map(({
      href,
      name,
      image,
      value,
      orderable
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_swatch_group_swatch__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: value,
      href: href,
      disabled: !orderable,
      value: value,
      name: name
    }, image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
      height: "100%",
      width: "100%",
      minWidth: "32px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: name.toLowerCase(),
      backgroundImage: image ? `url(${image.disBaseLink})` : ''
    }) : name)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.VStack, {
    align: "stretch",
    maxWidth: '200px'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    fontWeight: "bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: "quantity"
  }, intl.formatMessage({
    id: "qVGRIE",
    defaultMessage: [{
      "type": 0,
      "value": "Quantity"
    }]
  }), ":")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_quantity_picker__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "quantity",
    step: stepQuantity,
    value: quantity,
    min: minOrderQuantity,
    onChange: (stringValue, numberValue) => {
      // Set the Quantity of product to value of input if value number
      if (numberValue >= 0) {
        setQuantity(numberValue);
      } else if (stringValue === '') {
        // We want to allow the use to clear the input to start a new input so here we set the quantity to '' so NAN is not displayed
        // User will not be able to add '' qauntity to the cart due to the add to cart button enablement rules
        setQuantity(stringValue);
      }
    },
    onBlur: e => {
      // Default to 1the `minOrderQuantity` if a user leaves the box with an invalid value
      const value = e.target.value;

      if (parseInt(value) < 0 || value === '') {
        setQuantity(minOrderQuantity);
      }
    },
    onFocus: e => {
      // This is useful for mobile devices, this allows the user to pop open the keyboard and set the
      // new quantity with one click. NOTE: This is something that can be refactored into the parent
      // component, potentially as a prop called `selectInputOnFocus`.
      e.target.select();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_responsive__WEBPACK_IMPORTED_MODULE_11__.HideOnDesktop, null, showFullLink && product && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_9__["default"], {
    to: `/product/${product.master.masterId}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    color: "blue.600"
  }, intl.formatMessage({
    id: "1LE+iY",
    defaultMessage: [{
      "type": 0,
      "value": "See full details"
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    display: ['none', 'none', 'none', 'block']
  }, !showLoading && showInventoryMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Fade, {
    in: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    color: "orange.600",
    fontWeight: 600,
    marginBottom: 8
  }, inventoryMessage)), renderActionButtons()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Box, {
    position: "fixed",
    bg: "white",
    width: "100%",
    display: ['block', 'block', 'block', 'none'],
    p: [4, 4, 6],
    left: 0,
    bottom: 0,
    zIndex: 2,
    boxShadow: theme.shadows.top
  }, renderActionButtons()));
};

ProductView.propTypes = {
  product: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  category: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  isProductLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isWishlistLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  addToCart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  addToWishlist: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  updateCart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  updateWishlist: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  showFullLink: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  imageSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['sm', 'md'])
};
/* harmony default export */ __webpack_exports__["default"] = (ProductView);

/***/ })

}]);
//# sourceMappingURL=app_partials_product-view_index_jsx.js.map