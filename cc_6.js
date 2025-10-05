// Step 2: Base class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Step 3: Subclass Manager
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Override describe()
  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} employees.`;
  }
}

// Step 5: Company class
class Company {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log(`Employee Directory for ${this.name}:\n`);
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

// Step 4 & 6: Real-world workforce

// Regular employees
const emp1 = new Employee("Sophia Johnson", "Engineering");
const emp2 = new Employee("Liam Martinez", "Marketing");
const emp3 = new Employee("Ethan Brown", "Sales");

// Managers
const mgr1 = new Manager("Olivia Smith", "Engineering", 6);
const mgr2 = new Manager("Noah Williams", "Sales", 4);

// Create company and add workforce
const innovateX = new Company("InnovateX");
innovateX.addEmployee(emp1);
innovateX.addEmployee(emp2);
innovateX.addEmployee(emp3);
innovateX.addEmployee(mgr1);
innovateX.addEmployee(mgr2);
