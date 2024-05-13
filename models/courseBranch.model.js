const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseBranch extends Model {
        static associate({ CourseBranch: CourseBranchModel, User, Counsellor, RegisteredStudent }) {
            CourseBranchModel.belongsTo(User, {
                foreignKey: 'branchAdmin',
                targetKey: 'id',
                as: 'users'
            });
            User.hasMany(CourseBranch, {
                foreignKey: 'branchAdmin',
                targetKey: 'id',
                as: 'courseBranches',
            });
            CourseBranchModel.hasOne(Counsellor, {
                foreignKey: 'location',
                targetKey: 'id',
                as: 'counsellors',
            });
            Counsellor.belongsTo(CourseBranch, {
                foreignKey: 'location',
                targetKey: 'id',
                as: 'courseBranches',
            })
        }
    }
    CourseBranch.init({
        branchCode: DataTypes.STRING,
        branchName: DataTypes.STRING,
        branchLocation: DataTypes.STRING,
        branchAdmin: DataTypes.NUMBER
    },
    {sequelize, modelName: 'CourseBranch', tableName: 'courseBranches'})
    
    return CourseBranch;
}
