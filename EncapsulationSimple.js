const sakib = {
      name: "sakib al hasan",
      birthday: "1987-03-24",
      monthlySalary: 200000,
      numberOfMonth: 12,

      calculateAge() {
            const difference = Date.now() - new Date(this.birthday).getTime()
            const age = new Date(difference)
            return Math.abs(age.getUTCFullYear() - 1970)
            return age
      },

      calculateSalary() {
            const totalIncome = (this.monthlySalary * this.numberOfMonth).toLocaleString()
            return totalIncome
      }
}

console.log(sakib.calculateAge())
console.log(sakib.calculateSalary())