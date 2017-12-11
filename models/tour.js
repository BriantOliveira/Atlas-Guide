module.exports = (sequelize, DataTypes) => {
  var Tour = sequelize.define('Tour', {
    vendorId: DataTypes.STRING,
    tourPoint: DataTypes.TEXT,
    restStop: DataTypes.TEXT,
    restStartsAt: DataTypes.STRING,
    tourRating: DataTypes.INTEGER,
    imageLocation: DataTypes.STRING
});

Tour.associate = function (models) {
    Tour.belongsTo(models.Vendor, { through: models.User});;
};

  return Tour;
};
