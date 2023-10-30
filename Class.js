class Human {
      constructor(name, age, nationality) {
            this.name = name;
            this.age = age;
            this.nationality = nationality
      }
      sayHello() {
            return `My name is ${this.name} and i am ${this.nationality}`
      }
}
const istiaq = new Human("istiaq", 28, "Bengali")
const mbbape = new Human("mbbape", 24, "French")

console.log(mbbape.sayHello())