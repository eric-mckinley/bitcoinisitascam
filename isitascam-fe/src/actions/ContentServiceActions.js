var AppDispatcher = require('../dispatcher/AppDispatcher');
var ContentServiceConstants = require('../constants/ContentServiceConstants');
var assign = require('object-assign');
var JSONUtil = require('../utils/jsonutil');

var ContentServiceActions = {

    showContent: function (page, section, txt) {
        console.log('Fire content to AppDispatcher');
        AppDispatcher.dispatch({
            type: ContentServiceConstants.SHOW_CONTENT,
            page: page,
            section: section,
            content: txt
        });
    },

    fetchContent: function (pageName, blockName) {
        var contentBaseUrl = "https://raw.githubusercontent.com/eric-mckinley/bitcoinisitascam/master/content-data/"

        console.log('LOADING REMOTE DATA ' + pageName + ", " + blockName);
        fetch(contentBaseUrl + pageName + "/" + blockName + ".txt", {
            mode: 'cors'
        })
            .then((response) => {
                    return response.text()
            })
            .then((text) => {
                console.log("remote:  " + text);
                ContentServiceActions.showContent(pageName, blockName, text);
            });

    },

};

module.exports = ContentServiceActions;
