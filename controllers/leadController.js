const {
    Leeds,
    DirectLeeds,
    CourseBranch,
    Course,
    User,
    Counsellor,
    DirectLeadTypes,
    EventHistory,
} = require("../models");

const XLSX = require('xlsx');
const {Op} = require("sequelize");
const moment = require('moment-timezone');


const getAllDirectLeads = async (req, res) => {
    try {
        const leads = await DirectLeeds.findAll()
        return res.status(200).json(leads)
    }catch (error){
        console.error('Error in company controller:', error);
        return res.status(500).json({ message: 'Internal Server Error', status: 500 });
    }
}


const convertExcelToJSON = async (req, res) => {
    const base64 = req.body.file;

    const base64ToBuffer = (base64) => {
        try {
            base64 = base64Test(base64);
            return Buffer.from(base64, 'base64');
        } catch (e) {
            throw e;
        }
    };

    const base64Test = (base64) => {
        const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        const _base64 = base64.replace(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9]+).*,/, '');
        if (base64regex.test(_base64)) {
            return _base64;
        }
        return base64;
    };
    // Convert buffer to XLSX Workbook
    const workbook = XLSX.read(base64ToBuffer(base64), { type: 'buffer' });

    const sheetName = workbook.SheetNames[0];

    // Convert the sheet to JSON
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);


    // return res.status(200).json({date : await heee("heloooooo")})

    // Save the database as a "Direct Lead"
    const data_list = [];
    let count = 0
    for(let i=0; i< jsonData.length; i++) {
        const admin = await Counsellor.findOne({where : {userType : 2}})
        jsonData[i].userId = admin !== null ? admin.userId : 62 ;
        data_list.push(jsonData[i])
        const upload = await createDirectLead(jsonData[i]);
        if(upload.code === 500) {
            count = count + 1;
        }
    }

    if(data_list.length > 0){
        if(count === data_list.length){
            return res.status(400).json({
                res : "No data uploaded."
            })
        }else {
            if(count === 0){
                return res.status(200).json({
                    res :"successfully uploaded."
                })
            }else {
                return res.status(200).json({
                    res : "Data uploaded successfully. " + count + " records failed."
                })
            }
        }
    }
}

const createDirectLead = async (eventBody) => {
    const check = await DirectLeeds.findAll({
        where: {
            [Op.and]: [
                { mobile: eventBody.mobile },
                { courseCode: eventBody.courseCode },
            ],
        },
    });

    const findDirectLeadType = await DirectLeadTypes.findOne({where : { id: eventBody.type}})

    if (check.length > 0) {
        return {
            res: "Lead already exists for same mobile and course.",
            code: 500
        };
    }
    const course = await Course.findOne({where: {code: eventBody.courseCode }});
    const branch = await CourseBranch.findOne({where : {id : eventBody.branchId}})

    if(eventBody.mobile === null || eventBody.mobile === "" ){
        return {
            res : "Please enter phone number and resubmit.",
            code : 500
        }
    }
    if(course === null || branch === null) {
        return {
            res : "Invalid data. Recheck the entered course and branch.",
            code : 500
        }
    }
    const response = await DirectLeeds.create({
        name: eventBody.name,
        mobile: eventBody.mobile,
        email: eventBody.email,
        courseCode: eventBody.courseCode,
        branchId: eventBody.branchId,
        nic: eventBody.nic,
        notes: eventBody.notes,
        type : eventBody.type,
        status: eventBody.status,
    })
        .then((res) => ({
            res: res,
        }))
        .catch((err) => ({
            error: err,
            statusCode: err.statusCode || 500,
        }));

    const course_data = await Course.findOne({where : {code : eventBody.courseCode}})
    const counsellor = await Counsellor.findOne({
        where: {
            [Op.and] : [
                {userId: eventBody.userId },
                {userType : 4},
            ]},
    });

    const user = await User.findOne({
        where : {
            id: eventBody.userId,
        }
    })

    const saveOnLeed = await Leeds.create({
        studentId: response.res.id,
        counsellorId: null,
        status: 0,
        source: "Direct",
    })
        .then((res) => ({
            res: {
                message : "Lead created successfully.",
                data : res,
                code : 200
            },
        }))
        .catch((err) => ({
            error: err,
            statusCode: err.statusCode || 500,
        }));
    /*Event History*/
    const history_data = {
        leadId : saveOnLeed.res.data.id,
        counsellorId : null,
        action : user.fullName + " created direct lead ("+findDirectLeadType.name+ ")  " + eventBody.name + " successfully."
    }
    await setEventHistory(history_data);
    return saveOnLeed;
};


const setEventHistory = async (data) => {
    moment.tz.setDefault('Asia/Colombo');

    try {
        await EventHistory.create(
            {
                leadId : data.leadId,
                counsellorId : data.counsellorId,
                action : data.action,
                remark: data.remark,
                createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
                updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
            }
        )
    }catch (err) {
        return {
            err : err,
            code : 500
        }
    }
}


module.exports = {
    getAllDirectLeads,
    convertExcelToJSON,
}
