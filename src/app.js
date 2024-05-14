import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("erro", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express();
routes(app);


export default app;

// mongodb+srv://<username>:<password>@cluster0.h5qqoet.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0