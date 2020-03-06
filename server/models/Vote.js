module.exports = (sequelize, DataTypes) => {
    const Vote = sequelize.define('Vote', {
      owner: DataTypes.STRING
    })
  
   Vote.associate = function (models) {
        Vote.belongsTo(models.Answer)
    }
  
    return Vote
  }
