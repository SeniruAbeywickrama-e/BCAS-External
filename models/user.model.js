const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        // static associate({ User: UserModel, Referral, BankDetails }) {
        //     UserModel.hasMany(Referral, {
        //         foreignKey: 'userId',
        //         targetKey: 'id',
        //         as: 'referrals'
        //     });
        //     Referral.belongsTo(User, {
        //         foreignKey: 'userId',
        //         targetKey: 'id',
        //         as: 'users'
        //     });
        //     UserModel.hasMany(BankDetails , {
        //         foreignKey: 'userId',
        //         targetKey: 'id',
        //         as: 'bankDetails'
        //     });
        //     BankDetails.belongsTo(User , {
        //         foreignKey: 'userId',
        //         targetKey: 'id',
        //         as: 'users'
        //     })
        // }
    }
    User.init({
        fullName: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        userType: DataTypes.NUMBER,
        mobile: DataTypes.NUMBER,
        status: DataTypes.NUMBER
    }, { sequelize, modelName: 'User', tableName: 'users' }
    );
    return User;
}
