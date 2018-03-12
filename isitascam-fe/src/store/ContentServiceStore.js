"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ContentServiceConstants = require('../constants/ContentServiceConstants');
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _state = {
    details: {}
};


function updateState(state) {
    _state = assign({}, _state, state);
}

var ContentServiceStore = assign({}, EventEmitter.prototype, {

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
        case ContentServiceConstants.SHOW_CONTENT:
            updateState({
                content: action.content
            });
            ContentServiceStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = ContentServiceStore;

