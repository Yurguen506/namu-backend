import PhotographerModel from "../models/PhotographerModel.js"

export const getAllPhotographers = async (req, res) => {

    try {
        const photographers = await PhotographerModel.findAll();
        res.json(photographers);
    } catch (error) {
        res.json ({message : error.message});
    }
}

export const getPhotographerById = async (req , res) => {
    try {
        const photographer = await PhotographerModel.findAll(
            {
                where: {id : req.params.id}
            }
        );
        res.json(photographer)
    } catch (error) {
        res.json ( {message : error.message})
    }

}