import { Livros } from "../models/livroModel.js";


export async function inserir(objeto) {
    const livro = new Livros(objeto);
    try {
        await livro.save();
    } catch (error) {
        console.error(error)
    }
}

export async function buscar(id) {
    if (!id) {
        return Livros.find();
    } else {
        let livro = await Livros.findOne({ _id: id });
        return livro;
    }
}

export async function deletar(id) {
    try {
        await Livros.findOneAndDelete({ _id: id });
    } catch (error) {
        console.error(error);
    }
}

export async function alterar(id, objeto) {
    try {
        await Livros.findOneAndUpdate({ _id: id }, objeto);
    } catch (error) {
        console.error(error);
    }
}