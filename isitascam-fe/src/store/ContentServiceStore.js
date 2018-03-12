"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ContentServiceConstants = require('../constants/ContentServiceConstants');
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _state = {
    content: {}
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

            var sectionData = new Object();
            sectionData['html'] = action.content;

            var pageData = new Object();
            pageData[action.section] = sectionData;

            var contentData = ContentServiceStore.getState()['content'];

            if(contentData[action.page]) {
               contentData[action.page][action.section] = sectionData;
            }
            else{
                contentData[action.page] = pageData;
            }

            updateState({
                content: contentData
            });
            ContentServiceStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = ContentServiceStore;

