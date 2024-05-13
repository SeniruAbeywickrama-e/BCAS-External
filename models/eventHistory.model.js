const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EventHistory extends Model {
        // static associate({EventHistory: EventHistoryModel, Counsellor,Leeds}) {
        //     Leeds.hasMany(EventHistory, {
        //         foreignKey: 'leadId',
        //         targetKey: 'id',
        //         as: 'history'
        //     });
        //     EventHistoryModel.belongsTo(Leeds, {
        //         foreignKey: 'leadId',
        //         targetKey: 'id',
        //         as: 'leads'
        //     });
        //     Counsellor.hasMany(EventHistory ,{
        //         foreignKey : 'counsellorId',
        //         targetKey: 'id',
        //         as: 'history'
        //     })
        //     EventHistoryModel.belongsTo(Counsellor, {
        //         foreignKey: 'counsellorId',
        //         targetKey: 'id',
        //         as : 'counsellor'
        //     })
        // }
    }
    EventHistory.init(
        {
            leadId: DataTypes.NUMBER,
            counsellorId: DataTypes.NUMBER,
            action: DataTypes.STRING,
            remark: DataTypes.STRING,
            createdAt: DataTypes.STRING,
            updatedAt: DataTypes.STRING
        },
        {sequelize, modelName: 'EventHistory', tableName: 'eventHistory', timestamps: false}
    )
    return EventHistory;
}
