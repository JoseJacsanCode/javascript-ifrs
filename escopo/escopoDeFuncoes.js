// ESCOPO DE FUNÇÃO
// function minhaFuncao() {
//     const x = 10;
//     console.log(x);
// }

// minhaFuncao();
// console.log(x);

// ----------------------------------
// ESCOPO GLOBAL
// const y = 20;

// function outraFuncao() {
//     console.log(y);
// }
// outraFuncao();
// -----------------------------------


// ESCOPO DE BLOCO
// function bloco() {
//     if(true) {
//         let x = 10;
//         console.log(x);
//     }
// }

// console.log(x);
// -----------------------------------

//HOISTING
// function exemplo() {
//     console.log(a);
//     var a = 10;
//     console.log(a);
// }
// exemplo();
// -----------------------------------

// ESCOPO LÉXICO
function funcaoExterna() {
    const valor = "externo";

    function funcaoInterna() {
        console.log(valor);
    }

    return funcaoInterna;
}
const minhaFuncao = funcaoExterna();
minhaFuncao();
