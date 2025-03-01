class personagem {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, força, velocidade, resistencia) {
            this.nome = nome;
            this.codinome = codinome;
            this.armaPrincipal = armaPrincipal;
            this.armaSecundaria = armaSecundaria;
            this.velocidade = velocidade;
            this.força = força;
            this.resistencia = resistencia;
        }
        //criação da classe personagem

        descricao() {
            return `${this.nome} - Codinome: ${this.codinome}, Arma Principal: ${this.armaPrincipal}, Arma Secundaria: ${this.armaSecundaria}, 
            Força: ${this.força}, Velocidade: ${this.velocidade}, Resistência: ${this.resistencia}`;
        }
        //método para exibir os atributos do personagem
}

const capitaoAmerica = new personagem("Steve Rogers", "Capitão América", "Escudo Americano", "Patriotismo", 80, 85, 86);
const homemdeFerro = new personagem("Tony Stark", "Homem de Ferro", "Armadura de Ferro", "Inteligência", 75, 85, 75);
const hulk = new personagem("Bruce Banner", "Hulk", "Radiação Gama", "Raiva", 95, 85, 95);
const thor = new personagem("Thor", "Deus do Trovão", "Martelo Mjolnir", "Força Divina", 97, 95, 98);
const viuva = new personagem("Natasha Romanoff", "Viúva Negra", "Artes Marciais", "Armas", 70, 60, 65);
const gaviao = new personagem("Clint Barton", "Gavião Arqueiro", "Arco e Flecha", "Armas", 70, 60, 70);
const thanos = new personagem("Thanos", "Titã Louco", "Espada de dois gumes", "Raios de energia", 99, 60, 85);
        //criação de objetos para os personagens

const personagens = [capitaoAmerica, homemdeFerro, hulk, thor, viuva, gaviao];
        //colocando os personagens em um array

function comparar(personagens){
    personagens.forEach(personagem => {
        console.log(personagem.descricao());
        if (personagem.força > thanos.força){
            console.log(`${personagem.codinome} tem mais força que Thanos!`);
        } else {
            console.log(`${personagem.codinome} tem menos força que Thanos.`);
        }

        if (personagem.velocidade > thanos.velocidade){
            console.log(`${personagem.codinome} tem mais velocidade que Thanos!`);
        } else {
            console.log(`${personagem.codinome} tem menos velocidade que Thanos.`);
        }

        if (personagem.resistencia > thanos.resistencia) {
            console.log(`${personagem.codinome} tem mais resistência que Thanos!`); 
        } else {
            console.log(`${personagem.codinome} tem menos resistência que Thanos.`);
        } 
        console.log("------");
    });
}       //função de comparação

comparar(personagens);
        //chamar a função de comparação
