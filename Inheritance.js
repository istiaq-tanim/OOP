class Player {
      name;
      #age
      constructor(name, age) {
            this.name = name;
            this.#age = age
      }
      playerDetails() {
            return `${this.name} is ${this.#age} years old`
      }
}

class Cricketer extends Player {
      #centuries
      constructor(name, age, centuries) {
            super(name, age)
            this.#centuries = centuries
      }
}
class Footballer extends Player {
      #goals
      constructor(name, age, goals) {
            super(name, age)
            this.#goals = goals
      }
      description() {
            return `${this.name} has ${this.#goals} goals`
      }
}

const kohli = new Cricketer("kohli", 35, 48)
const ronaldo = new Footballer("ronaldo", 38, 800)

console.log(ronaldo.description())