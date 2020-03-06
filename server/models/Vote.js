module.exports = (sequelize, DataTypes) => {
    const Vote = sequelize.define('Vote', {
      owner: DataTypes.STRING
    })
  
   Vte.associate = function (models) {
        Vote.belongsTo(models.Answer)
    }
  
    return Vote
  }
