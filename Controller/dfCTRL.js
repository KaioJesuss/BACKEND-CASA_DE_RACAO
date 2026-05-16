import obterCardsProdutos from "../DialogFlow/funcoes.js"
import { apresentarMenu } from "../DialogFlow/funcoes.js"

export default class DFCtrl {

    obterCardProdutos(req, resp) {

        if (req.method !== "GET") {
            resp.status(405).json({
                status: false,
                mensagem: "Método não permitido"
            })
            return
        }

        obterCardsProdutos()
            .then((cards) => {
                resp.status(200).json(cards)
            })
            .catch((erro) => {
                resp.status(500).json({
                    status: false,
                    mensagem: erro.message
                })
            })
    }

    async processarIntents(req, resp) {

        if (req.method == "POST" && req.is("application/json")) {
            const dados = req.body
            let origem = dados?.originalDetectIntentRequest?.source || "custom"
            const intencao = dados?.queryResult?.intent?.displayName || ""
        
            let resposta = {}

            switch (intencao) {
                case "VER_MENU-SIM":
                    resposta = await apresentarMenu(origem)
                    break

                default:
                    resposta = {
                        fulfillmentText: "Não entendi sua solicitação."
                    }
            }

            resp.json(resposta)
        }
        else {
            resp.status(405).json({
                status: false,
                mensagem: "Método não permitido"
            })
        }
    }
}