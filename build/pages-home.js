"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["pages-home"],{

/***/ "./app/components/hero/index.jsx":
/*!***************************************!*\
  !*** ./app/components/hero/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");


const _excluded = ["title", "img", "actions"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const Hero = _ref => {
  let {
    title,
    img,
    actions
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const {
    src,
    alt
  } = img;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    marginBottom: {
      base: 0,
      md: 10
    },
    height: {
      lg: 'xl'
    },
    position: {
      lg: 'relative'
    }
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    align: 'center',
    spacing: {
      base: 8,
      md: 10
    },
    paddingTop: {
      base: 12,
      md: 10
    },
    paddingBottom: {
      base: 6,
      md: 10
    },
    direction: {
      base: 'column',
      lg: 'row'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    flex: 1,
    spacing: {
      base: 5,
      md: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h1",
    fontSize: {
      base: '4xl',
      md: '5xl',
      lg: '6xl'
    },
    maxWidth: {
      base: '75%',
      md: '50%',
      lg: 'md'
    }
  }, title), actions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    width: {
      base: 'full',
      lg: 'inherit'
    }
  }, actions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    flex: 1,
    justify: 'center',
    align: 'center',
    position: 'relative',
    width: 'full',
    paddingTop: {
      base: 4,
      lg: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    position: 'relative',
    width: {
      base: 'full',
      md: '80%',
      lg: 'full'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {
    fit: 'cover',
    align: 'center',
    width: '100%',
    height: '100%',
    src: src,
    alt: alt
  })))));
};

Hero.displayName = 'Hero';
Hero.propTypes = {
  /**
   * Hero component image
   */
  img: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    alt: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),

  /**
   * Hero component main title
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Call to action component(s)
   */
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element)
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./app/components/section/index.jsx":
/*!******************************************!*\
  !*** ./app/components/section/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");


const _excluded = ["title", "subtitle", "actions", "maxWidth", "children"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



/**
 * Section component used on content pages like home page.
 * This component helps with creating a consistent layout and
 * consistent typography styles for section headings.
 */

const Section = _ref => {
  let {
    title,
    subtitle,
    actions,
    maxWidth,
    children
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const sectionMaxWidth = maxWidth || '3xl';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: 'section',
    paddingBottom: "16"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 4,
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container,
    maxW: sectionMaxWidth,
    textAlign: 'center'
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h2",
    fontSize: 40,
    textAlign: "center"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    color: 'gray.700',
    fontWeight: 600
  }, subtitle), actions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    paddingTop: "2",
    width: {
      base: 'full',
      md: 'auto'
    }
  }, actions)), children);
};

Section.displayName = 'Section';
Section.propTypes = {
  /**
   * Section component main title
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Section component subtitle
   */
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * Section children node(s)
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),

  /**
   * Call to action component(s)
   */
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().element),

  /**
   * Section maximum width
   */
  maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./app/pages/home/data.js":
/*!********************************!*\
  !*** ./app/pages/home/data.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroFeatures": function() { return /* binding */ heroFeatures; },
/* harmony export */   "features": function() { return /* binding */ features; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is the data used in by the Retail React App home page.
 * The example static data is created for demonstration purposes.
 * Typically you'd get this information from the API or possibly
 * from content slots.
 */



const heroFeatures = [{
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "kBAj4C",
      defaultMessage: [{
        "type": 0,
        "value": "Download on Github"
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.GithubLogo, {
    width: 12,
    height: 12
  }),
  href: 'https://github.com/SalesforceCommerceCloud/pwa-kit'
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "DKTjIJ",
      defaultMessage: [{
        "type": 0,
        "value": "Deploy on Managed Runtime"
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.BrandLogo, {
    width: 12,
    height: 8
  }),
  href: 'https://sfdc.co/deploy-on-managed-runtime'
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "OlItur",
      defaultMessage: [{
        "type": 0,
        "value": "Create with the Figma PWA Design Kit"
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.FigmaLogo, {
    width: 12,
    height: 8
  }),
  href: 'https://sfdc.co/figma-pwa-design-kit'
}];
const features = [{
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "cLJrsY",
      defaultMessage: [{
        "type": 0,
        "value": "Cart & Checkout"
      }]
    },
    text: {
      id: "VALef7",
      defaultMessage: [{
        "type": 0,
        "value": "Ecommerce best practice for a shopper's cart and checkout experience."
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.BasketIcon, null)
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "7Z41IR",
      defaultMessage: [{
        "type": 0,
        "value": "Einstein Recommendations"
      }]
    },
    text: {
      id: "VB8cgA",
      defaultMessage: [{
        "type": 0,
        "value": "Deliver the next best product or offer to every shopper through product recommendations."
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.LikeIcon, null)
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "2bGejb",
      defaultMessage: [{
        "type": 0,
        "value": "My Account"
      }]
    },
    text: {
      id: "cqE+QI",
      defaultMessage: [{
        "type": 0,
        "value": "Shopper's can manage account information such as their profile, addresses, payments and orders."
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.AccountIcon, null)
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "KcHWA3",
      defaultMessage: [{
        "type": 0,
        "value": "Shopper Login and API Access Service"
      }]
    },
    text: {
      id: "MQoJ1Y",
      defaultMessage: [{
        "type": 0,
        "value": "Enable shoppers to easily log in with a more personalized shopping experience."
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.PlugIcon, null)
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "0LrnyG",
      defaultMessage: [{
        "type": 0,
        "value": "Components & Design kit"
      }]
    },
    text: {
      id: "X9OkqP",
      defaultMessage: [{
        "type": 0,
        "value": "Built using Chakra UI, a simple, modular and accessible React component library."
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.DashboardIcon, null)
}, {
  message: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
    title: {
      id: "hp3uqR",
      defaultMessage: [{
        "type": 0,
        "value": "Wishlist"
      }]
    },
    text: {
      id: "Xpu6m3",
      defaultMessage: [{
        "type": 0,
        "value": "Registered shopper's can add product items to their wishlist from purchasing later."
      }]
    }
  }),
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_1__.HeartIcon, null)
}];

/***/ }),

/***/ "./app/pages/home/index.jsx":
/*!**********************************!*\
  !*** ./app/pages/home/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var pwa_kit_react_sdk_ssr_universal_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/universal/utils */ "./node_modules/pwa-kit-react-sdk/ssr/universal/utils.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hero */ "./app/components/hero/index.jsx");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ "./app/components/seo/index.jsx");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/section */ "./app/components/section/index.jsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./app/pages/home/data.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */

const Home = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    "data-testid": "home-page",
    layerStyle: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Home Page",
    description: "Commerce Cloud Retail React App",
    keywords: "Commerce Cloud, Retail React App, React Storefront"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: intl.formatMessage({
      id: "5UVtyp",
      defaultMessage: [{
        "type": 0,
        "value": "The React PWA Starter Store for Retail"
      }]
    }),
    img: {
      src: (0,pwa_kit_react_sdk_ssr_universal_utils__WEBPACK_IMPORTED_MODULE_3__.getAssetUrl)('static/img/hero.png'),
      alt: 'npx pwa-kit-create-app'
    },
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Stack, {
      spacing: {
        base: 4,
        sm: 6
      },
      direction: {
        base: 'column',
        sm: 'row'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link,
      href: "http://sfdc.co/pwa-kit-developer-center",
      target: "_blank",
      width: {
        base: 'full',
        md: 'inherit'
      },
      paddingX: 7,
      _hover: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "/aBLH2",
      defaultMessage: [{
        "type": 0,
        "value": "Get started"
      }]
    })))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    background: 'gray.50',
    marginX: "auto",
    paddingY: {
      base: 8,
      md: 16
    },
    paddingX: {
      base: 4,
      md: 8
    },
    borderRadius: "base",
    width: {
      base: '100vw',
      md: 'inherit'
    },
    position: {
      base: 'relative',
      md: 'inherit'
    },
    left: {
      base: '50%',
      md: 'inherit'
    },
    right: {
      base: '50%',
      md: 'inherit'
    },
    marginLeft: {
      base: '-50vw',
      md: 'auto'
    },
    marginRight: {
      base: '-50vw',
      md: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.SimpleGrid, {
    columns: {
      base: 1,
      md: 1,
      lg: 3
    },
    spacingX: {
      base: 1,
      md: 4
    },
    spacingY: {
      base: 4,
      md: 14
    }
  }, _data__WEBPACK_IMPORTED_MODULE_7__.heroFeatures.map((feature, index) => {
    const featureMessage = feature.message;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
      key: index,
      background: 'white',
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
      borderRadius: '4px'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
      target: "_blank",
      href: feature.href
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.HStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {
      paddingLeft: 6,
      height: 24,
      align: 'center',
      justify: 'center'
    }, feature.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
      fontWeight: "700"
    }, intl.formatMessage(featureMessage.title)))));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    padding: 4,
    paddingTop: 32,
    title: intl.formatMessage({
      id: "ZXp0z1",
      defaultMessage: [{
        "type": 0,
        "value": "Features"
      }]
    }),
    subtitle: intl.formatMessage({
      id: "lmhMZ6",
      defaultMessage: [{
        "type": 0,
        "value": "Out-of-the-box features so that you focus only on adding enhancements."
      }]
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Container, {
    maxW: '6xl',
    marginTop: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.SimpleGrid, {
    columns: {
      base: 1,
      md: 2,
      lg: 3
    },
    spacing: 10
  }, _data__WEBPACK_IMPORTED_MODULE_7__.features.map((feature, index) => {
    const featureMessage = feature.message;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.HStack, {
      key: index,
      align: 'top'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.VStack, {
      align: 'start'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {
      width: 16,
      height: 16,
      align: 'center',
      justify: 'left',
      color: 'gray.900',
      paddingX: 2
    }, feature.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
      color: 'black',
      fontWeight: 700,
      fontSize: 20
    }, intl.formatMessage(featureMessage.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Text, {
      color: 'black'
    }, intl.formatMessage(featureMessage.text))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
    padding: 4,
    paddingTop: 32,
    title: intl.formatMessage({
      id: "PpMdwV",
      defaultMessage: [{
        "type": 0,
        "value": "We're here to help"
      }]
    }),
    subtitle: intl.formatMessage({
      id: "nEtDrF",
      defaultMessage: [{
        "type": 0,
        "value": "Contact our support staff and they’ll get "
      }, {
        "type": 1,
        "value": "br"
      }, {
        "type": 0,
        "value": " you to the right place."
      }]
    }, {
      br: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null)
    }),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
      as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link,
      href: "https://help.salesforce.com/s/?language=en_US",
      target: "_blank",
      width: 'auto',
      paddingX: 7,
      _hover: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "hZOGLS",
      defaultMessage: [{
        "type": 0,
        "value": "Contact Us"
      }]
    })),
    maxWidth: 'xl'
  }));
};

Home.getTemplateName = () => 'home';

Home.propTypes = {
  recommendations: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

Home.getProps = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    res
  }) {
    // Since the home page is static, it is safe to set max age to a high value
    // we set it to a year here, but you can set the value that is suitable for your project
    if (res) {
      res.set('Cache-Control', 'max-age=31536000');
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);
//# sourceMappingURL=pages-home.js.map