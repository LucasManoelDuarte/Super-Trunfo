var cartaMagoNegro = {
  nome: "Mago Negro",
  imagem: "https://pa1.narvii.com/6282/4d52636e233ee86848b4fa7effc5b2f57497e064_hq.gif",
  atributos: {
    Ataque: 2500,
    Defesa: 2100
  }
}

var cartaDragaoBranco = {
  nome: "Dragão Branco de Olhos Azuis",
  imagem: "https://pa1.narvii.com/5817/3b123cfdb54ac19991279e47da6703fb89498880_hq.gif",
  atributos: {
    Ataque: 3000,
    Defesa: 2500
  }
}

var cartaDragaoNegro  = {
  nome: "Dragão Negro de Olhos Vermelhos",
  imagem: "http://pa1.narvii.com/6353/02eb23dda22f752d03fc5667c1a29775b9ecb036_00.gif",
  atributos: {
    Ataque: 2400,
    Defesa: 1600
  }
}

var cartaPaladinoNegro  = {
  nome: "Paladino Negro",
  imagem: "https://64.media.tumblr.com/755b78ea6d3e9a61a38265dd2f77a865/tumblr_ogwuhyDsZZ1vhdq1jo6_250.gifv",
  atributos: {
    Ataque: 2900,
    Defesa: 2400
  }
}

var cartaDragaoFinal  = {
  nome: "Dragão Final Cibernético",
  imagem: "https://thumbs.gfycat.com/BlackOblongAustraliankestrel-size_restricted.gif",
  atributos: {
    Ataque: 4000,
    Defesa: 2800
  }
}

var cartaChamaAlado  = {
  nome: "Homem Chama Alado",
  imagem: "https://pa1.narvii.com/7180/8aa454e753f39b19b78eb3aa0e419332c3201f49r1-400-302_hq.gif",
  atributos: {
    Ataque: 2100,
    Defesa: 1200
  }
}

var cartaSlifer  = {
  nome: "Slifer, O Dragão Celeste",
  imagem: "https://steamuserimages-a.akamaihd.net/ugc/928183875667708210/617934721897EEEE73BD2CE4A9A21792A69A548C/",
  atributos: {
    Ataque: 10000,
    Defesa: 10000
  }
}

var cartaRosaNegra  = {
  nome: "Dragão da Rosa Negra",
  imagem: "https://i.pinimg.com/originals/4e/c8/87/4ec88794c045157b428518ceb08c1385.gif",
  atributos: {
    Ataque: 2400,
    Defesa: 1600
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMagoNegro, cartaDragaoBranco, cartaDragaoNegro, cartaPaladinoNegro, cartaDragaoFinal, cartaChamaAlado, cartaSlifer, cartaRosaNegra]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidade()

function atualizaPlacar () {
  var divPlacar = document.getElementById("placar")
  var html = "<p>Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina</p>"
  divPlacar.innerHTML = html
}

function atualizaQuantidade () {
  var divQuantidade = document.getElementById("quantidade")
  var html = "<p>Quantidade de cartas no jogo: " + cartas.length + "</p>"
  divQuantidade.innerHTML = html
}

function sortearCarta () {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  
  exibirCartaJogador()
  exibirOpcoes()
}

function exibirCartaJogador () {
  var exibirCarta = document.getElementById("imagens")
  exibirCarta.innerHTML = "<div class='blocoCarta'</div><h2>Carta do Jogador:</h2><h3>" + cartaJogador.nome + "</h3><img src='" + cartaJogador.imagem + "' id='cartasEscolhidas'> <p>Ataque: " + cartaJogador.atributos.Ataque + "</p> <p>Defesa: " + cartaJogador.atributos.Defesa + "</p>"
}

function exibirCartaMaquina () {
  var exibirCarta = document.getElementById("imagens")
  exibirCarta.innerHTML += "<div class='blocoCarta'</div><h2>Carta da Máquina:</h2><h3>" + cartaMaquina.nome + "</h3><img src='" + cartaMaquina.imagem + "' id='cartasEscolhidas'> <p>Ataque: " + cartaMaquina.atributos.Ataque + "</p> <p>Defesa: " + cartaMaquina.atributos.Defesa + "</p>"
}

function exibirOpcoes () {
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado () {
  var radioAtributo = document.getElementsByName("atributo")
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar () {
  var atributoSelecionado = obtemAtributoSelecionado()
  var resultado = document.getElementById("resultado")
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    resultado.innerHTML = "<p>Resultado: Venceu!! O atributo que você escolheu era maior que o atributo da máquina</p>"
    pontosJogador++
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    resultado.innerHTML = "<p>Resultado: Perdeu!! O atributo que você escolheu era menor que o atributo da máquina</p>"
    pontosMaquina++
  } else {
    resultado.innerHTML = "<p>Resultado: Empate!! Os atributos de ambas as cartas eram iguais</p>"
  }
  
    document.getElementById("btnJogar").disabled = true
  
  if (cartas.length == 0) {
    alert("Fim de Jogo")
    document.getElementById("btnResetar").disabled = true
    document.getElementById("btnNovamente").disabled = false
    if (pontosJogador > pontosMaquina) {
      resultado.innerHTML = "<p>Você venceu o jogo contra a máquina!!</p>"
    } else if (pontosJogador < pontosMaquina) {
      resultado.innerHTML = "<p>Você perdeu o jogo contra a máquina!!</p>"
    } else {
      resultado.innerHTML = "<p>Você e a máquina empataram este jogo!!</p>"
    }
  } else {
    document.getElementById("btnResetar").disabled = false
  }
  
  atualizaPlacar()
  exibirCartaJogador()
  exibirCartaMaquina()
  atualizaQuantidade()
  
}

function resetar () {
  var resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""
  
  var htmlVazia = document.querySelector("#imagens")
  htmlVazia.innerHTML = ""
  
  var opcoesVazia = document.querySelector("#opcoes")
  opcoesVazia.innerHTML = ""
  
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnResetar").disabled = true
}

function jogarNovamente () {
  pontosJogador = 0
  pontosMaquina = 0
  cartas = [cartaMagoNegro, cartaDragaoBranco, cartaDragaoNegro, cartaPaladinoNegro, cartaDragaoFinal, cartaChamaAlado, cartaSlifer, cartaRosaNegra]
  
  atualizaPlacar()
  atualizaQuantidade()
  
  var resultado = document.querySelector("#resultado")
  resultado.innerHTML = ""
  
  var htmlVazia = document.querySelector("#imagens")
  htmlVazia.innerHTML = ""
  
  var opcoesVazia = document.querySelector("#opcoes")
  opcoesVazia.innerHTML = ""
  
  document.getElementById("btnNovamente").disabled = true
  document.getElementById("btnSortear").disabled = false
}