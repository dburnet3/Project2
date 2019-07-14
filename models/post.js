module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        Ethnicity: DataTypes.TEXT,
        Choices: DataTypes.TEXT,
        Major: DataTypes.TEXT,
        Cost: DataTypes.TEXT
    });
    return Post;
  };

