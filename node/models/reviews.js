'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(Movies,{foreignKey:"movieid"})
    }
  };
  Reviews.init({
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    author: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
    movieid: DataTypes.INTEGER,
    rate: DataTypes.ENUM('1', '2',"3","4","5")
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};