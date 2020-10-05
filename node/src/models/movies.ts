import {
    ModelDefined,
    DataTypes,

    Optional,
  } from "sequelize";
import sequelize from "../db"

export interface MovieAttributes {
    id: number;
    title: string,
    description: string,
    enabled: boolean
  }
export interface MovieCreationsAttributes extends Optional<MovieAttributes, 'id' | 'title'|"description"> {};

const Movie: ModelDefined<
MovieAttributes,
MovieCreationsAttributes
> = sequelize.define(
  'Movie',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING,
    },
    description: {
      type: new DataTypes.STRING(4096),
      allowNull: false,
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
     },
  },
  {
    tableName: 'Movies',
  }
);
export default Movie