module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Item", {
    itemName: DataTypes.STRING,
    itemDescription: DataTypes.TEXT,
    itemLevel: DataTypes.INTEGER,
    itemClass: DataTypes.INTEGER,
    itemType: DataTypes.INTEGER,
    itemQuality: DataTypes.INTEGER,
    itemBaseStats:DataTypes.HSTORE,
    itemBonuses:DataTypes.HSTORE,
    itemSockets:DataTypes.ARRAY(DataTypes.HSTORE)
  })
}