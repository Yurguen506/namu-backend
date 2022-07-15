import db from "../database/db.js";



import { DataTypes } from "sequelize";

const PlaceModel = db.define('place',
    {
        //ID : {type: DataTypes.INTEGER},
        name : {type: DataTypes.STRING},
        description : {type: DataTypes.STRING},
        priceEntry : {type: DataTypes.STRING},
        schedule : {type: DataTypes.STRING},
        idCoordinate : {type: DataTypes.INTEGER}
    }, 
    {
        timestamps: false,
    }
);

export default PlaceModel;