//L04 Hands On Exercise: 
//Employee parent class
//Create 3 child subclasses that inherit a method from Employee parent 
//Create 2 methods unique to each child class

//Create new instance of Employee object: Manager with jobDescription()
    
    class Employee {
    constructor(name, salary, hireDate) {
      this._name = name;
      this._salary = salary;
      this._hireDate = hireDate;
    }
    get name() {
      console.log (this._name.toUpperCase());
    }
    get salary() {
      console.log(this._salary);
    }
    get hireDate() {
      console.log(this._hireDate);
    }
    get Test() {
        console.log (this._name + " was hired in " + this._hireDate + 
            " and currently earns " + this._salary + " a year.");
    }
  }
  let myEmployee= new Employee("John Doe", "$49,800", "Jan 2017");
  myEmployee.name;
  myEmployee.salary;
  myEmployee.hireDate;
  myEmployee.Test;

  class Manager extends Employee {
    constructor(jobDescription, name, salary, hireDate, Test) {
    super(name, salary, hireDate, Test);
    this._jobDescription=jobDescription;
    }

get jobDescription(){
    console.log ("According to " + this._name + ": ~"+ this._jobDescription + "~ "
    + sarah.Test);
    }
}
let sarah=new Manager("As a manager, I plan to boss people around and look busy.", 
                      "Sarah Jane", "$20,000", "May 2018"); 
sarah.name;
sarah.salary;
sarah.hireDate;
sarah.Test;
sarah.jobDescription;
function mgr(){
    console.log("Management hire.");
    }
    mgr();

//Create new instance of Employee object: Designer with yearsExperience()

class Designer extends Employee {
    constructor(yearsExperience, name, salary, hireDate, Test) {
    super(name, salary, hireDate, Test);
    this._yearsExperience=yearsExperience;
    }
get yearsExperience(){
    console.log ("Currently, "+ this._name + " has " + this._yearsExperience + " years of experience in the Wild West. "
    + billy.Test);
    }
}
let billy=new Designer(100, "Billy the Kid", "$100,000,000", "Nov 1859");
  
  billy.name;
  billy.salary;
  billy.hireDate;
  billy.Test;
  billy.yearsExperience;
  function art(){
    console.log("Art Department hire.");
    }
    art();

//Create new instance of Employee object: SalesAssociate with degreeCompleted()

class SalesAssociate extends Employee {
    constructor(degreeCompleted, name, salary, hireDate, Test) {
    super(name, salary, hireDate, Test);
    this._degreeCompleted=degreeCompleted;
    }
get degreeCompleted(){
    console.log ( "We are excited to have " + this._name + " join our sales team. Because "
  + this._name + " has completed a(n) " + this._degreeCompleted + 
   ", we are raising the sales-team quota by 1000 percent! "
    + slick.Test + " Carry on.");
    }
}
let slick=new SalesAssociate("MA in the School of Hard Knocks", "Slick Willy", "$120,000", "May 2018"); 
slick.name;
slick.salary;
slick.hireDate;
slick.Test;
slick.degreeCompleted;
function money(){
    console.log("Sales Team hire.");
    }
    money();
