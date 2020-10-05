import {
    ModelDefined,
    DataTypes,

    Optional,
  } from "sequelize";
import sequelize from "../db"

interface ReviewAttributes {
    id: number;
    title: string,
    review: string,
    author: string,
    movieid: number,
    enabled: boolean
   
  }
interface ReviewCreationsAttributes extends Optional<ReviewAttributes, 'id' | 'title'|"movieid"|"review"|"author"> {};

const Review: ModelDefined<
ReviewAttributes,
ReviewCreationsAttributes
> = sequelize.define(
  'Review',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING,
    },
    review: {
      type: new DataTypes.STRING(4096),
      allowNull: false,
    },
    author: {
      type: new DataTypes.STRING(4096),
      allowNull: false,
    },
    movieid: {
      type: DataTypes.INTEGER.UNSIGNED,
    
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
     },
  },
  {
    tableName: 'Reviews',
  }
);
export default Review