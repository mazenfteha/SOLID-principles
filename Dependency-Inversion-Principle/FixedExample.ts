// Abstraction (interface) representing the database operations
interface Database {
    save(data: string): void;
}

// Low-level module implementing the Database interface
class SQLiteDatabase implements Database {
    save(data: string): void {
        // Logic to save data to an SQLite database
        console.log(`Data saved to SQLite database: ${data}`);
    }
}

// High-level module depending on the Database interface
class BusinessLogic2 {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    processData(data: string): void {
        // Business logic processing
        console.log(`Processing data: ${data}`);
        this.database.save(data);
    }
}

// Example usage
const sqliteDatabase = new SQLiteDatabase();
const businessLogic2 = new BusinessLogic();
businessLogic.processData("Some data");

/*
Now, the BusinessLogic class depends on the Database interface,
and the specific database implementation (SQLiteDatabase) also
depends on the same interface. This adheres to the Dependency Inversion Principle,
making the system more flexible and allowing for easier changes or extensions in 
the future without modifying the high-level module.
*/