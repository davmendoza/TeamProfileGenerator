// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, name, role, email) {
        this.name = name ;
        this.role = role;
        this.email = email;
        this.id = id;
    }

    getName(){
        return  this.name


    }

    getRole() {
        return this
    }

    getId(){
        return this.id
    }
};

module.exports = Employee;

