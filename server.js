import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors'
import path from 'path'

// DB structure
import Cards from './dbCards.js';

// App Config

const app = express();

const connection_URL = `mongodb+srv://admin:admin123@cluster0.tmebu.mongodb.net/tinderClonedb-?retryWrites=true&w=majority` // data BASE URL

// Middlewres
app.use(express.json());
app.use(Cors())
// DB config
mongoose.connect(connection_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

})

// API Endpoints

app.get('/', (req, res) =>
    res.status(200).send("IDEMOOO")
) // root of our edpoints

app.post('/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('tinder-frontend/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'tinder-frontend', 'build', 'index.html'))

    })
}
const port = process.env.port || 8001;

// Listener
app.listen(port, () => console.log(`listning on localhost ${port}`));

