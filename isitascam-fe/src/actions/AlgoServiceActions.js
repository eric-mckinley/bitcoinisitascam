var AppDispatcher = require('../dispatcher/AppDispatcher');
var AlgoServiceConstants = require('../constants/AlgoServiceConstants');
var assign = require('object-assign');
var JSONUtil = require('../utils/jsonutil');

var AlgoServiceActions = {

    showCode: function (codeList) {
        AppDispatcher.dispatch({
            type: AlgoServiceConstants.SHOW_CODE,
            algorithms: codeList
        });
    },

    fetchAlgorithms: function () {
        var codeBaseUrl = "https://raw.githubusercontent.com/eric-mckinley/bitcoinisitascam/master/content-data/algo/implementations.json"

        fetch(codeBaseUrl, {
            mode: 'cors'
        })
            .then((response) => {
                    return response.json();
            })
            .then((codeData) => {
                AlgoServiceActions.showCode(codeData);
            });
    },

};

module.exports = AlgoServiceActions;
