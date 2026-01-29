'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Expense.init({
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    mode: DataTypes.STRING,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    expensedate: DataTypes.DATE,
    entrydate: DataTypes.DATE,
    bill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};