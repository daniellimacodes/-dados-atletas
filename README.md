🏅 Avaliação de Atletas

Este projeto é uma aplicação em JavaScript que desenvolvi para receber informações de um atleta, calcular alguns parâmetros e exibir os resultados no console.

O objetivo era praticar lógica de programação, trabalhar com classes, métodos e arrays, e criar algo que pudesse ser reutilizado para mais de um atleta.

⚡ Como funciona

Criei uma classe chamada Atleta, que funciona como um molde para armazenar os dados de cada atleta e calcular os parâmetros necessários. Cada atleta possui:

🧑‍💼 Dados: nome, idade, peso, altura e notas

⚙️ Métodos para:

Calcular a categoria de acordo com a idade

Calcular o IMC

Calcular a média válida das notas, descartando as duas menores

Depois de criar um objeto do atleta, usei os métodos da classe para exibir todas as informações no console usando template strings.

💻 Código principal

Exemplo de criação de atleta:

const atleta = new Atleta("Daniel Lima", 30, 82, 1.77, [5.6, 8.5, 7, 9.6, 8]);

Exibição das informações:

console.log(`
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.altura}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC().toFixed(2)}
Média válida: ${atleta.obtemMediaValida().toFixed(1)}
`);
📊 Exemplo de saída
Nome: Daniel Lima
Idade: 30
Peso: 82
Altura: 1.77
Notas: 5.6,8.5,7,9.6,8
Categoria: Adulto
IMC: 26.17
Média válida: 8.4
🧠 O que aprendi

🏗️ Criar classes e objetos para organizar dados e funções

📊 Trabalhar com arrays: ordenar, remover elementos e calcular média

🔧 Usar funções e métodos para cálculos específicos

📝 Formatar números com toFixed() e exibir informações de forma clara

🎯 Objetivo do projeto

O projeto foi feito para treinar lógica de programação e manipulação de dados aplicados a um caso real: a avaliação de atletas.
A ideia é que seja fácil adicionar novos atletas e calcular os parâmetros automaticamente.