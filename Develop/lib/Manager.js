// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}



module.exports = Manager;


//.then()

/* 1. call manager prompt 
2. .then class list prompt
    if select engineer 
       call engineer prompt (inquire)

   else if select Intern
     call intern prompt (inquire)

     else generate HTML
 */