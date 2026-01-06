//console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

const numero = 4;
const numeroDecimal = 3.1415;
const texto = "Olá, Mundo!";
// console.log(numeroDecimal);

const array = [5, 25, "texto1", "texto2", [5, 97]];
const array2 = array;
array2[3] = "AAAAAA";
console.log(array);
console.log(array2);

const object = {
chave1: "valor1",chave2: 5,
chave3: "valor3",
chave4: [5, 97],
chave5: {
novaChave1: [5, 97]
},
};