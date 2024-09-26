
// //Exemplo de classe:
class Jogador {
    constructor(personagem, especial, vida, ataque, defesa) {
        this.personagem = personagem
        this.especial = especial
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }
}

let arqueiro = new Jogador('arqueiro', 'atravessar paredes', 100, 56, 70)

console.log(arqueiro);

//Exemplo de objeto e atributos

let Pessoa = {
    nome: 'ewerton', // atributo
    altura: 1.79,//atributo
    massa: 68.650,//atributo
    CPF: '586.465.244.48', //atributo . cpf foi numeros aleatorios
    esporte: 'tenis de mesa'//atributo
}
//atributos são qualquer caracteristicas dadas a um objeto ou uma classe nesse caso nome, altura e etc.
console.log(Pessoa);


// //Exemplo de método

class computador {
    processador
    RAM
    Placa_de_video
    processamento() {//metodo
        console.log('Sua CPU  está executando problemas aritiméticos!');
    }
    RAM() {//método
        console.log('O processador está guardando informações temporarias nesta unidade!');
    }
}

//Os metodos dados acimas são funções criadas dentro de uma classe com o objetivo de realizar ações,remover ou adicionar trechos de codigos.


////Exemplo de polimorfismo

let prompt = require("prompt-sync")();
let tipo = prompt(String("Qual o tipo do seu veiculo?"))
let veiculo = {
    tipo: tipo,
    acelerar: function () {
        if (tipo == 'carro') {
            console.log('Seu veículo possui aceleração por pedal!');
        } else if (tipo == 'moto') {
            console.log('Seu veículo possui  por manopla!');

        } else {
            console.log('[ERRO] Veiculo com tipo não cadastrado no sistema');
        }
    }
}
//Pelo polimorfismo o  método caracteristica se comporta de maneira diferente dependendo do tipo de veículo definido se for moto a aceleração é por manopla se for carro a aceleração é por pedal.



///Exemplo de herança

//foi importado da primeira classe destas atividades
class apresentar extends Jogador {
    recepção(){
        console.log('Olá eu sou o '+ this.personagem);
        
    }
}

let mago = new apresentar('mago','explosão concentradaa',100,78,47,15)
console.log(mago);
mago.recepção()

