const livro = {
    titulo: "Lady Killers Assassinas em série",
    autor: "Tori Telfer",
    ano: "2017",
    resumo: function(){
        return 'titulo:${Lady Killers Assassinas em série.titulo}, autor:${Tori Telfer.autor}, ano: ${2017.ano}';
    }
};
console.log(livro.resumo());