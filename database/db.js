import { Sequelize } from "sequelize";

const db = new Sequelize ("EsenciaNamu", "Jurgen506_SQLLogin_1", "2yyuwlqwbm" ,
    {
        host: 'EsenciaNamu.mssql.somee.com',
        dialect: 'mssql'
    }
);

export default db;
