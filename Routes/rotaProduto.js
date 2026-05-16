import { Router } from "express";
import ProdutoCtrl from "../Controller/produtoCtrl.js";

const rotaProduto = Router()
const produtoCtrl = new ProdutoCtrl()

rotaProduto.get("/", (req, resp) => produtoCtrl.consultar(req, resp))

export default rotaProduto