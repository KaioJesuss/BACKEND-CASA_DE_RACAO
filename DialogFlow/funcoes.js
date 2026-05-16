import ProdutoDB from "../DB/produtoDb.js"

export function criarCardMessage(item) {
    return {
        card: {
            title: item.produto,
            subtitle:
                `Marca: ${item.marca}\n` +
                `Peso: ${item.peso}\n` +
                `Preço: R$ ${item.preco}`,
            buttons: [
                {
                    text: "Comprar",
                    postback: item.produto
                }
            ]
        }
    }
}

export default async function obterCardsProdutos() {
    const cards = []
    const produtoDB = new ProdutoDB()
    const listaProdutos = await produtoDB.consultar()

    for (const item of listaProdutos) {
        cards.push(criarCardMessage(item))
    }

    return cards
}

export async function apresentarMenu(origem = "custom") {
    const resposta = {
        fulfillmentMessages: []
    }

    try {
        const cards = await obterCardsProdutos()
        resposta.fulfillmentMessages.push({
            text: {
                text: ["Confira nossas rações disponíveis 🐶🐱🐦🐠"]
            }
        })
        resposta.fulfillmentMessages.push(...cards)
    }
    catch (erro) {
        resposta.fulfillmentMessages.push({
            text: {
                text: [
                    "Não foi possível acessar os produtos.",
                    erro.message
                ]
            }
        })
    }

    return resposta
}