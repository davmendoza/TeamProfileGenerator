// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee  = require('./Employee');

class Intern extends Employee {
    constructor(id, first, email, school) {
        
        super(id, first, 'Intern', email);

        this.school = school;
        

    }
    getSchool(){
        return 
    }
}
module.exports = Intern;
