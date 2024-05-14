import express from "express";
import LivroControoler from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroControoler.listarLivros);
routes.get("/livros/:id", LivroControoler.listarLivroPorId);
routes.post("/livros", LivroControoler.cadastrarLivro);
routes.put("/livros/:id", LivroControoler.atualizarLivro);
routes.delete("/livros/:id", LivroControoler.deletarLivro);

export default routes;