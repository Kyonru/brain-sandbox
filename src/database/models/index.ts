import { Dialect, Sequelize } from 'sequelize';
import config from 'database/config/config.json';

const dbConfig = config[process.env.NODE_ENV];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect as Dialect,
    dialectOptions: {
      ssl: dbConfig.db_ssl,
    },
    logging: dbConfig.logging,
    timezone: dbConfig.timezone,
  },
);

export default sequelize;
