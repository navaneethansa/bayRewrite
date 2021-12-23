/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/translations/compiled lazy recursive ^\\.\\/.*\\.json$":
/*!*************************************************************************!*\
  !*** ./app/translations/compiled/ lazy ^\.\/.*\.json$ namespace object ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./en-GB.json": [
		"./app/translations/compiled/en-GB.json",
		"app_translations_compiled_en-GB_json"
	],
	"./en-XB.json": [
		"./app/translations/compiled/en-XB.json",
		"app_translations_compiled_en-XB_json"
	],
	"./fr-FR.json": [
		"./app/translations/compiled/fr-FR.json",
		"app_translations_compiled_fr-FR_json"
	],
	"./it-IT.json": [
		"./app/translations/compiled/it-IT.json",
		"app_translations_compiled_it-IT_json"
	],
	"./ja-JP.json": [
		"./app/translations/compiled/ja-JP.json",
		"app_translations_compiled_ja-JP_json"
	],
	"./zh-CN.json": [
		"./app/translations/compiled/zh-CN.json",
		"app_translations_compiled_zh-CN_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./app/translations/compiled lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app/commerce-api.config.js":
/*!************************************!*\
  !*** ./app/commerce-api.config.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commerceAPIConfig": function() { return /* binding */ commerceAPIConfig; }
/* harmony export */ });
const commerceAPIConfig = {
  proxyPath: `/mobify/proxy/api`,
  parameters: {
    clientId: '850cfeb6-bf46-4741-97a7-09df45a4dd6e',
    organizationId: 'f_ecom_bdpt_dev',
    shortCode: '7q5duxn7',
    siteId: 'TheBay'
  }
};

/***/ }),

/***/ "./app/commerce-api/auth.js":
/*!**********************************!*\
  !*** ./app/commerce-api/auth.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pwa-kit-react-sdk/utils/url */ "./node_modules/pwa-kit-react-sdk/utils/url.js");
/* harmony import */ var pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/universal/errors */ "./node_modules/pwa-kit-react-sdk/ssr/universal/errors.js");
/* harmony import */ var _pkce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pkce */ "./app/commerce-api/pkce.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./app/commerce-api/utils.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint-disable no-unused-vars */




/**
 * An object containing the customer's login credentials.
 * @typedef {Object} CustomerCredentials
 * @property {string} credentials.email
 * @property {string} credentials.password
 */

/**
 * Salesforce Customer object.
 * {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customer}}
 * @typedef {Object} Customer
 */

const usidStorageKey = 'usid';
const encUserIdStorageKey = 'enc-user-id';
const tokenStorageKey = 'token';
const refreshTokenStorageKey = 'refresh-token';
const oidStorageKey = 'oid';
/**
 * A  class that provides auth functionality for pwa.
 */

const slasCallbackEndpoint = '/callback';

class Auth {
  constructor(api) {
    this._api = api;
    this._config = api._config;
    this._onClient = typeof window !== 'undefined';
    this._pendingAuth = undefined;
    this._customerId = undefined;
    this._oid = this._onClient ? window.localStorage.getItem(oidStorageKey) : undefined;
    const configOid = api._config.parameters.organizationId;

    if (this._oid !== configOid) {
      this._clearAuth();

      this._saveOid(configOid);
    } else {
      this._authToken = this._onClient ? window.localStorage.getItem(tokenStorageKey) : undefined;
      this._refreshToken = this._onClient ? window.localStorage.getItem(refreshTokenStorageKey) : undefined;
      this._usid = this._onClient ? window.localStorage.getItem(usidStorageKey) : undefined;
      this._encUserId = this._onClient ? window.localStorage.getItem(encUserIdStorageKey) : undefined;
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  /**
   * Returns the api client configuration
   * @returns {boolean}
   */


  get pendingLogin() {
    return this._pendingLogin;
  }

  get authToken() {
    return this._authToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get usid() {
    return this._usid;
  }

  get encUserId() {
    return this._encUserId;
  }

  get oid() {
    return this._oid;
  }
  /**
   * Called with the details from the redirect page that _loginWithCredentials returns
   * I think it's best we leave it to developers on how and where to call from
   * @param {{grantType, code, usid, codeVerifier, redirectUri}} requestDetails - The cutomerId of customer to get.
   */


  getLoggedInToken(requestDetails) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = new URLSearchParams();
      const {
        grantType,
        code,
        usid,
        codeVerifier,
        redirectUri
      } = requestDetails;
      data.append('code', code);
      data.append('grant_type', grantType);
      data.append('usid', usid);
      data.append('code_verifier', codeVerifier);
      data.append('client_id', _this._config.parameters.clientId);
      data.append('redirect_uri', redirectUri);
      const options = {
        headers: {
          'Content-Type': `application/x-www-form-urlencoded`
        },
        body: data
      };
      const response = yield _this._api.shopperLogin.getAccessToken(options); // Check for error response before handling the token

      if (response.status_code) {
        throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_2__.HTTPError(response.status_code, response.message);
      }

      _this._handleShopperLoginTokenResponse(response);

      return response;
    })();
  }
  /**
   * Authorizes the customer as a registered or guest user.
   * @param {CustomerCredentials} [credentials]
   * @returns {Promise}
   */


  login(credentials) {
    var _this2 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calling login while its already pending will return a reference
      // to the existing promise.
      if (_this2._pendingLogin) {
        return _this2._pendingLogin;
      }

      let retries = 0;

      const startLoginFlow = () => {
        let authorizationMethod = '_loginAsGuest';

        if (credentials) {
          authorizationMethod = '_loginWithCredentials';
        } else if (_this2._authToken && _this2._refreshToken) {
          authorizationMethod = '_refreshAccessToken';
        }

        return _this2[authorizationMethod](credentials).catch(error => {
          if (retries === 0 && error.message === 'EXPIRED_TOKEN') {
            retries = 1; // we only retry once

            _this2._clearAuth();

            return startLoginFlow();
          }

          throw error;
        });
      };

      _this2._pendingLogin = startLoginFlow().finally(() => {
        // When the promise is resolved, we need to remove the reference so
        // that subsequent calls to `login` can proceed.
        _this2._pendingLogin = undefined;
      });
      return _this2._pendingLogin;
    })();
  }
  /**
   * Clears the stored auth token and optionally logs back in as guest.
   * @param {boolean} [shouldLoginAsGuest=true] - Indicates if we should automatically log back in as a guest
   * @returns {(Promise<Customer>|undefined)}
   */


  logout(shouldLoginAsGuest = true) {
    var _this3 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        parameters: {
          refresh_token: _this3.refreshToken,
          client_id: _this3._config.parameters.clientId,
          channel_id: _this3._config.parameters.siteId
        }
      };
      yield _this3._api.shopperLogin.logoutCustomer(options, true);
      yield _this3._clearAuth();

      if (shouldLoginAsGuest) {
        return _this3.login();
      }
    })();
  }
  /**
   * Handles Response from ShopperLogin GetAccessToken, calls the getCustomer method and removes the PCKE code verifier from session storage
   * @private
   * @param {object} tokenResponse - access_token,id_token,refresh_token, expires_in,token_type, usid, customer_id, enc_user_id, idp_access_token
   */


  _handleShopperLoginTokenResponse(tokenResponse) {
    const {
      access_token,
      refresh_token,
      customer_id,
      usid,
      enc_user_id
    } = tokenResponse;
    this._customerId = customer_id;

    this._saveAccessToken(`Bearer ${access_token}`);

    this._saveRefreshToken(refresh_token);

    this._saveUsid(usid); // Non registered users recieve an empty string for the encoded user id value


    if (enc_user_id.length > 0) {
      this._saveEncUserId(enc_user_id);
    }

    if (this._onClient) {
      sessionStorage.removeItem('codeVerifier');
    }
  }
  /**
   * Begins oAuth PCKE Flow
   * @param {{email, password}}} credentials - User Credentials.
   * @returns {object} - a skeleton registered customer object that can be used to retrieve a complete customer object
   */


  _loginWithCredentials(credentials) {
    var _this4 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const codeVerifier = (0,_pkce__WEBPACK_IMPORTED_MODULE_3__.createCodeVerifier)();
      const codeChallenge = yield (0,_pkce__WEBPACK_IMPORTED_MODULE_3__.generateCodeChallenge)(codeVerifier);
      sessionStorage.setItem('codeVerifier', codeVerifier);
      const authorization = `Basic ${btoa(`${credentials.email}:${credentials.password}`)}`;
      const options = {
        headers: {
          Authorization: authorization,
          'Content-Type': `application/x-www-form-urlencoded`
        },
        parameters: {
          redirect_uri: `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_1__.getAppOrigin)()}${slasCallbackEndpoint}`,
          client_id: _this4._config.parameters.clientId,
          code_challenge: codeChallenge,
          channel_id: _this4._config.parameters.siteId
        }
      };
      const response = yield _this4._api.shopperLogin.authenticateCustomer(options, true);

      if (response.status >= 400) {
        const json = yield response.json();
        throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_2__.HTTPError(response.status, json.message);
      }

      const tokenBody = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createGetTokenBody)(response.url, `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_1__.getAppOrigin)()}${slasCallbackEndpoint}`, window.sessionStorage.getItem('codeVerifier'));
      const {
        customer_id
      } = yield _this4.getLoggedInToken(tokenBody);
      const customer = {
        customerId: customer_id,
        authType: 'registered'
      };
      return customer;
    })();
  }
  /**
   * Begins oAuth PCKE Flow for guest
   * @returns {object} - a guest customer object
   */


  _loginAsGuest() {
    var _this5 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const codeVerifier = (0,_pkce__WEBPACK_IMPORTED_MODULE_3__.createCodeVerifier)();
      const codeChallenge = yield (0,_pkce__WEBPACK_IMPORTED_MODULE_3__.generateCodeChallenge)(codeVerifier);

      if (_this5._onClient) {
        sessionStorage.setItem('codeVerifier', codeVerifier);
      }

      const options = {
        headers: {
          Authorization: '',
          'Content-Type': `application/x-www-form-urlencoded`
        },
        parameters: {
          redirect_uri: `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_1__.getAppOrigin)()}${slasCallbackEndpoint}`,
          client_id: _this5._config.parameters.clientId,
          code_challenge: codeChallenge,
          response_type: 'code',
          hint: 'guest'
        }
      };
      const response = yield _this5._api.shopperLogin.authorizeCustomer(options, true);

      if (response.status >= 400) {
        const json = yield response.json();
        throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_2__.HTTPError(response.status, json.message);
      }

      const tokenBody = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.createGetTokenBody)(response.url, `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_1__.getAppOrigin)()}${slasCallbackEndpoint}`, _this5._onClient ? window.sessionStorage.getItem('codeVerifier') : codeVerifier);
      const {
        customer_id
      } = yield _this5.getLoggedInToken(tokenBody); // A guest customerId will never return a customer from the customer endpoint

      const customer = {
        authType: 'guest',
        customerId: customer_id
      };
      return customer;
    })();
  }
  /**
   * Creates a guest session
   * @private
   * @returns {*} - The response to be passed back to original caller.
   */


  _createGuestSession() {
    var _this6 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loginType = 'guest';
      const options = {
        body: {
          type: loginType
        }
      };
      const rawResponse = yield _this6._api.shopperCustomers.authorizeCustomer(options, true);
      return rawResponse;
    })();
  }
  /**
   * Refreshes Logged In Token
   * @private
   * @returns {<Promise>} - Handle Shopper Login Promise
   */


  _refreshAccessToken() {
    var _this7 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = new URLSearchParams();
      data.append('grant_type', 'refresh_token');
      data.append('refresh_token', _this7._refreshToken);
      data.append('client_id', _this7._config.parameters.clientId);
      const options = {
        headers: {
          'Content-Type': `application/x-www-form-urlencoded`
        },
        body: data
      };
      const response = yield _this7._api.shopperLogin.getAccessToken(options); // Check for error response before handling the token

      if (response.status_code) {
        throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_2__.HTTPError(response.status_code, response.message);
      }

      _this7._handleShopperLoginTokenResponse(response);

      const {
        id_token,
        enc_user_id,
        customer_id
      } = response;
      let customer = {
        authType: 'guest',
        customerId: customer_id
      }; // Determining if registered customer or guest

      if (id_token.length > 0 && enc_user_id.length > 0) {
        customer.authType = 'registered';
      }

      return customer;
    })();
  }
  /**
   * Stores the given auth token.
   * @private
   * @param {string} token - A JWT auth token.
   */


  _saveAccessToken(token) {
    this._authToken = token;

    if (this._onClient) {
      window.localStorage.setItem(tokenStorageKey, token);
    }
  }
  /**
   * Stores the given usid token.
   * @private
   * @param {string} usid - Unique shopper Id.
   */


  _saveUsid(usid) {
    this._usid = usid;

    if (this._onClient) {
      window.localStorage.setItem(usidStorageKey, usid);
    }
  }
  /**
   * Stores the given enc_user_id token. enc = encoded
   * @private
   * @param {string} encUserId - Logged in Shopper reference for Einstein API.
   */


  _saveEncUserId(encUserId) {
    this._encUserId = encUserId;

    if (this._onClient) {
      window.localStorage.setItem(encUserIdStorageKey, encUserId);
    }
  }
  /**
   * Stores the given oid token.
   * @private
   * @param {string} oid - Unique organization Id.
   */


  _saveOid(oid) {
    this._oid = oid;

    if (this._onClient) {
      window.localStorage.setItem(oidStorageKey, oid);
    }
  }
  /**
   * Removes the stored auth token.
   * @private
   */


  _clearAuth() {
    this._customerId = undefined;
    this._authToken = undefined;
    this._refreshToken = undefined;
    this._usid = undefined;
    this._encUserId = undefined;

    if (this._onClient) {
      window.localStorage.removeItem(tokenStorageKey);
      window.localStorage.removeItem(refreshTokenStorageKey);
      window.localStorage.removeItem(usidStorageKey);
      window.localStorage.removeItem(encUserIdStorageKey);
    }
  }
  /**
   * Stores the given refresh token.
   * @private
   * @param {string} refreshToken - A JWT refresh token.
   */


  _saveRefreshToken(refreshToken) {
    this._refreshToken = refreshToken;

    if (this._onClient) {
      window.localStorage.setItem(refreshTokenStorageKey, refreshToken);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./app/commerce-api/contexts.js":
/*!**************************************!*\
  !*** ./app/commerce-api/contexts.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommerceAPIContext": function() { return /* binding */ CommerceAPIContext; },
/* harmony export */   "CommerceAPIProvider": function() { return /* binding */ CommerceAPIProvider; },
/* harmony export */   "useCommerceAPI": function() { return /* binding */ useCommerceAPI; },
/* harmony export */   "BasketContext": function() { return /* binding */ BasketContext; },
/* harmony export */   "BasketProvider": function() { return /* binding */ BasketProvider; },
/* harmony export */   "CustomerContext": function() { return /* binding */ CustomerContext; },
/* harmony export */   "CustomerProvider": function() { return /* binding */ CustomerProvider; },
/* harmony export */   "CustomerProductListsContext": function() { return /* binding */ CustomerProductListsContext; },
/* harmony export */   "CustomerProductListsProvider": function() { return /* binding */ CustomerProductListsProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Provider and associated hook for accessing the Commerce API in React components.
 */

const CommerceAPIContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CommerceAPIProvider = CommerceAPIContext.Provider;
const useCommerceAPI = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CommerceAPIContext);
/**
 * There are a few sources of global state in the react retail storefront.
 * Using React Context we implement a simple shared global state allowing
 * you can update and use either state from anywhere in the application.
 *
 * If your global state needs require a more robust solution, these contexts can be
 * replaced by a third party state management library of your choosing, such as MobX
 * or Redux.
 *
 * To use these context's simply import them into the component requiring context
 * like the below example:
 *
 * import React, {useContext} from 'react'
 * import {BasketContext} from 'components/_app-config'
 *
 * export const Avatar = () => {
 *    const {customer} = useContext(BasketContext)
 *    return <div>{customer.name}</div>
 * }
 *
 */

/************ Basket ************/

const BasketContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const BasketProvider = BasketContext.Provider;
/************ Customer ************/

const CustomerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CustomerProvider = CustomerContext.Provider;
/************ Customer Product Lists ************/

const CPLInitialValue = {
  // this is an object of product lists
  // keyed by list id, initial state
  // being undefined indicates the
  // product lists is not initialized
  productLists: undefined
};
const CPLActionTypes = {
  RECEIVE_LISTS: 'RECEIVE_LISTS',
  RECEIVE_LIST: 'RECEIVE_LIST',
  CREATE_LIST_ITEM: 'CREATE_LIST_ITEM',
  UPDATE_LIST_ITEM: 'UPDATE_LIST_ITEM',
  REMOVE_LIST_ITEM: 'REMOVE_LIST_ITEM',
  RESET: 'RESET'
};
const CustomerProductListsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(CPLInitialValue); // eslint-disable-next-line react/prop-types

const CustomerProductListsProvider = ({
  children
}) => {
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((state, {
    type,
    payload
  }) => {
    switch (type) {
      case CPLActionTypes.RECEIVE_LISTS:
        {
          const productLists = payload.reduce((acc, curr) => {
            return _objectSpread(_objectSpread({}, acc), {}, {
              [curr.id]: curr
            });
          }, {});
          return _objectSpread(_objectSpread({}, state), {}, {
            productLists
          });
        }

      case CPLActionTypes.RECEIVE_LIST:
        {
          const {
            id
          } = payload; // Tips: if you are unfamiliar with the concept of
          // reducers, keep in mind that reducers must be pure.
          // For an action like this, you must update every
          // level of nested data to avoid unexpected side effects

          return _objectSpread(_objectSpread({}, state), {}, {
            productLists: _objectSpread(_objectSpread({}, state.productLists), {}, {
              [id]: payload
            })
          });
        }

      case CPLActionTypes.CREATE_LIST_ITEM:
        {
          var _state$productLists$l;

          const {
            listId,
            item
          } = payload;
          const {
            productId
          } = item;
          const items = ((_state$productLists$l = state.productLists[listId]) === null || _state$productLists$l === void 0 ? void 0 : _state$productLists$l.customerProductListItems) || []; // if the item is already added to the list
          // we update the existing item

          const existingItemIndex = items.findIndex(i => i.productId === productId);

          if (existingItemIndex >= 0) {
            items[existingItemIndex] = item;
          } else {
            items.push(item);
          }

          return _objectSpread(_objectSpread({}, state), {}, {
            productLists: _objectSpread(_objectSpread({}, state.productLists), {}, {
              [listId]: _objectSpread(_objectSpread({}, state.productLists[listId]), {}, {
                customerProductListItems: items
              })
            })
          });
        }

      case CPLActionTypes.UPDATE_LIST_ITEM:
        {
          var _state$productLists$l2;

          const {
            listId,
            item
          } = payload;
          const items = (_state$productLists$l2 = state.productLists[listId].customerProductListItems) === null || _state$productLists$l2 === void 0 ? void 0 : _state$productLists$l2.map(listItem => {
            if (listItem.id === item.id) {
              return _objectSpread(_objectSpread({}, listItem), item);
            }

            return listItem;
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            productLists: _objectSpread(_objectSpread({}, state.productLists), {}, {
              [listId]: _objectSpread(_objectSpread({}, state.productLists[listId]), {}, {
                customerProductListItems: items
              })
            })
          });
        }

      case CPLActionTypes.REMOVE_LIST_ITEM:
        {
          var _productLists$listId$;

          const {
            listId,
            itemId
          } = payload;

          const productLists = _objectSpread({}, state.productLists);

          productLists[listId].customerProductListItems = (_productLists$listId$ = productLists[listId].customerProductListItems) === null || _productLists$listId$ === void 0 ? void 0 : _productLists$listId$.filter(listItem => {
            return listItem.id !== itemId;
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            productLists
          });
        }

      case CPLActionTypes.RESET:
        {
          return _objectSpread({}, CPLInitialValue);
        }

      default:
        throw new Error('Unknown action.');
    }
  }, CPLInitialValue);
  const actions = {
    receiveLists: lists => dispatch({
      type: CPLActionTypes.RECEIVE_LISTS,
      payload: lists
    }),
    receiveList: list => dispatch({
      type: CPLActionTypes.RECEIVE_LIST,
      payload: list
    }),
    createListItem: (listId, item) => dispatch({
      type: CPLActionTypes.CREATE_LIST_ITEM,
      payload: {
        listId,
        item
      }
    }),
    updateListItem: (listId, item) => dispatch({
      type: CPLActionTypes.UPDATE_LIST_ITEM,
      payload: {
        listId,
        item
      }
    }),
    removeListItem: (listId, itemId) => dispatch({
      type: CPLActionTypes.REMOVE_LIST_ITEM,
      payload: {
        listId,
        itemId
      }
    }),
    reset: () => dispatch({
      type: CPLActionTypes.RESET
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CustomerProductListsContext.Provider, {
    value: {
      state,
      actions
    }
  }, children);
};

/***/ }),

/***/ "./app/commerce-api/einstein.js":
/*!**************************************!*\
  !*** ./app/commerce-api/einstein.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pwa-kit-react-sdk/utils/url */ "./node_modules/pwa-kit-react-sdk/utils/url.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./app/commerce-api/utils.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




class EinsteinAPI {
  constructor(commerceAPI) {
    var _commerceAPI$_config;

    this.commerceAPI = commerceAPI;
    this.config = commerceAPI === null || commerceAPI === void 0 ? void 0 : (_commerceAPI$_config = commerceAPI._config) === null || _commerceAPI$_config === void 0 ? void 0 : _commerceAPI$_config.einsteinConfig;
  }
  /**
   * Given a POJO append the correct user and cookie identifier values using the current auth state.
   *
   * @param {object} params
   * @returns {object} The decorated body object.
   */


  _buildBody(params) {
    const body = _objectSpread({}, params); // If we have an encrypted user id (authenticaed users only) use it as the `userId` otherwise
    // we won't send a `userId` param for guest users.


    if (this.commerceAPI.auth.encUserId) {
      body.userId = this.commerceAPI.auth.encUserId;
    } // Append the `usid` as the `cookieId` value if present. (It should always be present as long
    // as the user is initilized)


    if (this.commerceAPI.auth.usid) {
      body.cookieId = this.commerceAPI.auth.usid;
    } else {
      console.warn('Missing `cookieId`. For optimal results this value must be defined.');
    }

    return body;
  }

  einsteinFetch(endpoint, method, body) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const config = _this.config;
      const {
        proxyPath,
        einsteinId
      } = config;
      const host = `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_3__.getAppOrigin)()}${proxyPath}`;
      const headers = {
        'Content-Type': 'application/json',
        'x-cq-client-id': einsteinId
      }; // Include `userId` and `cookieId` parameters.

      if (body) {
        body = _this._buildBody(body);
      }

      let response;
      response = yield cross_fetch__WEBPACK_IMPORTED_MODULE_2___default()(`${host}/v3${endpoint}`, _objectSpread({
        method: method,
        headers: headers
      }, body && {
        body: JSON.stringify(body)
      }));
      const responseJson = yield response.json();
      return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.keysToCamel)(responseJson);
    })();
  }
  /**
   * Tells the Einstein engine when a user views a product.
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  sendViewProduct(product, args) {
    var _this2 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/activities/${_this2.config.siteId}/viewProduct`;
      const method = 'POST';
      const {
        id,
        sku = '',
        altId = '',
        altIdType = ''
      } = product;

      const body = _objectSpread({
        product: {
          id,
          sku,
          altId,
          altIdType
        }
      }, args);

      return _this2.einsteinFetch(endpoint, method, body);
    })();
  }
  /**
   * Tells the Einstein engine when a user views a set of recommendations
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  sendViewReco(recommenderDetails, products, args) {
    var _this3 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/activities/${_this3.config.siteId}/viewReco`;
      const method = 'POST';
      const {
        __recoUUID,
        recommenderName
      } = recommenderDetails;

      const body = _objectSpread({
        recommenderName,
        __recoUUID,
        products: products
      }, args);

      return _this3.einsteinFetch(endpoint, method, body);
    })();
  }
  /**
   * Tells the Einstein engine when a user clicks on a recommendation
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  sendClickReco(recommenderDetails, product, args) {
    var _this4 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/activities/${_this4.config.siteId}/clickReco`;
      const method = 'POST';
      const {
        __recoUUID,
        recommenderName
      } = recommenderDetails;
      const {
        id,
        sku = '',
        altId = '',
        altIdType = ''
      } = product;

      const body = _objectSpread({
        recommenderName,
        __recoUUID,
        product: {
          id,
          sku,
          altId,
          altIdType
        }
      }, args);

      return _this4.einsteinFetch(endpoint, method, body);
    })();
  }
  /**
   * Tells the Einstein engine when a user adds an item to their cart.
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  sendAddToCart(product, args) {
    var _this5 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/activities/${_this5.config.siteId}/addToCart`;
      const method = 'POST';

      const body = _objectSpread({
        products: [product]
      }, args);

      return _this5.einsteinFetch(endpoint, method, body);
    })();
  }
  /**
   * Get a list of recommenders that can be used in recommendation requests.
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  getRecommenders() {
    var _this6 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/personalization/recommenders/${_this6.config.siteId}`;
      const method = 'GET';
      const body = null;
      return _this6.einsteinFetch(endpoint, method, body);
    })();
  }
  /**
   * Get a set of recommendations
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  getRecommendations(recommenderName, args) {
    var _this7 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/personalization/recs/${_this7.config.siteId}/${recommenderName}`;
      const method = 'POST';

      const body = _objectSpread({}, args); // Fetch the recommendations


      const reco = yield _this7.einsteinFetch(endpoint, method, body);
      reco.recommenderName = recommenderName;
      return _this7.fetchRecProductDetails(reco);
    })();
  }
  /**
   * Get a set of recommendations for a zone
   * https://developer.commercecloud.com/s/api-details/a003k00000UI4hPAAT/commerce-cloud-developer-centereinsteinrecommendations?tabset-888ee=2
   **/


  getZoneRecommendations(zoneName, args) {
    var _this8 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const endpoint = `/personalization/${_this8.config.siteId}/zones/${zoneName}/recs`;
      const method = 'POST';

      const body = _objectSpread({}, args); // Fetch the recommendations


      const reco = yield _this8.einsteinFetch(endpoint, method, body);
      return _this8.fetchRecProductDetails(reco);
    })();
  }

  fetchRecProductDetails(reco) {
    var _this9 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _reco$recs;

      const ids = (_reco$recs = reco.recs) === null || _reco$recs === void 0 ? void 0 : _reco$recs.map(rec => rec.id);

      if ((ids === null || ids === void 0 ? void 0 : ids.length) > 0) {
        // Fetch the product details for the recommendations
        const products = yield _this9.commerceAPI.shopperProducts.getProducts({
          parameters: {
            ids: ids.join(',')
          }
        }); // Merge the product detail into the recommendations response

        return _objectSpread(_objectSpread({}, reco), {}, {
          recs: reco.recs.map(rec => {
            var _products$data;

            const product = products === null || products === void 0 ? void 0 : (_products$data = products.data) === null || _products$data === void 0 ? void 0 : _products$data.find(product => product.id === rec.id);
            return _objectSpread(_objectSpread(_objectSpread({}, rec), product), {}, {
              productId: rec.id,
              image: {
                disBaseLink: rec.imageUrl,
                alt: rec.productName
              }
            });
          })
        });
      }

      return reco;
    })();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EinsteinAPI);

/***/ }),

/***/ "./app/commerce-api/hooks/useBasket.js":
/*!*********************************************!*\
  !*** ./app/commerce-api/hooks/useBasket.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useBasket; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useEinstein__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEinstein */ "./app/commerce-api/hooks/useEinstein.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts */ "./app/commerce-api/contexts.js");
/* harmony import */ var _useCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./app/commerce-api/utils.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





function useBasket(opts = {}) {
  const {
    currency
  } = opts;
  const api = (0,_contexts__WEBPACK_IMPORTED_MODULE_4__.useCommerceAPI)();
  const customer = (0,_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const einstein = (0,_useEinstein__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    basket,
    setBasket: _setBasket
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_4__.BasketContext);

  const setBasket = basketData => {
    const _productItemsDetail = basket === null || basket === void 0 ? void 0 : basket._productItemsDetail;

    _setBasket(_objectSpread({
      _productItemsDetail
    }, basketData));
  };

  const self = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return _objectSpread(_objectSpread({}, basket), {}, {
      // Check if a this represents a valid basket
      get loaded() {
        return basket && basket.basketId;
      },

      get itemCount() {
        var _basket$productItems;

        return (basket === null || basket === void 0 ? void 0 : (_basket$productItems = basket.productItems) === null || _basket$productItems === void 0 ? void 0 : _basket$productItems.length) || 0;
      },

      /** Items taking into account quantity of each */
      get itemAccumulatedCount() {
        var _basket$productItems2;

        return (basket === null || basket === void 0 ? void 0 : (_basket$productItems2 = basket.productItems) === null || _basket$productItems2 === void 0 ? void 0 : _basket$productItems2.reduce((prev, next) => prev + next.quantity, 0)) || 0;
      },

      /** Sum of all order-level discounts */
      get totalOrderDiscount() {
        var _basket$orderPriceAdj;

        return (basket === null || basket === void 0 ? void 0 : (_basket$orderPriceAdj = basket.orderPriceAdjustments) === null || _basket$orderPriceAdj === void 0 ? void 0 : _basket$orderPriceAdj.reduce((sum, item) => {
          return sum + item.price;
        }, 0)) || 0;
      },

      /**
       * Get an existing basket, if basket doesn't exist, create a new one.
       *
       * NOTE: This request is the only time we are using the ShopperCustomers API
       * to interact with a customer basket. All other calls are done through the
       * ShopperBaskets API, which in our case, uses OCAPI rather than commerce sdk.
       */
      getOrCreateBasket() {
        var _this = this;

        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const customerBaskets = yield api.shopperCustomers.getCustomerBaskets({
            parameters: {
              customerId: customer === null || customer === void 0 ? void 0 : customer.customerId
            }
          }); // Throw if there was a problem getting the customer baskets

          if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.isError)(customerBaskets)) {
            throw new Error(customerBaskets);
          } // We only support single baskets for now. Grab the first one.


          let basket = Array.isArray(customerBaskets === null || customerBaskets === void 0 ? void 0 : customerBaskets.baskets) && customerBaskets.baskets[0];

          if (!basket) {
            // Back to using ShopperBaskets for all basket interaction.
            basket = yield api.shopperBaskets.createBasket({}); // Throw if there was a problem creating the basket

            if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.isError)(basket)) {
              throw new Error(basket);
            }
          } // Update basket currency if it was created with the wrong one, this will also set the state.


          if (currency && basket.currency !== currency) {
            yield _this.updateBasketCurrency(currency, basket.basketId);
          } else {
            setBasket(basket);
          }

          return basket;
        })();
      },

      /**
       * Update the currency of the basket
       * @param currency - The currency code.
       * @param basketID - The id of the basket.
       * @returns {Promise<void>}
       */
      updateBasketCurrency(currency, basketId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const updateBasket = yield api.shopperBaskets.updateBasket({
            body: {
              currency
            },
            parameters: {
              basketId
            }
          });

          if ((0,_utils__WEBPACK_IMPORTED_MODULE_6__.isError)(updateBasket)) {
            throw new Error(updateBasket);
          } else {
            setBasket(updateBasket);
          }
        })();
      },

      /**
       * Add an item to the basket.
       *
       * @param {array} item
       * @param {string} item.productId - The id of the product.
       * @param {number} item.quantity - The quantity of the item.
       */
      addItemToBasket(item) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.addItemToBasket({
            body: item,
            parameters: {
              basketId: basket.basketId
            }
          });

          if (response.fault) {
            throw new Error(response);
          } else {
            setBasket(response);
            const einsteinProduct = {
              id: item[0].productId,
              sku: '',
              price: item[0].price,
              quantity: item[0].quantity
            };
            einstein.sendAddToCart(einsteinProduct);
          }
        })();
      },

      /**
       * Remove an item from the basket.
       *
       * @param {string} itemId - The id of the basket item.
       */
      removeItemFromBasket(itemId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.removeItemFromBasket({
            parameters: {
              basketId: basket.basketId,
              itemId: itemId
            }
          });

          if (response.fault) {
            throw new Error(response);
          } else {
            setBasket(response);
          }
        })();
      },

      /**
       * Update an item in the basket.
       *
       * @param {object} item
       * @param {string} item.productId - The id of the product.
       * @param {number} item.quantity - The quantity of the item.
       * @param {string} basketItemId - The id of the item.
       */
      updateItemInBasket(item, basketItemId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.updateItemInBasket({
            body: item,
            parameters: {
              basketId: basket.basketId,
              itemId: basketItemId
            }
          });

          if (response.fault) {
            throw new Error(response);
          } else {
            setBasket(response);
          }
        })();
      },

      /**
       * Get the product information for all items in the basket.
       *
       * @param {string} ids - The id(s) of the product, separated by ",".
       * @param {boolean} options - options to pass as params to the api request
       */
      getProductsInBasket(ids, options) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (!ids) {
            return;
          }

          const response = yield api.shopperProducts.getProducts({
            parameters: _objectSpread({
              ids: ids
            }, options)
          });
          const itemDetail = response.data.reduce((result, item) => {
            const key = item.id;
            result[key] = item;
            return result;
          }, {});

          const updatedBasket = _objectSpread(_objectSpread({}, basket), {}, {
            _productItemsDetail: _objectSpread(_objectSpread({}, basket._productItemsDetail), itemDetail)
          });

          setBasket(updatedBasket);
        })();
      },

      /**
       * Set the shipping address for the current basket.
       * @external Address
       * @see https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shopperbaskets.html#orderaddress
       */
      setShippingAddress(address) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.updateShippingAddressForShipment({
            body: address,
            parameters: {
              basketId: basket.basketId,
              shipmentId: 'me',
              useAsBilling: !basket.billingAddress
            }
          });
          setBasket(response);
        })();
      },

      /**
       * Set the shipping method for the current basket.
       *
       * @param {string} id - The id of the shipping method.
       */
      setShippingMethod(id) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.updateShippingMethodForShipment({
            body: {
              id
            },
            parameters: {
              basketId: basket.basketId,
              shipmentId: 'me'
            }
          });
          setBasket(response);
        })();
      },

      /**
       * Set the billing address for the current basket.
       * @external Address
       * @see https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shopperbaskets.html#orderaddress
       */
      setBillingAddress(address) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.updateBillingAddressForBasket({
            body: address,
            parameters: {
              basketId: basket.basketId,
              shipmentId: 'me'
            }
          });
          setBasket(response);
        })();
      },

      /**
       * Set the payment instrument for the current basket
       *
       * NOTE: API does allow adding multiple payment instruments to split payment. However,
       * we are currently only handling a single payment instrument.
       * Commerce API does not have an endpoint to edit a payment instrument, but OCAPI does.
       * We want to emulate Commerce API behavior (when using OCAPI) so we'll just remove the
       * existing payment and add the new one to simulate editing. We're making an assumption
       * that our basket will never have more than one payment instrument applied at any time.
       *
       * @external PaymentInstrument
       * @see https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shopperbaskets.html#basketpaymentinstrumentrequest
       */
      setPaymentInstrument(paymentInstrument) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          var _basket$paymentInstru;

          // Keep reference to existing payment instrument id
          let existingPaymentInstrumentId = basket.paymentInstruments && ((_basket$paymentInstru = basket.paymentInstruments[0]) === null || _basket$paymentInstru === void 0 ? void 0 : _basket$paymentInstru.paymentInstrumentId); // Add the new payment instrument to basket

          let response = yield api.shopperBaskets.addPaymentInstrumentToBasket({
            body: paymentInstrument,
            parameters: {
              basketId: basket.basketId
            }
          }); // TOOO: Handle possible error when adding payment instrument.
          // We won't attempt to remove the previous payment instrument in this case.
          // Remove the previous payment instrument if it existed

          if (existingPaymentInstrumentId) {
            response = yield api.shopperBaskets.removePaymentInstrumentFromBasket({
              parameters: {
                basketId: basket.basketId,
                paymentInstrumentId: existingPaymentInstrumentId
              }
            });
          }

          setBasket(response);
        })();
      },

      /**
       * Remove the payment instrument for the current basket
       */
      removePaymentInstrument() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          var _basket$paymentInstru2;

          let paymentInstrumentId = basket.paymentInstruments && ((_basket$paymentInstru2 = basket.paymentInstruments[0]) === null || _basket$paymentInstru2 === void 0 ? void 0 : _basket$paymentInstru2.paymentInstrumentId);

          if (!paymentInstrumentId) {
            return;
          }

          const response = yield api.shopperBaskets.removePaymentInstrumentFromBasket({
            parameters: {
              basketId: basket.basketId,
              paymentInstrumentId: paymentInstrumentId
            }
          });
          setBasket(response);
        })();
      },

      /**
       * Update the customer information for the current basket.
       *
       * @param {object} info
       * @param {string} info.email - The email of the customer.
       */
      updateCustomerInfo(info) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.updateCustomerForBasket({
            body: info,
            parameters: {
              basketId: basket.basketId
            }
          });
          setBasket(response);
        })();
      },

      /**
       * Apply a coupon/promo code to the current basket
       * @param {string} code - The promo code to be applied
       */
      applyPromoCode(code) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.addCouponToBasket({
            body: {
              code
            },
            parameters: {
              basketId: basket.basketId
            }
          });

          if (response.fault) {
            throw new Error(response);
          }

          setBasket(response);
        })();
      },

      /**
       * Remove a coupon/promo code from the current basket
       * @param {string} couponIemId - The item id of the appied code
       */
      removePromoCode(couponItemId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperBaskets.removeCouponFromBasket({
            parameters: {
              basketId: basket.basketId,
              couponItemId
            }
          });

          if (response.fault) {
            throw new Error(response);
          }

          setBasket(response);
        })();
      },

      /**
       * Fetches and returns promo details for the given IDs
       * @param {Array<string>} ids - The promo ids to fetch
       * @returns {Object} - API response containing data
       */
      getPromotions(ids) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperPromotions.getPromotions({
            parameters: {
              ids: ids.join(',')
            }
          });
          return response;
        })();
      },

      /**
       * Creates an order using the current basket.
       */
      createOrder() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperOrders.createOrder({
            body: {
              basketId: basket.basketId
            }
          });

          if (response.fault || response.title && response.type && response.detail) {
            throw new Error(response.title);
          } // We replace the basket with the order result data so we can display
          // it on the confirmation page. The basket is automatically deleted
          // in SF so we need to make sure a new one is created when leaving the confirmation.


          setBasket(response);
        })();
      },

      /**
       * Fetches the applicable shipping methods for the current basket
       * @returns {Object} - API response containing data
       */
      getShippingMethods() {
        return api.shopperBaskets.getShippingMethodsForShipment({
          parameters: {
            basketId: basket.basketId,
            shipmentId: 'me'
          }
        });
      }

    });
  }, [customer, basket, setBasket]);
  return self;
}

/***/ }),

/***/ "./app/commerce-api/hooks/useCustomer.js":
/*!***********************************************!*\
  !*** ./app/commerce-api/hooks/useCustomer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCustomer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts */ "./app/commerce-api/contexts.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



const AuthTypes = Object.freeze({
  GUEST: 'guest',
  REGISTERED: 'registered'
});
function useCustomer() {
  const api = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useCommerceAPI)();
  const {
    customer,
    setCustomer
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_3__.CustomerContext);
  const self = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return _objectSpread(_objectSpread({}, customer), {}, {
      /**
       * Returns boolean value whether the user data is initialized
       */
      get isInitialized() {
        return !!(customer !== null && customer !== void 0 && customer.customerId);
      },

      /**
       * Returns boolean value whether the customer is of type `registered` or not.
       */
      get isRegistered() {
        return (customer === null || customer === void 0 ? void 0 : customer.authType) === AuthTypes.REGISTERED;
      },

      /**
       * Returns boolean value whether the customer is of type `guest` or not.
       */
      get isGuest() {
        return (customer === null || customer === void 0 ? void 0 : customer.authType) === AuthTypes.GUEST;
      },

      /** Returns the customer's saved addresses with the 'preferred' address in the first index */
      get addresses() {
        if (!(customer !== null && customer !== void 0 && customer.addresses)) {
          return undefined;
        }

        const preferredAddressIndex = customer.addresses.find(addr => addr.preferred);

        if (preferredAddressIndex > -1) {
          return [customer.addresses[preferredAddressIndex], customer.addresses.slice(preferredAddressIndex, preferredAddressIndex + 1)];
        }

        return customer.addresses;
      },

      /**
       * Log in customer account.
       *
       * @param {object} credentials
       * @param {string} credentials.email
       * @param {string} credentials.password
       */
      login(credentials) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const skeletonCustomer = yield api.auth.login(credentials);

          if (skeletonCustomer.authType === 'guest') {
            setCustomer(skeletonCustomer);
          } else {
            const customer = yield api.shopperCustomers.getCustomer({
              parameters: {
                customerId: skeletonCustomer.customerId
              }
            });
            setCustomer(customer);
          }
        })();
      },

      /**
       * Log out current customer.
       * and retrive a guest access token
       */
      logout() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const customer = yield api.auth.logout();
          setCustomer(customer);
        })();
      },

      /**
       * Fetch current customer information.
       */
      getCustomer() {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          setCustomer(yield api.shopperCustomers.getCustomer({
            parameters: {
              customerId: customer.customerId
            }
          }));
        })();
      },

      /**
       * Register a new customer account.
       *
       * @param {object} data
       * @param {boolean} data.acceptsMarketing - A boolean indicates whether customer accept marketing emails.
       * @param {string} data.email
       * @param {string} data.firstName
       * @param {string} data.lastName
       * @param {string} data.password
       */
      registerCustomer(data) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // TODO: investigate how to submit/include the checkbox input
          // for receiving email communication.
          const body = {
            customer: {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              login: data.email
            },
            password: data.password
          };
          const response = yield api.shopperCustomers.registerCustomer({
            body
          }); // Check for error json response

          if (response.detail && response.title && response.type) {
            throw new Error(response.detail);
          } // Send a new login request with the given credentials to ensure tokens are updated.


          yield self.login({
            email: data.email,
            password: data.password
          });
        })();
      },

      /**
       * Update customer information.
       *
       * @param {object} data
       * @param {string} data.email
       * @param {string} data.firstName
       * @param {string} data.lastName
       * @param {string} data.phone
       */
      updateCustomer(data) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const body = {
            firstName: data.firstName,
            lastName: data.lastName,
            phoneHome: data.phone,
            // NOTE/ISSUE
            // The sdk is allowing you to change your email to an already-existing email.
            // I would expect an error. We also want to keep the email and login the same
            // for the customer, but the sdk isn't changing the login when we submit an
            // updated email. This will lead to issues where you change your email but end
            // up not being able to login since 'login' will no longer match the email.
            email: data.email,
            login: data.email
          };
          const response = yield api.shopperCustomers.updateCustomer({
            body,
            parameters: {
              customerId: customer.customerId
            }
          }); // Check for error json response

          if (response.detail && response.title && response.type) {
            throw new Error(response.detail);
          } // This previous request does return the updated customer profile, however it does
          // not include the 'entire' customer. It is missing address and payment methods.
          // We need to refetch the customer to make sure everything is up to date.


          yield self.getCustomer();
        })();
      },

      /**
       * Update customer password.
       *
       * @param {object} data
       * @param {string} data.currentPassword - The old password.
       * @param {string} data.password - The new password.
       */
      updatePassword(data) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const body = {
            password: data.password,
            currentPassword: data.currentPassword
          }; // Note that we're using the raw response here. This request does not return
          // data when successful, but the sdk tries to parse the json (potential sdk bug).

          const rawResponse = yield api.shopperCustomers.updateCustomerPassword({
            body,
            parameters: {
              customerId: customer.customerId
            }
          }, true); // Success has no json response to parse, but errors do, so handle that here.

          if (rawResponse.status >= 400) {
            const json = yield rawResponse.json(); // Check for error json response

            if (json.detail && json.title && json.type) {
              throw new Error(json.detail);
            }
          }
        })();
      },

      /**
       * @todo - Backend set up required
       * @param {string} login - customer email address
       */
      getResetPasswordToken(login) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperCustomers.getResetPasswordToken({
            body: {
              login
            }
          }); // Check for error json response

          if (response.detail && response.title && response.type) {
            throw new Error(response.detail);
          }
        })();
      },

      /**
       * Add a new saved address.
       *
       * @external Address
       * @see https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customeraddress
       */
      addSavedAddress(address) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // The `addressId` field is required to save the customer's address to their account.
          // Rather than make the customer provide a name/id, we can generate a unique id behind
          // the scenes instead. This is only useful if you are not displaying the addr name/id
          // in the UI, which we aren't.
          const body = _objectSpread({
            addressId: (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)()
          }, address);

          yield api.shopperCustomers.createCustomerAddress({
            body,
            parameters: {
              customerId: customer.customerId
            }
          }); // This endpoint does not return the updated customer object, so we manually fetch it

          yield self.getCustomer();
        })();
      },

      /**
       * Update a saved address.
       *
       * @external Address
       * @see https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customeraddress
       */
      updateSavedAddress(address) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const body = address;
          yield api.shopperCustomers.updateCustomerAddress({
            body,
            parameters: {
              customerId: customer.customerId,
              addressName: address.addressId
            }
          }); // This endpoint does not return the updated customer object, so we manually fetch it

          yield self.getCustomer();
        })();
      },

      /**
       * Add a new saved payment instrument.
       *
       * @external PaymentInstrument
       * @see https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customerpaymentinstrumentrequest
       */
      addSavedPaymentInstrument(paymentInstrument) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const body = _objectSpread(_objectSpread({
            bankRoutingNumber: '',
            giftCertificateCode: ''
          }, paymentInstrument), {}, {
            paymentCard: _objectSpread(_objectSpread({}, paymentInstrument.paymentCard), {}, {
              securityCode: undefined
            })
          });

          yield api.shopperCustomers.createCustomerPaymentInstrument({
            body,
            parameters: {
              customerId: customer.customerId
            }
          }); // This endpoint does not return the updated customer object, so we manually fetch it

          yield self.getCustomer();
        })();
      },

      /**
       * Remove a saved payment instrument.
       *
       * @param {string} paymentInstrumentId - The id of the payment payment instrument.
       */
      removeSavedPaymentInstrument(paymentInstrumentId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // This SDK method must be called with `true` as second argument to avoid an error in
          // the sdk where it tries parsing json from an empty http response.
          yield api.shopperCustomers.deleteCustomerPaymentInstrument({
            parameters: {
              customerId: customer.customerId,
              paymentInstrumentId
            }
          }, true); // This endpoint does not return the updated customer object, so we manually fetch it

          yield self.getCustomer();
        })();
      },

      /**
       * Remove a saved address.
       *
       * @param {string} addressId - The id of the saved address.
       */
      removeSavedAddress(addressId) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // This SDK method must be called with `true` as second argument to avoid an error in
          // the sdk where it tries parsing json from an empty http response.
          yield api.shopperCustomers.removeCustomerAddress({
            parameters: {
              customerId: customer.customerId,
              addressName: addressId
            }
          }, true); // This endpoint does not return the updated customer object, so we manually fetch it

          yield self.getCustomer();
        })();
      },

      getCustomerOrders(params) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperCustomers.getCustomerOrders({
            parameters: _objectSpread({
              customerId: customer.customerId,
              offset: 0,
              limit: 10
            }, params)
          });
          return response;
        })();
      },

      getOrder(orderNo) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperOrders.getOrder({
            parameters: {
              orderNo
            }
          });
          return response;
        })();
      },

      getCustomerOrderProductsDetail(ids) {
        return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const response = yield api.shopperProducts.getProducts({
            parameters: {
              ids: ids.join(',')
            }
          });
          const productMap = response.data.reduce((result, item) => {
            const key = item.id;
            result[key] = item;
            return result;
          }, {});
          return productMap;
        })();
      }

    });
  }, [customer, setCustomer]);
  return self;
}

/***/ }),

/***/ "./app/commerce-api/hooks/useCustomerProductList.js":
/*!**********************************************************!*\
  !*** ./app/commerce-api/hooks/useCustomerProductList.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCustomerProductLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCustomerProductLists */ "./app/commerce-api/hooks/useCustomerProductLists.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * This hook is built on top of the useCustomerProductLists hook,
 * to provide functionalities to manage a single list.
 * A typical use case is wish list.
 */

const useCustomerProductList = (name, type) => {
  // cpl is the shorthand for "Cutomer Product Lists"
  const cpl = (0,_useCustomerProductLists__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const self = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return _objectSpread(_objectSpread({}, cpl), {}, {
      get data() {
        return cpl.findListByName(name);
      },

      get items() {
        var _self$data;

        return ((_self$data = self.data) === null || _self$data === void 0 ? void 0 : _self$data.customerProductListItems) || [];
      },

      get isEmpty() {
        var _self$items;

        return !((_self$items = self.items) !== null && _self$items !== void 0 && _self$items.length);
      },

      get isInitialized() {
        var _self$data2;

        return !!((_self$data2 = self.data) !== null && _self$data2 !== void 0 && _self$data2.id);
      },

      // boolean value indicate the list
      // is populated with product details
      get hasDetail() {
        var _self$data3;

        return !!((_self$data3 = self.data) !== null && _self$data3 !== void 0 && _self$data3.hasDetail);
      },

      /**
       * Initialize the list.
       */
      init(options) {
        return cpl.getOrCreateList(name, type, options);
      },

      /**
       * Adds an item to the customer's list.
       * @param {Object} item item to be added to the list.
       * @param {string} item.id
       * @param {number} item.quantity
       */
      createListItem: function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (item) {
          if (!self.isInitialized) {
            const list = yield self.init();
            return cpl.createListItem(list.id, item);
          }

          return cpl.createListItem(self.data.id, item);
        });

        return function createListItem(_x) {
          return _ref.apply(this, arguments);
        };
      }(),

      /**
       * Update an item to the customer's list.
       * @param {Object} item item to be updated
       * @param {string} item.id
       * @param {number} item.quantity
       */
      updateListItem: item => {
        return cpl.updateListItem(self.data.id, item);
      },

      /**
       * Remove an item from a customer product list
       *
       * @param {string} itemId the id of the item in the product list
       */
      removeListItem: itemId => {
        return cpl.removeListItem(self.data.id, itemId);
      },

      /**
       * Remove an item from the customer's list.
       *
       * @param {string} productId the id of the product
       */
      removeListItemByProductId: productId => {
        return cpl.removeListItemByProductId(self.data.id, productId);
      },

      /**
       * Find the item from list.
       * @param {string} productId
       * @returns {object} product list item
       */
      findItemByProductId(productId) {
        if (!self.isInitialized) {
          return undefined;
        }

        return cpl.findItemByProductId(self.data.id, productId);
      }

    });
  }, [cpl]);
  return self;
};

/* harmony default export */ __webpack_exports__["default"] = (useCustomerProductList);

/***/ }),

/***/ "./app/commerce-api/hooks/useCustomerProductLists.js":
/*!***********************************************************!*\
  !*** ./app/commerce-api/hooks/useCustomerProductLists.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCustomerProductLists; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts */ "./app/commerce-api/contexts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./app/commerce-api/utils.js");
/* harmony import */ var _useCustomer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useCustomer */ "./app/commerce-api/hooks/useCustomer.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




/**
 * This hook is designed to add customer product list capabilities
 * to your app, it leverages the Commerce API - Shopper Customer endpoints.
 * It uses a React context to store customer product list globally.
 *
 * By default, the Shopper Customer Product List API allows a shopper to
 * save multiple product lists. However, the PWA only use a single
 * product list, which is the wishlist. There is another hook useWishlist,
 * which is built on top of this hook to add wishlist specific logic.
 *
 * This Hook only works when your components are wrapped in CustomerProductListProvider.
 */

function useCustomerProductLists() {
  const api = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useCommerceAPI)();
  const customer = (0,_useCustomer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    state,
    actions
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_3__.CustomerProductListsContext);
  const getLists = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)(() => {
    return api.shopperCustomers.getCustomerProductLists({
      parameters: {
        customerId: customer.customerId
      }
    });
  });
  const createList = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)((name, type) => {
    return api.shopperCustomers.createCustomerProductList({
      body: {
        type,
        name
      },
      parameters: {
        customerId: customer.customerId
      }
    });
  });
  const getList = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)(listId => {
    return api.shopperCustomers.getCustomerProductList({
      parameters: {
        customerId: customer.customerId,
        listId
      }
    });
  });
  const createListItem = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)((listId, item) => {
    const {
      id,
      quantity
    } = item;
    return api.shopperCustomers.createCustomerProductListItem({
      body: {
        productId: id,
        quantity,
        public: false,
        priority: 1,
        type: 'product'
      },
      parameters: {
        customerId: customer.customerId,
        listId
      }
    });
  });
  const updateListItem = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)((listId, item) => {
    const {
      id,
      quantity
    } = item;
    return api.shopperCustomers.updateCustomerProductListItem({
      body: {
        id,
        quantity,
        public: false,
        priority: 1
      },
      parameters: {
        customerId: customer.customerId,
        listId: listId,
        itemId: item.id
      }
    });
  });
  const removeListItem = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)((listId, itemId) => {
    return api.shopperCustomers.deleteCustomerProductListItem({
      parameters: {
        itemId,
        listId,
        customerId: customer.customerId
      }
    }, true);
  });
  const self = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return {
      data: state.productLists,

      get isInitialized() {
        return state.productLists !== undefined;
      },

      reset() {
        actions.reset();
      },

      /**
       * Get customer's product lists.
       */
      getLists: function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
          const lists = yield getLists();
          actions.receiveLists(lists);
          return lists;
        });

        return function getLists() {
          return _ref.apply(this, arguments);
        };
      }(),

      /**
       * Create a new product list.
       * @param {string} name
       * @param {string} type
       */
      createList: function () {
        var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (name, type) {
          const list = yield createList(name, type);
          actions.receiveList(list);
          return list;
        });

        return function createList(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }(),

      /**
       * Get a specific product list by id.
       * @param {string} listId
       * @param {object} options
       */
      getList: function () {
        var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (listId, options) {
          const {
            detail
          } = options || {};
          let list = yield getList(listId);

          if (detail) {
            // automatically fetch details of the items in the list
            list = yield self.getProductDetails(list);
          }

          actions.receiveList(list);
          return list;
        });

        return function getList(_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }(),

      /**
       * Get a product list for the registered user or
       * creates a new list if none exists, due to the api
       * limitation, we can not filter the lists based on
       * name/type, therefore it fetches all lists.
       * @param {string} name
       * @param {string} type
       * @param {object} options
       * @param {boolean} options.detail boolean flag to enable/disable fetching product details
       */
      getOrCreateList: function () {
        var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (name, type, options) {
          var _response$data;

          const {
            detail
          } = options || {};
          let response = yield getLists(); // Note: if list is empty, the API response
          // does NOT contain the "data" key.

          let list = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.find(list => list.name === name);

          if (!list) {
            list = yield createList(name, type);
          }

          if (list && detail) {
            list = yield self.getProductDetails(list);
          }

          actions.receiveList(list);
          return list;
        });

        return function getOrCreateList(_x5, _x6, _x7) {
          return _ref4.apply(this, arguments);
        };
      }(),

      /**
       * Adds an item to the customer's product list.
       * @param {string} listId
       * @param {Object} item item to be added to the list.
       */
      createListItem: function () {
        var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (listId, item) {
          const createdItem = yield createListItem(listId, item);
          actions.createListItem(listId, createdItem);
          return createdItem;
        });

        return function createListItem(_x8, _x9) {
          return _ref5.apply(this, arguments);
        };
      }(),

      /**
       * Update an item in a customer product list
       *
       * @param {string} listId id of the list to update the item in
       * @param {object} item
       * @param {string} item.id the id of the item in the product list
       * @param {number} item.quantity the quantity of the item
       */
      updateListItem: function () {
        var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (listId, item) {
          const {
            id,
            quantity
          } = item;

          if (quantity === 0) {
            yield removeListItem(listId, id);
            actions.removeListItem(listId, id);
            return;
          }

          const updatedItem = yield updateListItem(listId, item);
          actions.updateListItem(listId, updatedItem);
          return updatedItem;
        });

        return function updateListItem(_x10, _x11) {
          return _ref6.apply(this, arguments);
        };
      }(),

      /**
       * Remove an item from a customer product list
       *
       * @param {string} listId id of the list to update the item in
       * @param {string} itemId the id of the item in the product list
       */
      removeListItem: function () {
        var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (listId, itemId) {
          yield removeListItem(listId, itemId);
          actions.removeListItem(listId, itemId);
        });

        return function removeListItem(_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }(),

      /**
       * Remove an item from a customer product list
       *
       * @param {string} listId id of the list to update the item in
       * @param {string} productId the id of the product
       */
      removeListItemByProductId(listId, productId) {
        const item = self.findItemByProductId(listId, productId);

        if (!item) {
          console.warn(`Cannot remove item because product ${productId} is not in the list.`);
          return;
        }

        return self.removeListItem(listId, item.id);
      },

      /**
       * Get all item details for a product list.
       * @param {object} list product list
       * @param {array} list.customerProductListItems items array
       * @returns {Object} customer product list
       */
      getProductDetails: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.handleAsyncError)( /*#__PURE__*/function () {
        var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (list) {
          // Warning, there is a weird API behavior
          // where if the product list is newly created
          // the "customerProductListItems" key will be missing
          // from the response, so we need to guard it.
          if (!list.customerProductListItems) {
            return _objectSpread(_objectSpread({}, list), {}, {
              hasDetail: true
            });
          }

          const ids = list.customerProductListItems.map(item => item.productId);
          const productDetails = yield api.shopperProducts.getProducts({
            parameters: {
              ids: ids.join(','),
              allImages: true
            }
          });
          const result = self.mergeProductDetailsIntoList(list, productDetails); // hasDetail is a flag to indicate
          // the list items are populated
          // with product detail data

          result.hasDetail = true;
          return _objectSpread(_objectSpread({}, result), {}, {
            hasDetail: true
          });
        });

        return function (_x14) {
          return _ref8.apply(this, arguments);
        };
      }()),

      /**
       * The customer product list API does NOT return the
       * product item details, this utility function is used
       * when you fetch the item details manually and insert
       * into the lists.
       * This function is often used with getProductDetails.
       */
      mergeProductDetailsIntoList(list, productDetails) {
        var _list$customerProduct;

        const items = (_list$customerProduct = list.customerProductListItems) === null || _list$customerProduct === void 0 ? void 0 : _list$customerProduct.map(item => {
          const product = _objectSpread({}, productDetails.data.find(product => product.id === item.productId));

          return _objectSpread(_objectSpread({}, item), {}, {
            product
          });
        });
        return _objectSpread(_objectSpread({}, list), {}, {
          customerProductListItems: items
        });
      },

      /**
       * Find the product list by its name.
       * @param {string} name
       * @returns {object} customer product list
       */
      findListByName(name) {
        if (!self.data) {
          return undefined;
        }

        return Object.values(self.data).find(list => list.name === name);
      },

      /**
       * Find the product list by its id.
       * @param {string} id
       * @returns {object} customer product list
       */
      findListById(id) {
        if (!self.data) {
          return undefined;
        }

        return Object.values(self.data).find(list => list.id === id);
      },

      /**
       * Find the item from list.
       * @param {string} listId
       * @param {string} productId
       * @returns {object} product list item
       */
      findItemByProductId(listId, productId) {
        var _self$findListById, _self$findListById$cu;

        return (_self$findListById = self.findListById(listId)) === null || _self$findListById === void 0 ? void 0 : (_self$findListById$cu = _self$findListById.customerProductListItems) === null || _self$findListById$cu === void 0 ? void 0 : _self$findListById$cu.find(item => item.productId === productId);
      }

    };
  }, [customer.customerId, state]);
  return self;
}

/***/ }),

/***/ "./app/commerce-api/hooks/useEinstein.js":
/*!***********************************************!*\
  !*** ./app/commerce-api/hooks/useEinstein.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts */ "./app/commerce-api/contexts.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



const useEinstein = () => {
  const api = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useCommerceAPI)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    loading: false,
    recommendations: []
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    api: api.einstein,

    sendViewProduct(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return api.einstein.sendViewProduct(...args);
      })();
    },

    sendViewReco(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return api.einstein.sendViewReco(...args);
      })();
    },

    sendClickReco(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return api.einstein.sendClickReco(...args);
      })();
    },

    sendAddToCart(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return api.einstein.sendAddToCart(...args);
      })();
    },

    getRecommenders(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return api.einstein.getRecommenders(...args);
      })();
    },

    getRecommendations(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        setState(s => _objectSpread(_objectSpread({}, s), {}, {
          loading: true
        }));
        const recommendations = yield api.einstein.getRecommendations(...args);
        setState({
          loading: false,
          recommendations
        });
      })();
    },

    getZoneRecommendations(...args) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        setState(s => _objectSpread(_objectSpread({}, s), {}, {
          loading: true
        }));
        const recommendations = yield api.einstein.getZoneRecommendations(...args);
        setState({
          loading: false,
          recommendations
        });
      })();
    }

  });
};

/* harmony default export */ __webpack_exports__["default"] = (useEinstein);

/***/ }),

/***/ "./app/commerce-api/hooks/useSearchSuggestions.js":
/*!********************************************************!*\
  !*** ./app/commerce-api/hooks/useSearchSuggestions.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts */ "./app/commerce-api/contexts.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * Hook for retrieving and managing state of Search Suggestions
 */

const useSearchSuggestions = () => {
  const api = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useCommerceAPI)();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    results: {}
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    /**
     * Retrieves search suggestions from api based on input
     *
     * @param {input} string
     */
    getSearchSuggestions(input) {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        setState({
          loading: true
        });
        const searchSuggestions = yield api.shopperSearch.getSearchSuggestions({
          parameters: {
            q: input
          }
        });
        setState({
          results: searchSuggestions
        });
      })();
    },

    /**
     * Clears results
     */
    clearSuggestedSearch() {
      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        setState({
          results: {}
        });
      })();
    }

  });
};

/* harmony default export */ __webpack_exports__["default"] = (useSearchSuggestions);

/***/ }),

/***/ "./app/commerce-api/hooks/useShopper.js":
/*!**********************************************!*\
  !*** ./app/commerce-api/hooks/useShopper.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _useCustomer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



/**
 * Joins basket and customer hooks into a single hook for initializing their states
 * when the app loads on the client-side. Should only be use at top-level of app.
 * @returns {Object} - customer and basket objects
 */

const useShopper = (opts = {}) => {
  const {
    currency
  } = opts;
  const customer = (0,_useCustomer__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const basket = (0,_useBasket__WEBPACK_IMPORTED_MODULE_1__["default"])({
    currency
  }); // Create or restore the user session upon mounting

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    customer.login();
  }, []); // Handle basket init/updates in response to customer/basket changes.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const hasBasket = basket === null || basket === void 0 ? void 0 : basket.loaded; // We have a customer but no basket, so we fetch a new or existing basket

    if (customer.isInitialized && !hasBasket) {
      basket.getOrCreateBasket();
      return;
    } // We have a customer and a basket, but the basket does not belong to this customer
    // so we get their existing basket or create a new one for them


    if (hasBasket && customer.isInitialized && customer.customerId !== basket.customerInfo.customerId) {
      basket.getOrCreateBasket();
      return;
    } // We have a registered customer (customer with email), and we have their basket,
    // but the email applied to the basket is missing or doesn't match the customer
    // email. In this case, we update the basket with their email.


    if (hasBasket && customer.isRegistered && customer.customerId === basket.customerInfo.customerId && customer.email !== basket.customerInfo.email) {
      basket.updateCustomerInfo({
        email: customer.email
      });
      return;
    }
  }, [customer.authType, basket.loaded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch product details for all items in cart
    if (customer.customerId && basket !== null && basket !== void 0 && basket.basketId) {
      if (basket.itemCount > 0) {
        var _basket$productItems;

        const allImages = true;
        let ids = (_basket$productItems = basket.productItems) === null || _basket$productItems === void 0 ? void 0 : _basket$productItems.map(item => item.productId);

        if (basket !== null && basket !== void 0 && basket._productItemsDetail) {
          ids = ids.filter(id => !(basket !== null && basket !== void 0 && basket._productItemsDetail[id]));
        }

        basket.getProductsInBasket(ids.toString(), {
          allImages
        });
      }
    }
  }, [customer, basket]);
  return {
    customer,
    basket
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useShopper);

/***/ }),

/***/ "./app/commerce-api/index.js":
/*!***********************************!*\
  !*** ./app/commerce-api/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! commerce-sdk-isomorphic */ "./node_modules/commerce-sdk-isomorphic/lib/index.esm.js");
/* harmony import */ var pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pwa-kit-react-sdk/utils/url */ "./node_modules/pwa-kit-react-sdk/utils/url.js");
/* harmony import */ var _ocapi_shopper_baskets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ocapi-shopper-baskets */ "./app/commerce-api/ocapi-shopper-baskets.js");
/* harmony import */ var _ocapi_shopper_orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ocapi-shopper-orders */ "./app/commerce-api/ocapi-shopper-orders.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./app/commerce-api/utils.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth */ "./app/commerce-api/auth.js");
/* harmony import */ var _einstein__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./einstein */ "./app/commerce-api/einstein.js");



const _excluded = ["proxyPath"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint-disable no-unused-vars */







/**
 * The configuration details for the connecting to the API.
 * @typedef {Object} ClientConfig
 * @property {string} [proxy] - URL to proxy fetch calls through.
 * @property {string} [headers] - Request headers to be added to requests.
 * @property {Object} [parameters] - API connection parameters for SDK.
 * @property {string} [parameters.clientId]
 * @property {string} [parameters.organizationId]
 * @property {string} [parameters.shortCode]
 * @property {string} [parameters.siteId]
 * @property {string} [parameters.version]
 */

/**
 * An object containing the customer's login credentials.
 * @typedef {Object} CustomerCredentials
 * @property {string} credentials.email
 * @property {string} credentials.password
 */

/**
 * Salesforce Customer object.
 * {@link https://salesforcecommercecloud.github.io/commerce-sdk-isomorphic/modules/shoppercustomers.html#customer}}
 * @typedef {Object} Customer
 */

/**
 * A wrapper class that proxies calls to the underlying commerce-sdk-isomorphic.
 * The sdk class instances are created automatically with the given config.
 */

class CommerceAPI {
  /**
   * Create an instance of the API with the given config.
   * @param {ClientConfig} config - The config used to instantiate SDK apis.
   */
  constructor(config = {}) {
    var _this$_config$einstei;

    const {
      proxyPath
    } = config,
          restConfig = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(config, _excluded); // Client-side requests should be proxied via the configured path.


    const proxy = `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_4__.getAppOrigin)()}${proxyPath}`;
    this._config = _objectSpread({
      proxy
    }, restConfig);
    this.auth = new _auth__WEBPACK_IMPORTED_MODULE_8__["default"](this);

    if ((_this$_config$einstei = this._config.einsteinConfig) !== null && _this$_config$einstei !== void 0 && _this$_config$einstei.einsteinId) {
      this.einstein = new _einstein__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    } // A mapping of property names to the SDK class constructors we'll be
    // providing instances for.
    //
    // NOTE: `sendLocale` and `sendCurrency` for sending locale and currency info to the API:
    // - boolean, if you want to affect _all_ methods for a given API
    // - OR an array (listing the API's methods), if you want to affect only certain methods of an API


    const apiConfigs = {
      shopperCustomers: {
        api: commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__.ShopperCustomers,
        sendLocale: false
      },
      shopperBaskets: {
        api: _ocapi_shopper_baskets__WEBPACK_IMPORTED_MODULE_5__["default"],
        sendLocale: false,
        sendCurrency: ['createBasket']
      },
      shopperGiftCertificates: {
        api: commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__.ShopperGiftCertificates
      },
      shopperLogin: {
        api: commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__.ShopperLogin,
        sendLocale: false
      },
      shopperOrders: {
        api: _ocapi_shopper_orders__WEBPACK_IMPORTED_MODULE_6__["default"]
      },
      shopperProducts: {
        api: commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__.ShopperProducts,
        sendCurrency: ['getProduct', 'getProducts']
      },
      shopperPromotions: {
        api: commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__.ShopperPromotions
      },
      shopperSearch: {
        api: commerce_sdk_isomorphic__WEBPACK_IMPORTED_MODULE_3__.ShopperSearch,
        sendCurrency: ['productSearch', 'getSearchSuggestions']
      }
    }; // Instantiate the SDK class proxies and create getters from our api mapping.
    // The proxy handlers are called when accessing any of the mapped SDK class
    // proxies, executing various pre-defined hooks for tapping into or modifying
    // the outgoing method parameters and/or incoming SDK responses

    const self = this;
    Object.keys(apiConfigs).forEach(key => {
      const SdkClass = apiConfigs[key].api;
      self._sdkInstances = _objectSpread(_objectSpread({}, self._sdkInstances), {}, {
        [key]: new Proxy(new SdkClass(this._config), {
          get: function (obj, prop) {
            if (typeof obj[prop] === 'function') {
              return (...args) => {
                const fetchOptions = args[0];
                const {
                  locale,
                  currency
                } = self._config;

                if (fetchOptions.ignoreHooks) {
                  return obj[prop](...args);
                } // Inject the locale and currency to the API call via its parameters.
                //
                // NOTE: The commerce sdk isomorphic will complain if you pass parameters to
                // it that it doesn't expect, this is why we only add the locale and currency
                // to some of the API calls.
                // By default we send the locale param and don't send the currency param.


                const {
                  sendLocale = true,
                  sendCurrency = false
                } = apiConfigs[key];
                const includeGlobalLocale = Array.isArray(sendLocale) ? sendLocale.includes(prop) : !!sendLocale;
                const includeGlobalCurrency = Array.isArray(sendCurrency) ? sendCurrency.includes(prop) : !!sendCurrency;
                fetchOptions.parameters = _objectSpread(_objectSpread(_objectSpread({}, includeGlobalLocale ? {
                  locale
                } : {}), includeGlobalCurrency ? {
                  currency
                } : {}), fetchOptions.parameters);
                return self.willSendRequest(prop, ...args).then(newArgs => {
                  return obj[prop](...newArgs).then(res => self.didReceiveResponse(res, newArgs));
                });
              };
            }

            return obj[prop];
          }
        })
      });
      Object.defineProperty(self, key, {
        get() {
          return self._sdkInstances[key];
        }

      });
    });
    this.getConfig = this.getConfig.bind(this);
  }
  /**
   * Returns the api client configuration
   * @returns {ClientConfig}
   */


  getConfig() {
    return this._config;
  }
  /**
   * Executed before every proxied method call to the SDK. Provides the method
   * name and arguments. This can be overidden in a subclass to perform any
   * logging or modifications to arguments before the request is sent.
   * @param {string} methodName - The name of the sdk method that will be called.
   * @param {...*} args - Original arguments for the SDK method.
   * @returns {Promise<Array>} - Updated arguments that will be passed to the SDK method
   */


  willSendRequest(methodName, ...params) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // We never need to modify auth request headers for these methods
      if (methodName === 'authenticateCustomer' || methodName === 'authorizeCustomer' || methodName === 'getAccessToken') {
        return params;
      } // If a login promise exists, we don't proceed unless it is resolved.


      const pendingLogin = _this.auth.pendingLogin;

      if (pendingLogin) {
        yield pendingLogin;
      } // If the token is invalid (missing, past/nearing expiration), we issue
      //  a login call, which will attempt to refresh the token or get a new
      //  guest token. Once login is complete, we can proceed.


      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_7__.isTokenValid)(_this.auth.authToken)) {
        // NOTE: Login will update `this.auth.authToken` with a fresh token
        yield _this.auth.login();
      } // Apply the appropriate auth headers and return new options


      const [fetchOptions, ...restParams] = params;

      const newFetchOptions = _objectSpread(_objectSpread({}, fetchOptions), {}, {
        headers: _objectSpread(_objectSpread({}, fetchOptions.headers), {}, {
          Authorization: _this.auth.authToken
        })
      });

      return [newFetchOptions, ...restParams];
    })();
  }
  /**
   * Executed when receiving a response from an SDK request. The response data
   * can be mutated or inspected before being passed back to the caller. Should
   * be overidden in a subclass.
   * @param {*} response - The response from the SDK method call.
   * @param {Array} args - Original arguments for the SDK method.
   * @returns {*} - The response to be passed back to original caller.
   */


  didReceiveResponse(response, args) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_7__.isError)(response)) {
      return _objectSpread(_objectSpread({}, response), {}, {
        isError: true,
        message: response.detail
      });
    }

    return response;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CommerceAPI);

/***/ }),

/***/ "./app/commerce-api/ocapi-shopper-baskets.js":
/*!***************************************************!*\
  !*** ./app/commerce-api/ocapi-shopper-baskets.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./app/commerce-api/utils.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// This class allows integration with OCAPI Baskets Resource
// https://documentation.b2c.commercecloud.salesforce.com/DOC2/topic/com.demandware.dochelp/OCAPI/current/shop/Resources/Baskets.html
// This implementations coverts CAPI requests to OCAPI requests as there are fundamental differences between the APIS
// One major difference is OCAPI uses snake_case and CAPI uses camelCase for this reaso you will see a utility function in here that convert
// from camelCase to snake_case - camelCaseKeysToUnderscore
// createOcapiFetch is another utility function that returns the response from OCAPI in the fromat returned from CAPI
// Another utility function - checkRequiredParameters is used to check if the parameters or body objects necessary for a call are
// present in the request before making it


class OcapiShopperBaskets {
  constructor(config) {
    this.fetch = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createOcapiFetch)(config);
  }

  createBasket(...args) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.fetch('baskets', 'POST', args, 'createBasket');
    })();
  }

  updateBasket(...args) {
    var _this2 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId
        },
        body
      } = args[0];
      return _this2.fetch(`baskets/${basketId}`, 'PATCH', args, 'updateBasket', body);
    })();
  }

  getBasket(...args) {
    var _this3 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        basketId
      } = args[0].parameters;
      return yield _this3.fetch(`baskets/${basketId}`, 'GET', args, 'getBasket');
    })();
  }

  addItemToBasket(...args) {
    var _this4 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId
        },
        body
      } = args[0];
      return _this4.fetch(`baskets/${basketId}/items`, 'POST', args, 'addToBasket', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  updateItemInBasket(...args) {
    var _this5 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId,
          itemId
        },
        body
      } = args[0];
      return _this5.fetch(`baskets/${basketId}/items/${itemId}`, 'PATCH', args, 'updateItemInBasket', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  removeItemFromBasket(...args) {
    var _this6 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'itemId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        basketId,
        itemId
      } = args[0].parameters;
      return _this6.fetch(`baskets/${basketId}/items/${itemId}`, 'DELETE', args, 'removeItemFromBasket');
    })();
  }

  addPaymentInstrumentToBasket(...args) {
    var _this7 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId
        },
        body
      } = args[0];
      return _this7.fetch(`baskets/${basketId}/payment_instruments`, 'POST', args, 'addPaymentInstrumentToBasket', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  removePaymentInstrumentFromBasket(...args) {
    var _this8 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'paymentInstrumentId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId,
          paymentInstrumentId
        }
      } = args[0];
      return _this8.fetch(`baskets/${basketId}/payment_instruments/${paymentInstrumentId}`, 'DELETE', args, 'removePaymentInstrumentFromBasket');
    })();
  }

  getPaymentMethodsForBasket(...args) {
    var _this9 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        basketId
      } = args[0].parameters;
      return _this9.fetch(`baskets/${basketId}/payment_methods`, 'GET', args, 'getPaymentMethodsForShipment');
    })();
  }

  getShippingMethodsForShipment(...args) {
    var _this10 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'shipmentId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        basketId,
        shipmentId
      } = args[0].parameters;
      return _this10.fetch(`baskets/${basketId}/shipments/${shipmentId}/shipping_methods`, 'GET', args, 'getShippingMethodsForShipment');
    })();
  }

  updateBillingAddressForBasket(...args) {
    var _this11 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId,
          useAsShipping = false
        },
        body
      } = args[0];
      return _this11.fetch(`baskets/${basketId}/billing_address?use_as_shipping=${useAsShipping}`, 'PUT', args, 'updateBillingAddressForBasket', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  updateShippingAddressForShipment(...args) {
    var _this12 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body', 'shipmentId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId,
          shipmentId,
          useAsBilling = false
        },
        body
      } = args[0];
      return _this12.fetch(`baskets/${basketId}/shipments/${shipmentId}/shipping_address?use_as_billing=${useAsBilling}`, 'PUT', args, 'updateShippingAddressForShipment', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  updateShippingMethodForShipment(...args) {
    var _this13 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body', 'shipmentId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId,
          shipmentId
        },
        body
      } = args[0];
      return _this13.fetch(`baskets/${basketId}/shipments/${shipmentId}/shipping_method`, 'PUT', args, 'updateShippingMethodForShipment', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  updateCustomerForBasket(...args) {
    var _this14 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId
        },
        body
      } = args[0];
      return _this14.fetch(`baskets/${basketId}/customer`, 'PUT', args, 'updateCustomerForBasket', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  deleteBasket(...args) {
    var _this15 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        basketId
      } = args[0].parameters;
      return _this15.fetch(`baskets/${basketId}`, 'DELETE', args, 'deleteBasket');
    })();
  }

  addCouponToBasket(...args) {
    var _this16 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId
        },
        body
      } = args[0];
      return _this16.fetch(`baskets/${basketId}/coupons`, 'POST', args, 'addCouponToBasket', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  removeCouponFromBasket(...args) {
    var _this17 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['basketId', 'couponItemId'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      let {
        parameters: {
          basketId,
          couponItemId
        }
      } = args[0];
      return _this17.fetch(`baskets/${basketId}/coupons/${couponItemId}`, 'DELETE', args, 'removeCouponFromBasket');
    })();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OcapiShopperBaskets);

/***/ }),

/***/ "./app/commerce-api/ocapi-shopper-orders.js":
/*!**************************************************!*\
  !*** ./app/commerce-api/ocapi-shopper-orders.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./app/commerce-api/utils.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// This class allows integration with OCAPI Orders Resource
// https://documentation.b2c.commercecloud.salesforce.com/DOC2/topic/com.demandware.dochelp/OCAPI/current/shop/Resources/Orders.html
// This implementations coverts CAPI requests to OCAPI requests as there are fundamental differences between the APIS
// One major difference is OCAPI uses snake_case and CAPI uses camelCase for this reaso you will see a utility function in here that convert
// from camelCase to snake_case - camelCaseKeysToUnderscore
// createOcapiFetch is another utility function that returns the response from OCAPI in the fromat returned from CAPI
// Another utility function - checkRequiredParameters is used to check if the parameters or body objects necessary for a call are
// present in the request before making it


class OcapiShopperOrders {
  constructor(config) {
    this.fetch = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createOcapiFetch)(config);
  }

  createOrder(...args) {
    var _this = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['body'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        body
      } = args[0];
      return yield _this.fetch('orders', 'POST', args, 'createOrder', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.camelCaseKeysToUnderscore)(body));
    })();
  }

  getOrder(...args) {
    var _this2 = this;

    return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const required = ['orderNo'];
      let requiredParametersError = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.checkRequiredParameters)(args[0], required);

      if (requiredParametersError) {
        return requiredParametersError;
      }

      const {
        orderNo
      } = args[0].parameters;
      return _this2.fetch(`orders/${orderNo}`, 'GET', args, 'getOrder');
    })();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OcapiShopperOrders);

/***/ }),

/***/ "./app/commerce-api/pkce.js":
/*!**********************************!*\
  !*** ./app/commerce-api/pkce.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCodeVerifier": function() { return /* binding */ createCodeVerifier; },
/* harmony export */   "generateCodeChallenge": function() { return /* binding */ generateCodeChallenge; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Server Side

const randomstring = __webpack_require__(/*! randomstring */ "./node_modules/randomstring/index.js"); // Globals


const isServer = typeof window === 'undefined';
/**
 * Creates Code Verifier use for PKCE auth flow.
 *
 * @returns {String} The 128 character length code verifier.
 */

const createCodeVerifier = () => {
  return isServer ? randomstring.generate(128) : (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(128);
};
/**
 * Creates Code Challenge based on Code Verifier
 *
 * @param {String} codeVerifier
 * @returns {String}
 */

const generateCodeChallenge = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (codeVerifier) {
    let base64Digest;

    if (isServer) {
      yield __webpack_require__.e(/*! import() */ "_e655").then(__webpack_require__.t.bind(__webpack_require__, /*! crypto */ "?e655", 23)).then(module => {
        const crypto = module.default;
        base64Digest = crypto.createHash('sha256').update(codeVerifier).digest('base64');
      });
    } else {
      const encoder = new TextEncoder();
      const data = encoder.encode(codeVerifier);
      const digest = yield window.crypto.subtle.digest('SHA-256', data);
      base64Digest = (0,base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__.encode)(digest);
    }

    return base64Digest.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  });

  return function generateCodeChallenge(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./app/commerce-api/utils.js":
/*!***********************************!*\
  !*** ./app/commerce-api/utils.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isTokenValid": function() { return /* binding */ isTokenValid; },
/* harmony export */   "createGetTokenBody": function() { return /* binding */ createGetTokenBody; },
/* harmony export */   "keysToCamel": function() { return /* binding */ keysToCamel; },
/* harmony export */   "camelCaseKeysToUnderscore": function() { return /* binding */ camelCaseKeysToUnderscore; },
/* harmony export */   "convertOcapiFaultToCapiError": function() { return /* binding */ convertOcapiFaultToCapiError; },
/* harmony export */   "checkRequiredParameters": function() { return /* binding */ checkRequiredParameters; },
/* harmony export */   "createOcapiFetch": function() { return /* binding */ createOcapiFetch; },
/* harmony export */   "getTenantId": function() { return /* binding */ getTenantId; },
/* harmony export */   "isError": function() { return /* binding */ isError; },
/* harmony export */   "handleAsyncError": function() { return /* binding */ handleAsyncError; },
/* harmony export */   "convertSnakeCaseToSentenceCase": function() { return /* binding */ convertSnakeCaseToSentenceCase; },
/* harmony export */   "noop": function() { return /* binding */ noop; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pwa-kit-react-sdk/utils/url */ "./node_modules/pwa-kit-react-sdk/utils/url.js");
/* harmony import */ var pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/universal/errors */ "./node_modules/pwa-kit-react-sdk/ssr/universal/errors.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



/**
 * Compares the token age against the issued and expiry times. If the token's age is
 * within 60 seconds of its valid time (or exceeds it), we consider the token invalid.
 * @function
 * @param {string} token - The JWT bearer token to be inspected
 * @returns {boolean}
 */

function isTokenValid(token) {
  if (!token) {
    return false;
  }

  const {
    exp,
    iat
  } = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token.replace('Bearer ', ''));
  const validTimeSeconds = exp - iat - 60;
  const tokenAgeSeconds = Date.now() / 1000 - iat;

  if (validTimeSeconds > tokenAgeSeconds) {
    return true;
  }

  return false;
} // Returns fomrulated body for SopperLogin getToken endpoint

function createGetTokenBody(urlString, slasCallbackEndpoint, codeVerifier) {
  const url = new URL(urlString);
  const urlParams = new URLSearchParams(url.search);
  const usid = urlParams.get('usid');
  const code = urlParams.get('code');
  return {
    grantType: 'authorization_code_pkce',
    code,
    usid,
    codeVerifier: codeVerifier,
    redirectUri: slasCallbackEndpoint
  };
} // Ocapi related utilities

const toCamel = str => {
  if (str.startsWith('_') || str.startsWith('c_')) {
    return str;
  }

  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const isObject = obj => {
  return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
};

const keysToCamel = obj => {
  if (isObject(obj)) {
    const n = {};
    Object.keys(obj).forEach(k => {
      n[toCamel(k)] = keysToCamel(obj[k]);
    });
    return n;
  } else if (Array.isArray(obj)) {
    return obj.map(i => {
      return keysToCamel(i);
    });
  }

  return obj;
};
const camelCaseKeysToUnderscore = _obj => {
  if (typeof _obj != 'object') return _obj; // Copy the incoming object so we dont mutate it

  let obj;

  if (Array.isArray(_obj)) {
    obj = [..._obj];
  } else {
    obj = _objectSpread({}, _obj);
  }

  for (var oldName in obj) {
    // Camel to underscore
    let newName = oldName.replace(/([A-Z])/g, $1 => {
      return '_' + $1.toLowerCase();
    }); // Only process if names are different

    if (newName != oldName) {
      // Check for the old property name to avoid a ReferenceError in strict mode.
      if (Object.prototype.hasOwnProperty.call(obj, oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
    } // Recursion


    if (typeof obj[newName] == 'object') {
      obj[newName] = camelCaseKeysToUnderscore(obj[newName]);
    }
  }

  return obj;
}; // This function coverts errors/faults returned from the OCAPI API to the format that is returned from the CAPI
// I added the fault key to make life easier as it's hard to discern a CAPI error

const convertOcapiFaultToCapiError = error => {
  return {
    title: error.message,
    type: error.type,
    detail: error.message,
    // Unique to OCAPI I think
    arguments: error.arguments,
    fault: true
  };
}; // This function checks required parameters and or body for requests to OCAPI endpoints before sending

const checkRequiredParameters = (listOfPassedParameters, listOfRequiredParameters) => {
  const isBodyOnlyRequiredParam = listOfRequiredParameters.includes('body') && listOfRequiredParameters.length === 1;

  if (!listOfPassedParameters.parameters && !isBodyOnlyRequiredParam) {
    return {
      title: `Parameters are required for this request`,
      type: `MissingParameters`,
      detail: `Parameters are required for this request`
    };
  }

  if (listOfRequiredParameters.includes('body') && !listOfPassedParameters.body) {
    return {
      title: `Body is required for this request`,
      type: `MissingBody`,
      detail: `Body is  required for this request`
    };
  }

  if (isBodyOnlyRequiredParam && listOfRequiredParameters.includes('body') && listOfPassedParameters.body) {
    return undefined;
  }

  let undefinedValues = listOfRequiredParameters.filter(req => !Object.keys(listOfPassedParameters.parameters).includes(req));
  undefinedValues = undefinedValues.filter(value => value !== 'body');

  if (undefinedValues.length) {
    return {
      title: `The following parameters were missing from your resquest: ${undefinedValues.toString()}`,
      type: `MissingParameters`,
      detail: `The following parameters were missing from your resquest: ${undefinedValues.toString()}`
    };
  } else {
    return undefined;
  }
}; // This function is used to interact with the OCAPI API

const createOcapiFetch = commerceAPIConfig => /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (endpoint, method, args, methodName, body) {
    const proxy = `/mobify/proxy/ocapi`; // The api config will only have `ocapiHost` during testing to workaround localhost proxy

    const host = commerceAPIConfig.ocapiHost ? `https://${commerceAPIConfig.ocapiHost}` : `${(0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_3__.getAppOrigin)()}${proxy}`;
    const siteId = commerceAPIConfig.parameters.siteId;

    const headers = _objectSpread(_objectSpread({}, args[0].headers), {}, {
      'Content-Type': 'application/json',
      'x-dw-client-id': commerceAPIConfig.parameters.clientId
    });

    let response;
    response = yield fetch(`${host}/s/${siteId}/dw/shop/v21_3/${endpoint}`, _objectSpread({
      method: method,
      headers: headers
    }, body && {
      body: JSON.stringify(body)
    }));
    const httpStatus = response.status;

    if (!args[1] && response.json) {
      response = yield response.json();
    }

    const convertedResponse = keysToCamel(response);

    if (convertedResponse.fault) {
      const error = convertOcapiFaultToCapiError(convertedResponse.fault);
      throw new pwa_kit_react_sdk_ssr_universal_errors__WEBPACK_IMPORTED_MODULE_4__.HTTPError(httpStatus, error.detail);
    } else {
      return convertedResponse;
    }
  });

  return function (_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}(); // This function derrives the SF Tenant Id from the SF OrgId

const getTenantId = orgId => {
  // Derive tenant id id form org id
  const indexToStartOfTenantId = orgId.indexOf('_', orgId.indexOf('_') + 1);
  const tenantId = orgId.substring(indexToStartOfTenantId + 1);
  return tenantId;
};
/**
 * Indicates if an JSON response from the SDK should be considered an error
 * @param {object} jsonResponse - The response object returned from SDK calls
 * @returns {boolean}
 */

const isError = jsonResponse => {
  if (!jsonResponse) {
    return false;
  }

  const {
    detail,
    title,
    type
  } = jsonResponse;

  if (detail && title && type) {
    return true;
  }

  return false;
};
/**
 * Decorator that wraps functions to handle error response.
 * @param {function} func - A function which returns a promise
 * @returns {function}
 */

const handleAsyncError = func => {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (...args) {
      const result = yield func(...args);

      if (isError(result)) {
        throw new Error(result.detail);
      }

      return result;
    });

    return function () {
      return _ref2.apply(this, arguments);
    };
  }();
};
/**
 * Converts snake-case strings to space separated or sentence case
 * strings by replacing '_' with a ' '.
 * @param {string} text snake-case text.
 * @returns {string} space separated string.
 */

const convertSnakeCaseToSentenceCase = text => {
  return text.split('_').join(' ');
};
/**
 * No operation function. You can use this
 * empty function when you wish to pass
 * around a function that will do nothing.
 * Usually used as default for event handlers.
 */

const noop = () => {};

/***/ }),

/***/ "./app/components/_app-config/index.jsx":
/*!**********************************************!*\
  !*** ./app/components/_app-config/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-visible/dist/focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./app/theme/index.js");
/* harmony import */ var _commerce_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api */ "./app/commerce-api/index.js");
/* harmony import */ var _commerce_api_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commerce-api/contexts */ "./app/commerce-api/contexts.js");
/* harmony import */ var _commerce_api_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commerce-api.config */ "./app/commerce-api.config.js");
/* harmony import */ var _einstein_api_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../einstein-api.config */ "./app/einstein-api.config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/locale */ "./app/utils/locale.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Removes focus for non-keyboard interactions for the whole application










const apiConfig = _objectSpread(_objectSpread({}, _commerce_api_config__WEBPACK_IMPORTED_MODULE_7__.commerceAPIConfig), {}, {
  einsteinConfig: _einstein_api_config__WEBPACK_IMPORTED_MODULE_8__.einsteinAPIConfig
});
/**
 * Returns the validated locale short code parsed from the url.
 * @private
 * @param locals the request locals (only defined when executing on the server.)
 * @returns {String} the locale short code
 */


const getLocale = (locals = {}) => {
  let {
    originalUrl
  } = locals; // If there is no originalUrl value in the locals, create it from the window location.
  // This happens when executing on the client.

  if (!originalUrl) {
    var _window;

    originalUrl = (_window = window) === null || _window === void 0 ? void 0 : _window.location.href.replace(window.location.origin, '');
  } // Parse the pathname from the partial using the URL object and a placeholder host


  const {
    pathname
  } = new URL(`http://hostname${originalUrl}`);
  let shortCode = pathname.split('/')[1]; // Ensure that the locale is in the supported list, otherwise return the default.

  shortCode = (0,_utils_locale__WEBPACK_IMPORTED_MODULE_10__.getSupportedLocalesIds)().includes(shortCode) ? shortCode : _constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_LOCALE;
  return shortCode;
};
/**
 * Use the AppConfig component to inject extra arguments into the getProps
 * methods for all Route Components in the app – typically you'd want to do this
 * to inject a connector instance that can be used in all Pages.
 *
 * You can also use the AppConfig to configure a state-management library such
 * as Redux, or Mobx, if you like.
 */


const AppConfig = ({
  children,
  locals = {}
}) => {
  const [basket, setBasket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [customer, setCustomer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_commerce_api_contexts__WEBPACK_IMPORTED_MODULE_6__.CommerceAPIProvider, {
    value: locals.api
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_commerce_api_contexts__WEBPACK_IMPORTED_MODULE_6__.CustomerProvider, {
    value: {
      customer,
      setCustomer
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_commerce_api_contexts__WEBPACK_IMPORTED_MODULE_6__.BasketProvider, {
    value: {
      basket,
      setBasket
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_commerce_api_contexts__WEBPACK_IMPORTED_MODULE_6__.CustomerProductListsProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.ChakraProvider, {
    theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, children)))));
};

AppConfig.restore = (locals = {}) => {
  // Parse the locale from the page url.
  const locale = getLocale(locals) || _constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_LOCALE;
  const currency = (0,_utils_locale__WEBPACK_IMPORTED_MODULE_10__.getPreferredCurrency)(locale) || _constants__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_CURRENCY;
  locals.api = new _commerce_api__WEBPACK_IMPORTED_MODULE_5__["default"](_objectSpread(_objectSpread({}, apiConfig), {}, {
    locale,
    currency
  }));
};

AppConfig.freeze = () => undefined;

AppConfig.extraGetPropsArgs = (locals = {}) => {
  return {
    api: locals.api
  };
};

AppConfig.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  locals: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (AppConfig);

/***/ }),

/***/ "./app/components/_app/index.jsx":
/*!***************************************!*\
  !*** ./app/components/_app/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var pwa_kit_react_sdk_ssr_universal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/universal/utils */ "./node_modules/pwa-kit-react-sdk/ssr/universal/utils.js");
/* harmony import */ var pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pwa-kit-react-sdk/utils/url */ "./node_modules/pwa-kit-react-sdk/utils/url.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_skip_nav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @chakra-ui/skip-nav */ "./node_modules/@chakra-ui/skip-nav/dist/esm/index.js");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts */ "./app/contexts/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header */ "./app/components/header/index.jsx");
/* harmony import */ var _components_offline_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/offline-banner */ "./app/components/offline-banner/index.jsx");
/* harmony import */ var _components_offline_boundary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/offline-boundary */ "./app/components/offline-boundary/index.jsx");
/* harmony import */ var _components_scroll_to_top__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/scroll-to-top */ "./app/components/scroll-to-top/index.jsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/footer */ "./app/components/footer/index.jsx");
/* harmony import */ var _pages_checkout_partials_checkout_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/checkout/partials/checkout-header */ "./app/pages/checkout/partials/checkout-header.jsx");
/* harmony import */ var _pages_checkout_partials_checkout_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/checkout/partials/checkout-footer */ "./app/pages/checkout/partials/checkout-footer.jsx");
/* harmony import */ var _drawer_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../drawer-menu */ "./app/components/drawer-menu/index.jsx");
/* harmony import */ var _list_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../list-menu */ "./app/components/list-menu/index.jsx");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var _commerce_api_hooks_useShopper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../commerce-api/hooks/useShopper */ "./app/commerce-api/hooks/useShopper.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_auth_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-auth-modal */ "./app/hooks/use-auth-modal.js");
/* harmony import */ var _hooks_use_add_to_cart_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../hooks/use-add-to-cart-modal */ "./app/hooks/use-add-to-cart-modal.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/locale */ "./app/utils/locale.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../seo */ "./app/components/seo/index.jsx");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");



/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




 // Chakra


 // Contexts

 // Local Project Components










 // Hooks




 // Localization

 // Others







const DEFAULT_NAV_DEPTH = 3;
const DEFAULT_ROOT_CATEGORY = 'root';

const App = props => {
  const {
    children,
    targetLocale,
    defaultLocale,
    messages,
    categories: allCategories = {}
  } = props;
  const appOrigin = (0,pwa_kit_react_sdk_utils_url__WEBPACK_IMPORTED_MODULE_5__.getAppOrigin)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useHistory)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useLocation)();
  const authModal = (0,_hooks_use_auth_modal__WEBPACK_IMPORTED_MODULE_19__.useAuthModal)();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_28__.useStyleConfig)('App');
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_29__.useDisclosure)(); // Used to conditionally render header/footer for checkout page

  const isCheckout = /\/checkout$/.test(location === null || location === void 0 ? void 0 : location.pathname); // Get the current currency to be used throught the app

  const currency = (0,_utils_locale__WEBPACK_IMPORTED_MODULE_23__.getPreferredCurrency)(targetLocale) || _constants__WEBPACK_IMPORTED_MODULE_24__.DEFAULT_CURRENCY; // Set up customer and basket

  (0,_commerce_api_hooks_useShopper__WEBPACK_IMPORTED_MODULE_17__["default"])({
    currency
  });
  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_26__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!customer.isInitialized) {
      return;
    }

    if (customer.isRegistered) {
      wishlist.init();
    }

    if (customer.isGuest) {
      wishlist.reset();
    }
  }, [customer.authType]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Listen for online status changes.
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_21__.watchOnlineStatus)(isOnline => {
      setIsOnline(isOnline);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // Lets automatically close the mobile navigation when the
    // location path is changed.
    onClose();
  }, [location]);

  const onLogoClick = () => {
    // Goto the home page.
    history.push((0,_utils_url__WEBPACK_IMPORTED_MODULE_22__.homeUrlBuilder)(_constants__WEBPACK_IMPORTED_MODULE_24__.HOME_HREF, targetLocale)); // Close the drawer.

    onClose();
  };

  const onCartClick = () => {
    // Goto the home page.
    history.push(`/${targetLocale}/cart`); // Close the drawer.

    onClose();
  };

  const onAccountClick = () => {
    // Link to account page for registered customer, open auth modal otherwise
    if (customer.isRegistered) {
      history.push(`/${targetLocale}/account`);
    } else {
      // if they already are at the login page, do not show login modal
      if (new RegExp(`^/${targetLocale}/login$`).test(location.pathname)) return;
      authModal.onOpen();
    }
  };

  const onWishlistClick = () => {
    history.push(`/${targetLocale}/account/wishlist`);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "sf-app"
  }, styles.container), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_31__["default"], {
    onError: err => {
      if (err.code === 'MISSING_TRANSLATION') {
        // NOTE: Remove the console error for missing translations during development,
        // as we knew translations would be added later.
        console.warn('Missing translation', err.message);
        return;
      }

      throw err;
    },
    locale: targetLocale,
    defaultLocale: defaultLocale,
    messages: messages
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_contexts__WEBPACK_IMPORTED_MODULE_6__.CategoriesProvider, {
    categories: allCategories
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_contexts__WEBPACK_IMPORTED_MODULE_6__.CurrencyProvider, {
    currency: currency
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_seo__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("meta", {
    name: "theme-color",
    content: "#0288a7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("meta", {
    name: "apple-mobile-web-app-title",
    content: "PWA-Kit-Retail-React-App"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("link", {
    rel: "apple-touch-icon",
    href: (0,pwa_kit_react_sdk_ssr_universal_utils__WEBPACK_IMPORTED_MODULE_4__.getAssetUrl)('static/img/global/apple-touch-icon.png')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("link", {
    rel: "manifest",
    href: (0,pwa_kit_react_sdk_ssr_universal_utils__WEBPACK_IMPORTED_MODULE_4__.getAssetUrl)('static/manifest.json')
  }), (0,_utils_locale__WEBPACK_IMPORTED_MODULE_23__.getSupportedLocalesIds)().map(locale => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("link", {
    rel: "alternate",
    hrefLang: locale.toLowerCase(),
    href: `${appOrigin}${(0,_utils_url__WEBPACK_IMPORTED_MODULE_22__.getUrlWithLocale)(locale, {
      location
    })}`,
    key: locale
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("link", {
    rel: "alternate",
    hrefLang: defaultLocale.slice(0, 2),
    href: `${appOrigin}${(0,_utils_url__WEBPACK_IMPORTED_MODULE_22__.getUrlWithLocale)(defaultLocale, {
      location
    })}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("link", {
    rel: "alternate",
    hrefLang: "x-default",
    href: `${appOrigin}/`
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_scroll_to_top__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__.Box, {
    id: "app",
    display: "flex",
    flexDirection: "column",
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_skip_nav__WEBPACK_IMPORTED_MODULE_32__.SkipNavLink, {
    zIndex: "skipLink"
  }, "Skip to Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__.Box, styles.headerWrapper, !isCheckout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onMenuClick: onOpen,
    onLogoClick: onLogoClick,
    onMyCartClick: onCartClick,
    onMyAccountClick: onAccountClick,
    onWishlistClick: onWishlistClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_16__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_drawer_menu__WEBPACK_IMPORTED_MODULE_14__["default"], {
    isOpen: isOpen,
    onClose: onClose,
    onLogoClick: onLogoClick,
    root: allCategories[DEFAULT_ROOT_CATEGORY]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_16__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_list_menu__WEBPACK_IMPORTED_MODULE_15__["default"], {
    root: allCategories[DEFAULT_ROOT_CATEGORY]
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_pages_checkout_partials_checkout_header__WEBPACK_IMPORTED_MODULE_12__["default"], null)), !isOnline && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_offline_banner__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_hooks_use_add_to_cart_modal__WEBPACK_IMPORTED_MODULE_20__.AddToCartModalProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_skip_nav__WEBPACK_IMPORTED_MODULE_32__.SkipNavContent, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      outline: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_30__.Box, {
    as: "main",
    id: "app-main",
    role: "main",
    display: "flex",
    flexDirection: "column",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_offline_boundary__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOnline: false
  }, children))), !isCheckout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_pages_checkout_partials_checkout_footer__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_hooks_use_auth_modal__WEBPACK_IMPORTED_MODULE_19__.AuthModal, authModal)))))));
};

App.shouldGetProps = () => {
  // In this case, we only want to fetch data for the app once, on the server.
  return typeof window === 'undefined';
};

App.getProps = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    api
  }) {
    const localeConfig = yield (0,_utils_locale__WEBPACK_IMPORTED_MODULE_23__.getLocaleConfig)({
      getUserPreferredLocales: () => {
        // CONFIG: This function should return an array of preferred locales. They can be
        // derived from various sources. Below are some examples of those:
        //
        // - client side: window.navigator.languages
        // - the page URL they're on (example.com/en-GB/home)
        // - cookie (if their previous preference is saved there)
        //
        // If this function returns an empty array (e.g. there isn't locale in the page url),
        // then the app would use the default locale as the fallback.
        // NOTE: Your implementation may differ, this is jsut what we did.
        //
        // Since the CommerceAPI client already has the current `locale` set,
        // we can use it's value to load the correct messages for the application.
        // Take a look at the `app/components/_app-config` component on how the
        // preferred locale was derived.
        const {
          locale
        } = api.getConfig();
        return [locale];
      }
    }); // Login as `guest` to get session.

    yield api.auth.login(); // Get the root category, this will be used for things like the navigation.

    const rootCategory = yield api.shopperProducts.getCategory({
      parameters: {
        id: DEFAULT_ROOT_CATEGORY,
        levels: DEFAULT_NAV_DEPTH
      }
    });

    if (rootCategory.isError) {
      const message = rootCategory.title === 'Unsupported Locale' ? `

🚫 This page isn’t working.
It looks like the locale ‘${rootCategory.locale}’ hasn’t been set up, yet.
You can either follow this doc, https://sfdc.co/B4Z1m to enable it in business manager or define a different locale with the instructions for Localization in the README file.
` : rootCategory.detail;
      throw new Error(message);
    } // Flatten the root so we can easily access all the categories throughout
    // the application.


    const categories = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_21__.flatten)(rootCategory, 'categories');
    return {
      targetLocale: localeConfig.app.targetLocale,
      defaultLocale: localeConfig.app.defaultLocale,
      messages: localeConfig.messages,
      categories: categories
    };
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

App.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  targetLocale: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  defaultLocale: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  messages: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/components/_error/index.jsx":
/*!*****************************************!*\
  !*** ./app/components/_error/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





 // <Error> is rendered when:
//
// 1. A user requests a page that is not routable from `app/routes.jsx`.
// 2. A routed component throws an error in `getProps()`.
// 3. A routed component throws an error in `render()`.
//
// It must not throw an error. Keep it as simple as possible.

const Error = props => {
  const {
    stack
  } = props;
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
  const title = "This page isn't working";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    id: "sf-app",
    flex: 1,
    direction: "column",
    minWidth: '375px'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    as: "header",
    width: "full",
    boxShadow: "base",
    backgroundColor: "white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    maxWidth: "container.xxxl",
    marginLeft: "auto",
    marginRight: "auto",
    px: [4, 4, 6, 8],
    paddingTop: [1, 1, 2, 4],
    paddingBottom: [3, 3, 2, 4]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
    "aria-label": "logo",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.BrandLogo, {
      width: [8, 8, 8, 12],
      height: [6, 6, 6, 8]
    }),
    marginBottom: [1, 1, 2, 0],
    variant: "unstyled",
    onClick: () => history.push('/')
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    as: "main",
    id: "app-main",
    role: "main",
    layerStyle: "page",
    padding: {
      lg: 8,
      md: 6,
      sm: 0,
      base: 0
    },
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    direction: 'column',
    justify: "center",
    px: {
      base: 4,
      md: 6,
      lg: 50
    },
    py: {
      base: 20,
      md: 24
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    align: "center",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.FileIcon, {
    boxSize: ['30px', '32px'],
    mb: 8
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    as: "h2",
    fontSize: ['xl', '2xl', '2xl', '3xl'],
    mb: 2
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    maxWidth: "440px",
    marginBottom: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    align: "center"
  }, "An error has occurred. Try refreshing the page or if you need immediate help please contact support.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: ['column', 'row'],
    spacing: 4,
    width: ['100%', 'auto']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    variant: "outline",
    bg: "white",
    as: "a",
    borderColor: 'gray.200',
    target: "_blank",
    href: "https://help.salesforce.com/s/support"
  }, "Contact Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    onClick: () => window.location.reload()
  }, "Refresh the page"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    marginTop: 20
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontWeight: "bold",
    fontSize: "md"
  }, "Stack Trace"), stack && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    as: "pre",
    mt: 4,
    fontSize: "sm",
    background: "gray.50",
    borderColor: "gray.200",
    borderStyle: "solid",
    borderWidth: "1px",
    overflow: "auto",
    padding: 4
  }, stack)))));
};

Error.propTypes = {
  // JavaScript error stack trace: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack
  stack: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  // HTTP status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  status: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./app/components/drawer-menu/index.jsx":
/*!**********************************************!*\
  !*** ./app/components/drawer-menu/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _locale_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locale-selector */ "./app/components/locale-selector/index.jsx");
/* harmony import */ var _nested_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nested-accordion */ "./app/components/nested-accordion/index.jsx");
/* harmony import */ var _social_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-icons */ "./app/components/social-icons/index.jsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/transition/dist/chakra-ui-transition.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loading-spinner */ "./app/components/loading-spinner/index.jsx");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/locale */ "./app/utils/locale.js");



/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Project Components



 // Components


 // Icons

 // Others






 // The FONT_SIZES and FONT_WEIGHTS constants are used to control the styling for
// the accordion buttons as their current depth. In the below definition we assign
// values for depths 0 - 3, any depth deeper than that will use the default styling.

const FONT_SIZES = ['lg', 'md', 'md'];
const FONT_WEIGHTS = ['semibold', 'semibold', 'regular'];
const PHONE_DRAWER_SIZE = 'xs';
const TABLET_DRAWER_SIZE = 'lg';

const DrawerSeparator = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Box, {
  paddingTop: "6",
  paddingBottom: "6"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Divider, null)); // CUSTOMIZE YOUR NAVIGATION BY ALTERING THESE VALUES


const SIGN_IN_HREF = '/login';
const STORE_LOCATOR_HREF = '/store-locator';
/**
 * This is the navigation component used for mobile devices (phone and tablet). It's
 * main usage is to navigate from one category to the next, but also homes links to
 * support, log in and out actions, as support links.
 */

const DrawerMenu = ({
  isOpen,
  onClose = _utils_utils__WEBPACK_IMPORTED_MODULE_9__.noop,
  onLogoClick = _utils_utils__WEBPACK_IMPORTED_MODULE_9__.noop,
  root
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.useMultiStyleConfig)('DrawerMenu');
  const drawerSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.useBreakpointValue)({
    sm: PHONE_DRAWER_SIZE,
    md: TABLET_DRAWER_SIZE
  });
  const socialIconVariant = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.useBreakpointValue)({
    base: 'flex',
    md: 'flex-start'
  });
  const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const onSignoutClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      setShowLoading(true);
      yield customer.logout();
      navigate('/login');
      setShowLoading(false);
    });

    return function onSignoutClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Drawer, {
    isOpen: isOpen,
    onClose: onClose,
    placement: "left",
    size: drawerSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.DrawerOverlay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.DrawerContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.DrawerHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.IconButton, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.BrandLogo, styles.logo),
    variant: "unstyled",
    onClick: onLogoClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.DrawerCloseButton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.DrawerBody, null, showLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_loading_spinner__WEBPACK_IMPORTED_MODULE_12__["default"], null), root ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.Fade, {
    in: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_nested_accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowMultiple: true,
    item: root,
    itemsKey: "categories",
    itemsFilter: "c_showInMenu",
    fontSizes: FONT_SIZES,
    fontWeights: FONT_WEIGHTS,
    itemsBefore: ({
      depth,
      item
    }) => depth > 0 ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__.AccordionItem, {
      border: "none",
      key: "show-all"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_22__.AccordionButton, {
      paddingLeft: 8,
      as: _components_link__WEBPACK_IMPORTED_MODULE_7__["default"],
      to: (0,_utils_url__WEBPACK_IMPORTED_MODULE_10__.categoryUrlBuilder)(item),
      fontSize: FONT_SIZES[depth],
      fontWeight: FONT_WEIGHTS[depth],
      color: "black"
    }, intl.formatMessage({
      id: "mobile_navigation.categories.shop_all",
      defaultMessage: [{
        "type": 0,
        "value": "Shop All"
      }]
    })))] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null),
    urlBuilder: _utils_url__WEBPACK_IMPORTED_MODULE_10__.categoryUrlBuilder
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Center, {
    p: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_23__.Spinner, {
    size: "xl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(DrawerSeparator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.VStack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    align: "stretch",
    spacing: 0
  }, styles.actions, {
    px: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Box, styles.actionsItem, customer.isRegistered ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_nested_accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    urlBuilder: (item, locale) => `/${locale}/account${item.path}`,
    itemsAfter: ({
      depth
    }) => depth === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.signout, {
      variant: "unstyled",
      onClick: onSignoutClick
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Flex, {
      align: 'center'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.SignoutIcon, {
      boxSize: 5
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Text, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.signoutText, {
      as: "span"
    }), intl.formatMessage({
      id: "PlBReU",
      defaultMessage: [{
        "type": 0,
        "value": "Log out"
      }]
    })))),
    item: {
      id: 'root',
      items: [{
        id: 'my-account',
        name: intl.formatMessage({
          id: "2bGejb",
          defaultMessage: [{
            "type": 0,
            "value": "My Account"
          }]
        }),
        items: [{
          id: 'profile',
          path: '',
          name: intl.formatMessage({
            id: "mYx8sv",
            defaultMessage: [{
              "type": 0,
              "value": "Account Details"
            }]
          })
        }, {
          id: 'orders',
          path: '/orders',
          name: intl.formatMessage({
            id: "XBfvKN",
            defaultMessage: [{
              "type": 0,
              "value": "Order History"
            }]
          })
        }, {
          id: 'addresses',
          path: '/addresses',
          name: intl.formatMessage({
            id: "xBrtnx",
            defaultMessage: [{
              "type": 0,
              "value": "Addresses"
            }]
          })
        }, {
          id: 'payments',
          path: '/payments',
          name: intl.formatMessage({
            id: "xuTqgN",
            defaultMessage: [{
              "type": 0,
              "value": "Payment Methods"
            }]
          })
        }]
      }]
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    to: SIGN_IN_HREF
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.HStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.UserIcon, styles.icon), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Text, null, intl.formatMessage({
    id: "mobile_navigation.actions.sign_in",
    defaultMessage: [{
      "type": 0,
      "value": "Sign In"
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Box, styles.actionsItem, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    to: STORE_LOCATOR_HREF
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.HStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__.LocationIcon, styles.icon), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Text, null, intl.formatMessage({
    id: "mobile_navigation.actions.store_locator",
    defaultMessage: [{
      "type": 0,
      "value": "Store Locator"
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_locale_selector__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.localeSelector, {
    selectedLocale: intl.locale,
    locales: (0,_utils_locale__WEBPACK_IMPORTED_MODULE_14__.getSupportedLocalesIds)(),
    onSelect: newLocale => {
      // Update the `locale` in the URL.
      const newUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_10__.getUrlWithLocale)(newLocale, {
        disallowParams: ['refine']
      });
      window.location = newUrl;
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(DrawerSeparator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_nested_accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    allowMultiple: true // NOTE: Modify this content and builder as you see fit.
    ,
    urlBuilder: () => '/',
    item: {
      id: 'links-root',
      items: [{
        id: 'customersupport',
        items: [{
          id: 'contactus',
          name: intl.formatMessage({
            id: "mobile_navigation.links.customer_support.contact_us",
            defaultMessage: [{
              "type": 0,
              "value": "Contact Us"
            }]
          })
        }, {
          id: 'shippingandreturns',
          name: intl.formatMessage({
            id: "mobile_navigation.links.customer_support.shipping_and_returns",
            defaultMessage: [{
              "type": 0,
              "value": "Shipping & Returns"
            }]
          })
        }],
        name: intl.formatMessage({
          id: "mobile_navigation.links.customer_support",
          defaultMessage: [{
            "type": 0,
            "value": "Customer Support"
          }]
        })
      }, {
        id: 'ourcompany',
        items: [{
          id: 'aboutus',
          name: intl.formatMessage({
            id: "mobile_navigation.links.out_company.about_us",
            defaultMessage: [{
              "type": 0,
              "value": "About Us"
            }]
          })
        }],
        name: intl.formatMessage({
          id: "mobile_navigation.links.out_company",
          defaultMessage: [{
            "type": 0,
            "value": "Our Company"
          }]
        })
      }, {
        id: 'privacyandsecurity',
        items: [{
          id: 'termsandconditions',
          name: intl.formatMessage({
            id: "mobile_navigation.links.privacy_and_security.terms_and_conditions",
            defaultMessage: [{
              "type": 0,
              "value": "Terms & Conditions"
            }]
          })
        }, {
          id: 'privacypolicy',
          name: intl.formatMessage({
            id: "mobile_navigation.links.privacy_and_security.privacy_policy",
            defaultMessage: [{
              "type": 0,
              "value": "Privacy Policy"
            }]
          })
        }, {
          id: 'sitemap',
          name: intl.formatMessage({
            id: "mobile_navigation.links.privacy_and_security.stie_map",
            defaultMessage: [{
              "type": 0,
              "value": "Site Map"
            }]
          })
        }],
        name: intl.formatMessage({
          id: "mobile_navigation.links.privacy_and_security",
          defaultMessage: [{
            "type": 0,
            "value": "Privacy & Security"
          }]
        })
      }]
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(DrawerSeparator, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.DrawerFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_social_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: socialIconVariant
  })))));
};

DrawerMenu.displayName = 'DrawerMenu';
DrawerMenu.propTypes = {
  /**
   * The root category in your commerce cloud back-end.
   */
  root: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The opened state of the drawer.
   */
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * Function called when the drawer is dismissed.
   */
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Function called when the drawer logo is clicked.
   */
  onLogoClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerMenu);

/***/ }),

/***/ "./app/components/field/index.jsx":
/*!****************************************!*\
  !*** ./app/components/field/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/select/dist/chakra-ui-select.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const Field = ({
  name,
  label,
  formLabel,
  type = 'text',
  options = [],
  rules = {},
  error,
  placeholder,
  inputProps,
  control,
  defaultValue,
  helpText,
  children
}) => {
  const [hidePassword, setHidePassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const PasswordIcon = hidePassword ? _icons__WEBPACK_IMPORTED_MODULE_4__.VisibilityIcon : _icons__WEBPACK_IMPORTED_MODULE_4__.VisibilityOffIcon;
  const inputType = type === 'password' && hidePassword ? 'password' : type === 'password' ? 'text' : type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
    name: name,
    control: control,
    rules: rules,
    defaultValue: defaultValue,
    render: ({
      onChange,
      value,
      ref
    }) => {
      const _inputProps = typeof inputProps === 'function' ? inputProps({
        value,
        onChange
      }) : inputProps;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {
        id: name,
        isInvalid: error
      }, !['checkbox', 'radio'].includes(type) && type !== 'hidden' && (formLabel || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, null, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.InputGroup, null, ['text', 'password', 'email', 'phone', 'tel', 'number'].includes(type) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        onChange: onChange,
        value: value,
        type: inputType,
        placeholder: placeholder
      }, _inputProps)), type === 'hidden' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        onChange: onChange,
        value: value,
        type: "hidden"
      }, _inputProps)), type === 'password' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.InputRightElement, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
        variant: "ghosted",
        "aria-label": "Show password",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PasswordIcon, {
          color: "gray.500",
          boxSize: 6
        }),
        onClick: () => setHidePassword(!hidePassword)
      })), type === 'select' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Select, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        onChange: onChange,
        value: value,
        placeholder: placeholder
      }, _inputProps), options.map(opt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
        key: `${opt.label}-${opt.value}`,
        value: opt.value
      }, opt.label))), type === 'checkbox' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Checkbox, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        ref: ref,
        onChange: e => onChange(e.target.checked),
        isChecked: value
      }, _inputProps), formLabel || label), children), error && !type !== 'hidden' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormErrorMessage, null, error.message), helpText);
    }
  });
};

Field.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  formLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['text', 'number', 'password', 'email', 'phone', 'tel', 'select', 'checkbox', 'hidden']),
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
  })),
  rules: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
  }),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  control: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  defaultValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  helpText: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
};
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./app/components/footer/index.jsx":
/*!*****************************************!*\
  !*** ./app/components/footer/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/form-control/dist/chakra-ui-form-control.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/select/dist/chakra-ui-select.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _links_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../links-list */ "./app/components/links-list/index.jsx");
/* harmony import */ var _social_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social-icons */ "./app/components/social-icons/index.jsx");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");
/* harmony import */ var _locale_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locale-text */ "./app/components/locale-text/index.jsx");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/locale */ "./app/utils/locale.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */











const Footer = _ref => {
  let otherProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useMultiStyleConfig)('Footer');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const [locale, setLocale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(intl.locale);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "footer"
  }, styles.container, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, styles.content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.StylesProvider, {
    value: styles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.SimpleGrid, {
    columns: 4,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: intl.formatMessage({
      id: "footer.column.customer_support",
      defaultMessage: [{
        "type": 0,
        "value": "Customer Support"
      }]
    }),
    links: [{
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.contact_us",
        defaultMessage: [{
          "type": 0,
          "value": "Contact Us"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.shipping",
        defaultMessage: [{
          "type": 0,
          "value": "Shipping"
        }]
      })
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: intl.formatMessage({
      id: "footer.column.account",
      defaultMessage: [{
        "type": 0,
        "value": "Account"
      }]
    }),
    links: [{
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.order_status",
        defaultMessage: [{
          "type": 0,
          "value": "Order Status"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.signin_create_account",
        defaultMessage: [{
          "type": 0,
          "value": "Sign in or Create Account"
        }]
      })
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: intl.formatMessage({
      id: "footer.column.our_company",
      defaultMessage: [{
        "type": 0,
        "value": "Our Company"
      }]
    }),
    links: [{
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.store_locator",
        defaultMessage: [{
          "type": 0,
          "value": "Store Locator"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.about_us",
        defaultMessage: [{
          "type": 0,
          "value": "About Us"
        }]
      })
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Subscribe, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Subscribe, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, styles.localeSelector, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "sf-footer-locale-selector",
    id: "locale_selector",
    width: "auto"
  }, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Select, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: locale,
    onChange: ({
      target
    }) => {
      setLocale(target.value); // Update the `locale` in the URL.

      const newUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_6__.getUrlWithLocale)(target.value, {
        disallowParams: ['refine']
      });
      window.location = newUrl;
    },
    variant: "filled"
  }, styles.localeDropdown), (0,_utils_locale__WEBPACK_IMPORTED_MODULE_8__.getSupportedLocalesIds)().map(locale => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_locale_text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    as: "option",
    value: locale,
    shortCode: locale,
    key: locale
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Divider, styles.horizontalRule), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, styles.bottomHalf, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, styles.copyright, "\xA9", ' ', intl.formatMessage({
    id: "footer.message.copyright",
    defaultMessage: [{
      "type": 0,
      "value": "2021 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed."
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LegalLinks, {
    variant: "vertical"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LegalLinks, {
    variant: "horizontal"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

const Subscribe = _ref2 => {
  let otherProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref2);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useStyles)();
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.subscribe, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Heading, styles.subscribeHeading, intl.formatMessage({
    id: "footer.subscribe.heading.first_to_know",
    defaultMessage: [{
      "type": 0,
      "value": "Be the first to know"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, styles.subscribeMessage, intl.formatMessage({
    id: "footer.subscribe.description.sign_up",
    defaultMessage: [{
      "type": 0,
      "value": "Sign up to stay in the loop about the hottest deals"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "email",
    placeholder: "you@email.com"
  }, styles.subscribeField)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.InputRightElement, styles.subscribeButtonContainer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    variant: "footer"
  }, intl.formatMessage({
    id: "footer.subscribe.button.sign_up",
    defaultMessage: [{
      "type": 0,
      "value": "Sign Up"
    }]
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_social_icons__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "flex-start",
    pinterestInnerColor: "black"
  }, styles.socialIcons)));
};

const LegalLinks = ({
  variant
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    links: [{
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.terms_conditions",
        defaultMessage: [{
          "type": 0,
          "value": "Terms & Conditions"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.privacy_policy",
        defaultMessage: [{
          "type": 0,
          "value": "Privacy Policy"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.site_map",
        defaultMessage: [{
          "type": 0,
          "value": "Site Map"
        }]
      })
    }],
    color: "gray.200",
    variant: variant
  });
};

LegalLinks.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['vertical', 'horizontal'])
};

/***/ }),

/***/ "./app/components/forms/login-fields.jsx":
/*!***********************************************!*\
  !*** ./app/components/forms/login-fields.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _useLoginFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLoginFields */ "./app/components/forms/useLoginFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const LoginFields = ({
  form,
  prefix = ''
}) => {
  const fields = (0,_useLoginFields__WEBPACK_IMPORTED_MODULE_2__["default"])({
    form,
    prefix
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.password));
};

LoginFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (LoginFields);

/***/ }),

/***/ "./app/components/forms/password-requirements.jsx":
/*!********************************************************!*\
  !*** ./app/components/forms/password-requirements.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_password_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/password-utils */ "./app/utils/password-utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






/**
 * UI component for styling password requirement line
 */

const PasswordRequirement = ({
  isValid,
  children
}) => {
  const iconStyles = {
    display: 'block',
    ml: isValid ? '-2px' : '-1px',
    mr: isValid ? '9px' : '10px',
    boxSize: isValid ? 4 : '14px',
    color: isValid ? 'green.500' : 'white',
    border: !isValid ? '1px solid' : 'none',
    borderColor: 'gray.200',
    borderRadius: 'full'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon, iconStyles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    fontSize: "sm",
    lineHeight: 4
  }, children));
};

PasswordRequirement.propTypes = {
  /** Should it render in valid state */
  isValid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** The requirement text */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
/**
 * Renders a list of password requirments. Each requirement line toggles to its `isValid`
 * state when the given password value meets the associated critieria.
 */

const PasswordRequirements = ({
  value
}) => {
  const pwValidations = (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_3__.validatePassword)(value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PasswordRequirement, {
    isValid: pwValidations.hasMinChars
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "cChish",
    defaultMessage: [{
      "type": 0,
      "value": "8 characters minimum"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PasswordRequirement, {
    isValid: pwValidations.hasUppercase
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "EKKW2e",
    defaultMessage: [{
      "type": 0,
      "value": "1 uppercase letter"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PasswordRequirement, {
    isValid: pwValidations.hasLowercase
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "nA8PRt",
    defaultMessage: [{
      "type": 0,
      "value": "1 lowercase letter"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PasswordRequirement, {
    isValid: pwValidations.hasNumber
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "Ty4jOO",
    defaultMessage: [{
      "type": 0,
      "value": "1 number"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PasswordRequirement, {
    isValid: pwValidations.hasSpecialChar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "Gu0oq5",
    defaultMessage: [{
      "type": 0,
      "value": "1 special character (example: , S ! % #)"
    }]
  })));
};

PasswordRequirements.propTypes = {
  /** The password to check against */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (PasswordRequirements);

/***/ }),

/***/ "./app/components/forms/registration-fields.jsx":
/*!******************************************************!*\
  !*** ./app/components/forms/registration-fields.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _useRegistrationFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useRegistrationFields */ "./app/components/forms/useRegistrationFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/* harmony import */ var _password_requirements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-requirements */ "./app/components/forms/password-requirements.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const RegistrationFields = ({
  form,
  prefix = ''
}) => {
  const fields = (0,_useRegistrationFields__WEBPACK_IMPORTED_MODULE_3__["default"])({
    form,
    prefix
  });
  const password = form.watch('password');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 3,
    pb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], fields.password), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_password_requirements__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: password
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_field__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields.acceptsMarketing, {
    inputProps: {
      alignItems: 'flex-start'
    }
  })));
};

RegistrationFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (RegistrationFields);

/***/ }),

/***/ "./app/components/forms/reset-password-fields.jsx":
/*!********************************************************!*\
  !*** ./app/components/forms/reset-password-fields.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _useResetPasswordFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useResetPasswordFields */ "./app/components/forms/useResetPasswordFields.jsx");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field */ "./app/components/field/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const ResetPasswordFields = ({
  form,
  prefix = ''
}) => {
  const fields = (0,_useResetPasswordFields__WEBPACK_IMPORTED_MODULE_2__["default"])({
    form,
    prefix
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_field__WEBPACK_IMPORTED_MODULE_3__["default"], fields.email));
};

ResetPasswordFields.propTypes = {
  /** Object returned from `useForm` */
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),

  /** Optional prefix for field names */
  prefix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (ResetPasswordFields);

/***/ }),

/***/ "./app/components/forms/useLoginFields.jsx":
/*!*************************************************!*\
  !*** ./app/components/forms/useLoginFields.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useLoginFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

function useLoginFields({
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
    email: {
      name: `${prefix}email`,
      label: formatMessage({
        id: "sy+pv5",
        defaultMessage: [{
          "type": 0,
          "value": "Email"
        }]
      }),
      placeholder: 'you@email.com',
      defaultValue: '',
      type: 'email',
      rules: {
        required: formatMessage({
          id: "/vJwLB",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your email address"
          }]
        })
      },
      error: errors[`${prefix}email`],
      control
    },
    password: {
      name: `${prefix}password`,
      label: formatMessage({
        id: "5sg7KC",
        defaultMessage: [{
          "type": 0,
          "value": "Password"
        }]
      }),
      defaultValue: '',
      type: 'password',
      rules: {
        required: formatMessage({
          id: "iiYrag",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your password"
          }]
        })
      },
      error: errors[`${prefix}password`],
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/forms/useRegistrationFields.jsx":
/*!********************************************************!*\
  !*** ./app/components/forms/useRegistrationFields.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useRegistrationFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils_password_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/password-utils */ "./app/utils/password-utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


function useRegistrationFields({
  form: {
    control,
    errors
  },
  prefix = ''
}) {
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const fields = {
    firstName: {
      name: `${prefix}firstName`,
      label: formatMessage({
        id: "Q6wcZ5",
        defaultMessage: [{
          "type": 0,
          "value": "First Name"
        }]
      }),
      type: 'text',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "3NVyN7",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your first name"
          }]
        })
      },
      error: errors[`${prefix}firstName`],
      control
    },
    lastName: {
      name: `${prefix}lastName`,
      label: formatMessage({
        id: "aheQdn",
        defaultMessage: [{
          "type": 0,
          "value": "Last Name"
        }]
      }),
      type: 'text',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "s/qo4z",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter your last name"
          }]
        })
      },
      error: errors[`${prefix}lastName`],
      control
    },
    email: {
      name: `${prefix}email`,
      label: formatMessage({
        id: "sy+pv5",
        defaultMessage: [{
          "type": 0,
          "value": "Email"
        }]
      }),
      placeholder: 'you@email.com',
      type: 'email',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "oLpv29",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter a valid email address"
          }]
        })
      },
      error: errors[`${prefix}email`],
      control
    },
    password: {
      name: `${prefix}password`,
      label: formatMessage({
        id: "5sg7KC",
        defaultMessage: [{
          "type": 0,
          "value": "Password"
        }]
      }),
      type: 'password',
      defaultValue: '',
      rules: {
        required: formatMessage({
          id: "qGl7SR",
          defaultMessage: [{
            "type": 0,
            "value": "Please create a password"
          }]
        }),
        validate: {
          hasMinChars: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasMinChars || formatMessage({
            id: "ffE6Xw",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least 8 characters"
            }]
          }),
          hasUppercase: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasUppercase || formatMessage({
            id: "wBVQL7",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one uppercase letter"
            }]
          }),
          hasLowercase: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasLowercase || formatMessage({
            id: "0yGJXJ",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one lowercase letter"
            }]
          }),
          hasNumber: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasNumber || formatMessage({
            id: "I866h3",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one number"
            }]
          }),
          hasSpecialChar: val => (0,_utils_password_utils__WEBPACK_IMPORTED_MODULE_0__.validatePassword)(val).hasSpecialChar || formatMessage({
            id: "z34C7B",
            defaultMessage: [{
              "type": 0,
              "value": "Password must contain at least one special character"
            }]
          })
        }
      },
      error: errors[`${prefix}password`],
      control
    },
    acceptsMarketing: {
      name: `${prefix}acceptsMarketing`,
      label: formatMessage({
        id: "ZJkXve",
        defaultMessage: [{
          "type": 0,
          "value": "Sign me up for Salesforce emails (you can unsubscribe at any time)"
        }]
      }),
      type: 'checkbox',
      defaultValue: false,
      error: errors[`${prefix}acceptsMarketing`],
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/forms/useResetPasswordFields.jsx":
/*!*********************************************************!*\
  !*** ./app/components/forms/useResetPasswordFields.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useResetPasswordFields; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

function useResetPasswordFields({
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
    email: {
      name: `${prefix}email`,
      label: formatMessage({
        id: "sy+pv5",
        defaultMessage: [{
          "type": 0,
          "value": "Email"
        }]
      }),
      placeholder: 'you@email.com',
      defaultValue: '',
      type: 'email',
      rules: {
        required: formatMessage({
          id: "oLpv29",
          defaultMessage: [{
            "type": 0,
            "value": "Please enter a valid email address"
          }]
        })
      },
      error: errors[`${prefix}email`],
      control
    }
  };
  return fields;
}

/***/ }),

/***/ "./app/components/header/index.jsx":
/*!*****************************************!*\
  !*** ./app/components/header/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/popover/dist/chakra-ui-popover.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link */ "./app/components/link/index.jsx");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search */ "./app/components/search/index.jsx");
/* harmony import */ var _hoc_with_registration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hoc/with-registration */ "./app/hoc/with-registration/index.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _pages_account_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/account/constant */ "./app/pages/account/constant.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _loading_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../loading-spinner */ "./app/components/loading-spinner/index.jsx");



const _excluded = ["children", "onMenuClick", "onMyAccountClick", "onLogoClick", "onMyCartClick", "onWishlistClick"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */














const ENTER_KEY = 'Enter';
const IconButtonWithRegistration = (0,_hoc_with_registration__WEBPACK_IMPORTED_MODULE_9__["default"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.IconButton);
/**
 * The header is the main source for accessing
 * navigation, search, basket, and other
 * important information and actions. It persists
 * on the top of your application and will
 * respond to changes in device size.
 *
 * To customize the styles, update the themes
 * in theme/components/project/header.js
 * @param  props
 * @param   {func} props.onMenuClick click event handler for menu button
 * @param   {func} props.onLogoClick click event handler for menu button
 * @param   {object} props.searchInputRef reference of the search input
 * @param   {func} props.onMyAccountClick click event handler for my account button
 * @param   {func} props.onMyCartClick click event handler for my cart button
 * @return  {React.ReactElement} - Header component
 */

const Header = _ref => {
  let {
    children,
    onMenuClick = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onMyAccountClick = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onLogoClick = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onMyCartClick = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onWishlistClick = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const {
    isOpen,
    onClose,
    onOpen
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.useDisclosure)();
  const [isDesktop] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.useMediaQuery)('(min-width: 992px)');
  const [showLoading, setShowLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // tracking if users enter the popover Content,
  // so we can decide whether to close the menu when users leave account icons

  const hasEnterPopoverContent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.useMultiStyleConfig)('Header');

  const onSignoutClick = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* () {
      setShowLoading(true);
      yield customer.logout();
      navigate('/login');
      setShowLoading(false);
    });

    return function onSignoutClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  const keyMap = {
    Escape: () => onClose(),
    Enter: () => onOpen()
  };

  const handleIconsMouseLeave = () => {
    // don't close the menu if users enter the popover content
    setTimeout(() => {
      if (!hasEnterPopoverContent.current) onClose();
    }, 100);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.container, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Box, styles.content, showLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_loading_spinner__WEBPACK_IMPORTED_MODULE_14__["default"], {
    wrapperStyles: {
      height: '100vh'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Flex, {
    wrap: "wrap",
    alignItems: ['baseline', 'baseline', 'baseline', 'center']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.IconButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": intl.formatMessage({
      id: "header.button.assistive_msg.menu",
      defaultMessage: [{
        "type": 0,
        "value": "Menu"
      }]
    }),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.HamburgerIcon, null),
    variant: "unstyled",
    display: {
      lg: 'none'
    }
  }, styles.icons, {
    onClick: onMenuClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.IconButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": intl.formatMessage({
      id: "header.button.assistive_msg.logo",
      defaultMessage: [{
        "type": 0,
        "value": "Logo"
      }]
    }),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.BrandLogo, styles.logo)
  }, styles.icons, {
    variant: "unstyled",
    onClick: onLogoClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Box, styles.bodyContainer, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Box, styles.searchContainer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_search__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: intl.formatMessage({
      id: "header.search.field.value.placeholder",
      defaultMessage: [{
        "type": 0,
        "value": "Search for products..."
      }]
    })
  }, styles.search))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.AccountIcon, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.accountIcon, {
    tabIndex: 0,
    onMouseOver: isDesktop ? onOpen : _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onKeyDown: e => {
      e.key === ENTER_KEY ? onMyAccountClick() : _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop;
    },
    onClick: onMyAccountClick,
    "aria-label": intl.formatMessage({
      id: "header.button.assistive_msg.my_account",
      defaultMessage: [{
        "type": 0,
        "value": "My account"
      }]
    })
  })), customer.isRegistered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.Popover, {
    isLazy: true,
    arrowSize: 15,
    isOpen: isOpen,
    placement: "bottom-end",
    onClose: onClose,
    onOpen: onOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.PopoverTrigger, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "My account trigger",
    onMouseLeave: handleIconsMouseLeave,
    onKeyDown: e => {
      var _keyMap$e$key;

      (_keyMap$e$key = keyMap[e.key]) === null || _keyMap$e$key === void 0 ? void 0 : _keyMap$e$key.call(keyMap, e);
    }
  }, styles.arrowDown, {
    onMouseOver: onOpen,
    tabIndex: 0
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.PopoverContent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.popoverContent, {
    onMouseLeave: () => {
      hasEnterPopoverContent.current = false;
      onClose();
    },
    onMouseOver: () => {
      hasEnterPopoverContent.current = true;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.PopoverArrow, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.PopoverHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Text, null, intl.formatMessage({
    id: "2bGejb",
    defaultMessage: [{
      "type": 0,
      "value": "My Account"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.PopoverBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Stack, {
    spacing: 0,
    as: "nav",
    "data-testid": "account-detail-nav"
  }, _pages_account_constant__WEBPACK_IMPORTED_MODULE_12__.navLinks.map(link => {
    const LinkIcon = link.icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
      key: link.name,
      as: _link__WEBPACK_IMPORTED_MODULE_7__["default"],
      to: `/account${link.path}`,
      useNavLink: true,
      variant: "menu-link",
      leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(LinkIcon, {
        boxSize: 5
      })
    }, intl.formatMessage(_pages_account_constant__WEBPACK_IMPORTED_MODULE_12__.messages[link.name]));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_21__.PopoverFooter, {
    onClick: onSignoutClick,
    cursor: "pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Divider, {
    colorScheme: "gray"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    variant: "unstyled"
  }, styles.signout), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.SignoutIcon, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    boxSize: 5
  }, styles.signoutIcon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Text, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "span"
  }, styles.signoutText), intl.formatMessage({
    id: "PlBReU",
    defaultMessage: [{
      "type": 0,
      "value": "Log out"
    }]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(IconButtonWithRegistration, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": intl.formatMessage({
      id: "hp3uqR",
      defaultMessage: [{
        "type": 0,
        "value": "Wishlist"
      }]
    }),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.HeartIcon, null),
    variant: "unstyled"
  }, styles.icons, {
    onClick: onWishlistClick
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.IconButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": intl.formatMessage({
      id: "header.button.assistive_msg.my_cart",
      defaultMessage: [{
        "type": 0,
        "value": "My cart"
      }]
    }),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_10__.BasketIcon, null), (basket === null || basket === void 0 ? void 0 : basket.loaded) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.Badge, {
      variant: "notification"
    }, basket.itemAccumulatedCount)),
    variant: "unstyled"
  }, styles.icons, {
    onClick: onMyCartClick
  })))));
};

Header.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  onMenuClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onLogoClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onMyAccountClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onWishlistClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onMyCartClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  searchInputRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType)
  })])
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./app/components/icons/index.jsx":
/*!****************************************!*\
  !*** ./app/components/icons/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmexIcon": function() { return /* binding */ AmexIcon; },
/* harmony export */   "AlertIcon": function() { return /* binding */ AlertIcon; },
/* harmony export */   "AccountIcon": function() { return /* binding */ AccountIcon; },
/* harmony export */   "BrandLogo": function() { return /* binding */ BrandLogo; },
/* harmony export */   "BasketIcon": function() { return /* binding */ BasketIcon; },
/* harmony export */   "CheckIcon": function() { return /* binding */ CheckIcon; },
/* harmony export */   "CheckCircleIcon": function() { return /* binding */ CheckCircleIcon; },
/* harmony export */   "ChevronDownIcon": function() { return /* binding */ ChevronDownIcon; },
/* harmony export */   "ChevronLeftIcon": function() { return /* binding */ ChevronLeftIcon; },
/* harmony export */   "ChevronRightIcon": function() { return /* binding */ ChevronRightIcon; },
/* harmony export */   "ChevronUpIcon": function() { return /* binding */ ChevronUpIcon; },
/* harmony export */   "CVVIcon": function() { return /* binding */ CVVIcon; },
/* harmony export */   "DashboardIcon": function() { return /* binding */ DashboardIcon; },
/* harmony export */   "DiscoverIcon": function() { return /* binding */ DiscoverIcon; },
/* harmony export */   "FigmaLogo": function() { return /* binding */ FigmaLogo; },
/* harmony export */   "FilterIcon": function() { return /* binding */ FilterIcon; },
/* harmony export */   "FileIcon": function() { return /* binding */ FileIcon; },
/* harmony export */   "FlagCAIcon": function() { return /* binding */ FlagCAIcon; },
/* harmony export */   "FlagUSIcon": function() { return /* binding */ FlagUSIcon; },
/* harmony export */   "FlagGBIcon": function() { return /* binding */ FlagGBIcon; },
/* harmony export */   "FlagFRIcon": function() { return /* binding */ FlagFRIcon; },
/* harmony export */   "FlagITIcon": function() { return /* binding */ FlagITIcon; },
/* harmony export */   "FlagCNIcon": function() { return /* binding */ FlagCNIcon; },
/* harmony export */   "FlagJPIcon": function() { return /* binding */ FlagJPIcon; },
/* harmony export */   "GithubLogo": function() { return /* binding */ GithubLogo; },
/* harmony export */   "HamburgerIcon": function() { return /* binding */ HamburgerIcon; },
/* harmony export */   "InfoIcon": function() { return /* binding */ InfoIcon; },
/* harmony export */   "LikeIcon": function() { return /* binding */ LikeIcon; },
/* harmony export */   "LockIcon": function() { return /* binding */ LockIcon; },
/* harmony export */   "LocationIcon": function() { return /* binding */ LocationIcon; },
/* harmony export */   "PaymentIcon": function() { return /* binding */ PaymentIcon; },
/* harmony export */   "PaypalIcon": function() { return /* binding */ PaypalIcon; },
/* harmony export */   "PlugIcon": function() { return /* binding */ PlugIcon; },
/* harmony export */   "PlusIcon": function() { return /* binding */ PlusIcon; },
/* harmony export */   "MastercardIcon": function() { return /* binding */ MastercardIcon; },
/* harmony export */   "ReceiptIcon": function() { return /* binding */ ReceiptIcon; },
/* harmony export */   "SearchIcon": function() { return /* binding */ SearchIcon; },
/* harmony export */   "SocialFacebookIcon": function() { return /* binding */ SocialFacebookIcon; },
/* harmony export */   "SocialInstagramIcon": function() { return /* binding */ SocialInstagramIcon; },
/* harmony export */   "SocialPinterestIcon": function() { return /* binding */ SocialPinterestIcon; },
/* harmony export */   "SocialTwitterIcon": function() { return /* binding */ SocialTwitterIcon; },
/* harmony export */   "SocialYoutubeIcon": function() { return /* binding */ SocialYoutubeIcon; },
/* harmony export */   "SignoutIcon": function() { return /* binding */ SignoutIcon; },
/* harmony export */   "UserIcon": function() { return /* binding */ UserIcon; },
/* harmony export */   "VisaIcon": function() { return /* binding */ VisaIcon; },
/* harmony export */   "VisibilityIcon": function() { return /* binding */ VisibilityIcon; },
/* harmony export */   "VisibilityOffIcon": function() { return /* binding */ VisibilityOffIcon; },
/* harmony export */   "HeartIcon": function() { return /* binding */ HeartIcon; },
/* harmony export */   "HeartSolidIcon": function() { return /* binding */ HeartSolidIcon; },
/* harmony export */   "CloseIcon": function() { return /* binding */ CloseIcon; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/node_modules/@chakra-ui/icon/dist/chakra-ui-icon.esm.js");
/* harmony import */ var _assets_svg_alert_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svg/alert.svg */ "./app/assets/svg/alert.svg");
/* harmony import */ var _assets_svg_alert_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_alert_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_account_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/svg/account.svg */ "./app/assets/svg/account.svg");
/* harmony import */ var _assets_svg_account_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_account_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_basket_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/basket.svg */ "./app/assets/svg/basket.svg");
/* harmony import */ var _assets_svg_basket_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_basket_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/check.svg */ "./app/assets/svg/check.svg");
/* harmony import */ var _assets_svg_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_check_circle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/svg/check-circle.svg */ "./app/assets/svg/check-circle.svg");
/* harmony import */ var _assets_svg_check_circle_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_check_circle_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_svg_chevron_up_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/svg/chevron-up.svg */ "./app/assets/svg/chevron-up.svg");
/* harmony import */ var _assets_svg_chevron_up_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_chevron_up_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_svg_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/svg/chevron-down.svg */ "./app/assets/svg/chevron-down.svg");
/* harmony import */ var _assets_svg_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_chevron_down_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_svg_chevron_right_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/svg/chevron-right.svg */ "./app/assets/svg/chevron-right.svg");
/* harmony import */ var _assets_svg_chevron_right_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_chevron_right_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/svg/chevron-left.svg */ "./app/assets/svg/chevron-left.svg");
/* harmony import */ var _assets_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_chevron_left_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_svg_dashboard_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/svg/dashboard.svg */ "./app/assets/svg/dashboard.svg");
/* harmony import */ var _assets_svg_dashboard_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_dashboard_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_svg_figma_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/svg/figma-logo.svg */ "./app/assets/svg/figma-logo.svg");
/* harmony import */ var _assets_svg_figma_logo_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_figma_logo_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/svg/filter.svg */ "./app/assets/svg/filter.svg");
/* harmony import */ var _assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_filter_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_svg_file_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/svg/file.svg */ "./app/assets/svg/file.svg");
/* harmony import */ var _assets_svg_file_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_file_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_svg_flag_ca_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/svg/flag-ca.svg */ "./app/assets/svg/flag-ca.svg");
/* harmony import */ var _assets_svg_flag_ca_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_ca_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_svg_flag_us_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/svg/flag-us.svg */ "./app/assets/svg/flag-us.svg");
/* harmony import */ var _assets_svg_flag_us_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_us_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_svg_flag_gb_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/svg/flag-gb.svg */ "./app/assets/svg/flag-gb.svg");
/* harmony import */ var _assets_svg_flag_gb_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_gb_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_svg_flag_fr_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/svg/flag-fr.svg */ "./app/assets/svg/flag-fr.svg");
/* harmony import */ var _assets_svg_flag_fr_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_fr_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_svg_flag_it_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/svg/flag-it.svg */ "./app/assets/svg/flag-it.svg");
/* harmony import */ var _assets_svg_flag_it_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_it_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_svg_flag_cn_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/svg/flag-cn.svg */ "./app/assets/svg/flag-cn.svg");
/* harmony import */ var _assets_svg_flag_cn_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_cn_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_svg_flag_jp_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/svg/flag-jp.svg */ "./app/assets/svg/flag-jp.svg");
/* harmony import */ var _assets_svg_flag_jp_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_flag_jp_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_svg_github_logo_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/svg/github-logo.svg */ "./app/assets/svg/github-logo.svg");
/* harmony import */ var _assets_svg_github_logo_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_github_logo_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_svg_hamburger_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/svg/hamburger.svg */ "./app/assets/svg/hamburger.svg");
/* harmony import */ var _assets_svg_hamburger_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_hamburger_svg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_svg_info_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/svg/info.svg */ "./app/assets/svg/info.svg");
/* harmony import */ var _assets_svg_info_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_info_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_svg_social_facebook_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/svg/social-facebook.svg */ "./app/assets/svg/social-facebook.svg");
/* harmony import */ var _assets_svg_social_facebook_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_social_facebook_svg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_svg_social_instagram_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/svg/social-instagram.svg */ "./app/assets/svg/social-instagram.svg");
/* harmony import */ var _assets_svg_social_instagram_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_social_instagram_svg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_svg_social_twitter_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/svg/social-twitter.svg */ "./app/assets/svg/social-twitter.svg");
/* harmony import */ var _assets_svg_social_twitter_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_social_twitter_svg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_svg_social_youtube_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/svg/social-youtube.svg */ "./app/assets/svg/social-youtube.svg");
/* harmony import */ var _assets_svg_social_youtube_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_social_youtube_svg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _assets_svg_like_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/svg/like.svg */ "./app/assets/svg/like.svg");
/* harmony import */ var _assets_svg_like_svg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_like_svg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _assets_svg_lock_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/svg/lock.svg */ "./app/assets/svg/lock.svg");
/* harmony import */ var _assets_svg_lock_svg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_lock_svg__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _assets_svg_payment_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../assets/svg/payment.svg */ "./app/assets/svg/payment.svg");
/* harmony import */ var _assets_svg_payment_svg__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_payment_svg__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _assets_svg_plug_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../assets/svg/plug.svg */ "./app/assets/svg/plug.svg");
/* harmony import */ var _assets_svg_plug_svg__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_plug_svg__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _assets_svg_plus_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../assets/svg/plus.svg */ "./app/assets/svg/plus.svg");
/* harmony import */ var _assets_svg_plus_svg__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_plus_svg__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _assets_svg_receipt_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../assets/svg/receipt.svg */ "./app/assets/svg/receipt.svg");
/* harmony import */ var _assets_svg_receipt_svg__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_receipt_svg__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../assets/svg/search.svg */ "./app/assets/svg/search.svg");
/* harmony import */ var _assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_search_svg__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _assets_svg_signout_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../assets/svg/signout.svg */ "./app/assets/svg/signout.svg");
/* harmony import */ var _assets_svg_signout_svg__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_signout_svg__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../assets/svg/user.svg */ "./app/assets/svg/user.svg");
/* harmony import */ var _assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_user_svg__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _assets_svg_visibility_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../assets/svg/visibility.svg */ "./app/assets/svg/visibility.svg");
/* harmony import */ var _assets_svg_visibility_svg__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_visibility_svg__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _assets_svg_visibility_off_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../assets/svg/visibility-off.svg */ "./app/assets/svg/visibility-off.svg");
/* harmony import */ var _assets_svg_visibility_off_svg__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_visibility_off_svg__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _assets_svg_heart_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../assets/svg/heart.svg */ "./app/assets/svg/heart.svg");
/* harmony import */ var _assets_svg_heart_svg__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_heart_svg__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _assets_svg_heart_solid_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../assets/svg/heart-solid.svg */ "./app/assets/svg/heart-solid.svg");
/* harmony import */ var _assets_svg_heart_solid_svg__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_heart_solid_svg__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../assets/svg/close.svg */ "./app/assets/svg/close.svg");
/* harmony import */ var _assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_close_svg__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _assets_svg_cc_amex_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../assets/svg/cc-amex.svg */ "./app/assets/svg/cc-amex.svg");
/* harmony import */ var _assets_svg_cc_amex_svg__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_cc_amex_svg__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _assets_svg_brand_logo_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../assets/svg/brand-logo.svg */ "./app/assets/svg/brand-logo.svg");
/* harmony import */ var _assets_svg_brand_logo_svg__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_brand_logo_svg__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _assets_svg_cc_cvv_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../assets/svg/cc-cvv.svg */ "./app/assets/svg/cc-cvv.svg");
/* harmony import */ var _assets_svg_cc_cvv_svg__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_cc_cvv_svg__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _assets_svg_cc_discover_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../assets/svg/cc-discover.svg */ "./app/assets/svg/cc-discover.svg");
/* harmony import */ var _assets_svg_cc_discover_svg__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_cc_discover_svg__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _assets_svg_location_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../assets/svg/location.svg */ "./app/assets/svg/location.svg");
/* harmony import */ var _assets_svg_location_svg__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_location_svg__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _assets_svg_cc_mastercard_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../assets/svg/cc-mastercard.svg */ "./app/assets/svg/cc-mastercard.svg");
/* harmony import */ var _assets_svg_cc_mastercard_svg__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_cc_mastercard_svg__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _assets_svg_paypal_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../assets/svg/paypal.svg */ "./app/assets/svg/paypal.svg");
/* harmony import */ var _assets_svg_paypal_svg__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_paypal_svg__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _assets_svg_social_pinterest_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../assets/svg/social-pinterest.svg */ "./app/assets/svg/social-pinterest.svg");
/* harmony import */ var _assets_svg_social_pinterest_svg__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_social_pinterest_svg__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _assets_svg_cc_visa_svg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../assets/svg/cc-visa.svg */ "./app/assets/svg/cc-visa.svg");
/* harmony import */ var _assets_svg_cc_visa_svg__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_cc_visa_svg__WEBPACK_IMPORTED_MODULE_51__);


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Our own SVG imports. These will be extracted to a single sprite sheet by the
// svg-sprite-loader webpack plugin at build time and injected in the <body> tag
// during SSR.
// NOTE: Another solution would be to use `require-context.macro` package to accomplish
// importing icon svg's.











































 // For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.









 // TODO: We're hardcoding the `viewBox` for these imported SVGs temporarily as the
// SVG loader plugin is not properly providing us the symbol data on the client side.

(_assets_svg_cc_amex_svg__WEBPACK_IMPORTED_MODULE_43___default().viewBox) = (_assets_svg_cc_amex_svg__WEBPACK_IMPORTED_MODULE_43___default().viewBox) || '0 0 38 22';
(_assets_svg_brand_logo_svg__WEBPACK_IMPORTED_MODULE_44___default().viewBox) = (_assets_svg_brand_logo_svg__WEBPACK_IMPORTED_MODULE_44___default().viewBox) || '0 0 46 32';
(_assets_svg_cc_cvv_svg__WEBPACK_IMPORTED_MODULE_45___default().viewBox) = (_assets_svg_cc_cvv_svg__WEBPACK_IMPORTED_MODULE_45___default().viewBox) || '0 0 41 24';
(_assets_svg_cc_discover_svg__WEBPACK_IMPORTED_MODULE_46___default().viewBox) = (_assets_svg_cc_discover_svg__WEBPACK_IMPORTED_MODULE_46___default().viewBox) || '0 0 38 22';
(_assets_svg_location_svg__WEBPACK_IMPORTED_MODULE_47___default().viewBox) = (_assets_svg_location_svg__WEBPACK_IMPORTED_MODULE_47___default().viewBox) || '0 0 16 21';
(_assets_svg_cc_mastercard_svg__WEBPACK_IMPORTED_MODULE_48___default().viewBox) = (_assets_svg_cc_mastercard_svg__WEBPACK_IMPORTED_MODULE_48___default().viewBox) || '0 0 38 22';
(_assets_svg_paypal_svg__WEBPACK_IMPORTED_MODULE_49___default().viewBox) = (_assets_svg_paypal_svg__WEBPACK_IMPORTED_MODULE_49___default().viewBox) || '0 0 80 20';
(_assets_svg_social_pinterest_svg__WEBPACK_IMPORTED_MODULE_50___default().viewBox) = (_assets_svg_social_pinterest_svg__WEBPACK_IMPORTED_MODULE_50___default().viewBox) || '0 0 21 20';
(_assets_svg_cc_visa_svg__WEBPACK_IMPORTED_MODULE_51___default().viewBox) = (_assets_svg_cc_visa_svg__WEBPACK_IMPORTED_MODULE_51___default().viewBox) || '0 0 38 22';
/**
 * A helper for creating a Chakra-wrapped icon from our own SVG imports via sprite sheet.
 * @param {string} name - the filename of the imported svg (does not include extension)
 */

/* istanbul ignore next */

const icon = (name, passProps) => {
  const displayName = name.toLowerCase().replace(/(?:^|[\s-/])\w/g, match => match.toUpperCase()).replace(/-/g, '');
  const component = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
    const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_52__.useTheme)();
    const {
      baseStyle
    } = theme.components.Icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_53__.Icon, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, baseStyle, passProps, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("use", {
      role: "presentation",
      xlinkHref: `#${name}`
    }));
  });
  component.displayName = `${displayName}Icon`;
  return component;
}; // Export Chakra icon components that use our SVG sprite symbol internally
// For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.


const AmexIcon = icon('cc-amex', {
  viewBox: (_assets_svg_cc_amex_svg__WEBPACK_IMPORTED_MODULE_43___default().viewBox)
});
const AlertIcon = icon('alert');
const AccountIcon = icon('account');
const BrandLogo = icon('brand-logo', {
  viewBox: (_assets_svg_brand_logo_svg__WEBPACK_IMPORTED_MODULE_44___default().viewBox)
});
const BasketIcon = icon('basket');
const CheckIcon = icon('check');
const CheckCircleIcon = icon('check-circle');
const ChevronDownIcon = icon('chevron-down');
const ChevronLeftIcon = icon('chevron-left');
const ChevronRightIcon = icon('chevron-right');
const ChevronUpIcon = icon('chevron-up');
const CVVIcon = icon('cc-cvv', {
  viewBox: (_assets_svg_cc_cvv_svg__WEBPACK_IMPORTED_MODULE_45___default().viewBox)
});
const DashboardIcon = icon('dashboard');
const DiscoverIcon = icon('cc-discover', {
  viewBox: (_assets_svg_cc_discover_svg__WEBPACK_IMPORTED_MODULE_46___default().viewBox)
});
const FigmaLogo = icon('figma-logo');
const FilterIcon = icon('filter');
const FileIcon = icon('file');
const FlagCAIcon = icon('flag-ca');
const FlagUSIcon = icon('flag-us');
const FlagGBIcon = icon('flag-gb');
const FlagFRIcon = icon('flag-fr');
const FlagITIcon = icon('flag-it');
const FlagCNIcon = icon('flag-cn');
const FlagJPIcon = icon('flag-jp');
const GithubLogo = icon('github-logo');
const HamburgerIcon = icon('hamburger');
const InfoIcon = icon('info');
const LikeIcon = icon('like');
const LockIcon = icon('lock');
const LocationIcon = icon('location');
const PaymentIcon = icon('payment');
const PaypalIcon = icon('paypal', {
  viewBox: (_assets_svg_paypal_svg__WEBPACK_IMPORTED_MODULE_49___default().viewBox)
});
const PlugIcon = icon('plug');
const PlusIcon = icon('plus');
const MastercardIcon = icon('cc-mastercard', {
  viewBox: (_assets_svg_cc_mastercard_svg__WEBPACK_IMPORTED_MODULE_48___default().viewBox)
});
const ReceiptIcon = icon('receipt');
const SearchIcon = icon('search');
const SocialFacebookIcon = icon('social-facebook');
const SocialInstagramIcon = icon('social-instagram');
const SocialPinterestIcon = icon('social-pinterest', {
  viewBox: (_assets_svg_social_pinterest_svg__WEBPACK_IMPORTED_MODULE_50___default().viewBox)
});
const SocialTwitterIcon = icon('social-twitter');
const SocialYoutubeIcon = icon('social-youtube');
const SignoutIcon = icon('signout');
const UserIcon = icon('user');
const VisaIcon = icon('cc-visa', {
  viewBox: (_assets_svg_cc_visa_svg__WEBPACK_IMPORTED_MODULE_51___default().viewBox)
});
const VisibilityIcon = icon('visibility');
const VisibilityOffIcon = icon('visibility-off');
const HeartIcon = icon('heart');
const HeartSolidIcon = icon('heart-solid');
const CloseIcon = icon('close');

/***/ }),

/***/ "./app/components/link/index.jsx":
/*!***************************************!*\
  !*** ./app/components/link/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");


const _excluded = ["href", "to", "useNavLink"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((_ref, ref) => {
  let {
    href,
    to,
    useNavLink = false
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const _href = to || href;

  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const localePath = `/${locale}`;
  const localizedHref = _href && _href.includes(localePath) ? _href : `${localePath}${_href}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: useNavLink ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink : react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link
  }, useNavLink && {
    exact: true
  }, props, {
    to: _href === '/' ? '/' : localizedHref,
    ref: ref
  }));
});
Link.displayName = 'Link';
Link.propTypes = {
  href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  useNavLink: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(Link));

/***/ }),

/***/ "./app/components/links-list/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/links-list/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


const _excluded = ["links", "heading", "variant", "color", "onLinkClick", "headingLinkRef"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const LinksList = _ref => {
  let {
    links = [],
    heading = '',
    variant,
    color,
    onLinkClick,
    headingLinkRef
  } = _ref,
      otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useMultiStyleConfig)('LinksList', {
    variant
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.container, color ? {
    color: color
  } : {}, otherProps), heading && (heading.href ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
    to: heading.href,
    onClick: onLinkClick,
    ref: headingLinkRef
  }, styles.headingLink), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.heading, heading.styles ? heading.styles : {}), heading.text)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, styles.heading, heading)), links && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.List, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    spacing: 5
  }, styles.list), variant === 'horizontal' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, null, links.map((link, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: i
  }, styles.listItem, {
    sx: styles.listItemSx
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
    to: link.href,
    onClick: onLinkClick
  }, link.styles ? link.styles : {}), link.text)))) : links.map((link, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {
    key: i
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
    to: link.href,
    onClick: onLinkClick
  }, link.styles ? link.styles : {}), link.text)))));
};

LinksList.propTypes = {
  links: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    href: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  })).isRequired,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['vertical', 'horizontal']),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  onLinkClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  headingLinkRef: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (LinksList);

/***/ }),

/***/ "./app/components/list-menu/index.jsx":
/*!********************************************!*\
  !*** ./app/components/list-menu/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _links_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../links-list */ "./app/components/links-list/index.jsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/popover/dist/chakra-ui-popover.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



 // Project Components

 // Components

 // Others



const MAXIMUM_NUMBER_COLUMNS = 5;
const ChevronIconTrigger = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function ChevronIconTrigger(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, null));
});

const ListMenuTrigger = ({
  item,
  name,
  isOpen,
  onOpen,
  onClose,
  hasItems
}) => {
  const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const {
    baseStyle
  } = theme.components.ListMenu;
  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const keyMap = {
    Escape: () => onClose(),
    Enter: () => onOpen()
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, baseStyle.listMenuTriggerContainer, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: (0,_utils_url__WEBPACK_IMPORTED_MODULE_4__.categoryUrlBuilder)(item, locale),
    onMouseOver: onOpen
  }, baseStyle.listMenuTriggerLink, hasItems ? {
    name: name + ' __'
  } : {
    name: name
  }, !hasItems ? baseStyle.listMenuTriggerLinkWithIcon : {}, isOpen ? baseStyle.listMenuTriggerLinkActive : {}), name), hasItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
    to: '#',
    onMouseOver: onOpen,
    onKeyDown: e => {
      var _keyMap$e$key;

      (_keyMap$e$key = keyMap[e.key]) === null || _keyMap$e$key === void 0 ? void 0 : _keyMap$e$key.call(keyMap, e);
    }
  }, baseStyle.listMenuTriggerLinkIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.PopoverTrigger, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ChevronIconTrigger, baseStyle.selectedButtonIcon))));
};

ListMenuTrigger.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  hasItems: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};

const ListMenuContent = ({
  maxColumns,
  items,
  itemsKey,
  onClose,
  initialFocusRef
}) => {
  const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const {
    baseStyle
  } = theme.components.ListMenu;
  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.PopoverContent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "popover-menu"
  }, baseStyle.popoverContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.PopoverBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack
  }, baseStyle.popoverContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.SimpleGrid, {
    spacing: 8,
    justifyContent: 'left',
    gridTemplateColumns: `repeat(${items.length > maxColumns ? maxColumns : items.length}, minmax(0, 21%))`,
    marginInlineStart: {
      lg: '68px',
      xl: '96px'
    }
  }, items.map((item, index) => {
    const {
      id,
      name
    } = item;
    const items = item[itemsKey];
    const heading = {
      href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_4__.categoryUrlBuilder)(item, locale),
      text: name,
      styles: {
        fontSize: 'md',
        marginBottom: 2
      }
    };
    const links = items ? items.map(item => {
      const {
        name
      } = item;
      return {
        href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_4__.categoryUrlBuilder)(item, locale),
        text: name,
        styles: {
          fontSize: 'md',
          paddingTop: 3,
          paddingBottom: 3
        }
      };
    }) : [];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: id,
      heading: heading,
      links: links,
      color: 'gray.900',
      onLinkClick: onClose
    }, index === 0 ? {
      headingLinkRef: initialFocusRef
    } : {}));
  })))));
};

ListMenuContent.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  maxColumns: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  itemsKey: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  initialFocusRef: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

const ListMenuPopover = ({
  items,
  item,
  name,
  itemsKey,
  maxColumns
}) => {
  const initialFocusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    isOpen,
    onClose,
    onOpen
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.useDisclosure)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
    onMouseLeave: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Popover, {
    isLazy: true,
    placement: 'bottom-start',
    initialFocusRef: initialFocusRef,
    onOpen: onOpen,
    onClose: onClose,
    isOpen: isOpen,
    variant: "fullWidth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ListMenuTrigger, {
    item: item,
    name: name,
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose,
    hasItems: !!items
  }), items && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ListMenuContent, {
    items: items,
    itemsKey: itemsKey,
    initialFocusRef: initialFocusRef,
    onClose: onClose,
    maxColumns: maxColumns
  }))));
};

ListMenuPopover.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  maxColumns: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  itemsKey: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/**
 * This is the navigation component used for desktop devices. Holds the site navigation,
 * providing users with a way to access all product categories and other important pages.
 * The submenus are open when the user moves the mouse over the trigger and for A11y when
 * users use the keyboard Tab key to focus over the chevron icon and press Enter.
 *
 * @param root The root category in your commerce cloud back-end.
 * @param maxColumns The maximum number of columns that we want to use per row inside the ListMenu.
 */

const ListMenu = ({
  root,
  maxColumns = MAXIMUM_NUMBER_COLUMNS
}) => {
  const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  const {
    baseStyle
  } = theme.components.ListMenu;
  const itemsKey = 'categories';
  const items = root ? root[itemsKey] : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    "aria-label": "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, baseStyle.container, items ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    direction: 'row',
    spacing: 0
  }, baseStyle.stackContainer), items.map(item => {
    const {
      id,
      name
    } = item;
    const items = item[itemsKey];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ListMenuPopover, {
      key: id,
      maxColumns: maxColumns,
      item: item,
      name: name,
      items: items,
      itemsKey: itemsKey
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {
    p: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Spinner, {
    size: "lg"
  }))));
};

ListMenu.displayName = 'ListMenu';
ListMenu.propTypes = {
  /**
   * The root category in your commerce cloud back-end.
   */
  root: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),

  /**
   * The maximum number of columns that we want to use per row in the menu.
   */
  maxColumns: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (ListMenu);

/***/ }),

/***/ "./app/components/loading-spinner/index.jsx":
/*!**************************************************!*\
  !*** ./app/components/loading-spinner/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const LoadingSpinner = ({
  wrapperStyles = {},
  spinnerStyles = {}
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    zIndex: "overlay",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "whiteAlpha.800"
  }, wrapperStyles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-testid": "loading"
  }, spinnerStyles, {
    position: "absolute",
    top: "50%",
    left: "50%",
    ml: "-1.5em",
    mt: "-1.5em",
    thickness: "4px",
    speed: "0.65s",
    emptyColor: "gray.200",
    color: "blue.600",
    size: "xl"
  })));
};

LoadingSpinner.propTypes = {
  wrapperStyles: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  spinnerStyles: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./app/components/locale-selector/index.jsx":
/*!**************************************************!*\
  !*** ./app/components/locale-selector/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var _locale_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../locale-text */ "./app/components/locale-text/index.jsx");


const _excluded = ["selectedLocale", "locales", "onSelect"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Components

 // Icons



 // NOTE: If you want to have flags shown next to a selectable locale, update this
// mapping object with the short code as the key for the desired icon.

const flags = {
  'en-GB': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.FlagGBIcon, null),
  'fr-FR': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.FlagFRIcon, null),
  'it-IT': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.FlagITIcon, null),
  'zh-CN': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.FlagCNIcon, null),
  'ja-JP': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.FlagJPIcon, null)
};
/**
 * The Locale Selector is a disclosure in the form of an accordion. It is
 * populated with all the supported locales for the application allowing the
 * user to change the current locale.
 */

const LocaleSelector = _ref => {
  let {
    selectedLocale = _constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_LOCALE,
    locales = [],
    onSelect = () => {}
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useStyleConfig)('LocaleSelector');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {
    className: "sf-locale-selector"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Accordion, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    allowToggle: true
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AccordionItem, {
    border: "none"
  }, ({
    isExpanded
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AccordionButton, styles.selectedButton, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, styles.selectedButtonIcon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, styles.selectedButtonIcon), flags[selectedLocale], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_locale_text__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.selectedText, {
    shortCode: selectedLocale
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AccordionPanel, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Accordion, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    allowToggle: true
  }, styles.accordion), locales.map(locale => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AccordionItem, {
    border: "none",
    key: locale
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.AccordionButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.optionButton, {
    onClick: () => onSelect(locale)
  }), flags[locale], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_locale_text__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.optionText, {
    shortCode: locale
  })), selectedLocale === locale && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, styles.selectedIcon))))))))));
};

LocaleSelector.displayName = 'LocaleSelector';
LocaleSelector.propTypes = {
  /**
   * A complete list of all the locales supported. This array must have content.
   */
  locales: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)).isRequired,

  /**
   * The current locales shortcode.
   */
  selectedLocale: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),

  /**
   * Function called when a locale is selected.
   */
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (LocaleSelector);

/***/ }),

/***/ "./app/components/locale-text/index.jsx":
/*!**********************************************!*\
  !*** ./app/components/locale-text/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");

const _excluded = ["shortCode", "as"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const LocaleText = _ref => {
  let {
    shortCode,
    as
  } = _ref,
      otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const Wrapper = as ? (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.chakra)(as) : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text;
  const message = LOCALE_MESSAGES[shortCode] || FALLBACK_MESSAGE;

  if (message === FALLBACK_MESSAGE) {
    console.error(`No locale message found for "${shortCode}". Please update the list accordingly.`);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Wrapper, otherProps, intl.formatMessage(message, {
    localeShortCode: shortCode
  }));
};

LocaleText.displayName = 'LocaleText';
LocaleText.propTypes = {
  /**
   * The locale shortcode that you would like the localized text for.
   */
  shortCode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),

  /**
   * The element type to render this component as, defaults to a Text component.
   */
  as: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (LocaleText);
const FALLBACK_MESSAGE = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessage)({
  id: "3HK3af",
  defaultMessage: [{
    "type": 0,
    "value": "Unknown "
  }, {
    "type": 1,
    "value": "localeShortCode"
  }]
});
/**
 *  Translations for names of the commonly-used locales.
 *  `locale` parameter format for OCAPI and Commerce API: <language code>-<country code>
 *  https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/OCAPI/current/usage/Localization.html
 */

const LOCALE_MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.defineMessages)({
  'ar-SA': {
    id: "tclGo+",
    defaultMessage: [{
      "type": 0,
      "value": "Arabic (Saudi Arabia)"
    }]
  },
  'bn-BD': {
    id: "TvauRz",
    defaultMessage: [{
      "type": 0,
      "value": "Bangla (Bangladesh)"
    }]
  },
  'bn-IN': {
    id: "U8vSQS",
    defaultMessage: [{
      "type": 0,
      "value": "Bangla (India)"
    }]
  },
  'cs-CZ': {
    id: "+ZbX4W",
    defaultMessage: [{
      "type": 0,
      "value": "Czech (Czech Republic)"
    }]
  },
  'da-DK': {
    id: "ES4Hjg",
    defaultMessage: [{
      "type": 0,
      "value": "Danish (Denmark)"
    }]
  },
  'de-AT': {
    id: "0Tjkj3",
    defaultMessage: [{
      "type": 0,
      "value": "German (Austria)"
    }]
  },
  'de-CH': {
    id: "Qb4dDN",
    defaultMessage: [{
      "type": 0,
      "value": "German (Switzerland)"
    }]
  },
  'de-DE': {
    id: "T8HBFR",
    defaultMessage: [{
      "type": 0,
      "value": "German (Germany)"
    }]
  },
  'el-GR': {
    id: "vMvXOp",
    defaultMessage: [{
      "type": 0,
      "value": "Greek (Greece)"
    }]
  },
  'en-AU': {
    id: "i0/00S",
    defaultMessage: [{
      "type": 0,
      "value": "English (Australia)"
    }]
  },
  'en-CA': {
    id: "MQHbcd",
    defaultMessage: [{
      "type": 0,
      "value": "English (Canada)"
    }]
  },
  'en-GB': {
    id: "A2v4cr",
    defaultMessage: [{
      "type": 0,
      "value": "English (United Kingdom)"
    }]
  },
  'en-IE': {
    id: "QEUh37",
    defaultMessage: [{
      "type": 0,
      "value": "English (Ireland)"
    }]
  },
  'en-IN': {
    id: "eYVKts",
    defaultMessage: [{
      "type": 0,
      "value": "English (India)"
    }]
  },
  'en-NZ': {
    id: "SFjs9b",
    defaultMessage: [{
      "type": 0,
      "value": "English (New Zealand)"
    }]
  },
  'en-US': {
    id: "+MBxFF",
    defaultMessage: [{
      "type": 0,
      "value": "English (United States)"
    }]
  },
  'en-ZA': {
    id: "zdzY+u",
    defaultMessage: [{
      "type": 0,
      "value": "English (South Africa)"
    }]
  },
  'es-AR': {
    id: "ABWZu0",
    defaultMessage: [{
      "type": 0,
      "value": "Spanish (Argentina)"
    }]
  },
  'es-CL': {
    id: "n/iZlE",
    defaultMessage: [{
      "type": 0,
      "value": "Spanish (Chile)"
    }]
  },
  'es-CO': {
    id: "CutQ+m",
    defaultMessage: [{
      "type": 0,
      "value": "Spanish (Columbia)"
    }]
  },
  'es-ES': {
    id: "O8s+yR",
    defaultMessage: [{
      "type": 0,
      "value": "Spanish (Spain)"
    }]
  },
  'es-MX': {
    id: "8CDRAt",
    defaultMessage: [{
      "type": 0,
      "value": "Spanish (Mexico)"
    }]
  },
  'es-US': {
    id: "Zgc/KO",
    defaultMessage: [{
      "type": 0,
      "value": "Spanish (United States)"
    }]
  },
  'fi-FI': {
    id: "eSl9Vh",
    defaultMessage: [{
      "type": 0,
      "value": "Finnish (Finland)"
    }]
  },
  'fr-BE': {
    id: "1g+gvg",
    defaultMessage: [{
      "type": 0,
      "value": "French (Belgium)"
    }]
  },
  'fr-CA': {
    id: "26gvH3",
    defaultMessage: [{
      "type": 0,
      "value": "French (Canada)"
    }]
  },
  'fr-CH': {
    id: "KE5qj+",
    defaultMessage: [{
      "type": 0,
      "value": "French (Switzerland)"
    }]
  },
  'fr-FR': {
    id: "PO4nBj",
    defaultMessage: [{
      "type": 0,
      "value": "French (France)"
    }]
  },
  'he-IL': {
    id: "0n0dWe",
    defaultMessage: [{
      "type": 0,
      "value": "Hebrew (Israel)"
    }]
  },
  'hi-IN': {
    id: "gguIJ8",
    defaultMessage: [{
      "type": 0,
      "value": "Hindi (India)"
    }]
  },
  'hu-HU': {
    id: "OkmnSf",
    defaultMessage: [{
      "type": 0,
      "value": "Hungarian (Hungary)"
    }]
  },
  'id-ID': {
    id: "tYBua6",
    defaultMessage: [{
      "type": 0,
      "value": "Indonesian (Indonesia)"
    }]
  },
  'it-CH': {
    id: "vSNTMO",
    defaultMessage: [{
      "type": 0,
      "value": "Italian (Switzerland)"
    }]
  },
  'it-IT': {
    id: "e//rzS",
    defaultMessage: [{
      "type": 0,
      "value": "Italian (Italy)"
    }]
  },
  'ja-JP': {
    id: "5ryYe9",
    defaultMessage: [{
      "type": 0,
      "value": "Japanese (Japan)"
    }]
  },
  'ko-KR': {
    id: "tnSBvt",
    defaultMessage: [{
      "type": 0,
      "value": "Korean (Republic of Korea)"
    }]
  },
  'nl-BE': {
    id: "SXDujd",
    defaultMessage: [{
      "type": 0,
      "value": "Dutch (Belgium)"
    }]
  },
  'nl-NL': {
    id: "rU+Ph/",
    defaultMessage: [{
      "type": 0,
      "value": "Dutch (The Netherlands)"
    }]
  },
  'no-NO': {
    id: "YQhbMR",
    defaultMessage: [{
      "type": 0,
      "value": "Norwegian (Norway)"
    }]
  },
  'pl-PL': {
    id: "ZWTTz6",
    defaultMessage: [{
      "type": 0,
      "value": "Polish (Poland)"
    }]
  },
  'pt-BR': {
    id: "5e/Fjo",
    defaultMessage: [{
      "type": 0,
      "value": "Portuguese (Brazil)"
    }]
  },
  'pt-PT': {
    id: "d/RGdS",
    defaultMessage: [{
      "type": 0,
      "value": "Portuguese (Portugal)"
    }]
  },
  'ro-RO': {
    id: "uCdcPZ",
    defaultMessage: [{
      "type": 0,
      "value": "Romanian (Romania)"
    }]
  },
  'ru-RU': {
    id: "b2zNZE",
    defaultMessage: [{
      "type": 0,
      "value": "Russian (Russian Federation)"
    }]
  },
  'sk-SK': {
    id: "AiDBu2",
    defaultMessage: [{
      "type": 0,
      "value": "Slovak (Slovakia)"
    }]
  },
  'sv-SE': {
    id: "g3uXY2",
    defaultMessage: [{
      "type": 0,
      "value": "Swedish (Sweden)"
    }]
  },
  'ta-IN': {
    id: "74fug6",
    defaultMessage: [{
      "type": 0,
      "value": "Tamil (India)"
    }]
  },
  'ta-LK': {
    id: "P87iMu",
    defaultMessage: [{
      "type": 0,
      "value": "Tamil (Sri Lanka)"
    }]
  },
  'th-TH': {
    id: "PEVXku",
    defaultMessage: [{
      "type": 0,
      "value": "Thai (Thailand)"
    }]
  },
  'tr-TR': {
    id: "n9j5bS",
    defaultMessage: [{
      "type": 0,
      "value": "Turkish (Turkey)"
    }]
  },
  'zh-CN': {
    id: "b24hho",
    defaultMessage: [{
      "type": 0,
      "value": "Chinese (China)"
    }]
  },
  'zh-HK': {
    id: "68qUv0",
    defaultMessage: [{
      "type": 0,
      "value": "Chinese (Hong Kong)"
    }]
  },
  'zh-TW': {
    id: "gzeOf+",
    defaultMessage: [{
      "type": 0,
      "value": "Chinese (Taiwan)"
    }]
  }
});

/***/ }),

/***/ "./app/components/login/index.jsx":
/*!****************************************!*\
  !*** ./app/components/login/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_forms_login_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forms/login-fields */ "./app/components/forms/login-fields.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const LoginForm = ({
  submitForm,
  clickForgotPassword = _utils_utils__WEBPACK_IMPORTED_MODULE_4__.noop,
  clickCreateAccount = _utils_utils__WEBPACK_IMPORTED_MODULE_4__.noop,
  form
}) => {
  var _form$errors;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    justify: "center",
    align: "center",
    spacing: 8,
    marginBottom: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.BrandLogo, {
    width: "60px",
    height: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    align: "center",
    fontSize: "xl",
    fontWeight: "semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "bTjwXj",
    defaultMessage: [{
      "type": 0,
      "value": "Welcome Back"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    id: "login-form",
    onSubmit: form.handleSubmit(submitForm),
    "data-testid": "sf-auth-modal-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 8,
    paddingLeft: 4,
    paddingRight: 4
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_forms_login_fields__WEBPACK_IMPORTED_MODULE_3__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "link",
    size: "sm",
    onClick: clickForgotPassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "V/JHlm",
    defaultMessage: [{
      "type": 0,
      "value": "Forgot password?"
    }]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
    type: "submit",
    onClick: () => form.clearErrors('global'),
    isLoading: form.formState.isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "SQJto2",
    defaultMessage: [{
      "type": 0,
      "value": "Sign in"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: "row",
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "25WwxF",
    defaultMessage: [{
      "type": 0,
      "value": "Don't have an account?"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "link",
    size: "sm",
    onClick: clickCreateAccount
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "huqKGl",
    defaultMessage: [{
      "type": 0,
      "value": "Create account"
    }]
  })))))));
};

LoginForm.propTypes = {
  submitForm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  clickForgotPassword: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  clickCreateAccount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./app/components/nested-accordion/index.jsx":
/*!***************************************************!*\
  !*** ./app/components/nested-accordion/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/accordion/dist/chakra-ui-accordion.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");


const _excluded = ["item", "initialDepth", "itemsFilter", "itemsAfter", "itemsBefore", "itemsKey", "fontWeights", "fontSizes", "urlBuilder"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Components


 // Icons


/**
 * The nested accordion allows you to create, as the name suggest, a nests
 * accordion given a hierarchical data structure. Each nests accordion will
 * be indented to further enhance the hierary view.
 */

const NestedAccordion = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useStyleConfig)('NestedAccordion');

  const {
    item,
    initialDepth = 0,
    itemsFilter = () => true,
    itemsAfter,
    itemsBefore,
    itemsKey = 'items',
    fontWeights = [],
    fontSizes = [],
    urlBuilder = item => `/${item.id}`
  } = props,
        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const depth = initialDepth;
  const items = item[itemsKey]; // Handle filters in the folr of a function or a object key string.

  const filter = item => typeof itemsFilter === 'function' ? itemsFilter(item) : !!item[itemsFilter];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Accordion, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "sf-nested-accordion",
    allowToggle: true
  }, rest), typeof itemsBefore === 'function' ? itemsBefore({
    item,
    depth
  }) : itemsBefore, items.filter(filter).map(item => {
    const {
      id,
      name
    } = item;
    const items = item[itemsKey];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AccordionItem, {
      key: id,
      border: "none"
    }, ({
      isExpanded
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, items && items.filter(filter).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AccordionButton, styles.internalButton, isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, styles.internalButtonIcon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, styles.internalButtonIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
      fontSize: fontSizes[depth],
      fontWeight: fontWeights[depth]
    }, name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AccordionButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.leafButton, {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
      to: urlBuilder(item, intl.locale)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {
      fontSize: fontSizes[depth],
      fontWeight: fontWeights[depth]
    }, name))), items && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AccordionPanel, styles.panel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(NestedAccordion, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.nestedAccordion, props, {
      item: item,
      initialDepth: depth + 1
    })))));
  }), typeof itemsAfter === 'function' ? itemsAfter({
    item,
    depth
  }) : itemsAfter);
};

NestedAccordion.displayName = 'NestedAccordion';
NestedAccordion.propTypes = {
  /**
   * A POJO consistening of an id, name, and items array of object with
   * similarly specified properties.
   */
  item: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),

  /**
   * An array of `AccordionItem` components that will be displayed after all
   * of the child items. Alternatively you can pass a function that will recieve
   * the current item and it's depth, your should return an `AccordionItem` or
   * array of `AccordionItem`'s.
   */
  itemsAfter: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * An array of `AccordionItem` components that will be displayed before all
   * of the child items. Alternatively you can pass a function that will recieve
   * the current item and it's depth, your should return an `AccordionItem` or
   * array of `AccordionItem`'s.
   */
  itemsBefore: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * This is an internally used property used to pass the updated depth of the
   * child accordion. This is used to access specfic styl data for accodions
   * based on their depth.
   */
  initialDepth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),

  /**
   * By default child items are keyed at `items` but if your data differs you
   * can specify a custom key name for chile items. (e.g. children)
   */
  itemsKey: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * Programatically filter out items that you do not want to show. You can do this by
   * supplying a string that will be used to access an items value, the the value is truthy
   * the item will be displayed. Otherwise you can pass a function, this function will be passed
   * the item to be filtered, its return is expected to be true or false.
   */
  itemsFilter: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),

  /**
   * An array of font size strings, the position in the array will
   * indicate at what depth that size is applied.
   * TODO: Think about making this optionally a string value to make it behave like
   * chakra-ui responsive properties.
   */
  fontSizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),

  /**
   * An array of font weight strings, the position in the array will
   * indicate at what depth that weight is applied.
   * TODO: Think about making this optionally a string value to make it behave like
   * chakra-ui responsive properties.
   */
  fontWeights: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),

  /**
   * This function builds the urls for leaf items. It accepts
   * the current item, and returns a string.
   */
  urlBuilder: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (NestedAccordion);

/***/ }),

/***/ "./app/components/offline-banner/index.jsx":
/*!*************************************************!*\
  !*** ./app/components/offline-banner/index.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Components

 // Icons



const OfflineBanner = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const style = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useStyleConfig)('OfflineBanner');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Alert, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    status: "info"
  }, style.container), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.AlertIcon, style.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, style.message, intl.formatMessage({
    id: "offline_banner.message",
    defaultMessage: [{
      "type": 0,
      "value": "You're currently browsing in offline mode"
    }]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OfflineBanner);

/***/ }),

/***/ "./app/components/offline-boundary/index.jsx":
/*!***************************************************!*\
  !*** ./app/components/offline-boundary/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnwrappedOfflineBoundary": function() { return /* binding */ OfflineBoundary; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




 // import Button from 'pwa-kit-react-sdk/components/button'
// import Icon from 'pwa-kit-react-sdk/components/icon'

/**
 * OfflineBoundary is a React Error boundary that catches errors thrown when
 * dynamically loading pages and renders a fallback.
 */

class OfflineBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      chunkLoadError: false
    };
  }

  componentDidCatch(e) {
    // Only catch errors loading components with @loadable/components. Everything
    // else should bubble up the component tree to the built-in root error boundary.
    if (e.name !== 'ChunkLoadError') {
      throw e;
    }
  }

  static getDerivedStateFromError() {
    return {
      chunkLoadError: true
    };
  }

  componentDidUpdate(previousProps) {
    const {
      location: previousLocation,
      isOnline: wasOnline
    } = previousProps;
    const {
      location,
      isOnline
    } = this.props;
    const cameOnline = !wasOnline && isOnline;
    const locationChanged = ['pathname', 'search'].some(k => (previousLocation || {})[k] !== (location || {})[k]);
    const shouldClear = cameOnline || locationChanged;

    if (shouldClear) {
      this.clearError();
    }
  }

  clearError() {
    // Use an updater in order to only re-render if the state needs to change
    this.setState(prevState => {
      return prevState.chunkLoadError ? {
        chunkLoadError: false
      } : null;
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      chunkLoadError
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, chunkLoadError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "c-offline-boundary u-direction-column u-text-align-center u-padding-top u-padding-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.AlertIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "u-margin-bottom-md u-text-family"
    }, "You are currently offline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "u-margin-bottom-lg"
    }, "We couldn't load the next page on this connection. Please try again."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "u-width-block-full pw--primary qa-retry-button",
      onClick: () => this.clearError()
    }, "Retry Connection")) : children);
  }

}

OfflineBoundary.propTypes = {
  isOnline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)(OfflineBoundary));

/***/ }),

/***/ "./app/components/product-scroller/index.jsx":
/*!***************************************************!*\
  !*** ./app/components/product-scroller/index.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _components_product_tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/product-tile */ "./app/components/product-tile/index.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");



const _excluded = ["header", "title", "products", "isLoading", "scrollProps", "itemWidth", "productTileProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





/**
 * Renders a scrollable, horizontal container of products with native scroll
 * snapping and manual button controls.
 */

const ProductScroller = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)((_ref, ref) => {
  let {
    header,
    title,
    products,
    isLoading,
    scrollProps,
    itemWidth = {
      base: '70%',
      md: '40%',
      lg: 'calc(33.33% - 10px)'
    },
    productTileProps
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(); // Renders nothing if we aren't loading and have no products.

  if ((!products || products.length < 1) && !isLoading) {
    return null;
  } // Scroll the container left or right by 100%. Passing no args or `1`
  // scrolls to the right, and passing `-1` scrolls left.


  const scroll = (direction = 1) => {
    var _scrollRef$current;

    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scrollBy({
      top: 0,
      left: direction * window.innerWidth,
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
    position: "relative",
    "data-testid": "product-scroller",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    spacing: 6
  }, props), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
    height: 6,
    width: "150px",
    m: "auto"
  }), title && !header && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {
    as: "h2",
    fontSize: "xl",
    textAlign: "center"
  }, title), !title && !isLoading && header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: scrollRef,
    direction: "row",
    spacing: 4,
    wrap: "nowrap",
    overflowX: "scroll",
    px: {
      base: 4,
      md: 8,
      lg: 0
    }
  }, scrollProps, {
    sx: _objectSpread({
      scrollPadding: {
        base: 16,
        md: 32,
        lg: 0
      },
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch'
    }, scrollProps === null || scrollProps === void 0 ? void 0 : scrollProps.sx)
  }), (isLoading ? [0, 1, 2, 4] : products).map((product, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
      key: (product === null || product === void 0 ? void 0 : product.id) || idx,
      flex: "0 0 auto",
      width: itemWidth,
      style: {
        scrollSnapAlign: 'start'
      }
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      "data-testid": "product-scroller-item-skeleton"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AspectRatio, {
      ratio: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Skeleton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
      spacing: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
      width: "150px",
      height: 5
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
      width: "75px",
      height: 5
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_product_tile__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "data-testid": "product-scroller-item",
      product: product
    }, typeof productTileProps === 'function' ? _objectSpread({}, productTileProps(product)) : _objectSpread({}, productTileProps))));
  }))), (products === null || products === void 0 ? void 0 : products.length) > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
    display: {
      base: 'none',
      lg: 'block'
    },
    position: "absolute",
    top: "50%",
    left: {
      base: 0,
      lg: 4
    },
    transform: "translateY(-50%)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
    "data-testid": "product-scroller-nav-left",
    "aria-label": "Scroll products left",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronLeftIcon, {
      color: "black"
    }),
    borderRadius: "full",
    colorScheme: "whiteAlpha",
    onClick: () => scroll(-1)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
    display: {
      base: 'none',
      lg: 'block'
    },
    position: "absolute",
    top: "50%",
    right: {
      base: 0,
      lg: 4
    },
    transform: "translateY(-50%)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
    "data-testid": "product-scroller-nav-right",
    "aria-label": "Scroll products right",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, {
      color: "black"
    }),
    borderRadius: "full",
    colorScheme: "whiteAlpha",
    onClick: () => scroll(1)
  }))));
});
ProductScroller.displayName = 'ProductScroller';
ProductScroller.propTypes = {
  header: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),
  products: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  scrollProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  itemWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]),
  productTileProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)])
};
/* harmony default export */ __webpack_exports__["default"] = (ProductScroller);

/***/ }),

/***/ "./app/components/product-tile/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/product-tile/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skeleton": function() { return /* binding */ Skeleton; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../link */ "./app/components/link/index.jsx");
/* harmony import */ var _hoc_with_registration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hoc/with-registration */ "./app/hoc/with-registration/index.jsx");



const _excluded = ["product", "enableFavourite", "isFavourite", "onFavouriteToggle"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


 // Components

 // Hooks

 // Other




const IconButtonWithRegistration = (0,_hoc_with_registration__WEBPACK_IMPORTED_MODULE_8__["default"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton); // Component Skeleton

const Skeleton = () => {
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.useMultiStyleConfig)('ProductTile');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {
    "data-testid": "sf-product-tile-skeleton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, styles.imageWrapper, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.AspectRatio, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ratio: 1
  }, styles.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Skeleton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Skeleton, {
    width: "80px",
    height: "20px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Skeleton, {
    width: {
      base: '120px',
      md: '220px'
    },
    height: "12px"
  })));
};
/**
 * The ProductTile is a simple visual representation of a
 * product object. It will show it's default image, name and price.
 * It also supports favourite products, controlled by a heart icon.
 */

const ProductTile = props => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();

  const {
    product,
    enableFavourite = false,
    isFavourite,
    onFavouriteToggle
  } = props,
        rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  const {
    currency,
    image,
    price,
    productName,
    productId
  } = product;
  const [isFavouriteLoading, setFavouriteLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.useMultiStyleConfig)('ProductTile');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_link__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "data-testid": "product-tile"
  }, styles.container, {
    to: (0,_utils_url__WEBPACK_IMPORTED_MODULE_6__.productUrlBuilder)({
      id: productId
    }, intl.local)
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, styles.imageWrapper, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.AspectRatio, styles.image, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Img, {
    alt: image.alt,
    src: image.disBaseLink
  })), enableFavourite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Box, {
    onClick: e => {
      // stop click event from bubbling
      // to avoid user from clicking the underlying
      // product while the favourite icon is disabled
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(IconButtonWithRegistration, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    "aria-label": intl.formatMessage({
      id: "2WOdRo",
      defaultMessage: [{
        "type": 0,
        "value": "wishlist"
      }]
    }),
    icon: isFavourite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.HeartSolidIcon, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__.HeartIcon, null)
  }, styles.favIcon, {
    disabled: isFavouriteLoading,
    onClick: /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setFavouriteLoading(true);
      yield onFavouriteToggle(!isFavourite);
      setFavouriteLoading(false);
    })
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, styles.title, productName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Text, styles.price, intl.formatNumber(price, {
    style: 'currency',
    currency
  })));
};

ProductTile.displayName = 'ProductTile';
ProductTile.propTypes = {
  /**
   * The product search hit that will be represented in this
   * component.
   */
  product: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    currency: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    image: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      alt: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
      disBaseLink: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
    }),
    price: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),
    productName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    productId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }),

  /**
   * Enable adding/removing product as a favourite.
   * Use case: wishlist.
   */
  enableFavourite: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Display the product as a faviourite.
   */
  isFavourite: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * Callback function to be invoked when the user
   * interacts with favourite icon/button.
   */
  onFavouriteToggle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (ProductTile);

/***/ }),

/***/ "./app/components/recommended-products/index.jsx":
/*!*******************************************************!*\
  !*** ./app/components/recommended-products/index.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _components_product_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/product-scroller */ "./app/components/product-scroller/index.jsx");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _commerce_api_hooks_useEinstein__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commerce-api/hooks/useEinstein */ "./app/commerce-api/hooks/useEinstein.js");
/* harmony import */ var _hooks_use_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-intersection-observer */ "./app/hooks/use-intersection-observer.js");
/* harmony import */ var _hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-wishlist */ "./app/hooks/use-wishlist.js");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-toast */ "./app/hooks/use-toast.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");



const _excluded = ["zone", "recommender", "products", "title", "shouldFetch"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */












/**
 * A component for fetching and rendering product recommendations from the Einstein API
 * by a zone or a recommender name.
 */

const RecommendedProducts = _ref => {
  let {
    zone,
    recommender,
    products,
    title,
    shouldFetch
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const {
    api,
    loading,
    recommendations,
    getZoneRecommendations,
    getRecommendations,
    sendClickReco,
    sendViewReco
  } = (0,_commerce_api_hooks_useEinstein__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const {
    isInitialized
  } = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const wishlist = (0,_hooks_use_wishlist__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const toast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_10__.useToast)();
  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const {
    formatMessage
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const isOnScreen = (0,_hooks_use_intersection_observer__WEBPACK_IMPORTED_MODULE_8__["default"])(ref, {
    useOnce: true
  });
  const [_products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(products);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Return early if we have no Einstein API instance
    if (!api || !isInitialized) {
      return;
    } // Create the expected args object for products when given


    const args = {
      products: _products === null || _products === void 0 ? void 0 : _products.map(id => ({
        id
      }))
    }; // Check if the component should fetch results or not. This is useful
    // when you are still waiting on additional data, like `products`.

    if (typeof shouldFetch === 'function' && !shouldFetch()) {
      return;
    } // Fetch either zone or recommender, but not both. If a zone and recommender
    // name are both provided, `zone` takes precendence.


    if (zone) {
      getZoneRecommendations(zone, args);
      return;
    }

    if (recommender) {
      getRecommendations(recommender, args);
      return;
    }
  }, [zone, recommender, _products, isInitialized]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Return early if we have no Einstein API instance
    if (!api) {
      return;
    } // This is an optimization that eliminates superfluous rerenders/fetching by
    // keeping a copy of the `products` array prop in state for shallow comparison.


    if (!Array.isArray(products)) {
      return;
    }

    if (products.length !== (_products === null || _products === void 0 ? void 0 : _products.length) || !products.every((val, index) => val === (_products === null || _products === void 0 ? void 0 : _products[index]))) {
      setProducts(products);
    }
  }, [products]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (isOnScreen && recommendations !== null && recommendations !== void 0 && recommendations.recs) {
      sendViewReco({
        recommenderName: recommendations.recommenderName,
        __recoUUID: recommendations.recoUUID
      }, recommendations.recs.map(rec => ({
        id: rec.id
      })));
    }
  }, [isOnScreen, recommendations]); // Check if we have an Einstein API instance before attempting to render anything

  if (!api) {
    return null;
  } // The component should remove itself altogether if it has no recommendations
  // and we aren't loading any.


  if (!loading && (!recommendations || recommendations.length < 1)) {
    return null;
  } // TODO: DRY the wishlist handlers when intl
  // provider is available globally


  const addItemToWishlist = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (product) {
      try {
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
          react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
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

    return function addItemToWishlist(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeItemFromWishlist = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (product) {
      try {
        yield wishlist.removeListItemByProductId(product.productId);
        toast({
          title: formatMessage({
            id: "9rqdrm",
            defaultMessage: [{
              "type": 0,
              "value": "Item removed from wishlist"
            }]
          }),
          status: 'success',
          id: product.productId
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

    return function removeItemFromWishlist(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_product_scroller__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    title: title || (recommendations === null || recommendations === void 0 ? void 0 : recommendations.displayMessage),
    products: recommendations.recs,
    isLoading: loading,
    productTileProps: product => ({
      onClick: () => {
        sendClickReco({
          recommenderName: recommendations.recommenderName,
          __recoUUID: recommendations.recoUUID
        }, product);
      },
      enableFavourite: true,
      isFavourite: !!wishlist.findItemByProductId(product === null || product === void 0 ? void 0 : product.productId),
      onFavouriteToggle: isFavourite => {
        const action = isFavourite ? addItemToWishlist : removeItemFromWishlist;
        return action(product);
      }
    })
  }, props));
};

RecommendedProducts.propTypes = {
  /* The title to appear above the product scroller */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /* The zone to request */
  zone: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /* The recommender to request */
  recommender: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

  /* The product IDs to use for recommendation context */
  products: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)),

  /* Callback to determine if the component should fetch results */
  shouldFetch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (RecommendedProducts);

/***/ }),

/***/ "./app/components/register/index.jsx":
/*!*******************************************!*\
  !*** ./app/components/register/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _forms_registration_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/registration-fields */ "./app/components/forms/registration-fields.jsx");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link */ "./app/components/link/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









const RegisterForm = ({
  submitForm,
  clickSignIn = _utils_utils__WEBPACK_IMPORTED_MODULE_3__.noop,
  form
}) => {
  var _form$errors;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    justify: "center",
    align: "center",
    spacing: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.BrandLogo, {
    width: "60px",
    height: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    align: "center",
    fontSize: "xl",
    fontWeight: "semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "Ihg+6O",
    defaultMessage: [{
      "type": 0,
      "value": "Let's get started"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    fontSize: "sm",
    align: "center",
    color: "gray.700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "vvTcAr",
    defaultMessage: [{
      "type": 0,
      "value": "Create an account and get first access to the very best products, inspiration and community."
    }]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm),
    "data-testid": "sf-auth-modal-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    paddingTop: 8,
    spacing: 8,
    paddingLeft: 4,
    paddingRight: 4
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_registration_fields__WEBPACK_IMPORTED_MODULE_4__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    type: "submit",
    onClick: () => form.clearErrors('global'),
    isLoading: form.formState.isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "huqKGl",
    defaultMessage: [{
      "type": 0,
      "value": "Create account"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: "row",
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "uCk8r+",
    defaultMessage: [{
      "type": 0,
      "value": "Already have an account?"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    variant: "link",
    size: "sm",
    onClick: clickSignIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "SQJto2",
    defaultMessage: [{
      "type": 0,
      "value": "Sign in"
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    fontSize: "sm",
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "ONNUqG",
    defaultMessage: [{
      "type": 0,
      "value": "By creating an account, you agree to Salesforce’s "
    }, {
      "type": 8,
      "value": "policy",
      "children": [{
        "type": 0,
        "value": "Privacy Policy"
      }]
    }, {
      "type": 0,
      "value": " and "
    }, {
      "type": 8,
      "value": "terms",
      "children": [{
        "type": 0,
        "value": "Terms & Conditions"
      }]
    }],
    values: {
      // eslint-disable-next-line react/display-name
      policy: chunks => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {
        as: _link__WEBPACK_IMPORTED_MODULE_5__["default"],
        to: "/privacy-policy",
        color: "blue.600"
      }, chunks),
      // eslint-disable-next-line react/display-name
      terms: chunks => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {
        as: _link__WEBPACK_IMPORTED_MODULE_5__["default"],
        to: "/terms-conditions",
        color: "blue.600"
      }, chunks)
    }
  }))))));
};

RegisterForm.propTypes = {
  submitForm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  clickSignIn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./app/components/reset-password/index.jsx":
/*!*************************************************!*\
  !*** ./app/components/reset-password/index.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _forms_reset_password_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/reset-password-fields */ "./app/components/forms/reset-password-fields.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const ResetPasswordForm = ({
  submitForm,
  clickSignIn = _utils_utils__WEBPACK_IMPORTED_MODULE_3__.noop,
  form
}) => {
  var _form$errors;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    justify: "center",
    align: "center",
    spacing: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.BrandLogo, {
    width: "60px",
    height: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    align: "center",
    fontSize: "xl",
    fontWeight: "semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "xl27nc",
    defaultMessage: [{
      "type": 0,
      "value": "Reset Password"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: "sm",
    align: "center",
    color: "gray.700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "9Npj92",
    defaultMessage: [{
      "type": 0,
      "value": "Enter your email to receive instructions on how to reset your password"
    }]
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: form.handleSubmit(submitForm),
    "data-testid": "sf-auth-modal-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    paddingTop: 8,
    spacing: 8,
    paddingLeft: 4,
    paddingRight: 4
  }, ((_form$errors = form.errors) === null || _form$errors === void 0 ? void 0 : _form$errors.global) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Alert, {
    status: "error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__.AlertIcon, {
    color: "red.500",
    boxSize: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: "sm",
    ml: 3
  }, form.errors.global.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_reset_password_fields__WEBPACK_IMPORTED_MODULE_4__["default"], {
    form: form
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
    type: "submit",
    onClick: () => form.clearErrors('global'),
    isLoading: form.formState.isSubmitting
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "Yy/yDL",
    defaultMessage: [{
      "type": 0,
      "value": "Reset password"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: "row",
    spacing: 1,
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "TR+DHM",
    defaultMessage: [{
      "type": 0,
      "value": "Or return to"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
    variant: "link",
    size: "sm",
    onClick: clickSignIn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "SQJto2",
    defaultMessage: [{
      "type": 0,
      "value": "Sign in"
    }]
  })))))));
};

ResetPasswordForm.propTypes = {
  submitForm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  clickSignIn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (ResetPasswordForm);

/***/ }),

/***/ "./app/components/responsive/index.jsx":
/*!*********************************************!*\
  !*** ./app/components/responsive/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideOnDesktop": function() { return /* binding */ HideOnDesktop; },
/* harmony export */   "HideOnMobile": function() { return /* binding */ HideOnMobile; }
/* harmony export */ });
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



/**
 * Render the children in the DOM but visually hide them on desktop
 * @param children - isomorphic components used within a responsive design
 */

const HideOnDesktop = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
  display: {
    base: 'block',
    lg: 'none'
  }
}, children);
HideOnDesktop.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
/**
 * Render the children in the DOM but visually hide them on mobile
 * @param children - isomorphic components used within a responsive design
 */

const HideOnMobile = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
  display: {
    base: 'none',
    lg: 'block'
  }
}, children);
HideOnMobile.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = ({
  HideOnMobile,
  HideOnDesktop
});

/***/ }),

/***/ "./app/components/scroll-to-top/index.jsx":
/*!************************************************!*\
  !*** ./app/components/scroll-to-top/index.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollToTop; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * ScrollToTop will scroll the viewport to the top whenever the current URL
 * changes. If this component doesn't meet the needs of your layout, take a look
 * at this [guide]{@link https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md}.
 *
 */

function ScrollToTop() {
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/***/ }),

/***/ "./app/components/search/index.jsx":
/*!*****************************************!*\
  !*** ./app/components/search/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/popover/dist/chakra-ui-popover.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js");
/* harmony import */ var _partials_search_suggestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/search-suggestions */ "./app/components/search/partials/search-suggestions.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _commerce_api_hooks_useSearchSuggestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commerce-api/hooks/useSearchSuggestions */ "./app/commerce-api/hooks/useSearchSuggestions.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _hooks_use_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-navigation */ "./app/hooks/use-navigation.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../responsive */ "./app/components/responsive/index.jsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./app/constants.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/url */ "./app/utils/url.js");



/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */













const formatSuggestions = (searchSuggestions, input) => {
  var _searchSuggestions$ca, _searchSuggestions$ca2, _searchSuggestions$pr, _searchSuggestions$pr2, _searchSuggestions$ca3, _searchSuggestions$ca4;

  return {
    categorySuggestions: searchSuggestions === null || searchSuggestions === void 0 ? void 0 : (_searchSuggestions$ca = searchSuggestions.categorySuggestions) === null || _searchSuggestions$ca === void 0 ? void 0 : (_searchSuggestions$ca2 = _searchSuggestions$ca.categories) === null || _searchSuggestions$ca2 === void 0 ? void 0 : _searchSuggestions$ca2.map(suggestion => {
      return {
        type: 'category',
        id: suggestion.id,
        link: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.categoryUrlBuilder)({
          id: suggestion.id
        }),
        name: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.boldString)(suggestion.name, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.capitalize)(input))
      };
    }),
    productSuggestions: searchSuggestions === null || searchSuggestions === void 0 ? void 0 : (_searchSuggestions$pr = searchSuggestions.productSuggestions) === null || _searchSuggestions$pr === void 0 ? void 0 : (_searchSuggestions$pr2 = _searchSuggestions$pr.products) === null || _searchSuggestions$pr2 === void 0 ? void 0 : _searchSuggestions$pr2.map(product => {
      return {
        type: 'product',
        currency: product.currency,
        price: product.price,
        productId: product.productId,
        name: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.boldString)(product.productName, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.capitalize)(input)),
        link: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.productUrlBuilder)({
          id: product.productId
        })
      };
    }),
    phraseSuggestions: searchSuggestions === null || searchSuggestions === void 0 ? void 0 : (_searchSuggestions$ca3 = searchSuggestions.categorySuggestions) === null || _searchSuggestions$ca3 === void 0 ? void 0 : (_searchSuggestions$ca4 = _searchSuggestions$ca3.suggestedPhrases) === null || _searchSuggestions$ca4 === void 0 ? void 0 : _searchSuggestions$ca4.map(phrase => {
      return {
        type: 'phrase',
        name: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.boldString)(phrase.phrase, (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.capitalize)(input)),
        link: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.searchUrlBuilder)(phrase.phrase)
      };
    })
  };
};
/**
 * The SearchInput component is a stylized
 * text input made specifically for use in
 * the application header.
 * @param  {object} props
 * @param  {object} ref reference to the input element
 * @return  {React.ReactElement} - SearchInput component
 */


const Search = props => {
  var _searchInputRef$curre, _searchInputRef$curre3, _searchSuggestions$ca5, _searchSuggestions$ph, _searchInputRef$value;

  const navigate = (0,_hooks_use_navigation__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const searchSuggestion = (0,_commerce_api_hooks_useSearchSuggestions__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const searchInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const recentSearches = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getSessionJSONItem)(_constants__WEBPACK_IMPORTED_MODULE_10__.RECENT_SEARCH_KEY);
  const searchSuggestions = formatSuggestions(searchSuggestion.results, searchInputRef === null || searchInputRef === void 0 ? void 0 : (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 ? void 0 : _searchInputRef$curre.value); // check if popover should open if we have suggestions

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    shouldOpenPopover();
  }, [searchSuggestions]); // Want to make sure we clear the suggestions when we are deleting characters

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var _searchInputRef$curre2;

    if ((searchInputRef === null || searchInputRef === void 0 ? void 0 : (_searchInputRef$curre2 = searchInputRef.current) === null || _searchInputRef$curre2 === void 0 ? void 0 : _searchInputRef$curre2.value) <= 2) {
      searchSuggestion.clearSuggestedSearch();
    }
  }, [searchInputRef === null || searchInputRef === void 0 ? void 0 : (_searchInputRef$curre3 = searchInputRef.current) === null || _searchInputRef$curre3 === void 0 ? void 0 : _searchInputRef$curre3.value]);
  const searchSuggestionsAvailable = searchSuggestions && ((searchSuggestions === null || searchSuggestions === void 0 ? void 0 : (_searchSuggestions$ca5 = searchSuggestions.categorySuggestions) === null || _searchSuggestions$ca5 === void 0 ? void 0 : _searchSuggestions$ca5.length) || (searchSuggestions === null || searchSuggestions === void 0 ? void 0 : (_searchSuggestions$ph = searchSuggestions.phraseSuggestions) === null || _searchSuggestions$ph === void 0 ? void 0 : _searchSuggestions$ph.length));

  const saveRecentSearch = searchText => {
    // Get recent searches or an empty array if undefined.
    let searches = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.getSessionJSONItem)(_constants__WEBPACK_IMPORTED_MODULE_10__.RECENT_SEARCH_KEY) || []; // Check if term is already in the saved searches

    searches = searches.filter(savedSearchTerm => {
      searchText.toLowerCase() !== savedSearchTerm.toLowerCase();
    }); // Create a new array consisting of the search text and up to 4 other resent searches.
    // I'm assuming the order is newest to oldest.

    searches = [searchText, ...searches].slice(0, _constants__WEBPACK_IMPORTED_MODULE_10__.RECENT_SEARCH_LIMIT); // Replace the save resent search with the updated value.

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.setSessionJSONItem)(_constants__WEBPACK_IMPORTED_MODULE_10__.RECENT_SEARCH_KEY, searches);
  };

  const debouncedSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(input => searchSuggestion.getSearchSuggestions(input), 300);

  const onSearchChange = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (e) {
      const input = e.target.value;

      if (input.length >= _constants__WEBPACK_IMPORTED_MODULE_10__.RECENT_SEARCH_MIN_LENGTH) {
        debouncedSearch(input);
      }
    });

    return function onSearchChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  const clearInput = () => {
    searchInputRef.current.blur();
    searchSuggestion.clearSuggestedSearch();
    setIsOpen(false);
  };

  const onSubmitSearch = e => {
    e.preventDefault(); // Avoid blank spaces to be searched

    let searchText = searchInputRef.current.value.trim(); // Avoid empty string searches

    if (searchText.length < 1) {
      return;
    }

    saveRecentSearch(searchText);
    clearInput();
    navigate((0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.searchUrlBuilder)(searchText));
  };

  const closeAndNavigate = link => {
    if (!link) {
      clearInput();
      setIsOpen(false);
    } else {
      clearInput();
      setIsOpen(false);
      navigate(link);
    }
  };

  const shouldOpenPopover = () => {
    // As per design we only want to show the popover if the input is focused and we have recent searches saved
    // or we have search suggestions available and have inputed some text (empty text in this scenario should show recent searches)
    if (document.activeElement.id === 'search-input' && (recentSearches === null || recentSearches === void 0 ? void 0 : recentSearches.length) > 0 || searchSuggestionsAvailable && searchInputRef.current.value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const onSearchInputChange = e => {
    onSearchChange(e);
    shouldOpenPopover();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Popover, {
    isOpen: isOpen,
    isLazy: true,
    initialFocusRef: searchInputRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.PopoverTrigger, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {
    onSubmit: onSubmitSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.HStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.InputGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.InputLeftElement, {
    pointerEvents: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Input, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    autoComplete: "off",
    id: "search-input",
    onChange: e => onSearchInputChange(e),
    onFocus: () => shouldOpenPopover(),
    onBlur: () => setIsOpen(false),
    type: "search",
    ref: searchInputRef
  }, props, {
    variant: "filled"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_8__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    display: isOpen ? 'block' : 'none',
    variant: "link",
    size: "sm",
    onMouseDown: () => closeAndNavigate(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "47FYwb",
    defaultMessage: [{
      "type": 0,
      "value": "Cancel"
    }]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_8__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.PopoverContent, {
    "data-testid": "sf-suggestion-popover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_partials_search_suggestions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeAndNavigate: closeAndNavigate,
    recentSearches: recentSearches,
    searchSuggestions: searchSuggestions
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_responsive__WEBPACK_IMPORTED_MODULE_8__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Flex, {
    display: isOpen || (searchInputRef === null || searchInputRef === void 0 ? void 0 : (_searchInputRef$value = searchInputRef.value) === null || _searchInputRef$value === void 0 ? void 0 : _searchInputRef$value.length) > 0 ? 'block' : 'none',
    postion: "absolute",
    background: "white",
    left: 0,
    right: 0,
    height: "100vh"
  }, searchSuggestion.isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.Spinner, {
    position: "absolute",
    top: "50%",
    left: "50%",
    opacity: 0.85,
    color: "blue.600",
    zIndex: "9999",
    margin: "-25px 0 0 -25px"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_partials_search_suggestions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeAndNavigate: closeAndNavigate,
    recentSearches: recentSearches,
    searchSuggestions: searchSuggestions
  }))));
};

Search.displayName = 'SearchInput';
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./app/components/search/partials/recent-searches.jsx":
/*!************************************************************!*\
  !*** ./app/components/search/partials/recent-searches.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./app/constants.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/url */ "./app/utils/url.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const RecentSearches = ({
  recentSearches,
  closeAndNavigate
}) => {
  const clearSearches = () => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.clearSessionJSONItem)(_constants__WEBPACK_IMPORTED_MODULE_3__.RECENT_SEARCH_KEY);
    closeAndNavigate(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, null, (recentSearches === null || recentSearches === void 0 ? void 0 : recentSearches.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontWeight: "700",
    fontSize: 'md',
    "data-testid": "sf-suggestion-recent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "UE9zNR",
    defaultMessage: [{
      "type": 0,
      "value": "Recent Searches"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    mx: '-16px'
  }, recentSearches.map((recentSearch, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    width: "full",
    role: "button",
    name: "recent-search",
    fontSize: 'md',
    key: idx,
    onMouseDown: () => {
      closeAndNavigate((0,_utils_url__WEBPACK_IMPORTED_MODULE_4__.searchUrlBuilder)(recentSearch));
    },
    variant: "menu-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontWeight: "400"
  }, recentSearch))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    "data-testid": "sf-clear-search",
    id: "clear-search",
    width: "full",
    onMouseDown: () => {
      clearSearches();
    },
    variant: "menu-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    fontWeight: "400",
    color: "blue.600",
    fontSize: 'md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "DwzDiL",
    defaultMessage: [{
      "type": 0,
      "value": "Clear recent searches"
    }]
  }))))));
};

RecentSearches.propTypes = {
  recentSearches: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  closeAndNavigate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (RecentSearches);

/***/ }),

/***/ "./app/components/search/partials/search-suggestions.jsx":
/*!***************************************************************!*\
  !*** ./app/components/search/partials/search-suggestions.jsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _recent_searches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recent-searches */ "./app/components/search/partials/recent-searches.jsx");
/* harmony import */ var _suggestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suggestions */ "./app/components/search/partials/suggestions.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */






const SearchSuggestions = ({
  recentSearches,
  searchSuggestions,
  closeAndNavigate
}) => {
  var _searchSuggestions$ca;

  const useSuggestions = searchSuggestions && (searchSuggestions === null || searchSuggestions === void 0 ? void 0 : (_searchSuggestions$ca = searchSuggestions.categorySuggestions) === null || _searchSuggestions$ca === void 0 ? void 0 : _searchSuggestions$ca.length);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
    padding: 6,
    spacing: 0
  }, useSuggestions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_suggestions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeAndNavigate: closeAndNavigate,
    suggestions: searchSuggestions === null || searchSuggestions === void 0 ? void 0 : searchSuggestions.categorySuggestions
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_recent_searches__WEBPACK_IMPORTED_MODULE_2__["default"], {
    recentSearches: recentSearches,
    closeAndNavigate: closeAndNavigate
  }));
};

SearchSuggestions.propTypes = {
  recentSearches: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  searchSuggestions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  closeAndNavigate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (SearchSuggestions);

/***/ }),

/***/ "./app/components/search/partials/suggestions.jsx":
/*!********************************************************!*\
  !*** ./app/components/search/partials/suggestions.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const Suggestions = ({
  suggestions,
  closeAndNavigate
}) => {
  if (!suggestions) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    spacing: 0,
    "data-testid": "sf-suggestion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    mx: '-16px'
  }, suggestions.map((suggestion, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    width: "full",
    onMouseDown: () => closeAndNavigate(suggestion.link),
    fontSize: 'md',
    key: idx,
    marginTop: 0,
    variant: "menu-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    fontWeight: "400",
    dangerouslySetInnerHTML: {
      __html: suggestion.name
    }
  })))));
};

Suggestions.propTypes = {
  suggestions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  closeAndNavigate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (Suggestions);

/***/ }),

/***/ "./app/components/seo/index.jsx":
/*!**************************************!*\
  !*** ./app/components/seo/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

const _excluded = ["title", "description", "noIndex", "children"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




const Seo = _ref => {
  let {
    title,
    description,
    noIndex,
    children
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const siteName = 'Retail React App';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__["default"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, fullTitle), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: description
  }), noIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "robots",
    content: "noindex"
  }), children);
};

Seo.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  noIndex: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "./app/components/social-icons/index.jsx":
/*!***********************************************!*\
  !*** ./app/components/social-icons/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");


const _excluded = ["variant", "pinterestInnerColor"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Components

 // Icons


/**
 *
 */

const SocialIcons = _ref => {
  let {
    variant,
    pinterestInnerColor = 'white'
  } = _ref,
      otherProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useMultiStyleConfig)('SocialIcons', {
    variant
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "sf-social-icons"
  }, styles.container, {
    sx: {
      '--pinterest-icon-inner': pinterestInnerColor
    }
  }, otherProps), [{
    href: 'https://www.youtube.com/channel/UCSTGHqzR1Q9yAVbiS3dAFHg',
    icon: _components_icons__WEBPACK_IMPORTED_MODULE_4__.SocialYoutubeIcon,
    ariaLabel: 'YouTube'
  }, {
    href: 'https://www.instagram.com/commercecloud/?hl=en',
    icon: _components_icons__WEBPACK_IMPORTED_MODULE_4__.SocialInstagramIcon,
    ariaLabel: 'Instagram'
  }, {
    href: '/',
    icon: _components_icons__WEBPACK_IMPORTED_MODULE_4__.SocialPinterestIcon,
    ariaLabel: 'Pinterest'
  }, {
    href: 'https://twitter.com/CommerceCloud',
    icon: _components_icons__WEBPACK_IMPORTED_MODULE_4__.SocialTwitterIcon,
    ariaLabel: 'Twitter'
  }, {
    href: 'https://www.facebook.com/CommerceCloud/',
    icon: _components_icons__WEBPACK_IMPORTED_MODULE_4__.SocialFacebookIcon,
    ariaLabel: 'Facebook'
  }].map(({
    href,
    icon,
    ariaLabel
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.IconButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.item, {
    key: href,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(icon, styles.icon),
    variant: "unstyled",
    onClick: () => {
      window.open(href);
    },
    "aria-label": ariaLabel
  }))));
};

SocialIcons.displayName = 'SocialIcons';
SocialIcons.propTypes = {
  /**
   * This component has 3 variants, 'flex', 'flex-start' and 'flex-end'.
   * All will affect how the child icons are displayed. By default, it's
   * value is `flex`.
   */
  variant: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),

  /**
   * The inverse color of Pinterest icon's `currentColor`. For example, if the pinterest icon is white, then its inner 'p' is black.
   */
  pinterestInnerColor: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (SocialIcons);

/***/ }),

/***/ "./app/constants.js":
/*!**************************!*\
  !*** ./app/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_SEARCH_PARAMS": function() { return /* binding */ DEFAULT_SEARCH_PARAMS; },
/* harmony export */   "DEFAULT_LIMIT_VALUES": function() { return /* binding */ DEFAULT_LIMIT_VALUES; },
/* harmony export */   "RECENT_SEARCH_LIMIT": function() { return /* binding */ RECENT_SEARCH_LIMIT; },
/* harmony export */   "RECENT_SEARCH_KEY": function() { return /* binding */ RECENT_SEARCH_KEY; },
/* harmony export */   "RECENT_SEARCH_MIN_LENGTH": function() { return /* binding */ RECENT_SEARCH_MIN_LENGTH; },
/* harmony export */   "cssColorGroups": function() { return /* binding */ cssColorGroups; },
/* harmony export */   "FILTER_ACCORDION_SATE": function() { return /* binding */ FILTER_ACCORDION_SATE; },
/* harmony export */   "API_ERROR_MESSAGE": function() { return /* binding */ API_ERROR_MESSAGE; },
/* harmony export */   "HOME_HREF": function() { return /* binding */ HOME_HREF; },
/* harmony export */   "MAX_ORDER_QUANTITY": function() { return /* binding */ MAX_ORDER_QUANTITY; },
/* harmony export */   "SUPPORTED_LOCALES": function() { return /* binding */ SUPPORTED_LOCALES; },
/* harmony export */   "DEFAULT_LOCALE": function() { return /* binding */ DEFAULT_LOCALE; },
/* harmony export */   "SUPPORTED_CURRENCIES": function() { return /* binding */ SUPPORTED_CURRENCIES; },
/* harmony export */   "DEFAULT_CURRENCY": function() { return /* binding */ DEFAULT_CURRENCY; }
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
 // Constants used in the used for product searching.

const DEFAULT_SEARCH_PARAMS = {
  limit: 25,
  offset: 0,
  sort: 'best-matches',
  refine: []
};
const DEFAULT_LIMIT_VALUES = [25, 50, 100]; // Page sizes
// Constants for Search Component

const RECENT_SEARCH_LIMIT = 5;
const RECENT_SEARCH_KEY = 'recent-search-key';
const RECENT_SEARCH_MIN_LENGTH = 3;
const cssColorGroups = {
  beige: '#d3bca9',
  black: '#000000',
  blue: '#4089c0',
  brown: '#8e6950',
  green: '#88c290',
  grey: '#919191',
  gray: '#919191',
  silver: '#c0c0c0',
  navy: '#000080',
  orange: '#f4995c',
  pink: '#f5a0ca',
  purple: '#9873b9',
  red: '#df5b5b',
  white: '#FFFFFFF',
  yellow: '#fbe85a',
  gold: '#ffd700',
  miscellaneous: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet)'
};
const FILTER_ACCORDION_SATE = 'filters-expanded-index';
const API_ERROR_MESSAGE = 'Something went wrong. Try again!';
const HOME_HREF = '/';
const MAX_ORDER_QUANTITY = 10; // TODO: You can update these locales and currencies in 'pwa/package.json' file

const SUPPORTED_LOCALES = _package_json__WEBPACK_IMPORTED_MODULE_0__.l10n.supportedLocales;
const DEFAULT_LOCALE = _package_json__WEBPACK_IMPORTED_MODULE_0__.l10n.defaultLocale;
const SUPPORTED_CURRENCIES = _package_json__WEBPACK_IMPORTED_MODULE_0__.l10n.supportedCurrencies;
const DEFAULT_CURRENCY = _package_json__WEBPACK_IMPORTED_MODULE_0__.l10n.defaultCurrency;

/***/ }),

/***/ "./app/contexts/index.js":
/*!*******************************!*\
  !*** ./app/contexts/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesContext": function() { return /* binding */ CategoriesContext; },
/* harmony export */   "CategoriesProvider": function() { return /* binding */ CategoriesProvider; },
/* harmony export */   "CurrencyContext": function() { return /* binding */ CurrencyContext; },
/* harmony export */   "CurrencyProvider": function() { return /* binding */ CurrencyProvider; }
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
 * This is the global state for categories, we use this for navigation and for
 * the product list page.
 *
 * To use these context's simply import them into the component requiring context
 * like the below example:
 *
 * import React, {useContext} from 'react'
 * import {CategoriesContext} from './contexts'
 *
 * export const RootCategoryLabel = () => {
 *    const {categories} = useContext(CategoriesContext)
 *    return <div>{categories['root'].name}</div>
 * }
 *
 * Alternatively you can use the hook provided by us:
 *
 * import {useCategories} from './hooks'
 *
 * const {categories, setCategories} = useCategories()
 *
 */

const CategoriesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
const CategoriesProvider = ({
  categories: initialCategories = {},
  children
}) => {
  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCategories);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoriesContext.Provider, {
    value: {
      categories,
      setCategories
    }
  }, children);
};
CategoriesProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/**
 * This is the global state for currency, we use this throughout the site. For example, on
 * the product-list, product-detail and cart and basket pages..
 *
 * To use these context's simply import them into the component requiring context
 * like the below example:
 *
 * import React, {useContext} from 'react'
 * import {CurrencyContext} from './contexts'
 *
 * export const RootCurrencyLabel = () => {
 *    const {currency} = useContext(CurrencyContext)
 *    return <div>{currency}</div>
 * }
 *
 * Alternatively you can use the hook provided by us:
 *
 * import {useCurrency} from './hooks'
 *
 * const {currency, setCurrency} = useCurrency()
 *
 */

const CurrencyContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
const CurrencyProvider = ({
  currency: initialCurrency,
  children
}) => {
  const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCurrency);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrencyContext.Provider, {
    value: {
      currency,
      setCurrency
    }
  }, children);
};
CurrencyProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired),
  currency: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./app/einstein-api.config.js":
/*!************************************!*\
  !*** ./app/einstein-api.config.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "einsteinAPIConfig": function() { return /* binding */ einsteinAPIConfig; }
/* harmony export */ });
const einsteinAPIConfig = {
  proxyPath: `/mobify/proxy/einstein`,
  einsteinId: '',
  siteId: 'TheBay'
};

/***/ }),

/***/ "./app/hoc/with-registration/index.jsx":
/*!*********************************************!*\
  !*** ./app/hoc/with-registration/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _hooks_use_auth_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-auth-modal */ "./app/hooks/use-auth-modal.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-toast */ "./app/hooks/use-toast.js");


const _excluded = ["onClick"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */









const withRegistration = Component => {
  const WrappedComponent = _ref => {
    let {
      onClick = _utils_utils__WEBPACK_IMPORTED_MODULE_6__.noop
    } = _ref,
        passThroughProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

    const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const authModal = (0,_hooks_use_auth_modal__WEBPACK_IMPORTED_MODULE_4__.useAuthModal)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();
    const {
      formatMessage,
      locale
    } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__["default"])();
    const isLoginPage = new RegExp(`^/${locale}/login$`).test(location.pathname);
    const showToast = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_7__.useToast)();

    const handleClick = e => {
      e.preventDefault();

      if (!customer.isRegistered) {
        // Do not show auth modal if users is already on the login page
        if (isLoginPage) {
          showToast({
            title: formatMessage({
              id: "fG2sM9",
              defaultMessage: [{
                "type": 0,
                "value": "Please sign in to continue!"
              }]
            }),
            status: 'info'
          });
        } else {
          authModal.onOpen();
        }
      } else {
        onClick();
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, passThroughProps, {
      onClick: handleClick
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_hooks_use_auth_modal__WEBPACK_IMPORTED_MODULE_4__.AuthModal, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, authModal, {
      onLoginSuccess: onClick
    })));
  };

  WrappedComponent.propTypes = {
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
  };
  return WrappedComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (withRegistration);

/***/ }),

/***/ "./app/hooks/index.js":
/*!****************************!*\
  !*** ./app/hooks/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSearchParams": function() { return /* reexport safe */ _use_search_params__WEBPACK_IMPORTED_MODULE_0__.useSearchParams; },
/* harmony export */   "useLimitUrls": function() { return /* reexport safe */ _use_limit_urls__WEBPACK_IMPORTED_MODULE_1__.useLimitUrls; },
/* harmony export */   "usePageUrls": function() { return /* reexport safe */ _use_page_urls__WEBPACK_IMPORTED_MODULE_2__.usePageUrls; },
/* harmony export */   "useSortUrls": function() { return /* reexport safe */ _use_sort_urls__WEBPACK_IMPORTED_MODULE_3__.useSortUrls; },
/* harmony export */   "useVariant": function() { return /* reexport safe */ _use_variant__WEBPACK_IMPORTED_MODULE_4__.useVariant; },
/* harmony export */   "useVariationAttributes": function() { return /* reexport safe */ _use_variation_attributes__WEBPACK_IMPORTED_MODULE_5__.useVariationAttributes; },
/* harmony export */   "useVariationParams": function() { return /* reexport safe */ _use_variation_params__WEBPACK_IMPORTED_MODULE_6__.useVariationParams; },
/* harmony export */   "useProduct": function() { return /* reexport safe */ _use_product__WEBPACK_IMPORTED_MODULE_7__.useProduct; },
/* harmony export */   "useCurrency": function() { return /* reexport safe */ _use_currency__WEBPACK_IMPORTED_MODULE_8__.useCurrency; }
/* harmony export */ });
/* harmony import */ var _use_search_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-search-params */ "./app/hooks/use-search-params.js");
/* harmony import */ var _use_limit_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-limit-urls */ "./app/hooks/use-limit-urls.js");
/* harmony import */ var _use_page_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-page-urls */ "./app/hooks/use-page-urls.js");
/* harmony import */ var _use_sort_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-sort-urls */ "./app/hooks/use-sort-urls.js");
/* harmony import */ var _use_variant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-variant */ "./app/hooks/use-variant.js");
/* harmony import */ var _use_variation_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-variation-attributes */ "./app/hooks/use-variation-attributes.js");
/* harmony import */ var _use_variation_params__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-variation-params */ "./app/hooks/use-variation-params.js");
/* harmony import */ var _use_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-product */ "./app/hooks/use-product.js");
/* harmony import */ var _use_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-currency */ "./app/hooks/use-currency.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* istanbul ignore file */










/***/ }),

/***/ "./app/hooks/use-add-to-cart-modal.js":
/*!********************************************!*\
  !*** ./app/hooks/use-add-to-cart-modal.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToCartModalContext": function() { return /* binding */ AddToCartModalContext; },
/* harmony export */   "useAddToCartModalContext": function() { return /* binding */ useAddToCartModalContext; },
/* harmony export */   "AddToCartModalProvider": function() { return /* binding */ AddToCartModalProvider; },
/* harmony export */   "AddToCartModal": function() { return /* binding */ AddToCartModal; },
/* harmony export */   "useAddToCartModal": function() { return /* binding */ useAddToCartModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _components_recommended_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/recommended-products */ "./app/components/recommended-products/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./app/constants.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ */ "./app/hooks/index.js");
/* harmony import */ var _utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/image-groups-utils */ "./app/utils/image-groups-utils.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */












/**
 * This is the context for managing the AddToCartModal.
 * Used in top level App component.
 */

const AddToCartModalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
const useAddToCartModalContext = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AddToCartModalContext);
const AddToCartModalProvider = ({
  children
}) => {
  const addToCartModal = useAddToCartModal();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AddToCartModalContext.Provider, {
    value: addToCartModal
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AddToCartModal, null));
};
AddToCartModalProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/**
 * Visual feedback (a modal) for adding item to the cart.
 */

const AddToCartModal = () => {
  var _productItems$find, _findImageGroupBy, _findImageGroupBy$ima;

  const {
    isOpen,
    onClose,
    data
  } = useAddToCartModalContext();
  const {
    product,
    quantity
  } = data || {};
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const size = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.useBreakpointValue)({
    base: 'full',
    lg: '2xl',
    xl: '4xl'
  });
  const variationAttributes = (0,___WEBPACK_IMPORTED_MODULE_8__.useVariationAttributes)(product);

  if (!isOpen) {
    return null;
  }

  const {
    currency,
    productItems,
    productSubTotal,
    itemAccumulatedCount
  } = basket;
  const {
    id,
    variationValues
  } = product;
  const lineItemPrice = (productItems === null || productItems === void 0 ? void 0 : (_productItems$find = productItems.find(item => item.productId === id)) === null || _productItems$find === void 0 ? void 0 : _productItems$find.basePrice) * quantity;
  const image = (_findImageGroupBy = (0,_utils_image_groups_utils__WEBPACK_IMPORTED_MODULE_9__.findImageGroupBy)(product.imageGroups, {
    viewType: 'small',
    selectedVariationAttributes: variationValues
  })) === null || _findImageGroupBy === void 0 ? void 0 : (_findImageGroupBy$ima = _findImageGroupBy.images) === null || _findImageGroupBy$ima === void 0 ? void 0 : _findImageGroupBy$ima[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Modal, {
    size: size,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalContent, {
    margin: "0",
    marginTop: {
      md: '8',
      lg: '200px'
    },
    overflow: "hidden",
    borderRadius: {
      base: 'none',
      md: 'base'
    },
    bgColor: "gray.50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalHeader, {
    paddingTop: "8",
    bgColor: "white",
    fontSize: "2xl",
    fontWeight: "700"
  }, intl.formatMessage({
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
    quantity
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalCloseButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.ModalBody, {
    bgColor: "white",
    paddingTop: "4",
    paddingBottom: "8",
    flex: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {
    flexDirection: {
      base: 'column',
      lg: 'row'
    },
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    flex: "1",
    paddingRight: {
      lg: '4',
      xl: '8'
    },
    paddingY: {
      base: '4',
      lg: '0'
    } // divider style
    ,
    borderRightWidth: {
      lg: '1px'
    },
    borderBottomWidth: {
      base: '1px',
      lg: '0px'
    },
    borderColor: "gray.200",
    borderStyle: "solid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {
    gridGap: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    w: "24",
    flex: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.AspectRatio, {
    ratio: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: image.link,
    alt: image.alt
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontWeight: "700"
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    color: "gray.600",
    fontSize: "sm",
    fontWeight: "400"
  }, variationAttributes.map(attr => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
      key: attr.id
    }, attr.name, ": ", attr.selectedValue.name);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, intl.formatMessage({
    id: "7gXPhB",
    defaultMessage: [{
      "type": 0,
      "value": "Qty"
    }]
  }), ": ", quantity)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    flex: "none",
    alignSelf: "flex-end",
    fontWeight: "600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, null, !!lineItemPrice && intl.formatNumber(lineItemPrice, {
    style: 'currency',
    currency: currency || _constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_CURRENCY
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    flex: "1",
    paddingLeft: {
      lg: '4',
      xl: '8'
    },
    paddingY: {
      base: '4',
      lg: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Flex, {
    justifyContent: "space-between",
    marginBottom: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontWeight: "700"
  }, intl.formatMessage({
    id: "1LblQ6",
    defaultMessage: [{
      "type": 0,
      "value": "Cart Subtotal ("
    }, {
      "type": 1,
      "value": "itemAccumulatedCount"
    }, {
      "type": 0,
      "value": " item)"
    }]
  }, {
    itemAccumulatedCount
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    alignSelf: "flex-end",
    fontWeight: "600"
  }, productSubTotal && intl.formatNumber(productSubTotal, {
    style: 'currency',
    currency: currency || _constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_CURRENCY
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_4__["default"],
    to: "/cart",
    width: "100%",
    variant: "solid"
  }, intl.formatMessage({
    id: "5BTYa0",
    defaultMessage: [{
      "type": 0,
      "value": "View Cart"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_4__["default"],
    to: "/checkout",
    width: "100%",
    variant: "outline",
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_6__.LockIcon, null)
  }, intl.formatMessage({
    id: "z3Qj9h",
    defaultMessage: [{
      "type": 0,
      "value": "Proceed to Checkout"
    }]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    padding: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_recommended_products__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }))));
};
AddToCartModal.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    imageGroups: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
  }),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    productId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    variationValues: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  }),
  quantity: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
};
const useAddToCartModal = () => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isOpen: false,
    data: null
  });
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (state.isOpen) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        isOpen: false
      }));
    }
  }, [pathname]);
  return {
    isOpen: state.isOpen,
    data: state.data,
    onOpen: data => {
      setState({
        isOpen: true,
        data
      });
    },
    onClose: () => {
      setState({
        isOpen: false,
        data: null
      });
    }
  };
};

/***/ }),

/***/ "./app/hooks/use-auth-modal.js":
/*!*************************************!*\
  !*** ./app/hooks/use-auth-modal.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModal": function() { return /* binding */ AuthModal; },
/* harmony export */   "useAuthModal": function() { return /* binding */ useAuthModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commerce-api/hooks/useCustomer */ "./app/commerce-api/hooks/useCustomer.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/login */ "./app/components/login/index.jsx");
/* harmony import */ var _components_reset_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/reset-password */ "./app/components/reset-password/index.jsx");
/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/register */ "./app/components/register/index.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/utils */ "./app/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./app/constants.js");



const _excluded = ["initialView", "onLoginSuccess", "onRegistrationSuccess", "onPasswordResetSuccess"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */













const LOGIN_VIEW = 'login';
const REGISTER_VIEW = 'register';
const PASSWORD_VIEW = 'password';
const AuthModal = _ref => {
  var _form$control2, _form$control2$fields;

  let {
    initialView = LOGIN_VIEW,
    onLoginSuccess = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onRegistrationSuccess = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop,
    onPasswordResetSuccess = _utils_utils__WEBPACK_IMPORTED_MODULE_11__.noop
  } = _ref,
      props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  const {
    formatMessage,
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const customer = (0,_commerce_api_hooks_useCustomer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const [currentView, setCurrentView] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialView);
  const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
  const submittedEmail = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useHistory)();
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.useToast)();

  const submitForm = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (data) {
      form.clearErrors();
      return {
        login: handleLogin,
        register: handleRegister,
        password: handleResetPassword
      }[currentView](data);
    });

    return function submitForm(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  const handleLogin = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (data) {
      try {
        yield customer.login(data);
      } catch (error) {
        const message = /invalid credentials/i.test(error.message) ? formatMessage({
          id: "x6hxSH",
          defaultMessage: [{
            "type": 0,
            "value": "Something's not right with your email or password. Try again."
          }]
        }) : formatMessage({
          id: "+y/wae",
          defaultMessage: [{
            "type": 1,
            "value": "errorMessage"
          }]
        }, {
          errorMessage: _constants__WEBPACK_IMPORTED_MODULE_12__.API_ERROR_MESSAGE
        });
        form.setError('global', {
          type: 'manual',
          message
        });
      }
    });

    return function handleLogin(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  const handleRegister = /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* (data) {
      try {
        yield customer.registerCustomer(data);
        history.push(`/${locale}/account`);
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function handleRegister(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  const handleResetPassword = /*#__PURE__*/function () {
    var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(function* ({
      email
    }) {
      try {
        yield customer.getResetPasswordToken(email); // Execute action to be perfromed on successful passoword reset

        yield onPasswordResetSuccess();
        submittedEmail.current = email;
      } catch (error) {
        form.setError('global', {
          type: 'manual',
          message: error.message
        });
      }
    });

    return function handleResetPassword(_x4) {
      return _ref5.apply(this, arguments);
    };
  }(); // Reset form and local state when opening the modal


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (props.isOpen) {
      setCurrentView(initialView);
      submittedEmail.current = undefined;
      form.reset();
    }
  }, [props.isOpen]); // Auto-focus the first field in each form view

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var _form$control, _form$control$fieldsR, _fieldsRef$initialFie;

    const initialField = {
      [LOGIN_VIEW]: 'email',
      [REGISTER_VIEW]: 'firstName',
      [PASSWORD_VIEW]: 'email'
    }[currentView];
    const fieldsRef = (_form$control = form.control) === null || _form$control === void 0 ? void 0 : (_form$control$fieldsR = _form$control.fieldsRef) === null || _form$control$fieldsR === void 0 ? void 0 : _form$control$fieldsR.current;
    fieldsRef === null || fieldsRef === void 0 ? void 0 : (_fieldsRef$initialFie = fieldsRef[initialField]) === null || _fieldsRef$initialFie === void 0 ? void 0 : _fieldsRef$initialFie.ref.focus();
  }, [(_form$control2 = form.control) === null || _form$control2 === void 0 ? void 0 : (_form$control2$fields = _form$control2.fieldsRef) === null || _form$control2$fields === void 0 ? void 0 : _form$control2$fields.current]); // Clear form state when changing views

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    form.reset();
  }, [currentView]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // Lets determine if the user has either logged in, or registed.
    const loggingIn = currentView === LOGIN_VIEW;
    const registering = currentView === REGISTER_VIEW;
    const {
      isOpen
    } = props;
    const isNowRegistered = isOpen && customer.isRegistered && (loggingIn || registering); // If the customer changed, but it's not because they logged in or registered. Do nothing.

    if (!isNowRegistered) {
      return;
    } // We are done with the modal.


    props.onClose(); // Show a toast only for those registed users returning to the site.

    if (loggingIn) {
      toast({
        variant: 'subtle',
        title: `${formatMessage({
          id: "llHgJz",
          defaultMessage: [{
            "type": 0,
            "value": "Welcome "
          }, {
            "type": 1,
            "value": "name"
          }, {
            "type": 0,
            "value": ","
          }]
        }, {
          name: customer === null || customer === void 0 ? void 0 : customer.firstName
        })}`,
        description: `${formatMessage({
          id: "OVvfLK",
          defaultMessage: [{
            "type": 0,
            "value": "You're now signed in"
          }]
        })}`,
        status: 'success',
        position: 'top-right',
        isClosable: true
      }); // Execute action to be performed on successful login

      onLoginSuccess();
    }

    if (registering) {
      // Execute action to be performed on successful registration
      onRegistrationSuccess();
    }
  }, [customer]);

  const PasswordResetSuccess = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Stack, {
    justify: "center",
    align: "center",
    spacing: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_7__.BrandLogo, {
    width: "60px",
    height: "auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Text, {
    align: "center",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "xHP4/6",
    defaultMessage: [{
      "type": 0,
      "value": "Password Reset"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Stack, {
    spacing: 6,
    pt: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.Text, {
    align: "center",
    fontSize: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "1b9Q93",
    defaultMessage: [{
      "type": 0,
      "value": "You will receive an email at "
    }, {
      "type": 8,
      "value": "b",
      "children": [{
        "type": 1,
        "value": "email"
      }]
    }, {
      "type": 0,
      "value": " with a link to reset your password shortly."
    }],
    values: {
      email: submittedEmail.current,
      // eslint-disable-next-line react/display-name
      b: chunks => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("b", null, chunks)
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button, {
    onClick: () => setCurrentView(LOGIN_VIEW)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "odTkf5",
    defaultMessage: [{
      "type": 0,
      "value": "Back to sign in"
    }]
  }))));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.Modal, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: "sm",
    closeOnOverlayClick: false,
    "data-testid": "sf-auth-modal"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.ModalOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.ModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.ModalCloseButton, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_19__.ModalBody, {
    pb: 8,
    bg: "white",
    paddingBottom: 14,
    marginTop: 14
  }, !form.formState.isSubmitSuccessful && currentView === LOGIN_VIEW && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_login__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: form,
    submitForm: submitForm,
    clickCreateAccount: () => setCurrentView(REGISTER_VIEW),
    clickForgotPassword: () => setCurrentView(PASSWORD_VIEW)
  }), !form.formState.isSubmitSuccessful && currentView === REGISTER_VIEW && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_register__WEBPACK_IMPORTED_MODULE_10__["default"], {
    form: form,
    submitForm: submitForm,
    clickSignIn: () => setCurrentView(LOGIN_VIEW)
  }), !form.formState.isSubmitSuccessful && currentView === PASSWORD_VIEW && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_reset_password__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: form,
    submitForm: submitForm,
    clickSignIn: () => setCurrentView(LOGIN_VIEW)
  }), form.formState.isSubmitSuccessful && currentView === PASSWORD_VIEW && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PasswordResetSuccess, null))));
};
AuthModal.propTypes = {
  initialView: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([LOGIN_VIEW, REGISTER_VIEW, PASSWORD_VIEW]),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
  onOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  onLoginSuccess: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onRegistrationSuccess: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  onPasswordResetSuccess: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/**
 *
 * @param {('register'|'login'|'password')} initialView - the initial view for the modal
 * @returns {Object} - Object props to be spread on to the AuthModal component
 */

const useAuthModal = (initialView = LOGIN_VIEW) => {
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_20__.useDisclosure)();
  return {
    initialView,
    isOpen,
    onOpen,
    onClose
  };
};

/***/ }),

/***/ "./app/hooks/use-currency.js":
/*!***********************************!*\
  !*** ./app/hooks/use-currency.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCurrency": function() { return /* binding */ useCurrency; }
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
 * Custom React hook to get the currency for the active locale and to change it to a different currency
 * @returns {{currency: string, setCurrency: function}[]}
 */

const useCurrency = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__.CurrencyContext);

/***/ }),

/***/ "./app/hooks/use-intersection-observer.js":
/*!************************************************!*\
  !*** ./app/hooks/use-intersection-observer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const _excluded = ["useOnce"];

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Returns a boolean to indicate if an element is visible on the screen. Fall back to `true`
 * if IntersectionObserver is not supported.
 * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
 * @param {Object} ref - element ref
 * @param {Object} options
 * @param {Object} options.root - See IntersectionObserver options
 * @param {string} options.rootMargin - See IntersectionObserver options
 * @param {number|Array<number>} options.threshold - See IntersectionObserver options
 * @param {boolean} options.useOnce - Detach the observer after the element appears.
 * @returns {boolean}
 */

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIntersecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const {
    useOnce
  } = options,
        ioOptions = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(options, _excluded);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(ref !== null && ref !== void 0 && ref.current)) return; // Just set `isIntersecting` true if browser doesn't implement IntersectionObserver. If the use-case
    // is critical and you need to support very old browsers, a polyfill will need to be added.

    if (!('IntersectionObserver' in window) || !('IntersectionObserverEntry' in window) || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
      if (!isIntersecting) {
        setIntersecting(true);
      } // We want to return early, but `useEffect` expects a function as the return value,
      // so we just return a noop function.


      return () => null;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const onScreen = entry.isIntersecting;
      setIntersecting(onScreen);

      if (useOnce && onScreen) {
        observer.disconnect();
      }
    }, ioOptions);
    observer.observe(ref === null || ref === void 0 ? void 0 : ref.current); // Remove the observer as soon as the component is unmounted

    return () => {
      observer.disconnect();
    };
  }, [ref === null || ref === void 0 ? void 0 : ref.current]);
  return isIntersecting;
};

/* harmony default export */ __webpack_exports__["default"] = (useIntersectionObserver);

/***/ }),

/***/ "./app/hooks/use-limit-urls.js":
/*!*************************************!*\
  !*** ./app/hooks/use-limit-urls.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLimitUrls": function() { return /* binding */ useLimitUrls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./app/constants.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/url */ "./app/utils/url.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Constants

 // Utils


/*
 * Generate a memoized list of page size urls. Chaning the page size will reset
 * the offset to zero to simplify things.
 */

const useLimitUrls = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.buildUrlSet)(`${location.pathname}${location.search}`, 'limit', _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LIMIT_VALUES, {
    offset: 0
  }), [location.search, location.pathname]);
};

/***/ }),

/***/ "./app/hooks/use-navigation.js":
/*!*************************************!*\
  !*** ./app/hooks/use-navigation.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



/**
 * A convenience hook for programmatic navigation uses history's `push` or `replace`. The proper locale
 * is automatically prepended to the provided path. Additional args are passed through to `history`.
 * @returns {function} - Returns a navigate function that passes args to history methods.
 */

const useNavigation = () => {
  const history = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  const {
    locale
  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
  /**
   *
   * @param {string} path - path to navigate to
   * @param {('push'|'replace')} action - which history method to use
   * @param  {...any} args - additional args passed to `.push` or `.replace`
   */
  (path, action = 'push', ...args) => {
    const localePath = `/${locale}`;
    const localizedHref = path && path.includes(localePath) ? path : `${localePath}${path}`;
    history[action](path === '/' ? '/' : localizedHref, ...args);
  }, [locale]);
};

/* harmony default export */ __webpack_exports__["default"] = (useNavigation);

/***/ }),

/***/ "./app/hooks/use-page-urls.js":
/*!************************************!*\
  !*** ./app/hooks/use-page-urls.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageUrls": function() { return /* binding */ usePageUrls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/url */ "./app/utils/url.js");
/* harmony import */ var _use_search_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-search-params */ "./app/hooks/use-search-params.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Utils

 // Hooks


/*
 * Generate a memoized list of page size urls. Chaning the page size will reset
 * the offset to zero to simplify things.
 */

const usePageUrls = ({
  total = 0,
  limit
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const [searchParams] = (0,_use_search_params__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();

  const _limit = limit || searchParams.limit;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const pageCount = Math.ceil(total / _limit);
    return (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.buildUrlSet)(`${location.pathname}${location.search}`, 'offset', new Array(pageCount).fill(0).map((_, index) => index * _limit));
  }, [location.pathname, location.search, _limit, total]);
};

/***/ }),

/***/ "./app/hooks/use-product.js":
/*!**********************************!*\
  !*** ./app/hooks/use-product.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useProduct": function() { return /* binding */ useProduct; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_variant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-variant */ "./app/hooks/use-variant.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _use_variation_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-variation-params */ "./app/hooks/use-variation-params.js");
/* harmony import */ var _use_variation_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-variation-attributes */ "./app/hooks/use-variation-attributes.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */





const OUT_OF_STOCK = 'OUT_OF_STOCK';
const UNFULFILLABLE = 'UNFULFILLABLE'; // TODO: This needs to be refactored.

const useProduct = product => {
  var _product$inventory;

  const showLoading = !product;
  const stockLevel = (product === null || product === void 0 ? void 0 : (_product$inventory = product.inventory) === null || _product$inventory === void 0 ? void 0 : _product$inventory.stockLevel) || 0;
  const stepQuantity = (product === null || product === void 0 ? void 0 : product.stepQuantity) || 1;
  const minOrderQuantity = stockLevel > 0 ? (product === null || product === void 0 ? void 0 : product.minOrderQuantity) || 1 : 0;
  const initialQuantity = (product === null || product === void 0 ? void 0 : product.quantity) || (product === null || product === void 0 ? void 0 : product.minOrderQuantity) || 1;
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const variant = (0,_use_variant__WEBPACK_IMPORTED_MODULE_1__.useVariant)(product);
  const variationParams = (0,_use_variation_params__WEBPACK_IMPORTED_MODULE_2__.useVariationParams)(product);
  const variationAttributes = (0,_use_variation_attributes__WEBPACK_IMPORTED_MODULE_3__.useVariationAttributes)(product);
  const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialQuantity); // A product is considered out of stock if the stock level is 0 or if we have all our
  // variation attributes selected, but don't have a variant. We do this because the API
  // will sometimes return all the variants even if they are out of stock, but for other
  // products it won't.

  const isOutOfStock = !stockLevel || !variant && Object.keys(variationParams).length === variationAttributes.length;
  const unfulfillable = stockLevel < quantity;
  const inventoryMessages = {
    [OUT_OF_STOCK]: intl.formatMessage({
      id: "WHgdsk",
      defaultMessage: [{
        "type": 0,
        "value": "Out of stock"
      }]
    }),
    [UNFULFILLABLE]: intl.formatMessage({
      id: "EOUB63",
      defaultMessage: [{
        "type": 0,
        "value": "Only "
      }, {
        "type": 1,
        "value": "stockLevel"
      }, {
        "type": 0,
        "value": " Left!"
      }]
    }, {
      stockLevel
    })
  };
  const showInventoryMessage = variant && (isOutOfStock || unfulfillable);
  const inventoryMessage = isOutOfStock && inventoryMessages[OUT_OF_STOCK] || unfulfillable && inventoryMessages[UNFULFILLABLE]; // If the `initialQuantity` changes, update the state. This typically happens
  // when either the master product changes, or the inventory of the product changes
  // from out-of-stock to in-stock or vice versa.

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);
  return {
    showLoading,
    showInventoryMessage,
    inventoryMessage,
    variationAttributes,
    quantity,
    minOrderQuantity,
    stepQuantity,
    variationParams,
    setQuantity,
    variant,
    stockLevel
  };
};

/***/ }),

/***/ "./app/hooks/use-search-params.js":
/*!****************************************!*\
  !*** ./app/hooks/use-search-params.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSearchParams": function() { return /* binding */ useSearchParams; },
/* harmony export */   "stringify": function() { return /* binding */ stringify; },
/* harmony export */   "parse": function() { return /* binding */ parse; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./app/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Constants


const PARSE_OPTIONS = {
  parseBooleans: true
};
/*
 * This hook will return all the location search params pertinant
 * to the product list page.
 */

const useSearchParams = (searchParams = _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_SEARCH_PARAMS) => {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(); // Encode the search query, including preset values.

  const searchParamsObject = _objectSpread(_objectSpread({}, searchParams), parse(search.substring(1)));

  return [searchParamsObject, {
    stringify,
    parse
  }];
};
/**
 * Encode's the provided search parameters object, paying special attention to ensure
 * that the child `refine` object is alway encoded correctly.
 *
 * @param {Object} searchParamsObj
 * @returns
 */

const stringify = searchParamsObj => {
  let searchParamsObjCopy = _objectSpread({}, searchParamsObj); // "stringify" the nested refinements


  searchParamsObjCopy.refine = Object.keys(searchParamsObjCopy.refine).map(key => query_string__WEBPACK_IMPORTED_MODULE_1__.stringify({
    [key]: searchParamsObjCopy.refine[key]
  }, {
    arrayFormat: 'separator',
    arrayFormatSeparator: '|',
    encode: false
  })); // "stringify" the entire object

  searchParamsObjCopy = query_string__WEBPACK_IMPORTED_MODULE_1__.stringify(searchParamsObjCopy);
  return searchParamsObjCopy;
};
/**
 * Decode's the provided query string representation of a search parameter object, paying
 * special attention to also decode the 'refine' object.
 *
 * @param {Object} searchParamsStr
 * @param {Boolean} parseRefine - opt out of parsing the inner refine object.
 * @returns
 */

const parse = (searchParamsStr, parseRefine = true) => {
  const params = query_string__WEBPACK_IMPORTED_MODULE_1__.parse(searchParamsStr, PARSE_OPTIONS); // Ensure the refinments is an array (make it easier to manipulate).

  params.refine = Array.isArray(params.refine) ? params.refine : [params.refine]; // Parse the nested refinement entries.

  if (parseRefine) {
    params.refine = params.refine.reduce((acc, curr) => {
      return _objectSpread(_objectSpread({}, acc), query_string__WEBPACK_IMPORTED_MODULE_1__.parse(curr, _objectSpread(_objectSpread({}, PARSE_OPTIONS), {}, {
        arrayFormat: 'separator',
        arrayFormatSeparator: '|'
      })));
    }, {});
  }

  return params;
};

/***/ }),

/***/ "./app/hooks/use-sort-urls.js":
/*!************************************!*\
  !*** ./app/hooks/use-sort-urls.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSortUrls": function() { return /* binding */ useSortUrls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/url */ "./app/utils/url.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Utils


/*
 * Generate a memoized list of page size urls. Chaning the page size will reset
 * the offset to zero to simplify things.
 */

const useSortUrls = ({
  options = []
}) => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.buildUrlSet)(`${location.pathname}${location.search}`, 'sort', options.map(({
    id
  }) => id), {
    offset: 0
  }), [location.pathname, location.search, options]);
};

/***/ }),

/***/ "./app/hooks/use-toast.js":
/*!********************************!*\
  !*** ./app/hooks/use-toast.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useToast": function() { return /* binding */ useToast; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/alert/dist/chakra-ui-alert.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/close-button/dist/chakra-ui-close-button.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


/**
 * Display a toast message on the screen.
 * This is a custom hook to handle showing toasts in the app, preventing duplicate toasts and to add action elements
 * to toasts when required. It supports all props supported by Chakra toast.
 *
 * @param {string} title Message text to be displayed in toast
 * @param {string} id - id provided to the toast to avoid duplicate toast ids, use it if multiple toasts are needed
 * @param {string} status Semantic state of the toast - success | error | info | warning
 * @param {node} action Optional component to be displayed in the toast (eg. Button to allow user to perform action)
 * @param {string} position The placement of the toast on screen
 * @param {number} duration The delay before the toast hides (in milliseconds)
 */

function useToast() {
  const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
  return ({
    title,
    status,
    action,
    position = 'top-right',
    duration = 5000,
    variant = 'subtle',
    isClosable = true
  }) => {
    let toastConfig = {
      title,
      status,
      isClosable,
      position,
      duration,
      variant
    };

    if (action) {
      toastConfig = _objectSpread(_objectSpread({}, toastConfig), {}, {
        /* eslint-disable-next-line react/display-name, react/prop-types */
        render: ({
          onClose
        }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Alert, {
          status: status,
          variant: "subtle",
          borderRadius: "md",
          py: 3,
          width: "sm"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertIcon, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertTitle, null, " ", title, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, null), action, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spacer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.CloseButton, {
          onClick: onClose
        }))
      });
    }

    toast(toastConfig);
  };
}

/***/ }),

/***/ "./app/hooks/use-variant.js":
/*!**********************************!*\
  !*** ./app/hooks/use-variant.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVariant": function() { return /* binding */ useVariant; }
/* harmony export */ });
/* harmony import */ var _use_variation_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-variation-params */ "./app/hooks/use-variation-params.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
// Hooks

/**
 * This hook returns the currently selected
 * variant or undefined. NOTE: All attributes must be selected before a variant
 * will be returned.
 *
 * @param {Object} product
 * @returns {Object} the currently selected `Variant` object.
 */

const useVariant = (product = {}) => {
  const {
    variants = []
  } = product;
  const variationParams = (0,_use_variation_params__WEBPACK_IMPORTED_MODULE_0__.useVariationParams)(product); // Get a filtered array of variants. The resulting array will only have variants
  // which have all the current variation params values set.

  const filteredVariants = variants.filter(({
    variationValues
  }) => // A single liner that will return true if the current variation has all the
  // same attribute values as the passing in params.
  Object.keys(variationParams).every(key => variationValues[key] === variationParams[key]));
  return filteredVariants.length === 1 ? filteredVariants[0] : undefined;
};

/***/ }),

/***/ "./app/hooks/use-variation-attributes.js":
/*!***********************************************!*\
  !*** ./app/hooks/use-variation-attributes.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVariationAttributes": function() { return /* binding */ useVariationAttributes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _use_variation_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-variation-params */ "./app/hooks/use-variation-params.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/url */ "./app/utils/url.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

 // Other Hooks

 // Utils


/**
 * Return the first image in the `swatch` type image group for a given
 * variation value of a product.
 *
 * @param {Object} product
 * @param {Object} variationValue
 * @returns {Object} image
 */

const getVariantValueSwatch = (product, variationValue) => {
  var _imageGroup$images;

  const {
    imageGroups = []
  } = product;
  const imageGroup = imageGroups.filter(({
    viewType
  }) => viewType === 'swatch').find(({
    variationAttributes = []
  }) => {
    const colorAttribute = variationAttributes.find(({
      id
    }) => id === 'color');
    const colorValues = (colorAttribute === null || colorAttribute === void 0 ? void 0 : colorAttribute.values) || []; // A single image can represent multiple variation values, so we only need
    // ensure the variation values appears in once of the images represented values.

    return colorValues.some(({
      value
    }) => value === variationValue.value);
  });
  return imageGroup === null || imageGroup === void 0 ? void 0 : (_imageGroup$images = imageGroup.images) === null || _imageGroup$images === void 0 ? void 0 : _imageGroup$images[0];
};
/**
 * Build a product href
 *
 * @param {Object} product
 * @param {Object} params
 * @param {Object} location
 * @returns {String} a product url for the current variation value.
 */


const buildVariantValueHref = (product, params, location) => {
  return (0,_utils_url__WEBPACK_IMPORTED_MODULE_3__.rebuildPathWithParams)(`${location.pathname}${location.search}`, params);
};
/**
 * Determine if a products variant attribute value is orderable without having to
 * load the variant in question, but filtering the list of variants with the
 * passed in attribute values.
 *
 * @param {Object} product
 * @param {Object} variationParams
 * @returns
 */


const isVariantValueOrderable = (product, variationParams) => {
  return product.variants.filter(({
    variationValues
  }) => Object.keys(variationParams).every(key => variationValues[key] === variationParams[key])).some(({
    orderable
  }) => orderable);
};
/**
 * Use a decorated version of a product variation attributes. This version
 * will have the following additions: which variation attribute is selected,
 * each value will have a product url, the swatch image if there is one, and
 * an updated orderable flag.
 *
 * @param {Object} product
 * @returns {Array} a decorated variation attributes list.
 *
 */


const useVariationAttributes = (product = {}) => {
  const {
    variationAttributes = []
  } = product;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
  const variationParams = (0,_use_variation_params__WEBPACK_IMPORTED_MODULE_2__.useVariationParams)(product);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => variationAttributes.map(variationAttribute => {
    var _variationAttribute$v;

    return _objectSpread(_objectSpread({}, variationAttribute), {}, {
      selectedValue: {
        name: (_variationAttribute$v = variationAttribute.values.find(({
          value
        }) => value === (variationParams === null || variationParams === void 0 ? void 0 : variationParams[variationAttribute.id]))) === null || _variationAttribute$v === void 0 ? void 0 : _variationAttribute$v.name,
        value: variationParams === null || variationParams === void 0 ? void 0 : variationParams[variationAttribute.id]
      },
      values: variationAttribute.values.map(value => {
        const params = _objectSpread(_objectSpread({}, variationParams), {}, {
          [variationAttribute.id]: value.value
        });

        return _objectSpread(_objectSpread({}, value), {}, {
          image: getVariantValueSwatch(product, value),
          href: buildVariantValueHref(product, params, location),
          orderable: isVariantValueOrderable(product, params)
        });
      })
    });
  }), [location.search, product]);
};

/***/ }),

/***/ "./app/hooks/use-variation-params.js":
/*!*******************************************!*\
  !*** ./app/hooks/use-variation-params.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVariationParams": function() { return /* binding */ useVariationParams; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/*
 * This hook will return only the params that are also product attributes for the
 * passed in product object.
 */

const useVariationParams = (product = {}) => {
  const {
    variationAttributes = [],
    variationValues = {}
  } = product;
  const variationParams = variationAttributes.map(({
    id
  }) => id);
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  const params = new URLSearchParams(search); // Using all the variation attribute id from the array generated above, get
  // the value if there is one from the location search params and add it to the
  // accumulator.

  const filteredVariationParams = variationParams.reduce((acc, key) => {
    let value = params.get(`${key}`) || (variationValues === null || variationValues === void 0 ? void 0 : variationValues[key]);
    return value ? _objectSpread(_objectSpread({}, acc), {}, {
      [key]: value
    }) : acc;
  }, {});
  return filteredVariationParams;
};

/***/ }),

/***/ "./app/hooks/use-wishlist.js":
/*!***********************************!*\
  !*** ./app/hooks/use-wishlist.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commerce_api_hooks_useCustomerProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commerce-api/hooks/useCustomerProductList */ "./app/commerce-api/hooks/useCustomerProductList.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const PWA_DEFAULT_WISHLIST_NAME = 'PWA wishlist';
const PWA_DEFAULT_WISHLIST_TYPE = 'wish_list';

const useWishlist = () => (0,_commerce_api_hooks_useCustomerProductList__WEBPACK_IMPORTED_MODULE_0__["default"])(PWA_DEFAULT_WISHLIST_NAME, PWA_DEFAULT_WISHLIST_TYPE);

/* harmony default export */ __webpack_exports__["default"] = (useWishlist);

/***/ }),

/***/ "./app/main.jsx":
/*!**********************!*\
  !*** ./app/main.jsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pwa_kit_react_sdk_ssr_browser_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pwa-kit-react-sdk/ssr/browser/main */ "./node_modules/pwa-kit-react-sdk/ssr/browser/main.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


const main = () => {
  return Promise.all([(0,pwa_kit_react_sdk_ssr_browser_main__WEBPACK_IMPORTED_MODULE_0__.start)(), (0,pwa_kit_react_sdk_ssr_browser_main__WEBPACK_IMPORTED_MODULE_0__.registerServiceWorker)('/worker.js')]);
};

main();

/***/ }),

/***/ "./app/pages/account/constant.js":
/*!***************************************!*\
  !*** ./app/pages/account/constant.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": function() { return /* binding */ messages; },
/* harmony export */   "navLinks": function() { return /* binding */ navLinks; },
/* harmony export */   "CONFIRMATION_DIALOG_DEFAULT_CONFIG": function() { return /* binding */ CONFIRMATION_DIALOG_DEFAULT_CONFIG; },
/* harmony export */   "REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG": function() { return /* binding */ REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG; }
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./app/utils/utils.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */



const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  profile: {
    id: "mYx8sv",
    defaultMessage: [{
      "type": 0,
      "value": "Account Details"
    }]
  },
  addresses: {
    id: "xBrtnx",
    defaultMessage: [{
      "type": 0,
      "value": "Addresses"
    }]
  },
  orders: {
    id: "XBfvKN",
    defaultMessage: [{
      "type": 0,
      "value": "Order History"
    }]
  },
  payments: {
    id: "xuTqgN",
    defaultMessage: [{
      "type": 0,
      "value": "Payment Methods"
    }]
  },
  wishlist: {
    id: "hp3uqR",
    defaultMessage: [{
      "type": 0,
      "value": "Wishlist"
    }]
  }
});
const navLinks = [{
  name: 'profile',
  path: '',
  icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.AccountIcon
}, {
  name: 'wishlist',
  path: '/wishlist',
  icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.HeartIcon
}, {
  name: 'orders',
  path: '/orders',
  icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.ReceiptIcon
}, {
  name: 'addresses',
  path: '/addresses',
  icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.LocationIcon
}, {
  name: 'payments',
  path: '/payments',
  icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.PaymentIcon
}];
const CONFIRMATION_DIALOG_DEFAULT_CONFIG = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessages)({
  dialogTitle: {
    id: "c+bH65",
    defaultMessage: [{
      "type": 0,
      "value": "Confirm Action"
    }]
  },
  confirmationMessage: {
    id: "Qm3TN9",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to continue ?"
    }]
  },
  primaryActionLabel: {
    id: "a5msuh",
    defaultMessage: [{
      "type": 0,
      "value": "Yes"
    }]
  },
  alternateActionLabel: {
    id: "oUWADl",
    defaultMessage: [{
      "type": 0,
      "value": "No"
    }]
  }
});
const REMOVE_CART_ITEM_CONFIRMATION_DIALOG_CONFIG = {
  dialogTitle: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
    id: "4UPOXx",
    defaultMessage: [{
      "type": 0,
      "value": "Confirm Remove Item"
    }]
  }),
  confirmationMessage: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
    id: "jAOn1A",
    defaultMessage: [{
      "type": 0,
      "value": "Are you sure you want to remove this item from your cart?"
    }]
  }),
  primaryActionLabel: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
    id: "dfEp3Z",
    defaultMessage: [{
      "type": 0,
      "value": "Yes, remove item"
    }]
  }),
  alternateActionLabel: (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.defineMessage)({
    id: "SRkOX8",
    defaultMessage: [{
      "type": 0,
      "value": "No, keep item"
    }]
  }),
  onPrimaryAction: _utils_utils__WEBPACK_IMPORTED_MODULE_1__.noop
};

/***/ }),

/***/ "./app/pages/checkout/partials/checkout-footer.jsx":
/*!*********************************************************!*\
  !*** ./app/pages/checkout/partials/checkout-footer.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/system/dist/chakra-ui-system.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _components_links_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/links-list */ "./app/components/links-list/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/* harmony import */ var _components_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/responsive */ "./app/components/responsive/index.jsx");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */








const CheckoutFooter = _ref => {
  let otherProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useMultiStyleConfig)('CheckoutFooter');
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "footer"
  }, styles.container, otherProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, styles.content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.StylesProvider, {
    value: styles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    links: [{
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.shipping",
        defaultMessage: [{
          "type": 0,
          "value": "Shipping"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.returns_exchanges",
        defaultMessage: [{
          "type": 0,
          "value": "Returns & Exchanges"
        }]
      })
    }]
  }, styles.customerService)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CreditCardIcons, {
    marginTop: 4,
    marginBottom: 4
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Divider, styles.horizontalRule), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, styles.bottomHalf, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, styles.copyright, "\xA9", ' ', intl.formatMessage({
    id: "footer.message.copyright",
    defaultMessage: [{
      "type": 0,
      "value": "2021 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed."
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnDesktop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LegalLinks, {
    variant: "vertical"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_responsive__WEBPACK_IMPORTED_MODULE_5__.HideOnMobile, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LegalLinks, {
    variant: "horizontal"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Spacer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(CreditCardIcons, null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutFooter);

const LegalLinks = ({
  variant
}) => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_links_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    links: [{
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.terms_conditions",
        defaultMessage: [{
          "type": 0,
          "value": "Terms & Conditions"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.privacy_policy",
        defaultMessage: [{
          "type": 0,
          "value": "Privacy Policy"
        }]
      })
    }, {
      href: '/',
      text: intl.formatMessage({
        id: "footer.link.site_map",
        defaultMessage: [{
          "type": 0,
          "value": "Site Map"
        }]
      })
    }],
    color: "gray.200",
    variant: variant
  });
};

LegalLinks.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['vertical', 'horizontal'])
};

const CreditCardIcons = props => {
  const styles = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useStyles)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    sizing: 2
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.VisaIcon, styles.creditCardIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.MastercardIcon, styles.creditCardIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.AmexIcon, styles.creditCardIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_4__.DiscoverIcon, styles.creditCardIcon));
};

/***/ }),

/***/ "./app/pages/checkout/partials/checkout-header.jsx":
/*!*********************************************************!*\
  !*** ./app/pages/checkout/partials/checkout-header.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/message.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../commerce-api/hooks/useBasket */ "./app/commerce-api/hooks/useBasket.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/link */ "./app/components/link/index.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/icons */ "./app/components/icons/index.jsx");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */







const CheckoutHeader = () => {
  const basket = (0,_commerce_api_hooks_useBasket__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    px: [4, 4, 8],
    bg: "white",
    borderBottom: "1px",
    borderColor: "gray.100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    maxWidth: "container.xxxl",
    marginLeft: "auto",
    marginRight: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    h: {
      base: '52px',
      md: '80px'
    },
    align: "center",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    title: "Back to homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_3__.BrandLogo, {
    width: {
      base: '35px',
      md: '45px'
    },
    height: {
      base: '24px',
      md: '32px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    as: _components_link__WEBPACK_IMPORTED_MODULE_2__["default"],
    href: "/cart",
    display: "inline-flex",
    variant: "unstyled",
    color: "gray.900",
    rightIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Center, {
      position: "relative",
      width: 11,
      height: 11
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icons__WEBPACK_IMPORTED_MODULE_3__.BasketIcon, {
      position: "absolute",
      left: "0px"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Badge, {
      variant: "notification"
    }, basket.itemAccumulatedCount))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "OVAmhz",
    defaultMessage: [{
      "type": 0,
      "value": "Back to cart"
    }]
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutHeader);

/***/ }),

/***/ "./app/routes.jsx":
/*!************************!*\
  !*** ./app/routes.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* istanbul ignore file */
// NOTE!
// This file is being ignored in the test coverage report for now. It reports `0%` functions
// tested, which brings down the overall coverage and blocks CI. There are tests still, but
// we don't want it to count toward coverage until we figure out how to cover the `functions`
// metric for this file in its test.

 // Components


const fallback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {
  height: "75vh",
  width: "100%"
}); // Pages

const Home = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-home";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-home */ "pages-home").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home */ "./app/pages/home/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/home */ "./app/pages/home/index.jsx");
    }

    return eval('require.resolve')("./pages/home");
  }

}, {
  fallback
});
const Login = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-login";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-login */ "pages-login").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login */ "./app/pages/login/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/login */ "./app/pages/login/index.jsx");
    }

    return eval('require.resolve')("./pages/login");
  }

}, {
  fallback
});
const Registration = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-registration";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-registration */ "pages-registration").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registration */ "./app/pages/registration/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/registration */ "./app/pages/registration/index.jsx");
    }

    return eval('require.resolve')("./pages/registration");
  }

}, {
  fallback
});
const ResetPassword = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-reset-password";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-reset-password */ "pages-reset-password").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reset-password */ "./app/pages/reset-password/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/reset-password */ "./app/pages/reset-password/index.jsx");
    }

    return eval('require.resolve')("./pages/reset-password");
  }

}, {
  fallback
});
const Account = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-account";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | pages-account */[__webpack_require__.e("vendor"), __webpack_require__.e("app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1"), __webpack_require__.e("app_partials_product-view_index_jsx"), __webpack_require__.e("app_components_order-summary_index_jsx"), __webpack_require__.e("app_components_confirmation-modal_index_jsx-app_components_product-item_index_jsx-app_compone-5d0c1c"), __webpack_require__.e("app_components_action-card_index_jsx-app_components_address-display_index_jsx-app_components_-47eafc"), __webpack_require__.e("pages-account-wishlist"), __webpack_require__.e("pages-account")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account */ "./app/pages/account/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/account */ "./app/pages/account/index.jsx");
    }

    return eval('require.resolve')("./pages/account");
  }

}, {
  fallback
});
const Cart = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-cart";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | pages-cart */[__webpack_require__.e("app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1"), __webpack_require__.e("app_partials_product-view_index_jsx"), __webpack_require__.e("app_components_order-summary_index_jsx"), __webpack_require__.e("app_components_confirmation-modal_index_jsx-app_components_product-item_index_jsx-app_compone-5d0c1c"), __webpack_require__.e("pages-cart")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cart */ "./app/pages/cart/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/cart */ "./app/pages/cart/index.jsx");
    }

    return eval('require.resolve')("./pages/cart");
  }

}, {
  fallback
});
const Checkout = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-checkout";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | pages-checkout */[__webpack_require__.e("vendor"), __webpack_require__.e("app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1"), __webpack_require__.e("app_components_order-summary_index_jsx"), __webpack_require__.e("app_components_action-card_index_jsx-app_components_address-display_index_jsx-app_components_-47eafc"), __webpack_require__.e("pages-checkout")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout */ "./app/pages/checkout/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/checkout */ "./app/pages/checkout/index.jsx");
    }

    return eval('require.resolve')("./pages/checkout");
  }

}, {
  fallback
});
const CheckoutConfirmation = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-checkout-confirmation";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | pages-checkout-confirmation */[__webpack_require__.e("app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1"), __webpack_require__.e("pages-checkout-confirmation")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/confirmation */ "./app/pages/checkout/confirmation.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/checkout/confirmation */ "./app/pages/checkout/confirmation.jsx");
    }

    return eval('require.resolve')("./pages/checkout/confirmation");
  }

}, {
  fallback
});
const LoginRedirect = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-login-redirect";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-login-redirect */ "pages-login-redirect").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-redirect */ "./app/pages/login-redirect/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/login-redirect */ "./app/pages/login-redirect/index.jsx");
    }

    return eval('require.resolve')("./pages/login-redirect");
  }

}, {
  fallback
});
const ProductDetail = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-product-detail";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | pages-product-detail */[__webpack_require__.e("app_partials_product-view_index_jsx"), __webpack_require__.e("pages-product-detail")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-detail */ "./app/pages/product-detail/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/product-detail */ "./app/pages/product-detail/index.jsx");
    }

    return eval('require.resolve')("./pages/product-detail");
  }

}, {
  fallback
});
const ProductList = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-product-list";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-product-list */ "pages-product-list").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-list */ "./app/pages/product-list/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/product-list */ "./app/pages/product-list/index.jsx");
    }

    return eval('require.resolve')("./pages/product-list");
  }

}, {
  fallback
});
const Wishlist = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-account-wishlist";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | pages-account-wishlist */[__webpack_require__.e("app_components_item-variant_item-attributes_jsx-app_components_item-variant_item-image_jsx-ap-c1a2e1"), __webpack_require__.e("app_partials_product-view_index_jsx"), __webpack_require__.e("app_components_confirmation-modal_index_jsx-app_components_product-item_index_jsx-app_compone-5d0c1c"), __webpack_require__.e("pages-account-wishlist")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/wishlist */ "./app/pages/account/wishlist/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/account/wishlist */ "./app/pages/account/wishlist/index.jsx");
    }

    return eval('require.resolve')("./pages/account/wishlist");
  }

}, {
  fallback
});
const PageNotFound = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "pages-page-not-found";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | pages-page-not-found */ "pages-page-not-found").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/page-not-found */ "./app/pages/page-not-found/index.jsx")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./pages/page-not-found */ "./app/pages/page-not-found/index.jsx");
    }

    return eval('require.resolve')("./pages/page-not-found");
  }

});
const routes = [{
  path: '/',
  component: Home,
  exact: true
}, {
  path: '/:locale',
  component: Home,
  exact: true
}, {
  path: '/:locale/login',
  component: Login,
  exact: true
}, {
  path: '/:locale/registration',
  component: Registration,
  exact: true
}, {
  path: '/:locale/reset-password',
  component: ResetPassword,
  exact: true
}, {
  path: '/:locale/account',
  component: Account
}, {
  path: '/:locale/checkout',
  component: Checkout,
  exact: true
}, {
  path: '/:locale/checkout/confirmation',
  component: CheckoutConfirmation,
  exact: true
}, {
  path: '/callback',
  component: LoginRedirect,
  exact: true
}, {
  path: '/:locale/cart',
  component: Cart,
  exact: true
}, {
  path: '/:locale/product/:productId',
  component: ProductDetail
}, {
  path: '/:locale/search',
  component: ProductList
}, {
  path: '/:locale/category/:categoryId',
  component: ProductList
}, {
  path: '/:locale/account/wishlist',
  component: Wishlist
}, {
  path: '*',
  component: PageNotFound
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./app/theme/components/base/accordion.js":
/*!************************************************!*\
  !*** ./app/theme/components/base/accordion.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    button: {
      paddingLeft: 0,
      _hover: {
        background: 'none'
      }
    },
    panel: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/alert.js":
/*!********************************************!*\
  !*** ./app/theme/components/base/alert.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  variants: {
    subtle: props => ({
      container: {
        borderColor: `${props.colorScheme || 'green'}.600`,
        borderWidth: 1,
        borderStyle: 'solid'
      }
    })
  }
});

/***/ }),

/***/ "./app/theme/components/base/badge.js":
/*!********************************************!*\
  !*** ./app/theme/components/base/badge.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  variants: {
    notification: {
      display: 'inline-flex',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      width: 5,
      height: 5,
      color: 'white',
      fontSize: 'xs',
      backgroundColor: 'blue.500',
      border: '1px solid',
      borderColor: 'white',
      borderRadius: 'full'
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/button.js":
/*!*********************************************!*\
  !*** ./app/theme/components/base/button.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    borderRadius: 'base'
  },
  variants: {
    solid: props => props.colorScheme === 'blue' ? {
      backgroundColor: 'blue.600',
      color: 'white',
      _hover: {
        bg: 'blue.700',
        _disabled: {
          bg: 'blue.300'
        }
      },
      _active: {
        bg: 'blue.800'
      },
      _disabled: {
        bg: 'blue.300'
      }
    } : {},
    outline: props => props.colorScheme === 'black' ? {
      color: 'gray.900',
      _hover: {
        bg: 'gray.50'
      },
      borderColor: 'gray.200'
    } : {
      color: 'blue.600',
      _hover: {
        bg: 'gray.50'
      }
    },
    footer: {
      fontSize: 'sm',
      backgroundColor: 'gray.100',
      color: 'black',
      _hover: {
        bg: 'gray.200'
      },
      _active: {
        bg: 'gray.300'
      },
      paddingLeft: 3,
      paddingRight: 3
    },
    link: props => ({
      color: props.colorScheme === 'red' ? 'red.500' : 'blue.600',
      fontWeight: 'normal',
      minWidth: '1em',
      lineHeight: 4
    }),
    'menu-link': {
      color: 'black',
      justifyContent: 'flex-start',
      fontSize: 'sm',
      _hover: {
        bg: 'gray.50',
        textDecoration: 'none'
      },
      _activeLink: {
        bg: 'gray.50',
        textDecoration: 'none'
      }
    },
    'menu-link-mobile': {
      color: 'black',
      justifyContent: 'flex-start',
      fontSize: 'sm',
      _hover: {
        bg: 'gray.50',
        textDecoration: 'none'
      },
      _activeLink: {
        bg: 'gray.100',
        textDecoration: 'none'
      }
    },
    'search-link': {
      color: 'black',
      justifyContent: 'flex-start',
      fontSize: 'sm',
      _hover: {
        textDecoration: 'none'
      }
    }
  },
  sizes: {
    md: {
      height: 11,
      minWidth: 11
    }
  },
  defaultProps: {
    colorScheme: 'blue'
  }
});

/***/ }),

/***/ "./app/theme/components/base/checkbox.js":
/*!***********************************************!*\
  !*** ./app/theme/components/base/checkbox.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      style: {
        alignItems: 'baseline'
      }
    },
    label: {
      width: 'full'
    },
    control: {
      marginTop: '2px',
      _checked: {
        backgroundColor: 'blue.600',
        borderColor: 'blue.600',
        _hover: {
          bg: 'blue.700',
          borderColor: 'blue.700'
        }
      }
    }
  },
  sizes: {
    md: {
      label: {
        fontSize: 'sm'
      }
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/container.js":
/*!************************************************!*\
  !*** ./app/theme/components/base/container.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    maxWidth: 'container.xxl'
  },
  variants: {
    form: {
      maxWidth: '522px',
      px: 0
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/drawer.js":
/*!*********************************************!*\
  !*** ./app/theme/components/base/drawer.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    header: {
      paddingTop: 1,
      paddingRight: [4, 4, 6, 6],
      paddingBottom: 1,
      paddingLeft: [4, 4, 6, 6],
      boxShadow: 'base'
    },
    body: {
      padding: [4, 4, 6, 6]
    },
    footer: {
      paddingTop: 6,
      paddingRight: [4, 4, 6, 6],
      paddingBottom: 11,
      paddingLest: [4, 4, 6, 6]
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/formLabel.js":
/*!************************************************!*\
  !*** ./app/theme/components/base/formLabel.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    marginBottom: 1,
    fontSize: 'sm',
    fontWeight: 'semibold'
  }
});

/***/ }),

/***/ "./app/theme/components/base/icon.js":
/*!*******************************************!*\
  !*** ./app/theme/components/base/icon.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    boxSize: 6
  }
});

/***/ }),

/***/ "./app/theme/components/base/input.js":
/*!********************************************!*\
  !*** ./app/theme/components/base/input.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const mdSize = {
  height: 11,
  borderRadius: 'base'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  sizes: {
    md: {
      field: _objectSpread(_objectSpread({}, mdSize), {}, {
        px: 3
      }),
      addon: mdSize
    }
  },
  baseStyle: {
    field: {
      _focus: {
        borderColor: 'blue.600'
      }
    }
  },
  variants: {
    filled: {
      // we use filled variant for
      // search input
      field: {
        backgroundColor: 'gray.50',
        _focus: {
          backgroundColor: 'white'
        },
        _hover: {
          backgroundColor: 'gray.100',
          _focus: {
            backgroundColor: 'white'
          }
        },
        _placeholder: {
          color: 'gray.700'
        }
      }
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/modal.js":
/*!********************************************!*\
  !*** ./app/theme/components/base/modal.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    dialog: {
      borderRadius: 'base'
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/popover.js":
/*!**********************************************!*\
  !*** ./app/theme/components/base/popover.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  parts: ['popper'],
  baseStyle: {
    popper: {
      borderColor: 'transparent',
      borderRadius: 'base',
      boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.25)'
    }
  },
  variants: {
    small: {},
    normal: {
      popper: {
        width: 286
      },
      header: {
        textAlign: 'left',
        fontWeight: 700,
        borderBottom: 'none',
        fontSize: 18,
        px: 7,
        paddingTop: 6
      },
      footer: {
        textAlign: 'left',
        fontSize: 14,
        px: 3,
        borderTop: 'none'
      },
      content: {
        width: 286
      },
      body: {
        py: 0
      }
    },
    fullWidth: {
      popper: {
        width: '100%',
        maxWidth: '100%',
        boxShadow: 'none',
        top: '0',
        right: 'auto',
        bottom: 'auto',
        left: '0'
      },
      content: {
        width: 'auto'
      }
    }
  },
  defaultProps: {
    variant: 'normal'
  }
});

/***/ }),

/***/ "./app/theme/components/base/radio.js":
/*!********************************************!*\
  !*** ./app/theme/components/base/radio.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      display: 'flex'
    },
    label: {
      width: 'full'
    },
    control: {
      backgroundColor: 'white',
      _checked: {
        backgroundColor: 'blue.600',
        borderColor: 'blue.600',
        _hover: {
          backgroundColor: 'blue.700',
          borderColor: 'blue.700'
        }
      },
      _indeterminate: {}
    }
  },
  sizes: {
    md: {
      container: {
        alignItems: 'flex-start'
      },
      control: {
        marginTop: '0.25em'
      },
      label: {
        marginLeft: 3
      }
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/select.js":
/*!*********************************************!*\
  !*** ./app/theme/components/base/select.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const mdSize = {
  height: 11,
  h: 11,
  borderRadius: 'base'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  sizes: {
    md: {
      field: mdSize
    }
  }
});

/***/ }),

/***/ "./app/theme/components/base/skeleton.js":
/*!***********************************************!*\
  !*** ./app/theme/components/base/skeleton.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    borderRadius: 'base',
    opacity: 0.3
  }
});

/***/ }),

/***/ "./app/theme/components/base/tooltip.js":
/*!**********************************************!*\
  !*** ./app/theme/components/base/tooltip.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    '--tooltip-bg': `colors.blue.800`,
    px: 2,
    py: 2,
    bg: 'var(--tooltip-bg)',
    '--popper-arrow-bg': 'var(--tooltip-bg)',
    color: 'whiteAlpha.900',
    borderRadius: 'base',
    maxW: '280px',
    lineHeight: '1.5em'
  }
});

/***/ }),

/***/ "./app/theme/components/project/_app.js":
/*!**********************************************!*\
  !*** ./app/theme/components/project/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme */ "./node_modules/@chakra-ui/theme/dist/chakra-ui-theme.esm.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      minWidth: '375px'
    },
    headerWrapper: {
      position: 'sticky',
      top: 0,
      zIndex: _chakra_ui_theme__WEBPACK_IMPORTED_MODULE_0__["default"].zIndices.sticky
    }
  },
  parts: ['container']
});

/***/ }),

/***/ "./app/theme/components/project/breadcrumb.js":
/*!****************************************************!*\
  !*** ./app/theme/components/project/breadcrumb.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      minHeight: 4,
      fontSize: 'sm'
    },
    icon: {
      display: 'flex',
      boxSize: 4,
      color: 'grey'
    },
    link: {
      paddingTop: 3,
      paddingBottom: 3
    }
  },
  parts: ['container', 'icon', 'link']
});

/***/ }),

/***/ "./app/theme/components/project/checkout-footer.js":
/*!*********************************************************!*\
  !*** ./app/theme/components/project/checkout-footer.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./app/theme/components/project/footer.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const {
  baseStyle
} = _footer__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  parts: ['container', 'content', 'horizontalRule', 'bottomHalf', 'copyright', 'creditCardIcon', 'customerService'],
  baseStyle: {
    container: baseStyle.container,
    content: baseStyle.content,
    horizontalRule: baseStyle.horizontalRule,
    bottomHalf: baseStyle.bottomHalf,
    copyright: baseStyle.copyright,
    creditCardIcon: {
      width: '38px',
      height: '22px'
    },
    customerService: {
      marginBottom: 6
    }
  }
});

/***/ }),

/***/ "./app/theme/components/project/drawer-menu.js":
/*!*****************************************************!*\
  !*** ./app/theme/components/project/drawer-menu.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {},
    socialsContainer: {
      flex: 1,
      justifyContent: 'flex-start'
    },
    icon: {
      color: 'gray.900',
      width: 5,
      height: 5
    },
    logo: {
      width: 12,
      height: 8
    },
    socialsItem: {
      textAlign: 'center',
      paddingLeft: 2,
      paddingRight: 2
    },
    actions: {
      paddingLeft: 4,
      paddingRight: 4
    },
    actionsItem: {
      paddingTop: 3,
      paddingBottom: 3
    },
    localeSelector: {
      paddingTop: 1,
      paddingBottom: 1
    },
    signout: {
      width: '100%',
      paddingLeft: 8,
      paddingTop: 2,
      paddingBottom: 2,
      _focus: {
        borderRadius: 0,
        boxShadow: 'outline'
      }
    },
    signoutText: {
      marginLeft: 2,
      fontSize: 14,
      fontWeight: 'normal'
    }
  },
  parts: ['actions', 'actionsItem', 'container', 'icon', 'localeSelector', 'socials', 'socialsItem', 'signout']
});

/***/ }),

/***/ "./app/theme/components/project/footer.js":
/*!************************************************!*\
  !*** ./app/theme/components/project/footer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  parts: ['container', 'content', 'subscribe', 'subscribeField', 'subscribeButtonContainer', 'subscribeHeading', 'subscribeMessage', 'localeSelector', 'bottomHalf', 'horizontalRule', 'copyright', 'socialIcons'],
  baseStyle: {
    container: {
      width: 'full',
      background: 'gray.900'
    },
    content: {
      maxWidth: 'container.xxl',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'white',
      paddingTop: {
        base: 8,
        lg: 10
      },
      paddingBottom: 8,
      paddingLeft: [4, 4, 6, 8],
      paddingRight: [4, 4, 6, 8]
    },
    subscribe: {
      maxWidth: {
        base: '21.5rem',
        lg: 'none'
      }
    },
    subscribeField: {
      background: 'white',
      color: 'gray.900'
    },
    subscribeButtonContainer: {
      width: 'auto'
    },
    subscribeHeading: {
      fontSize: 'md',
      marginBottom: 2
    },
    subscribeMessage: {
      fontSize: 'sm',
      marginBottom: 4
    },
    localeSelector: {
      display: 'inline-block',
      marginTop: 8,
      marginBottom: 5
    },
    localeDropdown: {
      background: 'gray.800',
      _hover: {
        background: 'whiteAlpha.500'
      }
    },
    bottomHalf: {
      maxWidth: {
        base: '34.5rem',
        lg: '100%'
      }
    },
    horizontalRule: {
      marginBottom: 4
    },
    copyright: {
      fontSize: 'sm',
      marginBottom: 6,
      color: 'gray.50'
    },
    socialIcons: {
      marginTop: 4
    }
  }
});

/***/ }),

/***/ "./app/theme/components/project/header.js":
/*!************************************************!*\
  !*** ./app/theme/components/project/header.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      height: 'full',
      minWidth: 'xs',
      width: 'full',
      boxShadow: 'base',
      backgroundColor: 'white'
    },
    content: {
      maxWidth: 'container.xxxl',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: [4, 4, 6, 8],
      paddingRight: [4, 4, 6, 8],
      paddingTop: [1, 1, 2, 4],
      paddingBottom: [3, 3, 2, 4]
    },
    searchContainer: {
      order: [2, 2, 2, 'inherit'],
      width: ['full', 'full', 'full', 60],
      marginRight: [0, 0, 0, 4],
      marginBottom: [1, 1, 2, 0]
    },
    bodyContainer: {
      flex: '1'
    },
    logo: {
      width: [8, 8, 8, 12],
      height: [6, 6, 6, 8]
    },
    icons: {
      marginBottom: [1, 1, 2, 0]
    },
    accountIcon: {
      height: 11,
      cursor: 'pointer',
      alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
      _focus: {
        boxShadow: 'outline'
      },
      _focusVisible: {
        outline: 0
      }
    },
    arrowDown: {
      height: 11,
      marginRight: 0,
      alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
      cursor: 'pointer',
      _focus: {
        boxShadow: 'outline'
      },
      _focusVisible: {
        outline: 0
      },
      display: ['none', 'none', 'none', 'block']
    },
    signout: {
      width: '100%',
      borderRadius: '4px',
      height: 11,
      padding: 4,
      py: 3,
      marginTop: 1,
      _hover: {
        background: 'gray.50'
      }
    },
    signoutText: {
      fontSize: 'sm',
      fontWeight: 'normal'
    },
    signoutIcon: {
      marginRight: 2
    }
  },
  parts: ['container', 'content', 'searchContainer', 'bodyContainer', 'logo', 'icons', 'signout']
});

/***/ }),

/***/ "./app/theme/components/project/image-gallery.js":
/*!*******************************************************!*\
  !*** ./app/theme/components/project/image-gallery.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {},
    heroImage: {},
    heroImageGroup: {
      marginBottom: 2
    },
    heroImageSkeleton: {
      marginBottom: 2
    },
    thumbnailImageGroup: {},
    thumbnailImageItem: {
      flexShrink: 0,
      cursor: 'pointer',
      flexBasis: [20, 20, 24],
      borderStyle: 'solid',
      marginBottom: [1, 1, 2, 2],
      marginRight: [1, 1, 2, 2],
      _focus: {
        boxShadow: 'outline'
      },
      _focusVisible: {
        outline: 0
      }
    },
    thumbnailImageSkeleton: {
      marginRight: 2,
      width: [20, 20, 24, 24]
    }
  },
  sizes: {
    sm: {
      heroImageSkeleton: {
        maxWidth: ['none', 'none', 'none', '500px']
      },
      heroImage: {
        maxWidth: ['none', 'none', 'none', '500px']
      }
    },
    md: {
      heroImageSkeleton: {
        maxWidth: ['none', 'none', 'none', '680px']
      },
      heroImage: {
        maxWidth: ['none', 'none', 'none', '680px']
      }
    }
  },
  defaultProps: {
    size: 'md'
  },
  parts: ['container', 'heroImageGroup', 'heroImage', 'heroImageSkeleton', 'thumbnailImageGroup']
});

/***/ }),

/***/ "./app/theme/components/project/links-list.js":
/*!****************************************************!*\
  !*** ./app/theme/components/project/links-list.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  parts: ['container', 'list', 'listItem', 'listItemSx', 'heading'],
  baseStyle: {
    container: {
      color: 'white'
    },
    list: {
      fontSize: 'sm'
    },
    headingLink: {
      display: 'inline-flex'
    },
    heading: {
      fontSize: 'md',
      paddingTop: 3,
      paddingBottom: 3
    }
  },
  variants: {
    vertical: {},
    horizontal: {
      listItem: {
        borderLeft: '1px solid',
        paddingLeft: 2
      },
      listItemSx: {
        '&:first-of-type': {
          borderLeft: 0,
          paddingLeft: 0
        }
      }
    }
  },
  defaultProps: {
    variant: 'vertical'
  }
});

/***/ }),

/***/ "./app/theme/components/project/list-menu.js":
/*!***************************************************!*\
  !*** ./app/theme/components/project/list-menu.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      minWidth: 'xs',
      width: 'full',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 4,
      display: {
        base: 'none',
        lg: 'flex'
      }
    },
    stackContainer: {
      whiteSpace: 'nowrap',
      flexWrap: 'wrap'
    },
    popoverContent: {
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 0,
      boxShadow: 'xl',
      paddingTop: 3,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      minWidth: '100%',
      borderRadius: 0,
      position: 'absolute'
    },
    popoverContainer: {
      paddingTop: 0,
      paddingBottom: 8,
      maxWidth: 'container.xxxl'
    },
    listMenuTriggerContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    listMenuTriggerLink: {
      display: 'block',
      whiteSpace: 'nowrap',
      position: 'relative',
      paddingTop: 3,
      paddingRight: 1,
      paddingBottom: 2,
      paddingLeft: 1,
      marginLeft: 3,
      fontSize: 'md',
      fontWeight: 700,
      color: 'gray.900',
      _hover: {
        textDecoration: 'none'
      }
    },
    listMenuTriggerLinkWithIcon: {
      marginRight: 3
    },
    listMenuTriggerLinkActive: {
      textDecoration: 'none',
      _before: {
        position: 'absolute',
        backgroundColor: 'black',
        content: 'attr(name)',
        height: '2px',
        color: 'transparent',
        bottom: '0px'
      }
    },
    listMenuTriggerLinkIcon: {
      marginTop: 3,
      marginRight: 3,
      marginBottom: 2,
      marginLeft: 0,
      _hover: {
        textDecoration: 'none'
      }
    }
  },
  parts: ['container', 'stackContainer', 'popoverContent', 'popoverContainer', 'listMenuTriggerContainer', 'listMenuTriggerLink', 'listMenuTriggerLinkActive', 'listMenuTriggerIcon']
});

/***/ }),

/***/ "./app/theme/components/project/locale-selector.js":
/*!*********************************************************!*\
  !*** ./app/theme/components/project/locale-selector.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    accordion: {},
    container: {},
    selectedButtonIcon: {
      color: 'grey'
    },
    selectedButton: {
      paddingLeft: 0
    },
    selectedText: {
      flex: '1',
      textAlign: 'left',
      paddingLeft: 2
    },
    selectedIcon: {
      color: 'blue.600'
    },
    optionButton: {
      paddingLeft: 2
    },
    optionText: {
      paddingLeft: 2,
      paddingRight: 4,
      textAlign: 'left'
    }
  },
  parts: ['accordion', 'container', 'selectedButton', 'selectedText', 'optionButton', 'optionText']
});

/***/ }),

/***/ "./app/theme/components/project/nested-accordion.js":
/*!**********************************************************!*\
  !*** ./app/theme/components/project/nested-accordion.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {},
    nestedAccordion: {
      paddingLeft: 4
    },
    internalButton: {},
    internalButtonIcon: {
      color: 'grey',
      marginRight: 2
    },
    leafButton: {
      color: 'black',
      paddingLeft: 8,
      paddingTop: 2,
      paddingBottom: 2
    }
  },
  parts: ['container', 'nestedAccordion', 'internalButton', 'leafButtonIcon', 'leafButton']
});

/***/ }),

/***/ "./app/theme/components/project/offline-banner.js":
/*!********************************************************!*\
  !*** ./app/theme/components/project/offline-banner.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: [4, 4, 6, 6, 8],
      paddingRight: [4, 4, 6, 6, 8]
    },
    icon: {
      height: 5,
      width: 5
    },
    message: {
      paddingLeft: 2,
      fontWeight: 700
    }
  },
  parts: ['container', 'icon', 'message']
});

/***/ }),

/***/ "./app/theme/components/project/pagination.js":
/*!****************************************************!*\
  !*** ./app/theme/components/project/pagination.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    button: {
      color: 'black'
    },
    container: {},
    text: {
      whiteSpace: 'nowrap',
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 2,
      paddingBottom: 2
    }
  },
  parts: ['button', 'container', 'text']
});

/***/ }),

/***/ "./app/theme/components/project/product-tile.js":
/*!******************************************************!*\
  !*** ./app/theme/components/project/product-tile.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: () => ({
    container: {},
    favIcon: {
      position: 'absolute',
      variant: 'unstyled',
      top: 2,
      right: 2
    },
    imageWrapper: {
      position: 'relative',
      marginBottom: 2
    },
    image: {
      ratio: 1,
      paddingBottom: 2
    },
    price: {},
    title: {
      fontWeight: 600
    },
    rating: {},
    variations: {}
  }),
  parts: ['container', 'imageWrapper', 'image', 'price', 'title', 'rating', 'variations']
});

/***/ }),

/***/ "./app/theme/components/project/social-icons.js":
/*!******************************************************!*\
  !*** ./app/theme/components/project/social-icons.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: {
    container: {
      flex: 1
    },
    icon: {
      width: 5,
      height: 5
    },
    item: {
      textAlign: 'center',
      paddingLeft: 2,
      paddingRight: 2
    }
  },
  variants: {
    'flex-start': {
      container: {
        justifyContent: 'flex-start'
      },
      item: {
        flex: 0
      }
    },
    'flex-end': {
      container: {
        justifyContent: 'flex-end'
      },
      item: {
        flex: 0
      }
    },
    flex: {
      container: {
        justifyContent: 'center'
      },
      item: {
        flex: 1
      }
    }
  },
  parts: ['container', 'item', 'icon'],
  defaultProps: {
    variant: 'flex-start'
  }
});

/***/ }),

/***/ "./app/theme/components/project/swatch-group.js":
/*!******************************************************!*\
  !*** ./app/theme/components/project/swatch-group.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  baseStyle: () => ({
    swatchGroup: {
      flexDirection: 'column '
    },
    swatchLabel: {
      marginBottom: 3
    },
    swatch: {
      position: 'relative',
      backgroundColor: 'white',
      _focus: {
        outline: 'none',
        boxShadow: 'outline'
      }
    },
    swatchesWrapper: {
      flexWrap: 'wrap'
    },
    swatchButton: {
      borderColor: 'gray.200',
      _disabled: {
        opacity: 1
      }
    }
  }),
  variants: {
    circle: props => ({
      swatch: {
        height: 11,
        width: 11,
        borderRadius: 'full',
        padding: 1,
        cursor: 'pointer',
        marginRight: 2,
        marginLeft: 0,
        marginBottom: 2,
        color: `${props.selected ? 'black' : 'gray.200'}`,
        border: `${props.selected ? '1px' : '0'}`,
        _hover: {
          borderColor: `${props.selected ? 'black' : 'gray.200'}`,
          borderWidth: 1,
          borderStyle: 'solid'
        },
        _active: {
          background: 'transparent'
        },
        _before: {
          content: '""',
          display: `${props.disabled ? 'block' : 'none'}`,
          position: 'absolute',
          height: 11,
          width: '1px',
          transform: 'rotate(45deg)',
          backgroundColor: 'black',
          zIndex: 1
        }
      },
      swatchButton: {
        height: 8,
        borderColor: 'gray.200',
        width: 8,
        overflow: 'hidden',
        borderRadius: 'full',
        minWidth: 'auto',
        opacity: 1,
        _focus: {
          outline: 'none'
        }
      }
    }),
    square: props => ({
      swatch: {
        marginRight: 2,
        // diagonal line for disabled options
        // theme variable like gray.200 won't work inside linear-gradient
        backgroundImage: `${props.disabled ? `${props.selected ? 'linear-gradient(to top left, transparent calc(50% - 1px), black, transparent calc(50% + 1px) )' : 'linear-gradient(to top left, white calc(50% - 1px), #c9c9c9, white calc(50% + 1px) )'} ` : ''}`,
        borderColor: `${props.selected ? 'black' : 'gray.200'}`,
        borderStyle: 'solid',
        borderWidth: 1,
        paddingLeft: 3,
        paddingRight: 3,
        marginBottom: 2,
        _focus: {
          outline: 'none'
        },
        _hover: {
          textDecoration: 'none',
          borderColor: 'gray.900'
        },
        _active: {
          borderColor: 'gray.900'
        },
        backgroundColor: `${props.selected ? props.disabled ? 'gray.100' : 'black' : 'white'}`,
        color: `${props.selected && !props.disabled ? 'white' : 'gray.900'}`
      },
      swatchButton: {}
    })
  },
  parts: ['swatch', 'swatchItem']
});

/***/ }),

/***/ "./app/theme/foundations/colors.js":
/*!*****************************************!*\
  !*** ./app/theme/foundations/colors.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#FFFFFF',
  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)'
  },
  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)'
  },
  gray: {
    50: '#F3F3F3',
    100: '#E5E5E5',
    200: '#C9C9C9',
    300: '#AEAEAE',
    400: '#A0A0A0',
    500: '#939393',
    600: '#747474',
    700: '#5C5C5C',
    800: '#444444',
    900: '#181818'
  },
  red: {
    50: '#FEF1EE',
    100: '#FEDED8',
    200: '#FEB8AB',
    300: '#FE8F7D',
    400: '#FE7765',
    500: '#FE5C4C',
    600: '#EA001E',
    700: '#BA0517',
    800: '#8E030F',
    900: '#640103'
  },
  orange: {
    50: '#FEF1ED',
    100: '#FFDED5',
    200: '#FEB9A5',
    300: '#FF906E',
    400: '#FF784F',
    500: '#FF5D2D',
    600: '#D83A00',
    700: '#AA3001',
    800: '#7E2600',
    900: '#541D01'
  },
  yellow: {
    50: '#FBF3E0',
    100: '#F9E3B6',
    200: '#FCC003',
    300: '#E4A201',
    400: '#D79304',
    500: '#CA8501',
    600: '#A86403',
    700: '#8C4B02',
    800: '#6F3400',
    900: '#4F2100'
  },
  green: {
    50: '#EBF7E6',
    100: '#CDEFC4',
    200: '#91DB8B',
    300: '#45C65A',
    400: '#41B658',
    500: '#3BA755',
    600: '#2E844A',
    700: '#22683E',
    800: '#194E31',
    900: '#0E3522'
  },
  teal: {
    50: '#DEF9F3',
    100: '#ACF3E4',
    200: '#04E1CB',
    300: '#01C3B3',
    400: '#03B4A7',
    500: '#06A59A',
    600: '#0B827C',
    700: '#056764',
    800: '#024D4C',
    900: '#023434'
  },
  blue: {
    50: '#EEF4FF',
    100: '#D8E6FE',
    200: '#AACBFF',
    300: '#78B0FD',
    400: '#57A3FD',
    500: '#1B96FF',
    600: '#0176D3',
    700: '#0B5CAB',
    800: '#014486',
    900: '#032D60'
  },
  cyan: {
    50: '#EAF5FE%',
    100: '#CFE9FE',
    200: '#90D0FE',
    300: '#1AB9FF',
    400: '#08ABED',
    500: '#0D9DDA',
    600: '#107CAD',
    700: '#05628A',
    800: '#084968',
    900: '#023248'
  },
  purple: {
    50: '#F6F2FB',
    100: '#ECE1F9',
    200: '#D78FF5',
    300: '#C29EF1',
    400: '#B78DEF',
    500: '#AD7BEE',
    600: '#9050E9',
    700: '#7526E3',
    800: '#5A1BA9',
    900: '#401075'
  },
  pink: {
    50: '#F9F0FF',
    100: '#F2DEFE',
    200: '#E5B9FE',
    300: '#D892FE',
    400: '#D17DFE',
    500: '#CB65FF',
    600: '#BA01FF',
    700: '#9602C7',
    800: '#730394',
    900: '#520066'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./app/theme/foundations/gradients.js":
/*!********************************************!*\
  !*** ./app/theme/foundations/gradients.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  imageBackground: 'linear(270deg, #E6E5EA, #EEEEEE)'
});

/***/ }),

/***/ "./app/theme/foundations/layerStyles.js":
/*!**********************************************!*\
  !*** ./app/theme/foundations/layerStyles.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const card = {
  py: 6,
  px: 4,
  backgroundColor: 'white',
  rounded: 'base',
  boxShadow: 'base'
};

const cardBordered = _objectSpread(_objectSpread({}, card), {}, {
  px: [4, 4, 5, 6],
  border: '1px solid',
  borderColor: 'gray.50'
});

/* harmony default export */ __webpack_exports__["default"] = ({
  card,
  cardBordered,
  ccIcon: {
    width: '34px',
    height: '22px'
  },
  page: {
    px: [4, 4, 6, 6, 8],
    paddingTop: [4, 4, 6, 6, 8],
    paddingBottom: 32,
    width: '100%',
    maxWidth: 'container.xxxl',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

/***/ }),

/***/ "./app/theme/foundations/shadows.js":
/*!******************************************!*\
  !*** ./app/theme/foundations/shadows.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  top: '0px -1px 3px rgba(0, 0, 0, 0.1), 0px -1px 2px rgba(0, 0, 0, 0.06)'
});

/***/ }),

/***/ "./app/theme/foundations/sizes.js":
/*!****************************************!*\
  !*** ./app/theme/foundations/sizes.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  11: '2.75rem',
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1440px',
    xxxl: '1560px'
  }
});

/***/ }),

/***/ "./app/theme/foundations/space.js":
/*!****************************************!*\
  !*** ./app/theme/foundations/space.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  11: '2.75rem'
});

/***/ }),

/***/ "./app/theme/foundations/styles.js":
/*!*****************************************!*\
  !*** ./app/theme/foundations/styles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  global: {
    'html, body': {
      backgroundColor: 'white',
      color: 'gray.900'
    },
    body: {
      minHeight: '100vh'
    },
    '.react-target': {
      display: 'flex',
      minHeight: '100vh'
    }
  }
});

/***/ }),

/***/ "./app/theme/index.js":
/*!****************************!*\
  !*** ./app/theme/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");
/* harmony import */ var _foundations_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundations/styles */ "./app/theme/foundations/styles.js");
/* harmony import */ var _foundations_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundations/colors */ "./app/theme/foundations/colors.js");
/* harmony import */ var _foundations_gradients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundations/gradients */ "./app/theme/foundations/gradients.js");
/* harmony import */ var _foundations_sizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundations/sizes */ "./app/theme/foundations/sizes.js");
/* harmony import */ var _foundations_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundations/space */ "./app/theme/foundations/space.js");
/* harmony import */ var _foundations_layerStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundations/layerStyles */ "./app/theme/foundations/layerStyles.js");
/* harmony import */ var _foundations_shadows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundations/shadows */ "./app/theme/foundations/shadows.js");
/* harmony import */ var _components_base_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/base/alert */ "./app/theme/components/base/alert.js");
/* harmony import */ var _components_base_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/base/accordion */ "./app/theme/components/base/accordion.js");
/* harmony import */ var _components_base_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/base/badge */ "./app/theme/components/base/badge.js");
/* harmony import */ var _components_base_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/base/button */ "./app/theme/components/base/button.js");
/* harmony import */ var _components_base_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/base/checkbox */ "./app/theme/components/base/checkbox.js");
/* harmony import */ var _components_base_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/base/container */ "./app/theme/components/base/container.js");
/* harmony import */ var _components_base_drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/base/drawer */ "./app/theme/components/base/drawer.js");
/* harmony import */ var _components_base_formLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/base/formLabel */ "./app/theme/components/base/formLabel.js");
/* harmony import */ var _components_base_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/base/icon */ "./app/theme/components/base/icon.js");
/* harmony import */ var _components_base_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/base/input */ "./app/theme/components/base/input.js");
/* harmony import */ var _components_base_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/base/modal */ "./app/theme/components/base/modal.js");
/* harmony import */ var _components_base_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/base/radio */ "./app/theme/components/base/radio.js");
/* harmony import */ var _components_base_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/base/select */ "./app/theme/components/base/select.js");
/* harmony import */ var _components_base_skeleton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/base/skeleton */ "./app/theme/components/base/skeleton.js");
/* harmony import */ var _components_base_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/base/tooltip */ "./app/theme/components/base/tooltip.js");
/* harmony import */ var _components_base_popover__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/base/popover */ "./app/theme/components/base/popover.js");
/* harmony import */ var _components_project_app__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/project/_app */ "./app/theme/components/project/_app.js");
/* harmony import */ var _components_project_breadcrumb__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project/breadcrumb */ "./app/theme/components/project/breadcrumb.js");
/* harmony import */ var _components_project_header__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/project/header */ "./app/theme/components/project/header.js");
/* harmony import */ var _components_project_list_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/project/list-menu */ "./app/theme/components/project/list-menu.js");
/* harmony import */ var _components_project_footer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/project/footer */ "./app/theme/components/project/footer.js");
/* harmony import */ var _components_project_checkout_footer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/project/checkout-footer */ "./app/theme/components/project/checkout-footer.js");
/* harmony import */ var _components_project_links_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/project/links-list */ "./app/theme/components/project/links-list.js");
/* harmony import */ var _components_project_drawer_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/project/drawer-menu */ "./app/theme/components/project/drawer-menu.js");
/* harmony import */ var _components_project_nested_accordion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/project/nested-accordion */ "./app/theme/components/project/nested-accordion.js");
/* harmony import */ var _components_project_locale_selector__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/project/locale-selector */ "./app/theme/components/project/locale-selector.js");
/* harmony import */ var _components_project_offline_banner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/project/offline-banner */ "./app/theme/components/project/offline-banner.js");
/* harmony import */ var _components_project_pagination__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/project/pagination */ "./app/theme/components/project/pagination.js");
/* harmony import */ var _components_project_product_tile__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/project/product-tile */ "./app/theme/components/project/product-tile.js");
/* harmony import */ var _components_project_social_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/project/social-icons */ "./app/theme/components/project/social-icons.js");
/* harmony import */ var _components_project_swatch_group__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/project/swatch-group */ "./app/theme/components/project/swatch-group.js");
/* harmony import */ var _components_project_image_gallery__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/project/image-gallery */ "./app/theme/components/project/image-gallery.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
 // Foundational style overrides







 // Base component style overrides
















 // Project Component style overrides
















 // Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

const overrides = {
  styles: _foundations_styles__WEBPACK_IMPORTED_MODULE_0__["default"],
  layerStyles: _foundations_layerStyles__WEBPACK_IMPORTED_MODULE_5__["default"],
  colors: _foundations_colors__WEBPACK_IMPORTED_MODULE_1__["default"],
  sizes: _foundations_sizes__WEBPACK_IMPORTED_MODULE_3__["default"],
  space: _foundations_space__WEBPACK_IMPORTED_MODULE_4__["default"],
  gradients: _foundations_gradients__WEBPACK_IMPORTED_MODULE_2__["default"],
  shadows: _foundations_shadows__WEBPACK_IMPORTED_MODULE_6__["default"],
  components: {
    // base components
    Accordion: _components_base_accordion__WEBPACK_IMPORTED_MODULE_8__["default"],
    Alert: _components_base_alert__WEBPACK_IMPORTED_MODULE_7__["default"],
    Badge: _components_base_badge__WEBPACK_IMPORTED_MODULE_9__["default"],
    Button: _components_base_button__WEBPACK_IMPORTED_MODULE_10__["default"],
    Checkbox: _components_base_checkbox__WEBPACK_IMPORTED_MODULE_11__["default"],
    Container: _components_base_container__WEBPACK_IMPORTED_MODULE_12__["default"],
    Drawer: _components_base_drawer__WEBPACK_IMPORTED_MODULE_13__["default"],
    FormLabel: _components_base_formLabel__WEBPACK_IMPORTED_MODULE_14__["default"],
    Icon: _components_base_icon__WEBPACK_IMPORTED_MODULE_15__["default"],
    Input: _components_base_input__WEBPACK_IMPORTED_MODULE_16__["default"],
    Modal: _components_base_modal__WEBPACK_IMPORTED_MODULE_17__["default"],
    Popover: _components_base_popover__WEBPACK_IMPORTED_MODULE_22__["default"],
    Radio: _components_base_radio__WEBPACK_IMPORTED_MODULE_18__["default"],
    Select: _components_base_select__WEBPACK_IMPORTED_MODULE_19__["default"],
    Skeleton: _components_base_skeleton__WEBPACK_IMPORTED_MODULE_20__["default"],
    Tooltip: _components_base_tooltip__WEBPACK_IMPORTED_MODULE_21__["default"],
    // project components
    App: _components_project_app__WEBPACK_IMPORTED_MODULE_23__["default"],
    Breadcrumb: _components_project_breadcrumb__WEBPACK_IMPORTED_MODULE_24__["default"],
    Header: _components_project_header__WEBPACK_IMPORTED_MODULE_25__["default"],
    Footer: _components_project_footer__WEBPACK_IMPORTED_MODULE_27__["default"],
    CheckoutFooter: _components_project_checkout_footer__WEBPACK_IMPORTED_MODULE_28__["default"],
    LinksList: _components_project_links_list__WEBPACK_IMPORTED_MODULE_29__["default"],
    ListMenu: _components_project_list_menu__WEBPACK_IMPORTED_MODULE_26__["default"],
    DrawerMenu: _components_project_drawer_menu__WEBPACK_IMPORTED_MODULE_30__["default"],
    NestedAccordion: _components_project_nested_accordion__WEBPACK_IMPORTED_MODULE_31__["default"],
    LocaleSelector: _components_project_locale_selector__WEBPACK_IMPORTED_MODULE_32__["default"],
    OfflineBanner: _components_project_offline_banner__WEBPACK_IMPORTED_MODULE_33__["default"],
    SocialIcons: _components_project_social_icons__WEBPACK_IMPORTED_MODULE_36__["default"],
    Pagination: _components_project_pagination__WEBPACK_IMPORTED_MODULE_34__["default"],
    ProductTile: _components_project_product_tile__WEBPACK_IMPORTED_MODULE_35__["default"],
    SwatchGroup: _components_project_swatch_group__WEBPACK_IMPORTED_MODULE_37__["default"],
    ImageGallery: _components_project_image_gallery__WEBPACK_IMPORTED_MODULE_38__["default"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_39__.extendTheme)(overrides));

/***/ }),

/***/ "./app/utils/image-groups-utils.js":
/*!*****************************************!*\
  !*** ./app/utils/image-groups-utils.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findImageGroupBy": function() { return /* binding */ findImageGroupBy; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Find the ImageGroup that matches the criteria supplied
 *
 * @param {Object} imageGroups - The product/variations image groups you want to search.
 * @param {Object} options - Search criteria to match on the ImageGroup object.
 * @param {string} options.viewType - Typically this refers to image sizes like small, medium, large. But can vary based on your back-end configuration.
 * @param {Object} options.selectedVariationAttributes - A key/value object consisting of attibute id's and their values.
 * @returns {Object} - The ImageGroup matching the search criteria
 */
const findImageGroupBy = (imageGroups = [], options) => {
  let {
    viewType,
    selectedVariationAttributes = {}
  } = options; // Start by filtering out any imageGroup that isn't the correct viewType.

  imageGroups = imageGroups.filter(({
    viewType: imageGroupViewType
  }) => imageGroupViewType === viewType); // Not all variation attributes are reflected in images. For example, you probably
  // won't have a separate image group for various sizes, but you might for colors. For that
  // reason we need to know what are valid attribute values to filter on.

  const refinableAttributeIds = [...new Set(imageGroups.reduce((acc, {
    variationAttributes = []
  }) => [...acc, ...variationAttributes], []).map(({
    id
  }) => id))]; // Update the `selectedVariationAttributes` by filtering out the attributes that have no
  // representation in this imageGroup.

  selectedVariationAttributes = Object.keys(selectedVariationAttributes).reduce((acc, curr) => {
    return refinableAttributeIds.includes(curr) ? _objectSpread(_objectSpread({}, acc), {}, {
      [`${curr}`]: selectedVariationAttributes[curr]
    }) : acc;
  }, {}); // Find the image group that has all the all the selected variation value attributes.

  imageGroups = imageGroups.find(({
    variationAttributes = []
  }) => {
    const selectedIds = Object.keys(selectedVariationAttributes);
    return selectedIds.every(selectedId => {
      const selectedValue = selectedVariationAttributes[selectedId];
      return variationAttributes.find(({
        id,
        values
      }) => id === selectedId && values.every(({
        value
      }) => value === selectedValue));
    });
  });
  return imageGroups;
};

/***/ }),

/***/ "./app/utils/locale.js":
/*!*****************************!*\
  !*** ./app/utils/locale.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupportedLocalesIds": function() { return /* binding */ getSupportedLocalesIds; },
/* harmony export */   "loadLocaleData": function() { return /* binding */ loadLocaleData; },
/* harmony export */   "getLocaleConfig": function() { return /* binding */ getLocaleConfig; },
/* harmony export */   "whichLocaleToLoad": function() { return /* binding */ whichLocaleToLoad; },
/* harmony export */   "getPreferredCurrency": function() { return /* binding */ getPreferredCurrency; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./app/constants.js");


/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const supportedLocales = _constants__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_LOCALES.map(locale => locale.id);
/**
 * @returns {string[]} short codes of all the app's supported locales
 */

const getSupportedLocalesIds = () => supportedLocales;
/**
 * Dynamically import the translations/messages for a given locale
 * @private
 * @param {string} locale - The locale code
 * @returns {Promise<Object>} The messages (compiled in AST format) in the given locale. If locale is not found, returns the default locale's messages.
 */

const loadLocaleData = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (locale) {
    // NOTE: the pseudo locale in this case is actually `en-XB` from react-intl. For more details:
    // - see our npm script `compile-translations:pseudo`
    // - and this react-intl PR: https://github.com/formatjs/formatjs/pull/2708
    const locales = [...supportedLocales, 'en-XB'];
    let localeToLoad;

    if (locales.includes(locale)) {
      localeToLoad = locale;
    } else {
      console.warn(`Not expecting to see locale '${locale}'. Loading the default locale '${_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE}' instead.`);
      localeToLoad = _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE;
    }

    let module;

    try {
      module = yield __webpack_require__("./app/translations/compiled lazy recursive ^\\.\\/.*\\.json$")(`./${localeToLoad}.json`);
    } catch (err) {
      console.error(err);
      console.log(`Loading the default locale '${_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE}' instead`);
      module = yield __webpack_require__("./app/translations/compiled lazy recursive ^\\.\\/.*\\.json$")(`./${_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE}.json`);
    }

    return module.default;
  });

  return function loadLocaleData(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Get all of the locale-related configuration data
 * @param {Object} options
 * @param {function} [options.getUserPreferredLocales] - Identify what set of locales the user prefers
 * @returns {Promise<Object>} The configuration data
 */

const getLocaleConfig = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
    getUserPreferredLocales
  } = {}) {
    const preferredLocales = getUserPreferredLocales ? getUserPreferredLocales() : [_constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE];
    const targetLocale = whichLocaleToLoad(preferredLocales, supportedLocales, _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE);
    const messages = yield loadLocaleData(typeof window === 'undefined' ? process.env.USE_PSEUDOLOCALE === 'true' ? 'en-XB' : targetLocale : targetLocale);
    return {
      app: {
        supportedLocales,
        defaultLocale: _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE,
        targetLocale
      },
      user: {
        preferredLocales
      },
      messages
    };
  });

  return function getLocaleConfig() {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Decide which locale to load
 * @private
 * @param {string[]} preferredLocales - All locales that the user prefers
 * @param {string[]} supportedLocales - All locales that your app supports
 * @param {string} fallbackLocale - App's default locale
 * @returns {string} The target locale if there's a match. Otherwise, returns `fallbackLocale`.
 */

const whichLocaleToLoad = (preferredLocales, supportedLocales, fallbackLocale) => {
  const targetLocale = preferredLocales.filter(locale => supportedLocales.includes(locale))[0];
  return targetLocale || fallbackLocale;
};
/**
 * Get the preferred currency for a given locale
 * @param locale The locale that we want the currency
 * @returns {string} The specific currency for the locale
 */

const getPreferredCurrency = locale => {
  var _SUPPORTED_LOCALES$fi;

  return (_SUPPORTED_LOCALES$fi = _constants__WEBPACK_IMPORTED_MODULE_1__.SUPPORTED_LOCALES.find(supportedLocale => supportedLocale.id === locale)) === null || _SUPPORTED_LOCALES$fi === void 0 ? void 0 : _SUPPORTED_LOCALES$fi.preferredCurrency;
};

/***/ }),

/***/ "./app/utils/password-utils.js":
/*!*************************************!*\
  !*** ./app/utils/password-utils.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validatePassword": function() { return /* binding */ validatePassword; }
/* harmony export */ });
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Provides mapping of password requirements that have/haven't been met
 * @param {string} value - The password to validate
 * @returns {Object} - True/false for each password validation rule
 */
const validatePassword = value => {
  return {
    hasMinChars: value && value.length >= 8 ? true : false,
    hasUppercase: value && /[A-Z]/.test(value) ? true : false,
    hasLowercase: value && /[a-z]/.test(value) ? true : false,
    hasNumber: value && /\d/.test(value) ? true : false,
    hasSpecialChar: value && /[!@#$%^&*(),.?":{}|<>]/.test(value) ? true : false
  };
};

/***/ }),

/***/ "./app/utils/url.js":
/*!**************************!*\
  !*** ./app/utils/url.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rebuildPathWithParams": function() { return /* binding */ rebuildPathWithParams; },
/* harmony export */   "buildUrlSet": function() { return /* binding */ buildUrlSet; },
/* harmony export */   "categoryUrlBuilder": function() { return /* binding */ categoryUrlBuilder; },
/* harmony export */   "productUrlBuilder": function() { return /* binding */ productUrlBuilder; },
/* harmony export */   "searchUrlBuilder": function() { return /* binding */ searchUrlBuilder; },
/* harmony export */   "getUrlWithLocale": function() { return /* binding */ getUrlWithLocale; },
/* harmony export */   "homeUrlBuilder": function() { return /* binding */ homeUrlBuilder; },
/* harmony export */   "removeQueryParamsFromPath": function() { return /* binding */ removeQueryParamsFromPath; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./app/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Modifies a given url by adding/updating query parameters.
 *
 * @param {string} url - The base url of the output url set.
 * @param {object} extraParams - A key values pairing used to add static search param values.
 * @returns {string} A URL with additional params
 * @example
 * import {rebuildPathWithParams} from '/path/to/utils/url'
 *
 * rebuildPathWithParams(
 *     '/en-GB/product/25501032M',
 *     {color: 'JJ2SKXX', size: 'MD'}
 * )
 *
 * // Returns
 * // '/en-GB/product/25501032M?color=JJ2SKXX&size=9MD'
 */

const rebuildPathWithParams = (url, extraParams) => {
  const [pathname, search] = url.split('?');
  const params = new URLSearchParams(search); // Apply any extra params.

  Object.keys(extraParams).forEach(key => {
    const value = extraParams[key];

    if (value !== undefined) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  }); // Clean up any trailing `=` for params without values.

  const paramStr = params.toString().replace(/=&/g, '&').replace(/=$/, ''); // Generate the newly updated url.

  return `${pathname}?${paramStr}`;
};
/**
 * Builds a list of modified Urls with the provided params key and values,
 * preserving any search params provided in the original url.Optionally
 * you can pass and object used to set static params values.
 * @param {string} url - The base url of the output url set.
 * @param {string} key - The search params for the associated values
 * @param {Array} values - The search param values
 * @param {object} extraParams - A key values pairing used to add static search param values.
 * @returns {string[]} A list of URLs
 * @example
 * import {buildUrlSet} from '/path/to/utils/url'
 *
 * buildUrlSet(
 *     '/womens/clothing',
 *     'sort',
 *     ['price-high-to-low', 'price-low-to-high'],
 *     {offset: 0}
 * )
 *
 * // Returns
 * // ['/womens/clothing?sort=price-high-to-low', '/womens/clothing?sort=price-low-to-high']
 */

const buildUrlSet = (url = '', key = '', values = [], extraParams = {}) => values.map(value => rebuildPathWithParams(url, _objectSpread({
  [key]: value
}, extraParams)));
/**
 * Given a category and the current locale returns an href to the product list page.
 *
 * @param {Object} category
 * @param {string} locale
 * @returns {string}
 */

const categoryUrlBuilder = (category, locale = _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE) => encodeURI(`/${locale}/category/${category.id}`);
/**
 * Given a product and the current locale returns an href to the product detail page.
 *
 * @param {Object} product
 * @param {string} locale
 * @returns {string}
 */

const productUrlBuilder = product => encodeURI(`/product/${product.id}`);
/**
 * Given a search term, contructs a search url.
 *
 * @param {string} searchTerm
 * @returns {string}
 */

const searchUrlBuilder = searchTerm => `/search?q=${searchTerm}`;
/**
 * Returns a relative URL for a locale short code.
 *
 * @param {string} shortCode - The locale short code.
 * @param {Object} [opts] - Options, if there's any.
 * @param {string[]} opts.disallowParams - URL parameters to remove
 * @param {Object} opts.location - location object to replace the default `window.location`
 * @returns {string} - The relative URL for the specific locale.
 */

const getUrlWithLocale = (shortCode, opts = {}) => {
  const location = opts.location ? opts.location : window.location;
  const {
    disallowParams = []
  } = opts;
  let relativeUrl = location.pathname;
  const params = new URLSearchParams(location.search); // Remove any disallowed params.

  if (disallowParams.length) {
    disallowParams.forEach(param => {
      params.delete(param);
    });
  } // Array of the paths without empty items


  const paths = relativeUrl.split('/').filter(path => path !== ''); // Remove the previous locale

  paths.shift(); // Add the new locale

  if (shortCode !== _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE || (paths === null || paths === void 0 ? void 0 : paths.length) > 0) {
    paths.unshift(shortCode);
  }

  relativeUrl = `/${paths.join('/')}${Array.from(params).length > 0 ? `?${params}` : ''}`;
  return relativeUrl;
};
/**
 * Builds the Home page URL for a given locale.
 * We don't add the locale to the URL for the default locale.
 *
 * @param homeHref
 * @param locale
 * @returns {string}
 */

const homeUrlBuilder = (homeHref, locale) => encodeURI(`${homeHref}${locale !== _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_LOCALE ? locale + '/' : ''}`);
/*
 * Remove query params from a give url path based on a given list of keys
 *
 * @param {string} path - The part of url to have params removed from.
 * @param {array} keys - list of params to be removed
 * @returns {string} - the url after param has been removed
 * @example
 * import {removeQueryParamsFromPath} from /path/to/util/url
 *
 * removeQueryParamsFromPath(
 *   /en-GB/cart?pid=1234&color=black&size=s&abc=12,
 *   ['pid', 'color', 'size']
 * )
 * // returns
 * // '/en-GB/cart?abc=12'
 */

const removeQueryParamsFromPath = (path, keys) => {
  const [pathname, search] = path.split('?');
  const params = new URLSearchParams(search);
  keys.forEach(key => {
    if (params.has(key)) {
      params.delete(key);
    }
  }); // Clean up any trailing `=` for params without values.

  const paramStr = params.toString().replace(/=&/g, '&').replace(/=$/, '');
  return `${pathname}${paramStr && '?'}${paramStr}`;
};

/***/ }),

/***/ "./app/utils/utils.js":
/*!****************************!*\
  !*** ./app/utils/utils.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestIdleCallback": function() { return /* binding */ requestIdleCallback; },
/* harmony export */   "watchOnlineStatus": function() { return /* binding */ watchOnlineStatus; },
/* harmony export */   "isMatchingAddress": function() { return /* binding */ isMatchingAddress; },
/* harmony export */   "shallowEquals": function() { return /* binding */ shallowEquals; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "flatten": function() { return /* binding */ flatten; },
/* harmony export */   "isServer": function() { return /* binding */ isServer; },
/* harmony export */   "getSessionJSONItem": function() { return /* binding */ getSessionJSONItem; },
/* harmony export */   "setSessionJSONItem": function() { return /* binding */ setSessionJSONItem; },
/* harmony export */   "clearSessionJSONItem": function() { return /* binding */ clearSessionJSONItem; },
/* harmony export */   "boldString": function() { return /* binding */ boldString; },
/* harmony export */   "capitalize": function() { return /* binding */ capitalize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


const _excluded = ["id", "addressId", "_type", "preferred", "creationDate", "lastModified"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Call requestIdleCallback in supported browsers.
 *
 * https://developers.google.com/web/updates/2015/08/using-requestidlecallback
 * http://caniuse.com/#feat=requestidlecallback
 */
const requestIdleCallback = fn => {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(fn);
  } else {
    return setTimeout(() => fn(), 1);
  }
};
const watchOnlineStatus = (callback, win = window) => {
  const off = () => callback(false);

  const on = () => callback(true);

  win.addEventListener('offline', off);
  win.addEventListener('online', on);

  const unsubscribe = () => {
    win.removeEventListener('offline', off);
    win.removeEventListener('online', on);
  };

  return unsubscribe;
};
/**
 * Compares the primary fields of two address objects to determine if they match.
 * @param {Object} addr1
 * @param {Object} addr2
 * @returns {boolean}
 */

const isMatchingAddress = (addr1, addr2) => {
  const normalize = addr => {
    // eslint-disable-next-line no-unused-vars
    const {
      id,
      addressId,
      _type,
      preferred,
      creationDate,
      lastModified
    } = addr,
          normalized = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(addr, _excluded);

    return normalized;
  };

  return shallowEquals(normalize(addr1), normalize(addr2));
};
/**
 * Performs a shallow comparison on two objects
 * @param {Object} a
 * @param {Object} b
 * @returns {boolean}
 */

const shallowEquals = (a, b) => {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }

  for (let key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};
/**
 * No operation function. You can use this
 * empty function when you wish to pass
 * around a function that will do nothing.
 * Usually used as default for event handlers.
 */

const noop = () => {};
/**
 * Flattens a tree data structure into an array.
 * @param {*} node
 * @returns
 */

const flatten = (node, key = 'children') => {
  const children = (node[key] || []).reduce((a, b) => {
    return Array.isArray(b[key]) && !!b[key].length ? _objectSpread(_objectSpread({}, a), flatten(b, key)) : _objectSpread(_objectSpread({}, a), {}, {
      [b.id]: b
    });
  }, {});
  return _objectSpread({
    [node.id]: node
  }, children);
};
/**
 * Check the current execution environment
 * is client side or server side
 * @returns Boolean
 */

const isServer = typeof window === 'undefined';
/**
 * retrieves an item from session storage
 * @param {string} key
 * @returns JSON | undefined
 */

const getSessionJSONItem = key => {
  if (isServer) {
    return undefined;
  }

  const item = window.sessionStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  } else {
    return undefined;
  }
};
/**
 * sets an item in session storage
 * @param {string} key
 * @param {string} value
 */

const setSessionJSONItem = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};
/**
 * clears an item in session storage
 * @param {string} key
 */

const clearSessionJSONItem = key => {
  window.sessionStorage.removeItem(key);
};
/**
 * bolds a substring of a string by adding <b> tags
 * @param {string} str
 * @param {string} substr
 * @returns stringified HTML Node
 */

const boldString = (str, substr) => {
  return str.replace(RegExp(substr, 'g'), `<b>${substr}</b>`);
};
/**
 * Capitalizes the words in a string
 * @param {string} text
 * @returns capitalized text
 */

const capitalize = text => {
  return text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
};

/***/ }),

/***/ "./app/assets/svg/account.svg":
/*!************************************!*\
  !*** ./app/assets/svg/account.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/alert.svg":
/*!**********************************!*\
  !*** ./app/assets/svg/alert.svg ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/basket.svg":
/*!***********************************!*\
  !*** ./app/assets/svg/basket.svg ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/brand-logo.svg":
/*!***************************************!*\
  !*** ./app/assets/svg/brand-logo.svg ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/cc-amex.svg":
/*!************************************!*\
  !*** ./app/assets/svg/cc-amex.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/cc-cvv.svg":
/*!***********************************!*\
  !*** ./app/assets/svg/cc-cvv.svg ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/cc-discover.svg":
/*!****************************************!*\
  !*** ./app/assets/svg/cc-discover.svg ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/cc-mastercard.svg":
/*!******************************************!*\
  !*** ./app/assets/svg/cc-mastercard.svg ***!
  \******************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/cc-visa.svg":
/*!************************************!*\
  !*** ./app/assets/svg/cc-visa.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/check-circle.svg":
/*!*****************************************!*\
  !*** ./app/assets/svg/check-circle.svg ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/check.svg":
/*!**********************************!*\
  !*** ./app/assets/svg/check.svg ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/chevron-down.svg":
/*!*****************************************!*\
  !*** ./app/assets/svg/chevron-down.svg ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/chevron-left.svg":
/*!*****************************************!*\
  !*** ./app/assets/svg/chevron-left.svg ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/chevron-right.svg":
/*!******************************************!*\
  !*** ./app/assets/svg/chevron-right.svg ***!
  \******************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/chevron-up.svg":
/*!***************************************!*\
  !*** ./app/assets/svg/chevron-up.svg ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/close.svg":
/*!**********************************!*\
  !*** ./app/assets/svg/close.svg ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/dashboard.svg":
/*!**************************************!*\
  !*** ./app/assets/svg/dashboard.svg ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/figma-logo.svg":
/*!***************************************!*\
  !*** ./app/assets/svg/figma-logo.svg ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/file.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/file.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/filter.svg":
/*!***********************************!*\
  !*** ./app/assets/svg/filter.svg ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-ca.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-ca.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-cn.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-cn.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-fr.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-fr.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-gb.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-gb.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-it.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-it.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-jp.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-jp.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/flag-us.svg":
/*!************************************!*\
  !*** ./app/assets/svg/flag-us.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/github-logo.svg":
/*!****************************************!*\
  !*** ./app/assets/svg/github-logo.svg ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/hamburger.svg":
/*!**************************************!*\
  !*** ./app/assets/svg/hamburger.svg ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/heart-solid.svg":
/*!****************************************!*\
  !*** ./app/assets/svg/heart-solid.svg ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/heart.svg":
/*!**********************************!*\
  !*** ./app/assets/svg/heart.svg ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/info.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/info.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/like.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/like.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/location.svg":
/*!*************************************!*\
  !*** ./app/assets/svg/location.svg ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/lock.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/lock.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/payment.svg":
/*!************************************!*\
  !*** ./app/assets/svg/payment.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/paypal.svg":
/*!***********************************!*\
  !*** ./app/assets/svg/paypal.svg ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/plug.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/plug.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/plus.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/plus.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/receipt.svg":
/*!************************************!*\
  !*** ./app/assets/svg/receipt.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/search.svg":
/*!***********************************!*\
  !*** ./app/assets/svg/search.svg ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/signout.svg":
/*!************************************!*\
  !*** ./app/assets/svg/signout.svg ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/social-facebook.svg":
/*!********************************************!*\
  !*** ./app/assets/svg/social-facebook.svg ***!
  \********************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/social-instagram.svg":
/*!*********************************************!*\
  !*** ./app/assets/svg/social-instagram.svg ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/social-pinterest.svg":
/*!*********************************************!*\
  !*** ./app/assets/svg/social-pinterest.svg ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/social-twitter.svg":
/*!*******************************************!*\
  !*** ./app/assets/svg/social-twitter.svg ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/social-youtube.svg":
/*!*******************************************!*\
  !*** ./app/assets/svg/social-youtube.svg ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/user.svg":
/*!*********************************!*\
  !*** ./app/assets/svg/user.svg ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/visibility-off.svg":
/*!*******************************************!*\
  !*** ./app/assets/svg/visibility-off.svg ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./app/assets/svg/visibility.svg":
/*!***************************************!*\
  !*** ./app/assets/svg/visibility.svg ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "?3b7a":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"bay-rewrite","version":"0.0.1","license":"See license in LICENSE","private":true,"mobify":{"externals":[],"pageNotFoundURL":"/page-not-found","ssrEnabled":true,"ssrOnly":["ssr.js","ssr.js.map","node_modules/**/*.*"],"ssrShared":["static/ico/favicon.ico","static/robots.txt","**/*.js","**/*.js.map","**/*.json"],"ssrParameters":{"ssrFunctionNodeVersion":"14.x","proxyConfigs":[{"path":"api","host":"7q5duxn7.api.commercecloud.salesforce.com"},{"path":"ocapi","host":"dev35-na02-hbc.demandware.net"},{"path":"einstein","host":"api.cquotient.com"}]}},"dependencies":{"@chakra-ui/icons":"^1.0.6","@chakra-ui/react":"^1.7.1","@chakra-ui/skip-nav":"^1.1.4","@emotion/react":"^11.1.5","@emotion/styled":"^11.1.5","base64-arraybuffer":"^0.2.0","bluebird":"^3.5.1","card-validator":"^8.1.0","commerce-sdk-isomorphic":"1.1.2","core-js":"2.4.0","cross-fetch":"^3.1.4","express":"^4.16.4","focus-visible":"^5.2.0","framer-motion":"^3.7.0","hoist-non-react-statics":"^3.3.0","jwt-decode":"^3.1.2","nanoid":"^3.1.22","node-fetch":"^2.3.0","prop-types":"^15.6.0","query-string":"^7.0.1","randomstring":"^1.2.1","react":"16.14.0","react-dom":"16.14.0","react-helmet":"^6.1.0","react-hook-form":"^6.15.5","react-intl":"^5.13.1","react-router-dom":"^5.1.2","whatwg-fetch":"1.0.0"},"devDependencies":{"@babel/cli":"^7.4.4","@babel/core":"^7.4.5","@babel/parser":"^7.5.5","@babel/plugin-proposal-object-rest-spread":"^7.4.4","@babel/plugin-transform-async-to-generator":"^7.7.0","@babel/plugin-transform-modules-commonjs":"^7.4.4","@babel/plugin-transform-object-assign":"^7.2.0","@babel/plugin-transform-runtime":"^7.6.2","@babel/preset-env":"^7.4.5","@babel/preset-react":"^7.0.0","@babel/register":"^7.4.4","@babel/runtime":"^7.7.2","@babel/runtime-corejs2":"^7.4.5","@babel/traverse":"^7.5.5","@formatjs/cli":"^4.2.27","@lerna/child-process":"^3.3.0","@lhci/cli":"^0.7.0","@loadable/babel-plugin":"^5.13.2","@loadable/component":"^5.15.0","@loadable/server":"^5.15.0","@loadable/webpack-plugin":"5.15.0","@peculiar/webcrypto":"^1.1.6","@testing-library/jest-dom":"5.11.9","@testing-library/react":"^11.2.5","@testing-library/react-hooks":"^7.0.2","@testing-library/user-event":"^12.8.1","babel-eslint":"^10.1.0","babel-jest":"^26.6.3","babel-loader":"^8.0.6","babel-plugin-dynamic-import-node-babel-7":"^2.0.7","babel-plugin-formatjs":"^10.2.3","bundlesize2":"^0.0.30","chalk":"1.1.3","chromedriver":"79.0.2","commander":"^2.20.0","cross-env":"^5.2.0","cross-spawn":"^6.0.5","cypress":"^6.6.0","eslint":"7.31.0","eslint-config-prettier":"4.0.0","eslint-import-resolver-webpack":"0.10.0","eslint-plugin-cypress":"^2.11.2","eslint-plugin-header":"^3.1.1","eslint-plugin-import":"2.23.4","eslint-plugin-jsx-a11y":"6.4.1","eslint-plugin-prettier":"3.0.1","eslint-plugin-react":"7.24.0","execa":"^1.0.0","full-icu":"^1.3.1","glob":"7.1.2","html-loader":"0.5.5","ignore-loader":"^0.1.2","ignore-styles":"5.0.1","ip":"1.1.5","jest":"^26.6.3","jest-cli":"^26.6.3","minimist":"1.2.5","msw":"^0.28.1","njwt":"^1.0.0","nock":"^13.1.1","nodemon":"^2.0.12","prettier":"1.18.2","pwa-kit-react-sdk":"1.2.0","raf":"^3.4.0","raw-loader":"0.5.1","react-loadable":"^5.5.0","regenerator-runtime":"^0.11.1","rimraf":"2.6.1","semver":"^7.3.2","shelljs":"^0.8.4","svg-sprite-loader":"^6.0.7","text-loader":"0.0.1","tree-kill":"^1.2.1","webpack":"^5.39.1","webpack-cli":"^4.7.2"},"optionalDependencies":{"vue":"^3.1.5"},"scripts":{"analyze-build":"cross-env MOBIFY_ANALYZE=true npm run prod:build","build-translations":"npm run extract-default-translations && npm run compile-translations","compile-translations":"formatjs compile-folder --ast app/translations app/translations/compiled","compile-translations:pseudo":"formatjs compile --ast app/translations/$npm_package_l10n_defaultLocale.json --out-file app/translations/compiled/en-XB.json --pseudo-locale en-XB","extract-default-translations":"formatjs extract \'app/**/*.{js,jsx}\' --out-file app/translations/$npm_package_l10n_defaultLocale.json --id-interpolation-pattern [sha512:contenthash:base64:6]","format":"prettier --write \\"**/*.{js,jsx}\\"","lint":"eslint \\"**/*.{js,jsx}\\"","lint:fix":"npm run lint -- --fix","prod:build":"npm run build-translations && cross-env NODE_ENV=production sdk-pwa-build","push":"cross-env NODE_ENV=production npm run prod:build && sdk-upload","save-credentials":"sdk-save-credentials","start":"cross-env NODE_ICU_DATA=node_modules/full-icu node ./scripts/start ssr","start:inspect":"npm run start -- --inspect","start:pseudolocale":"npm run extract-default-translations && npm run compile-translations:pseudo && cross-env USE_PSEUDOLOCALE=true npm run start","test":"jest --maxWorkers=2","test:e2e":"cypress run","test:e2e-ci":"node ./scripts/run-e2e.js","test:integration":"cross-env TEST_TYPE=integration npm run test","test:lighthouse":"lhci autorun --config=tests/lighthouserc.js","test:max-file-size":"bundlesize"},"bundlesize":[{"path":"build/main.js","maxSize":"40 kB"},{"path":"build/vendor.js","maxSize":"250 kB"}],"browserslist":["iOS >= 9.0","Android >= 4.4.4","last 4 ChromeAndroid versions"],"l10n":{"supportedCurrencies":["GBP","EUR","CNY","JPY"],"defaultCurrency":"GBP","supportedLocales":[{"id":"en-GB","preferredCurrency":"GBP"},{"id":"fr-FR","preferredCurrency":"EUR"},{"id":"it-IT","preferredCurrency":"EUR"},{"id":"zh-CN","preferredCurrency":"CNY"},{"id":"ja-JP","preferredCurrency":"JPY"}],"defaultLocale":"en-GB"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bay-rewrite:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./app/main.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map