// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
function verifyFibonacci(num) {
  let a = 0;
  let b = 1;
  let sum;

  while (a <= num) {
    if (a === num) {
      return console.log(`${num} pertence à sequência de Fibonacci.`);
    }
    sum = a + b;
    a = b;
    b = sum;
  }
  return console.log(`${num} não pertence à sequência de Fibonacci.`);
}

verifyFibonacci(13); // Resposta: 13 pertence à sequência de Fibonacci.
verifyFibonacci(26); // Resposta: 26 não pertence à sequência de Fibonacci.

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
function verificarLetraA(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes na string.`);
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

verificarLetraA("A raposa rápida ataca a galinha astuta.");

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
function calcularSoma() {
    let indice = 12, soma = 0, k = 1;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    return soma;
}

console.log(calcularSoma()); // Resposta: 77.

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___ -> Resposta: 9. Sequência de progressão aritmética na qual cada número é 2 unidades maior que o anterior (1+2=3; 3+2=5; 5+2=7; 7+2=9).
// b) 2, 4, 8, 16, 32, 64, ____ -> Resposta: 128. Sequência em que cada número é o dobro do anterior (2*2=4; 4*2=8; 8*2=16; 16*2=32; 32*2=64; 64*2=128).
// c) 0, 1, 4, 9, 16, 25, 36, ____ -> Resposta: 49. Sequência baseada na soma em uma outra sequência de números ímpares (+1, +3, +5, +7, +9, +11, +13).
// d) 4, 16, 36, 64, ____ -> Resposta: 100. Sequência de quadrados de números pares (22, 42, 62, 82, 102).
// e) 1, 1, 2, 3, 5, 8, ____ -> Resposta: 13. Sequência de Fibonacci, começando em 1 e 1, onde cada número subsequente é a soma dos dois números anteriores (1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13).
// f) 2, 10, 12, 16, 17, 18, 19, ____ -> Resposta: 200. Sequência numérica baseada na letra inicial do número escrito por extenso (dois, dez, doze, dezesseis, dezessete, dezoito, dezenove, duzentos).

// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
// Resposta: Ligue um dos interruptores e espere um pouco. Desligue e ligue um segundo interruptor. Vá até qualquer uma das três salas. Se a lâmpada estiver apagada, mas estiver quente, o interruptor que ligamos inicialmente está conectado a essa lâmpada. Se a lâmpada estiver acesa, o segundo interruptor que ligamos está conectado a essa lâmpada. Se a lâmpada estiver apagada e fria, o interruptor que deixamos desligado está conectado a essa lâmpada. Após identificar a qual lâmpada essa primeira sala está conectada, vá até uma das outras duas salas e repita a verificação. Dessa forma, com apenas duas idas até uma das salas das lâmpadas, podemos determinar qual interruptor controla cada lâmpada.
