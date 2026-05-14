export default class Produto{
    #codigo
    #nome 
    #tipo
    #sabor
    #preco
    #imagem

    constructor(codigo, nome, tipo, sabor, preco, imagem){
        this.#codigo = codigo
        this.#nome = nome
        this.#tipo = tipo
        this.#sabor = sabor
        this.#preco = preco
        this.#imagem = imagem
    }

    get codigo(){
        return this.#codigo
    }

    get nome(){
        return this.#nome
    }

    get tipo(){
        return this.#tipo
    }

    get sabor(){
        return this.#sabor
    }

    get preco(){
        return this.#preco
    }
    
    get imagem(){
        return this.#imagem
    }

    set codigo(codigo)  {
        this.#codigo = codigo
    }

    set nome(nome)  {
        this.#codigo = nome
    }

    set tipo(tipo)  {
        this.#tipo = tipo
    }

    set sabor(sabor)  {
        this.#sabor = sabor
    }

    set preco(preco)  {
        this.#preco = preco
    }

    set imagem(imagem)  {
        this.#imagem = imagem
    }

    toJSON(){
        return{
            codigo: this.#codigo,
            nome: this.#nome,
            tipo: this.#tipo, 
            sabor: this.#sabor,
            preco: this.#preco,
            imagem: this.#imagem
        }
    }

    async gravar(){}
    async alterar(){}
    async excluir(){}
    async consultar(){}
}