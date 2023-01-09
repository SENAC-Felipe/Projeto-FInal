import mongoose from 'mongoose';
const { Schema } = mongoose;

// esse é apenas o schema do documento ("tabela")

const livroSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    Genero: {
        type: String,
        required: true
    },
    Editora: {
        type: String,
        required: true
    },
    Autor: {
        type: String,
        required: true
    }
});

export const Livros = mongoose.model('Livros', livroSchema);