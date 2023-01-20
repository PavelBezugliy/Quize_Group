const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      this.belongsTo(models.Task, { foreignKey: 'task_id' });
    }
  }
  Question.init({
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Task',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
