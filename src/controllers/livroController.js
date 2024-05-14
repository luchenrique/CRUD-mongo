import livro from "../models/Livro.js";

class LivroControoler {

    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição.`});
        }
    };

    static async listarLivroPorId (req, res) {
        try{
            const id = req.params.id // parametro da rota
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro`});
        }
    };

    static async cadastrarLivro (req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", livro: novoLivro }); // 201 regristro criado
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro!`});
        }
    }

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id // parametro da rota
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao atualizar livro`});
        }
    };

    static async deletarLivro (req, res) {
        try{
            const id = req.params.id // parametro da rota
            await livro.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Livro deletado!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao deletar livro`});
        }
    };   

};

export default LivroControoler;
