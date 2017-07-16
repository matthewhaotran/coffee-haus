'use strict'
module.exports = function (sequelize, DataTypes) {

    var SaleItem = sequelize.define('SaleItem', {
        saleId: {
            type: DataTypes.INTEGER,
            model: 'Sale',
            key: 'id'
        },
        productId: {
            type: DataTypes.INTEGER,
            model: 'Product',
            key: 'id'
        },
        quantity: DataTypes.INTEGER
    });

    SaleItem.associate = function (models) {
        
        models.SaleItem.belongsTo(models.Sale, {
            as: 'sale',
            foreignKey: 'saleId'
        });

        models.SaleItem.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'productId'
        });
    };

    return SaleItem;
};
