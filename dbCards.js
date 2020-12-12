// structure of cardSchema that is send and recived

import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
})

export default mongoose.model('Cards', cardSchema);