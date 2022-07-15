import db from "../database/db.js";

import { DataTypes } from "Sequelize";

const CoordinateModel = db.define('coordinate',
    {
        //ID : {type: DataTypes.INTEGER},
        latitude : {type: DataTypes.STRING},
        longitude : {type: DataTypes.STRING}
    }, 
    {
        timestamps: false,
    }
);

export default CoordinateModel;