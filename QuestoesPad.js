function digaOla(text) {
  return `Olá, ${text}!`
}

function operador(num1, num2, callback) {
  console.log(callback(num1, num2))
}

function DivisibilidadeVerif(num, callback) {
  const callbackNumber = callback()

  return num % callbackNumber === 0
}

function NumParaStringMeses(num) {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return months[num - 1]
}

function MaiorOuIgualVerificar(n1, n2, callback) {
  return callback(n1, n2)
}
