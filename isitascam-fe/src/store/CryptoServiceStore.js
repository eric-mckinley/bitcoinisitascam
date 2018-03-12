"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CryptoServiceConstants = require('../constants/CryptoServiceConstants');
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _state = {
    details: {}
};


function updateState(state) {
    _state = assign({}, _state, state);
}

var CryptoServiceStore = assign({}, EventEmitter.prototype, {

    getState: function () {
        return _state;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.type) {

        case CryptoServiceConstants.SHOW_STATUS:
             updateState({
                details: action.details
            });
            CryptoServiceStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = CryptoServiceStore;

