'use strict'
module.exports = function (sequelize, DataTypes) {

    var Sale = sequelize.define('Sale', {
        date: DataTypes.DATE,
        totalPrice: DataTypes.DECIMAL(10, 2),
        customerId: {
            type: DataTypes.INTEGER,
            model: 'Customer',
            key: 'id'
        }
    });

    Sale.associate = function (models) {
        models.Sale.hasMany(models.SaleItem, {
            as: 'saleItems',
            foreignKey: 'saleId'
        });


        models.Sale.belongsTo(models.Customer, {
            as: 'customer',
            foreignKey: 'customerId'
        });

    };

    return Sale;
};
