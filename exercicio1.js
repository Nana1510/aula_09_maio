const aluno = {
    nome: "Nana",
    idade : 16,
    curso: "Desenvolvimento de sistemas",
    disciplinas: ["Banco de Dados, Analise e projeto de sistemas"]
};

for (let chave in aluno) {
    console.log(chave + ": " + aluno[chave]);
  }
  

