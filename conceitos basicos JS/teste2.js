const object = {
chave1: "valor1",chave2: 5,
chave3: "valor3",
chave4: [5, 97],
chave5: {
novaChave1: [5, 97]
},
};

const{ chave4 } = object;
console.log(chave4);

const array = [5, 25, "texto1", "texto2", [5, 97]];

const [valor1, valor2] = array;

console.log(valor2);
