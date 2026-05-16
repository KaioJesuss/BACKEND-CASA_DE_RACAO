import { Router } from "express";
import DFCtrl from "../Controller/dfCTRL.js";

const rotaDF = Router()
const dfCtrl = new DFCtrl()

rotaDF.get("/", dfCtrl.obterCardProdutos)
rotaDF.post("/", dfCtrl.processarIntents)

export default rotaDF;