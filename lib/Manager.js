// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee  = require('./Employee');

class Manager extends Employee {
    constructor(id, first, email, officeNum) {

        
        super(id, first, 'Manager', email);

        this.officeNum = officeNum;


        

    }
    
}
module.exports = Manager;
