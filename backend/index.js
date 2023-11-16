import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors"
import booksRoutes from "./routes/booksRoutes.js"

const PORT = 5555;
const mongoDBURL = "mongodb+srv://Josphat:Josphat23@book-store.iqrexg1.mongodb.net/books-collection?retryWrites=true&w=majority";

const app = express();

app.use(express.json()); 

app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send("Welcome to MERN");
});

app.use('/books', booksRoutes)



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
