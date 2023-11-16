import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,  // Use the String constructor here
        required: true
    },
    author: {
        type: String,  // Use the String constructor here
        required: true
    },
    publishYear: {
        type: Number,  // Assuming publishYear is a number, use the Number constructor
        required: true
    }
},
    {
        timestamps: true
    }
);

export const Book = mongoose.model('Book', bookSchema);
