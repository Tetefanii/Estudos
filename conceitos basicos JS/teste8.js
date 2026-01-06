const array = [5, 25, "texto1", "texto2"];

const array2 = array.map((elementoAtual) => elementoAtual);

const array3 = array.filter((elementoAtual) => typeof elementoAtual ==="number");

console.log(array3);