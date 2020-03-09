module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('Session', {
      title: DataTypes.STRING,
      owner: DataTypes.STRING,
      hash: DataTypes.STRING
    })
  
    Session.associate = function (models) {
      Session.hasMany(models.Question)
    }
  
    return Session
  }