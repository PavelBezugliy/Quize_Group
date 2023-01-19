const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, Task }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Task, { foreignKey: 'task_id' });
    }
  }
  Game.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tasks',
        key: 'id',
      },
    },
    try_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
