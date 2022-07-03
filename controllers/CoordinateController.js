import CoordinateModel from "../models/PhotographerModel.js"

export const getAllCoordinates = async (req, res) => {

    try {
        const coordinates = await CoordinateModel.findAll();
        res.json(coordinates);
    } catch (error) {
        res.json ({message : error.message});
    }
}

export const getCoordinateById = async (req , res) => {
    try {
        const coordinate = await CoordinateModel.findAll(
            {
                where: {id : req.params.id}
            }
        );
        res.json(coordinate)
    } catch (error) {
        res.json ( {message : error.message})
    }

}