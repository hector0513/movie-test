
import {
  Sequelize,
} from "sequelize"
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '../../config/config.json')[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);
export default sequelize