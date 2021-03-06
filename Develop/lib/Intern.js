//imports "parent" file
const employee = require("./Employee");

class Intern extends employee {
    constructor(name, id, email, college) {
        super(name, id, email); //inherited from employee
        this.college = college; //unique for intern
        
        //validation generated if user does not supply answer to the questions
        if (!name) {
            throw new Error("Please enter employee's name.");
        }
        if (!email) {
            throw new Error("Please enter the employee's email")
        }
        if (!college) {
            throw new Error("Please enter the college the intern is attending.");
        }
    }

    getSchool() {
        return this.college;
    }
    
    getRole() {
        return "Intern";
    };

}


module.exports = Intern;