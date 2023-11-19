// Shape class
class Shape {
    constructor() { }

    calculateArea() {
        throw new Error("Method not implemented");
    }
}

// Rectangle class inheriting from Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Circle class inheriting from Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Function that takes a Shape and prints its area
function printArea(shape) {
    console.log(`Area: ${shape.calculateArea()}`);
}

// Example usage adhering to Liskov Substitution Principle
const rectangle = new Rectangle(5, 10);
const circle = new Circle(7);

printArea(rectangle); // Output: Area: 50
printArea(circle);    // Output: Area: 153.93804


/*
In this example, both Rectangle and Circle inherit from Shape,
and they override the calculateArea method.
The printArea function takes a Shape as an argument,
and we can interchangeably pass objects of the Rectangle or Circle classes without affecting the correctness
of the program. This adherence to the Liskov 
Substitution Principle allows for polymorphic behavior, making the code more flexible and maintainable.
*/