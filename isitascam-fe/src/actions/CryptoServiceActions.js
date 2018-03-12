/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CryptoServiceConstants = require('../constants/CryptoServiceConstants');
var assign = require('object-assign');
var JSONUtil = require('../utils/jsonutil');

var CryptoServiceActions = {

    showStatus: function (json) {
        AppDispatcher.dispatch({
            type: CryptoServiceConstants.SHOW_STATUS,
            details: json
        });
    },

    fetchStatus: function (cryptoCode) {
        const middlewareHost = process.env.MIDDLEWARE_HOST;

        fetch(middlewareHost + "/crypto-status/" + cryptoCode, {
            mode: 'cors'
        })
            .then((response) => {
                    return response.json()
            })
            .then((json) => {
                CryptoServiceActions.showStatus(json);
            });

    },

};

module.exports = CryptoServiceActions;
