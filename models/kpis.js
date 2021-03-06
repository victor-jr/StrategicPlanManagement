'use strict';
module.exports = function(sequelize, DataTypes) {
  var KPIs = sequelize.define('KPIs', {
    keyPerformanceIndicator: DataTypes.TEXT,
    keyTarget: DataTypes.TEXT,
    base: DataTypes.STRING,
    current: DataTypes.STRING,
    target2016: DataTypes.STRING,
    target2017: DataTypes.STRING,
    target2018: DataTypes.STRING   
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return KPIs;
};