// Interface for handling basic document operation
interface Document {
    save(): void;
    load(): void
}

// Interface for handling print-related operations
interface Printer {
    print(): void
}

// DocumentPrinter class implementing both Document and Printer interfaces
class DocumentPrinter implements Document, Printer {

    save() {
        console.log("Document saved");
    }
    
        load() {
        console.log("Document loaded");
    }
    
        print() {
        console.log("Document printed");
    }
}

// DocumentScanner class implementing only the Document interface
class DocumentScanner implements Document {
    save() {
        console.log("Document saved");
    }

    load() {
        console.log("Document loaded");
    }

    // No print method as it's not needed
}


// Example usage adhering to Interface Segregation Principle
const documentPrinter = new DocumentPrinter();
documentPrinter.save();   // Output: Document saved
documentPrinter.load();   // Output: Document loaded
documentPrinter.print();  // Output: Document printed

const documentScanner = new DocumentScanner();
documentScanner.save();  // Output: Document saved
documentScanner.load();  // Output: Document loaded