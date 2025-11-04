import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Meet from "../models/Meet";
import Team from "../models/Team";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [Meet, Team],
    logging: console.log
})

export default sequelize