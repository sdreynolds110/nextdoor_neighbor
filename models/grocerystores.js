module.exports = function(sequelize, DataTypes) {
  var GroceryStores = sequelize.define("GroceryStores", {
    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    zipcode: {
      type: DataTypes.INTEGER
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false
    }
  });
  return GroceryStores;
};
