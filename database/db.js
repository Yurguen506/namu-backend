import { Sequelize } from "Sequelize";

const db = new Sequelize ("EsenciaNamu", "root", "." ,
    {
        host: 'localhost',
        dialect: 'mssql'
    }
);

export default db;