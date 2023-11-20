// High-level module (BusinessLogic) depends on a low-level module (Database)
class Database {
    save(data: string): void {
        // Logic to save data to the database
        console.log(`Data saved to database: ${data}`);
    }
}

class BusinessLogic {
    private database: Database;

    constructor() {
        this.database = new Database(); // Violation: High-level module depends on low-level module
    }

    processData(data: string): void {
        // Business logic processing
        console.log(`Processing data: ${data}`);
        this.database.save(data);
    }
}

// Example usage
const businessLogic = new BusinessLogic();
businessLogic.processData("Some data");

/*
In this example, 
BusinessLogic directly depends on the Database class,
violating the Dependency Inversion Principle.
If we later want to change the database or introduce a different storage mechanism,
we would need to modify the BusinessLogic class,
making it less flexible and harder to maintain.

Fixed Example:
*/