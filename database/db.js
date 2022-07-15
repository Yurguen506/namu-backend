import { Sequelize } from "sequelize";

const db = new Sequelize ("db_a8a328_esencianamu", "db_a8a328_esencianamu_admin", "EsenciaNamu123!" ,
    {
        host: 'sql5080.site4now.net',
        dialect: 'mssql'
    }
);

export default db;
