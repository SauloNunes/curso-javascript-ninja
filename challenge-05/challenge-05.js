/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const arr = [1, 3, 5, 14, 33]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function vetor (arg) { return arg }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(vetor(arr)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function valorArray (arr, i) {
  return arr[i]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arr2 = [34, 78, 'teste', { objeto: { nome: 'objeto', tamanho: 1 } }, [1, 2, 3, 4, 5]]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(valorArray(arr2, 0))
console.log(valorArray(arr2, 1))
console.log(valorArray(arr2, 2))
console.log(valorArray(arr2, 3))
console.log(valorArray(arr2, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nome) {
  const livro = {
    'O Retrato de Dorian Gray': {
      quantidadePaginas: 200,
      autor: 'Oscar Wilde',
      editora: 'Moderna'
    },
    'O Retorno do Rei': {
      quantidadePaginas: 500,
      autor: 'Tolkien',
      editora: 'Brasil'
    },
    'Harry Potter': {
      quantidadePaginas: 400,
      autor: 'JK Rowling',
      editora: 'Abril'
    }
  }
  return !nome ? livro : livro[nome]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro O Retrato de Dorian Gray tem ${book('O Retrato de Dorigan Gray').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Harry Potter é ${book('Harry Potter').autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro O Retorno do Rei foi publicado pela editora ${book('O Retorno do Rei').editora}.`)
