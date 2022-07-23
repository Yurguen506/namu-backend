import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ImagesModel = db.define('images',
    {
        //ID : {type: DataTypes.INTEGER},
        idPlace : {type: DataTypes.INTEGER},
        idPhotographer : {type: DataTypes.INTEGER},
        image : {type: DataTypes.STRING}
    }, 
    {
        timestamps: false,
    }
);

export default ImagesModel;