module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
      text: DataTypes.STRING,
      owner: DataTypes.STRING
    })
  
    Answer.associate = function (models) {
        Answer.belongsTo(models.Question)
    }
  
    return Answer
  }