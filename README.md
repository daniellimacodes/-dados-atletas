# Projeto - Avaliação de Atletas

Este projeto em JavaScript recebe informações de um atleta, calcula alguns parâmetros e exibe os resultados no console.

A aplicação foi desenvolvida para praticar conceitos de lógica de programação, classes e manipulação de arrays.

## 📌 Objetivo

O sistema recebe as informações de um atleta:

- Nome
- Idade
- Peso
- Altura
- Notas obtidas na avaliação

Com base nesses dados, o programa calcula alguns parâmetros importantes e exibe o resultado no console.

## ⚙️ Tecnologias utilizadas

- JavaScript
- Classes e métodos
- Métodos de array (`sort`, `splice`, `forEach`)
- Template strings

## 🧠 Lógica utilizada

1. Os dados do atleta são armazenados em uma classe chamada `Atleta`
2. A categoria do atleta é definida de acordo com a idade
3. O IMC é calculado utilizando peso e altura
4. As notas são ordenadas usando `sort()`
5. As duas menores notas são removidas com `splice()`
6. As notas restantes são somadas e a média válida é calculada
7. Os resultados são exibidos no console

## 📊 Informações exibidas

O programa mostra no console:

- Nome do atleta
- Idade
- Peso
- Altura
- Notas obtidas
- Categoria do atleta
- IMC calculado
- Média válida das notas

## ▶️ Como executar

1. Instale o Node.js
2. Clone o repositório
3. Abra o terminal na pasta do projeto
4. Execute o arquivo JavaScript com:
node index.js
