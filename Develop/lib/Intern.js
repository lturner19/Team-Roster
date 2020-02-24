//imports "parent" file
const employee = require("./Employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email); //inherited from employee
        this.school = school; //unique for intern
        
        //generated if user does not supply answer to the questions
        if (!name) {
            throw new Error("Please enter employee's name.");
        }
        if (!email) {
            throw new Error("Please enter the employee's email")
        }
        if (!school) {
            throw new Error("Please enter the school the intern is attending.");
        }
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    };

}


module.exports = Intern;