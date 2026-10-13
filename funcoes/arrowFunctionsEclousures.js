function criarContador() {
    let cont = 0;
    return () => {
        cont++;
        return cont;
    }
}

const contador = criarContador();
console.log(contador());
console.log(contador());