const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate({ Question, Game }) {
      this.hasMany(Question, { foreignKey: 'task_id' });
      this.hasMany(Game, { foreignKey: 'task_id' });
    }
  }
  Task.init({
    task: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
