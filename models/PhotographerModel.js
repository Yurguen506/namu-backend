import db from "../database/db.js";

import { DataTypes } from "sequelize";

const PhotographerModel = db.define('photographer',
    {
        //ID : {type: DataTypes.INTEGER},
        name : {type: DataTypes.STRING},
        lastName : {type: DataTypes.STRING},
        bibliography : {type: DataTypes.STRING},
        email : {type: DataTypes.STRING},
        phone : {type: DataTypes.STRING},
        facebook : {type: DataTypes.STRING},
        instagram : {type: DataTypes.STRING}
    }, 
    {
        timestamps: false,
    }
);

export default PhotographerModel;