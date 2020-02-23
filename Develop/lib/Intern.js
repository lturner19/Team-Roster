//imports "parent" file
const employee = require("./Employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email); //inherited from parent
        this.school = school; //unique for this employee

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