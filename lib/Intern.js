const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        console.log(this.school)
    }

    getRole() {
        return this.getName() + this.getId() + this.getEmail() + this.getRole() + " that is an intern."
    }
    
}

module.exports = Intern