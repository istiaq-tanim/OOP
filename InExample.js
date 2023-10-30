class Gadget {
      constructor(name, model) {
            this.name = name
            this.model = model
            this.warranty = true
      }
}
class Mobile extends Gadget {
      constructor(name, model, price) {
            super(name, model)
            this.price = price
      }
      review() {
            return `${this.name} ${this.model} is awesome`
      }
}
class Laptop extends Gadget {
      constructor(name, price) {
            super(name)
            this.price = price
      }
      review() {
            return `${this.name} was my First Laptop`
      }
}


const samsung = new Mobile("samsung", "A50", 200000)
const dell = new Laptop("dell", 50000)
console.log(samsung.review())
console.log(dell.price)