
import * as fs from 'fs'
import ImageModel from '../models/ImageModel.js';


export const previewPlacesImages = async (req , res) => {
    try {
        const place = await ImageModel.findAll(
            {
                where : { idPlace : req.params.id }
            }
        )
        res.json (place);
    } catch (error) {
        res.json ( {message : error.message})
    }
}

// export const uploadBlogImage = async (req, res) => {
//     try {
//       console.log(req);
//       if (req.file == undefined) {
//         return res.send(`You must select a file.`);
//       }
//       await BlogModelImages.create({
//         blog_id : req.params.id ,
//         type: req.file.mimetype,
//         name: req.file.originalname,
//         data: fs.readFileSync(
//           "uploads/" + req.file.filename
//         )
//       })
//       res.json ({message : "Registro creado"});

//     } catch (error) {
//       console.log(error);
//       return res.send(`Error when trying upload images: ${error}`);
//     }
//   };

