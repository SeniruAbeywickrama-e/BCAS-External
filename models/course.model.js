const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        // static associate({ Course: CourseModel, Referral, RegisteredStudent }) {
        //     CourseModel.hasMany(Referral, {
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
    Course.init(
        {
            code: DataTypes.STRING,
            name: DataTypes.STRING,
            referralFee: DataTypes.STRING,
            productTypeId: DataTypes.STRING,
            branchList: DataTypes.STRING
        },
        {sequelize, modelName: 'Course', tableName: 'courses'}
    );
    return Course;
}
