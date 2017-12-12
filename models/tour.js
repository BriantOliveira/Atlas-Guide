module.exports = (sequelize, DataTypes) => {
  var Tour = sequelize.define('Tour', {
    vendorId: DataTypes.STRING,
    tourName: DataTypes.STRING, allowNull: false,
    description: DataTypes.STRING, allowNull: false,
    tourPoints: DataTypes.TEXT, allowNull: false,
    startsAt: DataTypes.DATE, allowNull: false,
    endsAt: DataTypes.DATE, allowNull: false,
    restStop: DataTypes.TEXT, allowNull: false,
    restStartsAt: DataTypes.STRING, allowNull: false,
    tourRating: DataTypes.INTEGER,
    images: DataTypes.TEXT, allowNull: true
});

Tour.associate = function (models) {
    Tour.belongsTo(models.Vendor, { through: models.User});;
};

  return Tour;
};
