cc_6.js

class employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    describe() {
        return `${this.name}, ${this.age} years old, earns ${this.salary} per month.`;
    }
}

// Manager class should not be nested inside employee
class Manager extends employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }
    describe() {
        return `${super.describe()} Manages the ${this.department} department.`;
    }
}
class company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }

// Create employees
const emp1 = new employee("John", 30, 3000);
const emp2 = new employee("Jane", 25, 3500);

// Create manager
const mgr1 = new Manager("Alice", 40, 5000, "Sales");
const mgr2 = new Manager("Bob", 45, 5500, "Marketing");

console.log(emp1.describe());
console.log(emp2.describe());
console.log(mgr1.describe());


const myCompany = new company("Tech Solutions");
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();