import SQL, { Model, DataTypes } from 'sequelize';

import sequelize from './index';

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static associate(models: SQL.Model[]) {
    // define association here
  }
}
User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickname: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'User',
  },
);

export default User;
