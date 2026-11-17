// function saudar(nome) {
//     console.log("Olá, " + nome + "!")
// } 
// saudar("José")

// function adicionarDez(x) {
//     x += 10;
// }

// let numero = 5;
// adicionarDez(numero);
// console.log(numero);

// function alterarPropriedade(obj) {
//     obj.nome = "Maria";
// }

// let pessoa = { nome : "João"};
// alterarPropriedade(pessoa);
// console.log(pessoa.nome);

// function saudar(nome = "visitante") {
//     console.log("Olá " + nome);
// }

// saudar();
// saudar("Ana");

// function somar(...numeros) {
//     return numeros.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(somar(1, 2, 3));
// console.log(somar(5, 10, 15, 20));

function mostrar(nome, ...outros) {
    console.log("Nome: ", nome);
    console.log("Outros: ", outros);
}

mostrar("Alice", "Bob", "Charlie");