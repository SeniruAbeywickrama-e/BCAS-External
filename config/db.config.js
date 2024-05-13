// dev environment
module.exports = {
    HOST: "bcas-dev.c0e2davpoehp.ap-south-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "BcasDev#2023",
    DB: "bcas_stage",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
