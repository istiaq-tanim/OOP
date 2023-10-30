class Shape {
      constructor(height, width, name) {
            this.height = height;
            this.width = width;
            this.name = name
      }
      area() {
            switch (this.name) {
                  case "triangle":
                        return `The ${this.name} area is ${.5 * this.height * this.width}`
                  case "rectangle":
                        return `The ${this.name} area is ${this.height * this.width}`
                  default:
                        break
            }
      }
}
const triangle = new Shape(5, 6, "triangle")
const rectangle = new Shape(5, 6, "rectangle")
console.log(rectangle.area())