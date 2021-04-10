var valorEmDolar = prompt("Valor em Dólar:")

var valorEmReal = parseFloat(valorEmDolar) * 5.84

var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)