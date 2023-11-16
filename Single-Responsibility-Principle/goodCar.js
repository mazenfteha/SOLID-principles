//so we slove this problem and by achieve the SRP 

//The logger is stored in a separate class
class ErrorLog {
    static log(message) {
        console.log(message);
    }
}

//and then we call it in Car Class 
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (somelogic) { // Logic to determine whether or not the car should start
            ErrorLog.log(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        ErrorLog.log(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }
}
