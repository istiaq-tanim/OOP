class Player {
      #name;
      #birthday;
      #monthlySalary;
      #numberOfMonth
      constructor(name, birthday, monthlySalary, numberOfMonth) {
            this.#name = name;
            this.#birthday = birthday;
            this.#monthlySalary = monthlySalary;
            this.#numberOfMonth = numberOfMonth
      }
      calculateAge() {
            const difference = Date.now() - new Date(this.#birthday).getTime()
            const age = new Date(difference)
            return Math.abs(age.getUTCFullYear() - 1970)
      }
      calculateSalary() {
            return (this.#monthlySalary * this.#numberOfMonth).toLocaleString()
      }
}

const sakib=new Player("Sakib","1987-03-24",200000,12)
console.log(sakib.calculateAge())
console.log(sakib.calculateSalary())
