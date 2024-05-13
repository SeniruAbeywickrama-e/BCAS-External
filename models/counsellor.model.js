const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Counsellor extends Model {
        // static associate({ Counsellor: CounsellorModel, User, CourseBranch }) {
        //     User.hasOne(Counsellor, {
        //         foreignKey: 'userId',
        //         targetKey: 'id',
        //         as: 'counsellors'
        //     })
        //     CounsellorModel.belongsTo(User, {
        //         foreignKey: 'userId',
        //         targetKey: 'id',
        //         as: 'users'
        //     })
        //     CourseBranch.hasMany(Counsellor, {
        //         foreignKey : 'location',
        //         targetKey: 'id',
        //         as : 'counsellor_l'
        //     })
        //     Counsellor.belongsTo(CourseBranch, {
        //         foreignKey : 'location',
        //         targetKey: 'id',
        //         as : 'branches'
        //     })
        // }
    }
    Counsellor.init(
        {
            userId: DataTypes.STRING,
            productType: DataTypes.STRING,
            location: DataTypes.STRING,
            userType: DataTypes.STRING
        },
        {sequelize, modelName: 'Counsellor', tableName: 'counsellors'}
    );
    return Counsellor;
}
