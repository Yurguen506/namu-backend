import { Sequelize } from "Sequelize";

const db = new Sequelize ("EsenciaNamu", "sa", "." ,
    {
        host: 'localhost',
        dialect: 'mssql'
    }
);

export default db;