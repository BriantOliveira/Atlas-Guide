module.exports = (sequelize, DataTypes) => {
  var Vendor = sequelize.define('Vendor', {
    companyName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    tourLisence: DataTypes.STRING,
    driversLisence: DataTypes.STRING,
    insurancePolicy: DataTypes.TEXT
});

Vendor.associate = function (models) {
    Vendor.belongsTo(models.User);
};
  return Vendor;
};
