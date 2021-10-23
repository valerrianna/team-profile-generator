const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        console.log(this.github)
    }

    getRole() {
        return this.getName() + this.getId() + this.getEmail() + this.getRole() + " that is an engineer."
    }
    
}

module.exports = Engineer