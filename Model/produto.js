import ProdutoDB from "../DB/produtoDb.js"

export default class Produto {

    #codigo
    #categoria
    #marca
    #produto
    #peso
    #preco
    #estoque

    constructor(codigo, categoria, marca, produto, peso, preco, estoque) {
        this.#codigo = codigo
        this.#categoria = categoria
        this.#marca = marca
        this.#produto = produto
        this.#peso = peso
        this.#preco = preco
        this.#estoque = estoque
    }

    get codigo() {
        return this.#codigo
    }

    get categoria() {
        return this.#categoria
    }

    get marca() {
        return this.#marca
    }

    get produto() {
        return this.#produto
    }

    get peso() {
        return this.#peso
    }

    get preco() {
        return this.#preco
    }

    get estoque() {
        return this.#estoque
    }

    toJSON() {
        return {
            codigo: this.#codigo,
            categoria: this.#categoria,
            marca: this.#marca,
            produto: this.#produto,
            peso: this.#peso,
            preco: this.#preco,
            estoque: this.#estoque
        }
    }

    async gravar() {}
    async alterar() {}
    async excluir() {}

    async consultar() {
        const produtoDB = new ProdutoDB()
        return await produtoDB.consultar()
    }
}