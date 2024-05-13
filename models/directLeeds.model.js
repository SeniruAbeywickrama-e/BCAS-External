const { Model } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    class DirectLeeds extends Model {
        // static associate({ DirectLeeds: DirectLeedsModel, DirectLeadTypes }) {
        //     DirectLeadTypes.hasMany(DirectLeeds, {
        //         foreignKey: 'type',
        //         targetKey: 'id',
        //         as: 'd_leeds'
        //     });
        //     DirectLeedsModel.belongsTo(DirectLeadTypes, {
        //         foreignKey: 'type',
        //         targetKey: 'id',
        //         as: 'types'
        //     });
        // }
    }
    DirectLeeds.init(
        {
            name: DataTypes.NUMBER,
            mobile: DataTypes.STRING,
            email: DataTypes.STRING,
            courseCode: DataTypes.STRING,
            branchId: DataTypes.NUMBER,
            nic: DataTypes.NUMBER,
            notes: DataTypes.NUMBER,
            type: DataTypes.NUMBER,
            status: DataTypes.NUMBER,
        },
        {sequelize, modelName: 'DirectLeeds', tableName: 'directLeeds', timestamps: false}
    )
    return DirectLeeds;
}
