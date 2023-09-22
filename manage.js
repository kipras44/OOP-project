/* This program will be used to practise OOP concepts such as Objects, Classes, Methods, and Inheritance. 
I start by initialising the Employees super Class, which the sub-classes will inherit from based on contract type.
Then, each sub-class has a method for calcualting an emplyee's wage and bonus. Lastly, I test the functionality of the Class methods
with a few console.logs
*/

class Employees{ 
    constructor(fullName, role, hoursWorked, contractType, salesTarget, salesMade){
        this.fullName = fullName
        this.role = role
        this.hoursWorked = hoursWorked
        this.contractType = contractType
        this.salesTarget = salesTarget
        this.salesMade = salesMade
    }

    showContractType(){ // Creating a method to show the contract type of all the employees.
        console.log(`${this.fullName} is employed under a ${this.contractType} contract.`)
    }
}


class SalariedEmployees extends Employees{ 
    constructor(fullName, role, hoursWorked, contractType, salesTarget, salesMade, monthlySalary){
        super(fullName, role, hoursWorked, contractType, salesTarget, salesMade)

        this.monthlySalary = monthlySalary

    }
    calculateSalaryBonus(){ // This method is for calculating whether or not a salaried employee has earned a bonus in the past month.
        if(this.salesMade > this.salesTarget){
            let salaryBonus = this.monthlySalary + (this.monthlySalary / 10)
            console.log(`${this.fullName} has earned a bonus! Their salary this month will be: ${this.monthlySalary} + ${this.monthlySalary / 10} = £${salaryBonus}`)
        }else{
            console.log(`${this.fullName} has not earned a bonus this month. They will receive their base monthly salary of £${this.monthlySalary} this month.`)
        }
    }
}

class HourlyEmployees extends Employees{ 
    constructor(fullName, role, hoursWorked, contractType, salesTarget, salesMade, hourlyWage){
        super(fullName, role, hoursWorked, contractType, salesTarget, salesMade)

        this.hourlyWage = hourlyWage

}

    calculateHourlyBonus(){ // This method is for calculating the base wage of hourly employees, as well as calculating any earned bonuses.
        let monthlyWage = this.hourlyWage * this.hoursWorked
        if(this.salesMade > this.salesTarget){
            console.log(`${this.fullName} has earned a bonus! Their salary this month will be ${this.hoursWorked} x (${this.hourlyWage} + ${this.hourlyWage /2}) = £${monthlyWage + (this.hoursWorked * (this.hourlyWage / 2))}`)
        }else{
            console.log(`${this.fullName} will receive £${monthlyWage} this month for working ${this.hoursWorked} hours at ${this.hourlyWage} per hour.`)
        }
    }
}

class HybridEmployees extends Employees{ 
    constructor(fullName, role, hoursWorked, contractType, salesTarget, salesMade, monthlySalary, hourlyWage){
        super(fullName, role, hoursWorked, contractType, salesTarget, salesMade)
        this.monthlySalary = monthlySalary
        this.hourlyWage = hourlyWage

    }

    calculateHybridWage(){ // This method is used to calculate any earned bonuses, and also to calculate any paid overtime as per the Hybrid contract 
        if(this.salesMade > this.salesTarget && this.hoursWorked > 160){ // 160 hours per month is 40 hours per week, so anything over that is considered overtime.
            console.log(`${this.fullName} has earned a bonus! Their salary this month will be ${this.monthlySalary} + (${this.hoursWorked % 160} x ${this.hourlyWage + (this.hourlyWage /5)}) = £${this.monthlySalary + ((this.hoursWorked % 40) * (this.hourlyWage + (this.hourlyWage/5)))}`)
        } else if(this.hoursWorked > 160){
            console.log(`${this.fullName} has earned over time pay, which an extra ${this.hourlyWage * (this.hoursWorked % 40)} on top of their montly salary. This month their salary will be: ${this.monthlySalary} + ${this.hourlyWage * (this.hoursWorked % 40)} = £${this.monthlySalary + (this.hourlyWage * (this.hoursWorked % 40))}`)
        } else {
            console.log(`${this.fullName} will receive their base monthly salary of £${this.monthlySalary} this month.`)
        }
    }


}


const bob = new SalariedEmployees("Bob Harper", "Senior sales associate", 164, "Salary", 200, 250, 3000) // Creating employees with relevant information.
const irene = new SalariedEmployees("Irene Hughes", "Senior sales associate", 152, "Salary", 195, 183 , 3000)
const armin = new SalariedEmployees("Armin Frye", "Senior sales associate", 176, "Salary", 250, 300, 3000)

const cathrin = new HourlyEmployees("Cathrin Leed", "Junior sales associate", 160, "Hourly rate", 190, 203, 11)
const blake = new HourlyEmployees("Blake Peters", "Junior sales associate", 150, "Hourly rate", 185, 170, 11)
const annie = new HourlyEmployees("Annie Sheldon", "Junior sales associate", 172, "Hourly rate", 195, 220, 11)

const amiri = new HybridEmployees("Amiri Stelts", "Sales Manager", 180, "Hybrid", 300, 362, 2800, 15)
const shawn = new HybridEmployees("Shawn Cooper", "Sales Manager", 160, "Hybrid", 280, 250, 2800, 15)
const ally = new HybridEmployees("Ally Pratt", "Sales Manager", 172, "Hybrid", 300, 312, 2800, 15)


bob.showContractType() 
irene.showContractType()
armin.showContractType()

cathrin.showContractType()
blake.showContractType()
annie.showContractType()

amiri.showContractType()
shawn.showContractType()
ally.showContractType()

bob.calculateSalaryBonus() 
irene.calculateSalaryBonus()
armin.calculateSalaryBonus()

cathrin.calculateHourlyBonus()
blake.calculateHourlyBonus()
annie.calculateHourlyBonus()

amiri.calculateHybridWage()
shawn.calculateHybridWage()
ally.calculateHybridWage()