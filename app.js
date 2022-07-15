import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import routes from './routes/routes.js';

const app = express()

app.use (cors())
app.use (express.json())

// app.use ("/places", routes)
//     try {
//         await db.authenticate()
//         console.log ("connected succesfully to DB")
//     } catch (error) {
//         console.log("There was an error while trying to connect to DB: {error}")
//     }
//     app.get("/", (req, res) => {
//         res.send ("Hello world")
// })

app.use ("/api", routes)
    try {
        await db.authenticate()
        console.log ("connected succesfully to DB")
    } catch (error) {
        console.log("There was an error while trying to connect to DB: {error}")
    }
    app.get("/", (req, res) => {
        res.send ("Hello world")
})

app.listen (8000, () => {
    console.log("Server up running in http://localhost:8000/")
})
