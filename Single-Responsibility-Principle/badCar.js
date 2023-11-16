//the Car class shloud have one thing to do here which it start()
//we don't need to do implemntation of log the error here 

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if (somelogic) { // Logic to determine whether or not the car should start
            this.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }

    errorLog(message) {
        console.log(message);
    }
}

//This violates the single responsibility principle, 
//because the logic for logging the information should not be a responsibility of the Car class.