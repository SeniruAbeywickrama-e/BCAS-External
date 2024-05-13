const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Leeds extends Model {
        // static associate({Leeds:
        //     LeedModel, SocialMediaLeeds, DirectLeeds,
        //     Referral, Course, BranchLocation,CourseBranch,User,Counsellor,QualifiedDroppedOptions
        // }){
        //     SocialMediaLeeds.hasOne(Leeds, {
        //         foreignKey: 'studentId',
        //         targetKey: 'id',
        //         as: 'leeds'
        //     });
        //     DirectLeeds.hasOne(Leeds,{
        //         foreignKey: 'studentId',
        //         targetKey: 'id',
        //         as: 'd_leeds'
        //     });
        //     Referral.hasOne(Leeds,{
        //         foreignKey: 'studentId',
        //         targetKey: 'id',
        //         as: 'r_leeds'
        //     });
        //     LeedModel.belongsTo(SocialMediaLeeds, {
        //         foreignKey: 'studentId',
        //         targetKey: 'id',
        //         as: 'social_leeds'
        //     });
        //     LeedModel.belongsTo(DirectLeeds, {
        //         foreignKey: 'studentId',
        //         targetKey: 'id',
        //         as: 'direct_leeds'
        //     })
        //     LeedModel.belongsTo(Referral, {
        //         foreignKey: 'studentId',
        //         targetKey: 'id',
        //         as: 'referral_leeds'
        //     })
        //
        //
        //     Course.hasMany(SocialMediaLeeds, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'course',
        //         as: 'social_leeds'
        //     })
        //     SocialMediaLeeds.belongsTo(Course, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'code',
        //         as: 'courses'
        //     })
        //     Course.hasMany(DirectLeeds, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'course',
        //         as: 'direct_leeds'
        //     })
        //     DirectLeeds.belongsTo(Course, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'code',
        //         as: 'd_courses'
        //     })
        //     Course.hasMany(Referral, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'course',
        //         as: 'referral_leeds'
        //     })
        //     Referral.belongsTo(Course, {
        //         foreignKey: 'courseCode',
        //         targetKey: 'code',
        //         as: 'r_courses'
        //     })
        //
        //     CourseBranch.hasMany(SocialMediaLeeds,{
        //         foreignKey: 'branchId',
        //         targetKey: 'id',
        //         as: 'social_leeds_locations'
        //     })
        //     SocialMediaLeeds.belongsTo(CourseBranch,{
        //         foreignKey: 'branchId',
        //         targetKey: 'id',
        //         as: 'locations'
        //     })
        //     CourseBranch.hasMany(DirectLeeds,{
        //         foreignKey: 'branchId',
        //         targetKey: 'id',
        //         as: 'direct_leeds_locations'
        //     })
        //     DirectLeeds.belongsTo(CourseBranch,{
        //         foreignKey: 'branchId',
        //         targetKey: 'id',
        //         as: 'd_locations'
        //     })
        //     CourseBranch.hasMany(Referral,{
        //         foreignKey: 'branchId',
        //         targetKey: 'branchCode',
        //         as: 'referral_leeds_locations'
        //     })
        //     Referral.belongsTo(CourseBranch,{
        //         foreignKey: 'branchId',
        //         targetKey: 'branchCode',
        //         as: 'r_locations'
        //     })
        //     LeedModel.belongsTo(Counsellor, {
        //         foreignKey: 'counsellorId',
        //         targetKey: 'id',
        //         as: 'lead_counsellor'
        //     });
        //     Counsellor.hasMany(Leeds, {
        //         foreignKey: 'counsellorId',
        //         targetKey: 'id',
        //         as: 'leeds'
        //     });
        //     Leeds.hasOne(QualifiedDroppedOptions, {
        //         foreignKey: 'leadId',
        //         targetKey: 'id',
        //         as: 'options'
        //     });
        //     QualifiedDroppedOptions.belongsTo(Leeds, {
        //         foreignKey: 'leadId',
        //         targetKey: 'id',
        //         as: 'leads'
        //     });
        // }
    }
    Leeds.init(
        {
            counsellorId: DataTypes.NUMBER,
            studentId: DataTypes.NUMBER,
            status: DataTypes.NUMBER,
            source: DataTypes.STRING,
            priority : DataTypes.NUMBER,
        },
        {sequelize, modelName: 'Leeds', tableName: 'leeds'}
    )
    return Leeds;
}
