const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carla", nota: 7 },
    { nome: "Diego", nota: 4 },
    { nome: "Elisa", nota: 9 }
];

const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

console.log("Alunos aprovados:");
console.log(filtrarAprovados(alunos));