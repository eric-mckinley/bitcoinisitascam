module.exports = {

  evaluateIsItAScam: function (currentPrice, previousPrice) {
    return currentPrice <  previousPrice;
  }
};