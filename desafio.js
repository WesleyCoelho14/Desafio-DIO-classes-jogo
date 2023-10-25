class Heroi {
  constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
  }

  atacar() {
      let ataque;
      switch (this.tipo) {
          case "mago":
              ataque = "usou poder da sabedoria";
              break;
          case "guerreiro":
              ataque = "usou espada";
              break;
          case "monge":
              ataque = "usou artes marciais";
              break;
          case "ninja":
              ataque = "usou shuriken";
              break;
          default:
              ataque = "usou um ataque segreto";
      }
      return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

// Crie um herói
const meuHeroi = new Heroi("Herói", 25, "mago");

// Exiba a mensagem de ataque
console.log(meuHeroi.atacar()); // Exemplo de saída: "O mago atacou usando usou magia"
