class Man {
      constructor(name) {
            this.name = name
            this.legs = 2
            this.hands = 2
      }
}
class Baby extends Man {
      constructor(name) {
            super(name)
            this.cry = true
      }
      cry() {
            return `Baby is Crying`
      }
}
const tareq = new Baby("tareq")
console.log(tareq.name)