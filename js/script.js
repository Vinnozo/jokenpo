function jogar(){
idade = prompt("Digite sua Idade")
 if( idade < 18) {
   alert("sem permissao de acesso")
} 

if( idade >= 18) {
  alert ("bem vindo ao jogo")
  escolhadojogador  = prompt("1 para Pedra, 2 para Papel, 3 para Tesoura")
  escolhacomputador = Math.floor(Math.random() * 3) + 1;
  
  // JOGADOR = PEDRA, COMPUTADOR = PEDRA -> EMPATE
  // JOGADOR = PAPEL, COMPUTADOR = PAPEL -> EMPATE
  // JOGADOR = TESOURA, COMPUTADOR = TESOURA -> EMPATE
  
  
  // JOGADOR = PEDRA, COMPUTADOR = TESOURA -> JOGADOR VENCE
  // JOGADOR = PEDRA, COMPUTADOR = PAPEL -> COMPUTADOR VENCE 
  
  // JOGADOR = PAPEL, COMPUTADOR = PEDRA -> JOGADOR VENCE
  // JOGADOR = PAPEL, COMPUTADOR = TESOURA -> COMPUTADOR VENCE
  
  // JOGADOR = TESOURA, COMPUTADOR = PAPEL -> JOGADOR VENCE
  // JOGADOR = TESOURA, COMPUTADOR = PEDRA -> COMPUTADOR VENCE
  
  if (escolhadojogador == escolhacomputador) 
   alert("Jogo empatado")
   
}

if (escolhadojogador == 1) {  //jogador jogando Pedra
  if(escolhacomputador == 2)
    alert("computador Wins!")
  if(escolhacomputador == 3)
    alert("jogador WINS!")
}

if (escolhadojogador ==2 ) { //jogador escolhe Papel
  if(escolhacomputador ==1)
    alert("jogador Wins!")
  if(escolhacomputador ==3)
    alert("compurtador Wins")
}
  
if (escolhadojogador == 3)  {  //jogador escolhe tesoura
  if(escolhacomputador ==2)
    alert("jogador Wins!")
  if(escolhacomputador ==1)
    alert("computador Wins!")

  
}

alert("escolha do computador foi " + escolhacomputador)

}