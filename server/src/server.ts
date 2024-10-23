import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import path from 'path';

const app = express();

dotenv.config();

const PORT = process.env.PORT;

const filePath = path.join(__dirname, '/api/cars.json');

app.get('/', (req, res) => {
    res.send("Welcome to my cars API");
})

app.get('/cars', (req, res) => {
    res.sendFile(filePath);
})

app.listen(PORT, () => {
    console.log("Listening on port "+PORT)
})