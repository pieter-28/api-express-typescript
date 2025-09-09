import {Sequelize} from "sequelize";
import {Post} from "./post";
import {User} from "./user";

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];

export const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

// init models Post
Post.initModel(sequelize);
User.initModel(sequelize);

export {
    Sequelize,
    Post
}