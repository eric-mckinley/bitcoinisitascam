module.exports = {

  round: function (value, precision) {
     return Number(Math.round(value+'e'+precision)+'e-'+precision);
  }
};
