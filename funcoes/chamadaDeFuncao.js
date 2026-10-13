// Chamada direta
// function saudar(nome) {
//     console.log("Olá " + nome + "!")
// }
// saudar("Ana");
// --------------------------------------------

// Chamada como método
// const pessoa = {
//     nome : "Carlos",
//     cumprimentar() {
//         console.log("Olá, eu sou " + this.nome)
//     }
// }
// pessoa.cumprimentar()
// --------------------------------------------


// Chamada com operador new
// function Carro(marca) {
//     this.marca = marca;
// }
// const meuCarro = new Carro("Toyota")
// --------------------------------------------


// Chamada com funções de retorno (callbacks)
function executarComCallback(callback) {
    console.log("Antes do callback")
    callback()
    console.log("Depois do callback")
}
executarComCallback(() => {
    console.log("Callback executado")
})