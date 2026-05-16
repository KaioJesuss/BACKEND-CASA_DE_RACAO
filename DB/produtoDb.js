import obterConexao from "./conexao.js";
import Produto from "../Model/produto.js";

export default class ProdutoDB {

    async gravar(produto) {}
    async alterar(produto) {}
    async excluir(produto) {}

    async consultar() {

        const conexao = await obterConexao()

        const sql = 'SELECT * FROM produtos_racoes'

        const [linhas] = await conexao.query(sql)

        const listaProdutos = []

        for (const linha of linhas) {

            const produto = new Produto(
                linha.id,
                linha.categoria,
                linha.marca,
                linha.produto,
                linha.peso,
                linha.preco,
                linha.estoque
            )

            listaProdutos.push(produto)
        }

        return listaProdutos
    }
}