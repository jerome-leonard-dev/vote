module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      title: DataTypes.STRING,
      owner: DataTypes.STRING,
      visible: DataTypes.BOOLEAN,
      answerable: DataTypes.BOOLEAN,
      votable: DataTypes.BOOLEAN
    })
  
    Question.associate = function (models) {
        Question.belongsTo(models.Session)
        Question.hasMany(models.Answer)
    }
  
    return Question
  }
