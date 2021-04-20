var numeroSecreto = parseInt(Math.random() * 10)

var tentativas = 3

document.write("<h2>" + " " + "</h2>")

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 0 a 10"))
  
  if (numeroSecreto == chute) {
    document.write("<h2>" + " " + "</h2>")
    document.write("<h2>" + "Acertou." + "</h2>")
    break
  } else if (chute > numeroSecreto) {
    document.write("<h2>" + "O numero secreto é menor" + "</h2>")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    document.write("<h2>" + "O numero secreto é maior" + "</h2>")
    tentativas = tentativas - 1
  } 
}

if (chute != numeroSecreto) {
  document.write("<h2>" + "O numero secreto era " + numeroSecreto + "</h2>")
}
