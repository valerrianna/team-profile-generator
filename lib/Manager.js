const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return this.getName() + this.getId() + this.getEmail() + this.getRole() + " that is a manager."
    }
    
}

module.exports = Manager