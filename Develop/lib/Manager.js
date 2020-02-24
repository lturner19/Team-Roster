const employee = require("./Employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);//inherited from employee
        this.officeNumber = officeNumber;//unique for manager
        
        //generated if user does not supply answer to the questions
        if(!name) {
            throw new Error("Please enter employee's name.");
        }
        if(!email) {
            throw new Error("Please enter the employee's email")
        }
        //need validation to ensure answer is a number
        if(!officeNumber) {
            throw new Error("Please enter an office number for the manager's office");
        }
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    
}



module.exports = Manager;