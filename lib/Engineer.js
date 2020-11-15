// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee 
const Employee  = require('./Employee');

class Engineer extends Employee {
    constructor(id, first, email, gitHub) {
        
        super(id, first,'Engineer', email);

        this.gitHub = gitHub;

        

    }
}
module.exports = Engineer;
