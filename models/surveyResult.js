module.exports = function(sequelize, DataTypes) {
    var surveyResult = sequelize.define("surveyResult", {
        Ethnicity: DataTypes.STRING,
        Choices: DataTypes.STRING,
        Major: DataTypes.STRING,
        Cost: DataTypes.STRING
    });
    return surveyResult;
  };