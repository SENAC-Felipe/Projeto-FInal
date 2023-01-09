import  express  from 'express';
import {inserir, buscar, deletar, alterar} from '../controllers/livroControllers.js'

const app = express();
app.use(express.json());

//Pagina principal
app.get('/', (req, res) => res.send('Pagina Inicial!'));

//Endpoint de consulta de livros
app.get('/livros', async (req, res) => {
    let livros = await buscar()
    res.status(200).json(livros)
})

//Endpoint de consulta de livro pelo id
app.get('/livros/:id', async (req, res) => {
    let livros = await buscar(req.params.id)    
    res.status(200).json(livros);

})

//Endpoint cadastrar um novo livro
app.post('/livros', async (req, res) => {
    await inserir(req.body)
    res.status(200).send('Livro cadastrado com sucesso!');
})

//Endpoint para atualizar o cadastro de um livro
app.put('/livros/:id', async (req, res) => {
    await alterar(req.params.id, req.body)
    res.status(200).send("Cadastro atualizado")
})


//Endpoint para excluir o cadastro de um novo livro
app.delete('/livros/:id', async(req,res) =>{
    await deletar(req.params.id)
    res.status(200).send("O livro foi excluido com sucesso!")
})

export default app;