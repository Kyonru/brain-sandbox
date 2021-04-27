/* eslint-disable max-classes-per-file */
import SQL from 'sequelize';

import sequelize from './index';
// import { Language } from './language';

export class Movie extends SQL.Model {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static associate(models: SQL.Model[]) {
    // define association here
  }
}

export class MovieModel {
  id!: string;

  name!: string;

  pwd!: string;

  createdAt!: Date;

  updatedAt!: Date;
}

Movie.init(
  {
    email: { type: SQL.STRING(50), allowNull: false },
    pwd: SQL.STRING(50),
  },
  { sequelize, modelName: 'Movie' },
);
