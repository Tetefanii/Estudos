export const array = [5, 25, "texto1", "texto2", [5, 97]];
const array2 = [...array];
array2[3] = "AAAAAA";

console.log(array2);
console.log(array);

const object = {
chave1: "valor1",chave2: 5,
chave3: "valor3",
chave4: [5, 97],
chave5: {
novaChave1: [5, 97]
},
};

export const object2 = {object};
console.log(object2);