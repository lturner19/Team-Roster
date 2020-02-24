//creating "parent"
//the following constructors will be inherited by the "children"
class Employee {
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
    //default employee role
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;