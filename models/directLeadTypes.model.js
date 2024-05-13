const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DirectLeadTypes extends Model {
        // static associate({ DirectLeadTypes: DirectLeadTypesModel, Referral, RegisteredStudent }) {
        //     DirectLeadTypes.hasMany(Referral, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'code',
        //         as: 'referrals'
        //     });
        //     Referral.belongsTo(Course, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'code',
        //         as: 'courses'
        //     });
        // }
    }
    DirectLeadTypes.init(
        {
            name: DataTypes.STRING,
        },
        {sequelize, modelName: 'DirectLeadTypes', tableName: 'directLeadTypes',}
    );
    return DirectLeadTypes;
}
