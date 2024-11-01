// Função que retorna um número inteiro aleatório entre min e max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para rolar os dados para o Banker e o Player
function rolarDado() {
  // banker
  let bankerDado1 = getRandomInt(1, 6);
  let bankerDado2 = getRandomInt(1, 6);

  // player
  let playerDado1 = getRandomInt(1, 6);
  let playerDado2 = getRandomInt(1, 6);

  // soma
  let bankerSum = bankerDado1 + bankerDado2;
  let playerSum = playerDado1 + playerDado2;

  // Retornar as somas para uso na função banca
  return {
    bankerSum: bankerSum,
    playerSum: playerSum
  };
}

// Função de banca para calcular o saldo após a aposta
function banca() {
  // saldo inicial
  let saldo = 50;
  // aposta
  let aposta = 10;

  // Repetir x vezes a entrada
  for (let i = 0; i < 1; i++) {
    // Verificar se o saldo é suficiente para a aposta
    if (saldo < aposta) {
      console.log("Saldo insuficiente!");
      break;
    }

    // Mostrar quais foram a entrada simplificado
    console.log(`Rodada ${i + 1}: Aposta: ${aposta} Saldo: ${saldo}`);
    
    // Obter o resultado dos dados
    const { bankerSum, playerSum } = rolarDado();
    
    // Escolher aleatoriamente entre Banker (1), Tie (2), e Player (3)
    let escolha = getRandomInt(1, 3);
    
    // Mostrar a escolha
    console.log(`Escolha: ${escolha === 1 ? "Banker" : escolha === 2 ? "Tie" : "Player"}`);
    
    // Verificar o resultado da aposta e ajustar o saldo
    if (escolha === 1 && bankerSum > playerSum) {
      saldo += aposta;
      console.log("✔ - Banker wins!");
    } else if (escolha === 2 && bankerSum === playerSum) {
      saldo += aposta * 8;
      console.log("✔ - It's a Tie!");
    } else if (escolha === 3 && playerSum > bankerSum) {
      saldo += aposta;
      console.log("✔ - Player wins!");
    } else {
      saldo -= aposta;
      console.log("X - Aposta perdida.");
    }
  }
  
  // Mostrar saldo final
  console.log("Saldo final:", saldo);
}


// Exportar a função banca para uso externo
module.exports = banca;

// Chamar a função banca para testar
banca();
