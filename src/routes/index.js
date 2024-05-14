import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

    app.use(express.json(), livros);//middleware conver o objeto em modelo json

};

export default routes;