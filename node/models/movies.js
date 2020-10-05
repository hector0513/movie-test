'use strict';
const {
  Model
} = require('sequelize');
const Reviews =require("./reviews")
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(Reviews,{foreignKey:"movieid"})
    }
  };
  Movies.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};