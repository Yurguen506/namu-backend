import PlaceModel from "../models/PlaceModel.js"

export const getAllPlaces = async (req, res) => {

    try {
        const places = await PlaceModel.findAll();
        res.json(places);
    } catch (error) {
        res.json ({message : error.message});
    }
}

export const getPlaceById = async (req , res) => {
    try {
        const place = await PlaceModel.findAll(
            {
                where: {id : req.params.id}
            }
        );
        res.json(place)
    } catch (error) {
        res.json ( {message : error.message})
    }

}