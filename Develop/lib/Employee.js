//creating "parent" file

class Employee {
    //The following will be inherited by following: manager, engineer, intern
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    //default role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;