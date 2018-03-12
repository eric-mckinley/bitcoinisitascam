var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContentServiceConstants = require('../constants/ContentServiceConstants');
var assign = require('object-assign');
var JSONUtil = require('../utils/jsonutil');

var ContentServiceActions = {

    showContent: function (txt) {
        console.log('Fire content to AppDispatcher');
        AppDispatcher.dispatch({
            type: ContentServiceConstants.SHOW_CONTENT,
            content: txt
        });
    },

    fetchContent: function (pageName, blockName) {
        const middlewareHost = process.env.MIDDLEWARE_HOST;
        console.log('LOADING REMOTE DATA ' + pageName + ", " + blockName);
        fetch("https://raw.githubusercontent.com/eric-mckinley/unit-test-name-checker/master/ignore.txt", {
            mode: 'cors'
        })
            .then((response) => {
                    return response.text()
            })
            .then((text) => {
                console.log("remote:  " + text);
                ContentServiceActions.showContent(text);
            });

    },

};

module.exports = ContentServiceActions;
